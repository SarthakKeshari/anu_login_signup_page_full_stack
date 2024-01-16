import React, { createRef, useState } from "react";
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

import { LockIcon, AtSignIcon, EmailIcon } from '@chakra-ui/icons'


const Register = () => {
    let usernameInput = createRef();
    let emailidInput = createRef();
    let passwordInput = createRef();

    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    function handleClick() {
        console.log(usernameInput.current.value);
        console.log(emailidInput.current.value);
        console.log(passwordInput.current.value);
    }

    return (
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
                                    children={<AtSignIcon color="gray.300" />}
                                />
                                <Input ref={usernameInput} type="text" placeholder="username" />
                            </InputGroup>
                        </FormControl>
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
                        </FormControl>
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                            onClick={handleClick}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Box>
            </Stack>
            <Box>
                Already have an account?{" "}
                <Link color="teal.500" href="/">
                    Log In
                </Link>
            </Box>
        </Flex>
    );
};

export default Register;
