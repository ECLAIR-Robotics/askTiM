// import Sidebar from "../components/Sidebar"
import { Select, Box, Button, useToast, Flex, Grid, GridItem, HStack, Heading, Link, Spacer, Text, Center, Input } from "@chakra-ui/react"

//React
import { useState, useEffect } from "react";

//Components
import Headbar from "../components/headbar";

//PDF Reader
import { Document, Page } from 'react-pdf';

function Pdfreader() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [file, setFile] = useState();
    const [fileExists, setFileExists] = useState(false);

    const file2 = 0;
    const onDocLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => {
    if (pageNumber > 1) {
        changePage(-1);
    }
    };

    const nextPage = () => {
    if (pageNumber < numPages) {
        changePage(1);
    }
    };

    const handleChange = (e) => {
        file2 = window.URL.createObjectURL(e.target.files[0]);
        setFileExists(true);
    }

    return(
        <Grid
            h='calc(100vh)'
            templateRows='repeat(8, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={1} colSpan={5} alignItems={'center'}>
                <Center 
                    bg='teal.100' 
                    display={'grid'} 
                    minHeight='100%'
                >
                    <Heading as='h1'>TiM</Heading>
                </Center>
            </GridItem>
            <GridItem rowSpan={7} colSpan={5} border='solid'>
                <Input type='file' accept='.pdf' onChange={(e) => {handleChange(e)}}/>
                {fileExists && (
                    <div className="pdf">
                        <Button onClick={previousPage}>Previous</Button>
                        <Button onClick={nextPage}>Next</Button>
                        <Document file={file2}/>
                        <p>Page {pageNumber} of {numPages} </p>
                    </div>
                )}
            </GridItem>

        </Grid>
    )
}

export default Pdfreader;