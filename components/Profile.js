import React from 'react'
import { FormControl, useRadio, Input, Button, FormLabel, Text } from '@chakra-ui/react'
import { useState } from 'react'
import CustomContainer from './CustomContainer'
import { useMoralis } from 'react-moralis'

export default function Profile({ user }) {
    const [input, setInput] = useState('')
    const { setUserData, isUserUpdating } = useMoralis()
    console.log(input);
    return (
        <CustomContainer>
            <Text> <b> 😁&nbsp; Username: </b>{user.getUsername()} </Text>
            <Text> <b> 💰&nbsp; Wallet Address: </b>{user.get('ethAddress')} </Text>
            <form onSubmit={e => {
                e.preventDefault()
                if (input.trim() !== '') {
                    setUserData({
                        username: input,

                    }).then(() => setInput(''))
                }
            }}>
                <FormControl mt="6">
                    <FormLabel htmlFor='username' >Set a New Username</FormLabel>
                    <Input id="username" type="text" placeholder="ex: Vitalik Buterin" value={input} onChange={e => setInput(e.target.value)}></Input>
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="purple"
                    disabled={isUserUpdating}
                >✔️&nbsp; Change Username</Button>
            </form>
        </CustomContainer>
    )
}
