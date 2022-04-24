import React from 'react'
import { useNFTBalances } from 'react-moralis'
import { useEffect } from 'react'
import CustomContainer from './CustomContainer'
import { Image, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function Nft({ user }) {

    const { getNFTBalances, data } = useNFTBalances()

    const BASE_URL_OPENSEA = "https://testnets.opensea.io/assets/"
    //token_address/token_id

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
    }, [])

    return (
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">{`My Nfts  `}</Text>
            {data && data.result.map(nft => (
                <Box key={nft.token_hash} mt='4' px='2' py='2' borderWidth="1px" borderRadius="md">
                    <a href={`${BASE_URL_OPENSEA}${nft.token_address}/${nft.token_id}`} target="_blank" rel="noreferrer noopener">⛵&nbsp;Click to see on Open Sea</a>
                </Box>
            ))
            }
        </CustomContainer>
    )
}
