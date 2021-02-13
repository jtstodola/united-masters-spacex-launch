import { Dimensions, StyleSheet } from 'react-native'


const windowSize = Dimensions.get('window')

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24
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
    alignItems: 'center'
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
  }
})

export default styles
