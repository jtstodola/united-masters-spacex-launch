import { Dimensions, Platform, StyleSheet } from 'react-native'

const windowSize = Dimensions.get('window')
const defaultBoxSize = windowSize.width * 0.25

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 32,
  },
  container: {
    height: windowSize.height - 220,
    paddingHorizontal: 24,
  },
  launchContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    flex: 1,
  },
  image: {
    height: defaultBoxSize,
    width: defaultBoxSize,
  },
  noImageContainer: {
    height: defaultBoxSize,
    width: defaultBoxSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  noImageText: {
    textAlign: 'center',
  },
  text: {
    marginLeft: 8,
    marginVertical: 4,
  },
  linkText: {
    color: 'blue',
  },
  paginationContainer: {
    minHeight: 40,
    marginBottom: 50,
    paddingHorizontal: 24,
  },
  pageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 12,
    maxWidth: windowSize.width - 48,
  },
  pageButton: {
    marginHorizontal: 6,
  },
  pageText: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  createLaunchButton: {
    position: 'absolute',
    right: 24,
    bottom: Platform.OS === 'android' ? 0 : 10,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 200,
    backgroundColor: 'grey',
    padding: 8,
  },
})

export default styles
