import React, { useState } from 'react'
import { Text, View } from 'react-native'

const Home: React.FC = () => {
  const apiUrl = 'https://api.spacexdata.com/v3/launches'
  const [spaceX, setSpaceX] = useState()

  fetch(apiUrl).then(response => response.text())
  .then(result => {
    console.log(result)
    setSpaceX(result)
  })
  .catch(error => console.log('error', error));


  return (
    <View>
      <Text style={{marginTop: 80}}>SpaceX Launch Explorer</Text>
    </View>
  )
}

export default Home