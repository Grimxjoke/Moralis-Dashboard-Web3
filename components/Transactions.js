import React from 'react'
import { useMoralis, useMoralisWeb3Api } from 'react-moralis'
import { useState, useEffect } from 'react'
import CustomContainer from './CustomContainer'
import { Divider, Link, Text } from '@chakra-ui/react'
import Moralis from 'moralis'

export default function Transactions({ user }) {

    const Web3Api = useMoralisWeb3Api()
    const [transactions, setTransactions] = useState([])
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"
    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 5
        })
        if (data) {
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    // console.log(transactions);

    return (
        <CustomContainer>
            <Text fontSize="xl">My last 5 Transactions</Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} isExternal> ⛓️&nbsp;{transaction.hash} </Link>
                    <Divider />

                </div>
            ))}
        </CustomContainer>
    )
}
