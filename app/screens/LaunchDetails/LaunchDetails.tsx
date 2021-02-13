import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Dimensions, Image, Pressable, Text, View} from 'react-native'
import { NavigationParamsList } from '../../types'

interface LaunchProps {
  navigation: StackNavigationProp<NavigationParamsList, 'LaunchDetails'>
  route: RouteProp<NavigationParamsList, 'LaunchDetails'>
}

const LaunchDetails: React.FC<LaunchProps> = ({navigation, route}) => {
  const {params: {launch}} = route
  const windowSize = Dimensions.get('window')

  return (
    <View style={{marginTop: 50, justifyContent: 'space-between', height: windowSize.height - 60}}>
      <View>
      {launch.links.flickr_images.length > 0 ? 
        <Image source={{uri: launch.links.flickr_images[0]}} style={{ height: windowSize.width - 48, width: windowSize.width}} />
        :
        <View style={{ width: windowSize.width, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000'}}>
          <Text style={{textAlign: 'center'}}>No Image</Text>
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