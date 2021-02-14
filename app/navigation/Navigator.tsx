import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, LaunchDetails, CreateLaunch } from '../screens'

const Stack = createStackNavigator()

const MainNavigator = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="LaunchDetails" component={LaunchDetails} />
      <Screen name="CreateLaunch" component={CreateLaunch} />
    </Navigator>
  )
}

export default MainNavigator
