import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import {styles} from './styles'

import ilustrationImg from '../../assets/illustration.png'

export function Sigin(){

  const [text, setText] = useState("")

  return(
    <View style={styles.container}>
     <Image source={ilustrationImg} 
      style={styles.image}>
      
      </Image>

    <View styles={styles.content}>
      <Text style={styles.title}>
        Organize {`\n`}
        suas jogatinas {`\n`}
        facilemente
      </Text>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>
    </View>

    </View>
  )
}