import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'

const RandomPasswordGeneratorCard = () => {
  const [password, setPassword] = useState();

  const getRandomPassword = () =>
    setPassword(Math.random().toString(36).slice(2));

  function handleGetRandomPassword() {
    getRandomPassword();
  }

  console.log(password)

  return (
    <Card align="center">
      <CardHeader>
        {password}
      </CardHeader>
      <CardBody>
        <Text>Press the button to generate a random password</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" onClick={() => handleGetRandomPassword()}>Generate Password</Button>
      </CardFooter>
    </Card>
  );
};

export default RandomPasswordGeneratorCard;
