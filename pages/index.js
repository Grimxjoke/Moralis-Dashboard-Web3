import { Button, Tab, Text, Box, Tabs, TabList, Flex, TabPanels, TabPanel } from "@chakra-ui/react"
import Head from "next/head"
import Header from "../components/Header"
import Profile from "../components/Profile"

import { useMoralis } from "react-moralis"
import Balance from "../components/Balance"



export default function Home() {

  const { isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis()
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dashboard</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, teal.400, purple.200)"
        >
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="white"
          > Dashboard Web3</Text>
          <Button
            colorScheme="purple"
            size="lg"
            mt="6"
            onClick={() =>
              authenticate({
                signingMessage: "Sign to login to DashBoard Web3 "
              })}
          >Login with Metamask </Button>
        </Flex>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>DashBoard Web3</title>
      </Head>
      <Flex
        direction="column"
        width="100vw"
        height="100vh"
      >
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
        <Box flex="1" bg="purple.100" px="44" py="20" >
          <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed" >
            <TabList>
              <Tab fontWeight="bold" >Profile</Tab>
              <Tab fontWeight="bold" >Balance</Tab>
              <Tab fontWeight="bold" >Transactions</Tab>
              <Tab fontWeight="bold" >NFT</Tab>
              <Tab fontWeight="bold" >Exchange</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>
                <Balance />
              </TabPanel>
              <TabPanel>Transactions</TabPanel>
              <TabPanel>NFT</TabPanel>
              <TabPanel>Exchange</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  )
}
