import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
  },
  childContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 24
  },
  statusBar: {
    backgroundColor: 'grey',
    height: 40
  }
})

export default styles