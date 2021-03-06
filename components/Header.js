import { Button } from '@chakra-ui/react'
import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header({ user, logout, isLoggingOut }) {
    return (
        <>
            <header>
                <Flex
                    justifyContent="space-between"
                    bg="purple.400"
                    color="white"
                    px="10"
                    py="6"
                >
                    <Center>
                        <Text fontSize="xl" fontWeight="bold" >DashBoard Web3</Text>
                    </Center>
                    <Center>
                        <Text>{user.getUsername()}</Text>
                        <Button
                            ml="4"
                            colorScheme="purple"
                            onClick={logout}
                            disabled={isLoggingOut}
                        >Logout</Button>
                    </Center>
                </Flex>
            </header>
        </>
    )
}
