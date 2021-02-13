import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, LaunchDetails } from '../screens'

const Stack = createStackNavigator()

const MainNavigator = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="LaunchDetails" component={LaunchDetails} />
    </Navigator>
  )
}

export default MainNavigator