import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens'

const Stack = createStackNavigator()

const MainNavigator = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}

export default MainNavigator