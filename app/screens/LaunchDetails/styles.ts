import { Dimensions, StyleSheet } from 'react-native'

const windowSize = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: windowSize.height - 50,
  },
  imageBackground: {
    height: windowSize.width,
    width: windowSize.width,
  },
  launchContentContainer: {
    height: windowSize.width,
    width: windowSize.width,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 16,
  },
  backButton: {
    marginLeft: 24,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    marginLeft: 6,
    fontSize: 20,
  },
})

export default styles
