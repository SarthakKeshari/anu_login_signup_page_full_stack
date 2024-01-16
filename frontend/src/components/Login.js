import { createRef, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import axios from "axios";
import RaiseAlert from "./RaiseAlert";

import { LockIcon, EmailIcon } from '@chakra-ui/icons'

const Login = () => {
  let emailidInput = createRef();
  let passwordInput = createRef();

  const [alertDetail, setAlertDetail] = useState(
    {
      isVisible: false,
      alertTitle: "",
      alertStatus: "",
      alertDescription: ""
    }
  )

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  function handleClick() {
    axios.post(`http://localhost:8080/api/login`, {
      emailid: emailidInput.current.value,
      password: passwordInput.current.value
  })
      .then(function (response) {
        // console.log(response.data)
        console.log(response)
        if (response.data) {
          setAlertDetail({
            isVisible: true,
            alertTitle: "Success!",
            alertStatus: "success",
            alertDescription: "Login Successful"
          })
        }
        else {
          setAlertDetail({
            isVisible: true,
            alertTitle: "Error!",
            alertStatus: "error",
            alertDescription: "Login Failed"
          })
        }
      });
  }

  return (
    <>
      {alertDetail.isVisible ? <RaiseAlert alertDetails={alertDetail} /> : <></>}
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input ref={emailidInput} type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<LockIcon color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    ref={passwordInput}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleClick}
              >
                Login
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Box>
          New to us?{" "}
          <Link color="teal.500" href="/signup">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
