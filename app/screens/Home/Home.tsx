import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, Linking, Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { LaunchProps, NavigationParamsList } from '../../types'

type HomeProps = {
  navigation: StackNavigationProp<NavigationParamsList>
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const apiUrl = 'https://api.spacexdata.com/v3/launches'
  const [launches, setLaunches] = useState([])
  const windowSize = Dimensions.get('window')
  const defaultBoxSize = windowSize.width * .25

  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  useEffect(() => {
    const getApi = async () => {
      return await fetch(apiUrl, {
        method: 'GET',
        redirect: 'follow'
      }).then(response => response.json())
      .then(result => {
        setLaunches(result)
      })
      .catch(error => console.log('error', error));
    }
    
    getApi()

  }, [])

  return (
    <View style={{ marginHorizontal: 24}}>
      <Text style={{marginTop: 50, marginBottom: 20, textAlign: 'center', fontSize: 32}}>SpaceX Launch List</Text>
      <ScrollView >
        {launches && (
          launches.map((launch: LaunchProps) => {
            return (
              <Pressable 
                style={{ flexDirection: 'row', marginVertical: 12, flex: 1}}
                onPress={() => navigation.navigate('LaunchDetails', {launch})}
              >
                {launch.links.flickr_images.length > 0 ? 
                  <Image source={{uri: launch.links.flickr_images[0]}} style={{height: defaultBoxSize, width: defaultBoxSize}} />
                  :
                  <View 
                    style={{
                      height: defaultBoxSize, 
                      width: defaultBoxSize, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      borderWidth: 1, 
                      borderColor: '#000'
                    }}>
                    <Text style={{textAlign: 'center'}}>No Image</Text>
                  </View>
                } 
                <View style={{flex: 3}}>
                  <Text style={{marginLeft: 8, marginVertical: 4}}>{launch.mission_name}</Text>

                  {launch.links.mission_patch_small && (
                    <Pressable onPress={() => handleLinkPress(launch.links.mission_patch_small)}>
                      <Text style={{marginLeft: 8, marginVertical: 4, color: 'blue'}}>{launch.links.mission_patch_small}</Text>
                    </Pressable>
                  )}

                  <Text style={{marginLeft: 8, marginVertical: 4}}>{launch.details}</Text>
                </View>
              </Pressable>
            )
          })
        )}
      </ScrollView>
    </View>
  )
}

export default Home