import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="blue"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      OPEN SOURCE
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      WE'RE NOT HERE TO SELL YOU THE VACUUM2000
    </Heading>
    <List>
      <ListItem>Facebook backed</ListItem>
      <ListItem>Yet not facebook centric</ListItem>
      <ListItem>Kickstart your project with a SaaS</ListItem>
    </List>
  </Slide>
)