import React from 'react'
import { Alert, Linking, Pressable, Text, View } from 'react-native'

import { LaunchProps } from '../../types'
import styles from './styles'

interface LaunchContentProps {
  launch: LaunchProps
}

const LaunchContent: React.FC<LaunchContentProps> = ({ launch }) => {
  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }
  return (
    <View>
      <Text style={styles.missionNameText}>{launch.mission_name}</Text>

      {launch.links.mission_patch_small && (
        <Pressable
          onPress={() => handleLinkPress(launch.links.mission_patch_small)}
        >
          <Text style={styles.missionLinkText}>
            {launch.links.mission_patch_small}
          </Text>
        </Pressable>
      )}

      <Text style={styles.missionDetailsText}>{launch.details}</Text>
    </View>
  )
}

export default LaunchContent
