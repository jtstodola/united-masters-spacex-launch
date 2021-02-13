import React from 'react'
import { Dimensions, View, ViewStyle } from 'react-native'
import styles from './styles'

interface ContainerProps {
  containerStyle?: ViewStyle
}

const Container: React.FC<ContainerProps> = ({ children, containerStyle }) => (
  <View style={styles.container}>
    <View style={styles.statusBar} />

    <View style={[styles.childContainer, containerStyle]}>
      {children}
    </View>
  </View>
)

export default Container