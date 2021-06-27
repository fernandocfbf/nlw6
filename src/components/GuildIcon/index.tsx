import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'


export function GuildIcon() {

  const uri = 'https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/05/discord-logo-700x513.jpg'

  return (
    <Image 
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
        

  )
}