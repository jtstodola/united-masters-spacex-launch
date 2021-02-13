import React from 'react'
import { View, ViewStyle } from 'react-native'

interface ContainerProps {
  containerStyle?: ViewStyle
}

const Container: React.FC<ContainerProps> = ({ children, containerStyle }) => (
  <View >
    <View style={{ backgroundColor: 'grey', height: 40 }} />

    <View style={containerStyle}>
      {children}
    </View>
  </View>
)

export default Container