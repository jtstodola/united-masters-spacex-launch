import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
  },
  childContainer: {
    backgroundColor: '#FFF',
  },
  statusBar: {
    backgroundColor: 'grey',
    height: 40
  }
})

export default styles