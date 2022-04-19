import { Text } from '@chakra-ui/react'
import React from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import CustomContainer from './CustomContainer'
import Script from 'next/script'

export default function Balance({ user }) {

    const Web3Api = useMoralisWeb3Api()

    const fetchNativeBalance = async () => {
        const result = await Web3Api.account.getNativeBalance({
            chain: "rinkeby",
            address: user.get('ethAddress')
        }).catch(e => console.log(e))
        console.log(result);
    }

    return (
        <>
            <CustomContainer>
                <Text>My ERC-20 Tokens</Text>
            </CustomContainer>
        </>
    )
}
