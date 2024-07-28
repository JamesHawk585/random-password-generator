import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from '@chakra-ui/react'

const RandomPasswordGeneratorCard = () => {
  const [password, setPassword] = useState("");
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)

  const getRandomPassword = () =>
    setPassword(Math.random().toString(24).slice(2));

  
  const getPasswordLength = () => {
    const passwordStringToArray = password.split("")
    const passwordLength = passwordStringToArray.length
    return `Password Length: ${passwordLength}`
  }

  console.log(getPasswordLength())

  console.log(password)

  return (
    <Card align="center">
      <CardHeader>
        <Heading size="lg">{password}</Heading>
        
      </CardHeader>
      <CardBody>
        <Text>Press the button to generate a random password</Text>
    <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={4} mt='1' ml='0' fontSize='sm'>
        4
      </SliderMark>
      <SliderMark value={5} mt='1' ml='10' fontSize='sm'>
        5
      </SliderMark>
      <SliderMark value={6} mt='1' ml='20' fontSize='sm'>
        6
      </SliderMark>
      <SliderMark value={7} mt='1' ml='30' fontSize='sm'>
        7
      </SliderMark>
      <SliderMark value={8} mt='1' ml='40' fontSize='sm'>
        8
      </SliderMark>
      <SliderMark value={9} mt='1' ml='50' fontSize='sm'>
        9
      </SliderMark>
      <SliderMark value={10} mt='1' ml='60' fontSize='sm'>
        10
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" onClick={() => getRandomPassword()}>Generate Password</Button>
      </CardFooter>
    </Card>
  );
};

export default RandomPasswordGeneratorCard;
