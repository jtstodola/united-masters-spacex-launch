import { Dimensions, ImageBackgroundBase, StyleSheet } from 'react-native'


const windowSize = Dimensions.get('window')

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24
  },
  image: {
    alignSelf: 'center',
    marginTop: 20,
    width: windowSize.width * .5,
    height: windowSize.width * .5,
  },
  xContainer: {
    alignSelf: 'center',
    marginTop: 20,
    position: 'relative', 
    borderWidth: 1,
    width: windowSize.width * .5,
    height: windowSize.width * .5,
  },
  xRight: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: windowSize.width * .25,
    borderWidth: 1,
    borderColor: '#000',
    width: windowSize.width * .75,
    height: 1,
    transform: [
      { rotateY: "38deg" },
      { rotateZ: "38deg" }
    ]
  },
  xLeft: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: windowSize.width * .25,
    borderWidth: 1,
    borderColor: '#000',
    width: windowSize.width * .75,
    height: 1,
    transform: [
      { rotateY: "-38deg" },
      { rotateZ: "-38deg" }
    ]
  },
  addButton: {
    marginTop: 12
  },
  clickText: {
    textAlign: 'center',
  },
  
  inputContainer: {
    marginVertical: 20
  },
  inputField: {
    height: 32,
    width: windowSize.width - 48,
    marginVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 20
  },
  submitButton: {
    flex: 4,
    borderWidth: 1,
    paddingVertical: 4,
    marginLeft: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2}
  },
  submitButtonText: {
    textAlign: 'center'
  },

  actionSheetContainer: {
    paddingBottom: 20,
    width: windowSize.width - 48,
    backgroundColor: '#3B3B3B'
  },
  actionSheetButton: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  actionSheetText: {
    marginVertical: 12,
    textAlign: 'center',
    color: '#FFF'
  },
})

export default styles
