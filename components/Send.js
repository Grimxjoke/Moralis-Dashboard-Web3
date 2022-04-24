import { Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, useToast } from '@chakra-ui/react'
import Moralis from 'moralis'
import React from 'react'
import { useState } from 'react'
import { useWeb3Transfer } from 'react-moralis'
import CustomContainer from './CustomContainer'

export default function Send() {

    const [amount, setAmount] = useState(0)
    const handleChange = (value) => setAmount(value)
    const [receiver, setReceiver] = useState('')
    const { fetch, isFetching } = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: receiver,
        type: 'native'
    })
    const hey = " Salut"
    const toast = useToast()

    return (

        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Send ETH </Text>
            <form onSubmit={async e => {
                e.preventDefault()
                await Moralis.enableWeb3()
                fetch({
                    onSuccess: () => {
                        toast({
                            title: "ETH successfully sent",
                            description: "Eth are showing up into the receiver wallet",
                            status: "success",
                            duration: "9000",
                            isClosable: true
                        })
                        setReceiver('')
                    },
                    onError: (err) => {
                        console.log(err + " C'est Ici")
                        const error = err
                        toast({
                            title: "Error",
                            description: "Address not valid",
                            status: "error",
                            duration: "9000",
                            isClosable: true
                        })
                    }
                })
            }}>
                <FormControl>
                    <FormLabel html="amount">
                        Amount of Eth
                    </FormLabel>
                    <NumberInput step={0.1} onChange={handleChange}>
                        <NumberInputField id="amount" value={amount} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>

                    </NumberInput>
                    <FormLabel htmlFor='receiver'>
                        Send to
                    </FormLabel>
                    <Input id="receiver" type="text" placeholder='Receiver Address' value={receiver} onChange={e => setReceiver(e.target.value)} />
                </FormControl>
                <Button mt="4" type="submit" colorScheme="purple" disabled={isFetching}>💸&nbsp; Send </Button>
            </form>
        </CustomContainer>
    )
}
