import React from 'react'
import { useNFTBalances } from 'react-moralis'
import { useEffect } from 'react'
import CustomContainer from './CustomContainer'
import { Image, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function Nft({ user }) {

    const { getNFTBalances, data } = useNFTBalances()

    const BASE_URL_IPFS = "https://ipfs.io/ipfs/"

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
    }, [])

    console.log(data);

    return (
        <CustomContainer>


            <Text fontSize="xl" fontWeight="bold">My Nfts</Text>
            {data && data.result.map(nft => (
                <Box key={nft.token_uri} mt='4' px='2' py='2' borderWidth="1px" borderRadius="md">
                    {nft.image && <Image alt="nft" src={nft.image} />}

                </Box>
            ))
            }
        </CustomContainer >
    )
}
