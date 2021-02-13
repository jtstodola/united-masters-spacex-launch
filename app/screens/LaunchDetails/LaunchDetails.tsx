import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Alert, Dimensions, Image, ImageBackground, Linking, Pressable, Text, View} from 'react-native'
import { LaunchProps, NavigationParamsList } from '../../types'

interface LaunchDetailsProps {
  navigation: StackNavigationProp<NavigationParamsList, 'LaunchDetails'>
  route: RouteProp<NavigationParamsList, 'LaunchDetails'>
}

interface LaunchContentProps {
  launch: LaunchProps
}

const LaunchContent: React.FC<LaunchContentProps> = ({launch}) => {
  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
  return (
  <View >
  <Text style={{marginLeft: 8, marginVertical: 4, textAlign: 'right', color: '#FFF'}}>{launch.mission_name}</Text>

  {launch.links.mission_patch_small && (
    <Pressable onPress={() => handleLinkPress(launch.links.mission_patch_small)}>
      <Text style={{marginLeft: 8, marginVertical: 4, textAlign: 'right', color: '#67e9f5'}}>{launch.links.mission_patch_small}</Text>
    </Pressable>
  )}

  <Text style={{marginLeft: 8, marginVertical: 4, textAlign: 'right', color: '#FFF'}}>{launch.details}</Text>
</View>)
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({navigation, route}) => {
  const {params: {launch}} = route
  const windowSize = Dimensions.get('window')




  return (
    <View style={{marginTop: 50, justifyContent: 'space-between', height: windowSize.height - 60}}>
      <View>
      {launch.links.flickr_images.length > 0 ? 
        <ImageBackground 
          source={{uri: launch.links.flickr_images[0]}}
          style={{ 
            height: windowSize.width, 
            width: windowSize.width, 
          }}
        >
          <View style={{            
            height: windowSize.width, 
            width: windowSize.width, 
            justifyContent: 'flex-end', 
            alignItems: 'flex-end',
            padding: 16, backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
          >
            <LaunchContent launch={launch} />
          </View>
        </ImageBackground>
        :
        <View 
          style={{ 
            height: windowSize.width, 
            width: windowSize.width, 
            justifyContent: 'flex-end', 
            alignItems: 'flex-end', 
            borderWidth: 1, 
            borderColor: '#999',
            backgroundColor: '#CCC',
            padding: 16
          }}
        >
          <LaunchContent launch={launch} />
        </View>
      } 
      </View>
      <Pressable onPress={() => navigation.goBack()} style={{marginLeft: 24, marginBottom: 24}}>
        <Text>Back</Text>
      </Pressable>
    </View>
  )
}

export default LaunchDetails