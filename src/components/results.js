import React from 'react';
import { results } from '../atoms';
import { useRecoilValue } from 'recoil';

//MUI
import { Box, Container, Paper, Typography, Chip } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));


const Results = () => {

    const result = useRecoilValue(results);

    const chipData = result.keywords;


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box pt={3} pb={3} sx={{ width: '100%', typography: 'body1' }}>
                <Paper style={{ backgroundColor: "#e3f2fd" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="One Line Summary" value="1" />
                                <Tab label="Detailed Summary" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">{result.text.abstractive_summary}</TabPanel>
                        <TabPanel value="2">{result.text.extractive_summary}</TabPanel>
                    </TabContext>
                </Paper>
            </Box>

            <Paper style={{ backgroundColor: "#e3f2fd" }}>
                <Box pt={2} pb={2} sx={{ textAlign: "center" }}>
                    <Box><Typography variant="h6" color="primary">Keywords &amp; Important Phrases</Typography></Box>
                    <Paper
                        elevation={0}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            m: 0,
                        }}
                        component="ul"
                        style={{ backgroundColor: "#e3f2fd" }}

                    >

                        {chipData.map((data, index) => {

                            return (
                                <ListItem key={index}>
                                    <Chip label={data} color="primary" />
                                </ListItem>
                            );
                        })}
                    </Paper>
                </Box>
            </Paper>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
                {result.text.translated_text ?
                    <Box mr={2} pt={3} pb={3} sx={{ textAlign: "center" }} style={{ width: "50%" }} >
                        <Paper style={{ backgroundColor: "#e3f2fd", maxHeight: 300, overflow: "auto" }}>
                            <Typography pt={1} variant="h6" color="primary">Original Text</Typography>
                            <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                {result.text.text}
                            </Typography>
                        </Paper>
                    </Box>
                    :
                    <Box pt={3} pb={3} sx={{ textAlign: "center" }} style={{ width: "100%" }} >
                        <Paper style={{ backgroundColor: "#e3f2fd", maxHeight: 300, overflow: "auto" }}>
                            <Typography pt={1} variant="h6" color="primary">Original Text</Typography>
                            <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                {result.text.text}
                            </Typography>
                        </Paper>
                    </Box>}

                {result.text.translated_text ?
                    <Box ml={2} pt={3} pb={3} sx={{ textAlign: "center" }} style={{ width: "50%" }}>
                        <Paper style={{ backgroundColor: "#e3f2fd", maxHeight: 300, overflow: "auto" }}>
                            <Typography pt={1} variant="h6" color="primary">Translated Text</Typography>
                            <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                {result.text.translated_text}
                            </Typography>
                        </Paper>
                    </Box>
                    : null}
            </Box>

            <Box pt={3} pb={3} sx={{ textAlign: "center" }}>
                <Paper style={{ backgroundColor: "#e3f2fd" }}>
                    <Typography pt={1} variant="h6" color="primary">Text Properties</Typography>
                    <Typography px={2} sx={{ textAlign: "left" }}>
                        Original Text Length: {result.len.text_len}
                    </Typography>
                    {result.text.translated_text ?
                        <Typography px={2} sx={{ textAlign: "left" }}>
                            Translated Text Length: {result.len.translated_text_len}
                        </Typography>
                        : null}
                    <Typography px={2} sx={{ textAlign: "left" }}>
                        Abstractive Summary Length: {result.len.abstractive_summary_len}
                    </Typography>
                    <Typography px={2} pb={2} sx={{ textAlign: "left" }}>
                        Extractive Summary Length: {result.len.extractive_summary_len}
                    </Typography>
                </Paper>
            </Box>

            <Box>
                <pre>{JSON.stringify(result.len, null, 4)}</pre>
                <br />
                {JSON.stringify(result.text)}
            </Box>
        </Container >
    );
}

export default Results;