import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Alert,
  Image,
  Linking,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { LaunchProps, NavigationParamsList } from '../../types'
import { Container } from '../../components'
import styles from './styles'

type HomeProps = {
  navigation: StackNavigationProp<NavigationParamsList>
}

const LIMIT = 5

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [launches, setLaunches] = useState([])
  const [page, setPage] = useState(0)
  const pageNumbers = [...Array(5).keys()]
  const startingLaunch = page * 5
  const apiUrl = `https://api.spacexdata.com/v3/launches?limit=${LIMIT}&offset=${startingLaunch}`

  const handlePagination = (currentPageNumber: number) => {
    setPage(currentPageNumber)
  }

  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }

  useEffect(() => {
    const getApi = async () => {
      return await fetch(apiUrl, {
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((result) => setLaunches(result))
        .catch((error) => console.log('error', error))
    }

    getApi()
  }, [page])

  return (
    <Container>
      <Text style={styles.header}>SpaceX Launch List</Text>
      <View style={styles.container}>
        <ScrollView>
          {launches &&
            launches.map((launch: LaunchProps) => {
              return (
                <Pressable
                  key={`${launch.flight_number}-${launch.mission_name}`}
                  style={styles.launchContainer}
                  onPress={() =>
                    navigation.navigate('LaunchDetails', { launch })
                  }
                >
                  {launch.links.flickr_images.length > 0 ? (
                    <Image
                      source={{ uri: launch.links.flickr_images[0] }}
                      style={styles.image}
                    />
                  ) : (
                    <View style={styles.noImageContainer}>
                      <Text style={styles.noImageText}>No Image</Text>
                    </View>
                  )}
                  <View style={{ flex: 3 }}>
                    <Text style={styles.text}>{launch.mission_name}</Text>

                    {launch.links.mission_patch_small && (
                      <Pressable
                        onPress={() =>
                          handleLinkPress(launch.links.mission_patch_small)
                        }
                      >
                        <Text style={[styles.text, styles.linkText]}>
                          {launch.links.mission_patch_small}
                        </Text>
                      </Pressable>
                    )}

                    <Text style={styles.text}>{launch.details}</Text>
                  </View>
                </Pressable>
              )
            })}
        </ScrollView>
      </View>

      <View style={styles.paginationContainer}>
        <View style={styles.pageContainer}>
          {pageNumbers.map((pageNumber) => {
            const color = pageNumber === page ? 'blue' : '#000'
            return (
              <TouchableOpacity
                key={pageNumber}
                style={styles.pageButton}
                onPress={() => handlePagination(pageNumber)}
              >
                <Text style={[styles.pageText, { color }]}>
                  {pageNumber + 1}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateLaunch')}
        style={styles.createLaunchButton}
      >
        <Icon type="font-awesome" name="plus" />
      </TouchableOpacity>
    </Container>
  )
}

export default Home
