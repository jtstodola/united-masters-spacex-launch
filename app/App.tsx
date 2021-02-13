/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Navigator from './navigation/Navigator'

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </NavigationContainer>
  )
}

export default App
