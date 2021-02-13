import {createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator()
const MainNavigator = () => {
  const {Navigator, Screen} = Stack

  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        {/* <Screen name="Home" component={} /> */}
      </Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator