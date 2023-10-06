import { Select, Box, Button, useToast, Flex, Grid, GridItem, HStack, Heading, Link, Spacer, Text, Input, Center } from "@chakra-ui/react"

export default function headbar() {
  return (
    <div className="head">
        <Center 
            bg='teal.100' 
            display={'grid'} 
            h='100%'
            w='100%'
            position={'relative'}
        >
            TiM
        </Center>
    </div>
  )
}
