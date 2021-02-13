import React, { useState, useRef } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import ActionSheet from "react-native-actions-sheet"
import { launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';

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
  const [imageLocation, setImageLocation] = useState<string | undefined>()
  const actionSheetRef = useRef<ActionSheet>(null)

  const handleLaunchCamera = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      maxWidth: 1024,
      maxHeight: 1024,
      saveToPhotos: false,
    }

    try {
      launchCamera(options, (response) => {
        actionSheetRef.current?.hide()
        console.log({response})
      })
    } catch (error) {
      Alert.alert('Error', error)
      console.log(error)
    }

  }

  const handleLaunchImageLibrary = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      maxWidth: 1024,
      maxHeight: 1024,
      saveToPhotos: false,
    }

    try {
      launchImageLibrary(options, (response) => {
        actionSheetRef.current?.hide()

        if (response.uri) {
          setImageLocation(response.uri)
        }
        console.log({response})
      })
    } catch (error) {
      Alert.alert('Error', error)
      console.log(error)
    }

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

    return response.json()
  }

  const onSubmit = async () => {
    postData(postUrl, { name, description, image: imageLocation})
      .then(data => console.log(data))
      .catch((error) => {
        Alert.alert('Error', 'Unable to create new launch')
        console.error('Error:', error)
      })
  }

  return (
    <Container containerStyle={styles.mainContainer}>
      <View>
        {imageLocation ? (
          <Image source={{uri: imageLocation}} style={styles.image} />
        ) : (
          <>
            <TouchableOpacity style={styles.xContainer} >
              <View style={styles.xRight} />
              <View style={styles.xLeft} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => actionSheetRef.current?.show()}
            >
              <Text style={styles.clickText}>Click to Add</Text>
            </TouchableOpacity>
          </>
        )}
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

      <ActionSheet ref={actionSheetRef} containerStyle={styles.actionSheetContainer}>
        <TouchableOpacity
          style={styles.actionSheetButton}
          onPress={handleLaunchCamera}
        >
          <Text style={styles.actionSheetText}>Launch Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionSheetButton} onPress={handleLaunchImageLibrary}>
          <Text style={styles.actionSheetText}>Launch Image Library</Text>
        </TouchableOpacity>
      </ActionSheet>
    </Container>
  )
}

export default CreateLaunch