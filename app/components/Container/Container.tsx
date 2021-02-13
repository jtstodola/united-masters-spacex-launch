import React from 'react'
import { View, ViewStyle } from 'react-native'
import styles from './styles'

interface ContainerProps {
  containerStyle?: ViewStyle
}

const Container: React.FC<ContainerProps> = ({ children, containerStyle }) => (
  <View >
    <View style={styles.statusBar} />

    <View style={containerStyle}>
      {children}
    </View>
  </View>
)

export default Container