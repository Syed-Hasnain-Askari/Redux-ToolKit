import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import {changeLogin,changeName} from '../reducers/Auth'
const Login = () => {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const result = useSelector((state) => {
        return state.auth
    });
    console.log(result)
    const dispatch = useDispatch();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
const handleUserName = (e) =>{
    setUserName(e.target.value);
    console.log(username)
}
const handlePassword = (e) =>{
    setPassword(e.target.value);
}
const submitLogin = () => {
    if(result[0].username == username && result[0].password == password){
        console.log("success");
    }
    else{
        console.log("failed");
    }
}
const chnageCredentials = (username,password) => {
    dispatch(changeLogin({
        username: username,
        password: password
      }));
}
const chnageUserName = (username,password) => {
    dispatch(changeName({
        username: username,
        password: password
      }));
}
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
          onChange={handleUserName}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          onChange={handlePassword}
        />
        <Button colorScheme="teal" mb={8} onClick={submitLogin}>
          Log In
        </Button>
        <Button colorScheme="teal" mb={8} onClick={() => chnageCredentials(username,password)}>
          Add Users
        </Button>
        <Button colorScheme="teal" mb={8} onClick={() => chnageUserName(username)}>
          Chnage Name
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
