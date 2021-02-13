import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { NavigationParamsList } from '../../types'
import { Container } from '../../components'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

interface CreateLaunchProps {
  navigation: StackNavigationProp<NavigationParamsList>
}

interface PostDataProps {
  url: string
}

const CreateLaunch: React.FC<CreateLaunchProps> = ({ navigation }) => {
  const postUrl = 'https://example.com/answer'
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const addImage = () => {

  }

  const postData = async (url: string, data: Object) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify(data)
    });

    console.log({response})

    return response.json() // parses JSON response into native JavaScript objects
  }

  const onSubmit = async () => {
    postData(postUrl, { name, description })
      .then(data => console.log(data))
      .catch((error) => {
        Alert.alert('Error', 'Unable to create new launch')
        console.error('Error:', error)
      })
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

      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          placeholder='Name...'
          style={styles.inputField}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          value={description}
          placeholder="Description..."
          style={styles.inputField}
          onChangeText={(value) => setDescription(value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon type='font-awesome' name='chevron-left' size={16} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </Container>
  )
}

export default CreateLaunch