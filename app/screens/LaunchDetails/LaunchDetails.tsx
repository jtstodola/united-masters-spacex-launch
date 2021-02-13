import React from 'react'
import {Alert, Dimensions, ImageBackground, Linking, Pressable, Text, View} from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'

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
            backgroundColor: '#3b3b3b',
            padding: 16
          }}
        >
          <LaunchContent launch={launch} />
        </View>
      } 
      </View>
      <Pressable 
        onPress={() => navigation.goBack()}
        style={{marginLeft: 24, marginBottom: 24, flexDirection: 'row', alignItems: 'center'}}
      >
        <Icon type='font-awesome' name='chevron-left' size={15} />
        <Text style={{marginLeft: 6, fontSize: 20}}>Back</Text>
      </Pressable>
    </View>
  )
}

export default LaunchDetails