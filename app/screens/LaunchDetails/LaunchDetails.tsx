import React from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'

import { NavigationParamsList } from '../../types'
import { Container, LaunchContent } from '../../components'
import styles from './styles'

interface LaunchDetailsProps {
  navigation: StackNavigationProp<NavigationParamsList, 'LaunchDetails'>
  route: RouteProp<NavigationParamsList, 'LaunchDetails'>
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ navigation, route }) => {
  const {
    params: { launch },
  } = route

  return (
    <Container containerStyle={styles.container}>
      <View>
        {launch.links.flickr_images.length > 0 ? (
          <ImageBackground
            source={{ uri: launch.links.flickr_images[0] }}
            style={styles.imageBackground}
          >
            <View
              style={[
                styles.launchContentContainer,
                { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
              ]}
            >
              <LaunchContent launch={launch} />
            </View>
          </ImageBackground>
        ) : (
          <View
            style={[
              styles.launchContentContainer,
              { backgroundColor: '#3b3b3b' },
            ]}
          >
            <LaunchContent launch={launch} />
          </View>
        )}
      </View>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon type="font-awesome" name="chevron-left" size={15} />
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </Container>
  )
}

export default LaunchDetails
