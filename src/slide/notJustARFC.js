import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: 300,
        right: 100,
        bottom: 100
      }}
      src="assets/images/box.svg"
    />
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      Not just a RFC
    </Heading>
    <Heading size={6} textColor="black" caps fit>
      it comes with a bunch of stuff
    </Heading>
    <List>
      <ListItem>A good documentation</ListItem>
      <ListItem>A server</ListItem>
      <ListItem>A client</ListItem>
      <ListItem>And a debug tool (GraphiQL)</ListItem>
    </List>
  </Slide>
)
