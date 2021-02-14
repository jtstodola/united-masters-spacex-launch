import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, Linking, Pressable, ScrollView, TouchableOpacity, Text, View, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { LaunchProps, NavigationParamsList } from '../../types'
import { Container } from '../../components'

type HomeProps = {
  navigation: StackNavigationProp<NavigationParamsList>
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const apiUrl = 'https://api.spacexdata.com/v3/launches'
  const [launches, setLaunches] = useState([])
  const [page, setPage] = useState(0)
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([])
  const windowSize = Dimensions.get('window')
  const defaultBoxSize = windowSize.width * .25
  const startingLaunch = page * 5

  const handlePagination = (currentPageNumber: number) => {
    setPage(currentPageNumber)
  }

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
        const numberOfPages = Math.ceil(result.length / 5)

        setLaunches(result)
        setPageNumbers([...Array(numberOfPages).keys()])
      })
      .catch(error => console.log('error', error));
    }
    
    getApi()

  }, [])

  return (
    <Container >
      <Text style={{paddingTop: 8, marginBottom: 20, textAlign: 'center', fontSize: 32}}>SpaceX Launch List</Text>
      <View style={{height: windowSize.height - 220, paddingHorizontal: 24}}>
        <ScrollView>
          {launches && (
            launches.slice(startingLaunch, startingLaunch + 5).map((launch: LaunchProps) => {
              return (
                <Pressable
                  key={`${launch.flight_number}-${launch.mission_name}`}
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

      <View style={{ minHeight: 40, marginBottom: 50, paddingHorizontal: 24 }}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 12, maxWidth: windowSize.width - 48}}>
          {pageNumbers.map((pageNumber) => {
            return(
              <TouchableOpacity key={pageNumber} style={{marginHorizontal: 6}} onPress={() => handlePagination(pageNumber)}>
                <Text style={{textDecorationLine: 'underline', textAlign: 'center'}}>{pageNumber + 1}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('CreateLaunch')}
        style={{
          position: 'absolute', 
          right: 24, 
          bottom: Platform.OS === 'android' ? 0 : 10,
          height: 40, 
          width: 40, 
          borderWidth: 1, 
          borderRadius: 200, 
          backgroundColor: 'grey', 
          padding: 8,
        }}
      >
        <Icon type='font-awesome' name='plus'/>
      </TouchableOpacity>
    </Container>
  )
}

export default Home