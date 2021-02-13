import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { NavigationParamsList } from '../../types'
import { Container } from '../../components'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

interface CreateLaunchProps {
  navigation: StackNavigationProp<NavigationParamsList>
}

const CreateLaunch: React.FC<CreateLaunchProps> = ({ navigation }) => {
  const windowSize = Dimensions.get('window')

  const addImage = () => {

  }

  return (
    <Container containerStyle={styles.mainContainer}>
      <View>
        <TouchableOpacity style={styles.xContainer} >
          <View style={styles.xRight} />
          <View style={styles.xLeft} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.clickText}>Click to Add</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput />
        <TextInput />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon type='font-awesome' name='chevron-left' size={16} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </Container>
  )
}

export default CreateLaunch