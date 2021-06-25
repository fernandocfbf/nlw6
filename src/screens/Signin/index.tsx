import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, Image, StatusBar } from 'react-native'
import {styles} from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'
import ilustrationImg from '../../assets/illustration.png'

export function Sigin(){


  return(
    <View style={styles.container}>

      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        >
        
      </StatusBar>

     <Image 
      source={ilustrationImg} 
      style={styles.image}
      resizeMode="stretch"
      >
      
      </Image>

    <View style={styles.content}>
      <Text style={styles.title}>
        Organize {`\n`}
        suas jogatinas {`\n`}
        facilemente
      </Text>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>

      <ButtonIcon 
        title={"Entre com discord"}
        activeOpacity={.7}
      ></ButtonIcon>
    </View>

    </View>
  )
}