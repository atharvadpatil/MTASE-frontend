import React from 'react';

//Image
import modelDiagram from '../images/model_diagram.png';
import reactSvg from '../images/react.svg';
import djangoSvg from '../images/django.svg';
import muiSvg from '../images/material-ui.svg';
import sqlSvg from '../images/sql.svg';
import tfSvg from '../images/tensorflow.svg';
import pytorch from '../images/pytorch.svg';

// MUI
import { Box, Container, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



const Approach = () => {
    return (
        <>
            <Container>
                <Box sx={{ textAlign: "left" }}>
                    <Box mt={5} mb={4} pt={3} pb={3} pl={4} pr={4} style={{ backgroundColor: "#e3f2fd", borderRadius: "20px" }}>
                        <Box justifyContent="flex-start" mb={2}>
                            <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                                Multilingual Text Analyzer and Summarization Engine
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='body1'>
                                Multilingual Text Analyzer and Summarization Engine can analyze, translate and summarize a piece of unlabeled/unidentified/unknown text provided by the user. The app provides the following features:
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Language Identification" secondary="Identify the language of text provided by the user" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Language Translation [any language(x) to English]" secondary="If the input text is not in English the app will translate it into English for further processing" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Keyword Extraction" secondary="Extracts the most important keywords that define the text provided" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Abstractive Text Summarization (To get the Headline/Title)" secondary="Gives a 1-2 liner defining the meaning of the text provided" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Extractive Text Summarization" secondary="Gives a short summary of the text provided" />
                                </ListItem>
                            </List>
                        </Box>
                        <Box mt={6} >
                            <Box>
                                <Typography variant='h5'>
                                    Model Diagram depicting text processing
                                </Typography>
                            </Box>
                            <Box pt={2} sx={{ textAlign: 'center' }}>
                                <img src={modelDiagram} alt="banner" style={{ height: '50%', maxWidth: '900px', width: '100%' }} />
                            </Box>
                        </Box>
                        <Box mt={8}>
                            <Box>
                                <Typography variant='h5' gutterBottom>
                                    Text Summarization
                                </Typography>
                                <Typography variant='body1'>
                                    In short, Text Summarization is the process of creating a short, coherent, and fluent summary of a longer text document and involves the outlining of the text’s major points. There are 2 main approaches for text summarization:
                                </Typography>
                            </Box>
                            <Box pt={4}>
                                <Typography variant='h6'>
                                    1. Extractive Summarization:
                                </Typography>
                                <Typography variant='body1'>
                                    Extractive methods attempt to summarize articles by identifying the important sentences or phrases from the original text and stitch together portions of the content to produce a condensed version. These extracted sentences are then used to form the summary. The big advantage of these types of models is that they are generally easier to create and the resulting summaries tend to faithfully reflect the facts included in the source
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant='h7'>
                                    METHODS USED:
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<><strong>Text Rank:</strong> In Text Rank, sentence term matrix is used to cosine similarity between sentences. The similarity matrix is used to construct a graph, where sentences are nodes. Text rank algorithm is run on the graph. This method is similar to Page Rank algorithm used for ranking web pages in online search results</>} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<><strong>Term Frequency:</strong> In Term Frequency, frequencies of terms appearing in a sentence are added up to calculate score. A regularization is done based on sentence length.</>} />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box mt={3}>
                                <Typography variant='body1'>
                                    APPROACH:
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Split document into sentences" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Preprocess each sentence including tokenization, stop word removal and lemmatization" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Assign algorithmic specific score to each sentence" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Sort the sentences by descending order of the score and retain top n, where n is a configurable parameter" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Sort the sentences from the last step in the same order as they appear in the original document" />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box pt={4}>
                                <Typography variant='h6'>
                                    2. Abstractive Summarization:
                                </Typography>
                                <Typography variant='body1'>
                                    Abstractive Summarization relies on being able to paraphrase and shorten parts of a document. Abstractive algorithms can generate new phrases and sentences to capture the meaning of the source document. This resembles the human way more closely. Humans tend to do a lot of paraphrasing, using different words and forming sentences less rigidly following the original ones. When done correctly, it can filter out grammatical inconsistencies relatively prevalent in extractive summarization.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant='h7'>
                                    METHODS USED:
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<><strong>seq2seq (with attention mechanism):</strong> Sequence to Sequence architecture can be used for any problems involving sequential information (like Sentiment classification, Neural Machine Translation, and Named Entity Recognition). For text summarization we will model a many-to-many seq2seq problem. It mainly consists of encoder - decoder architecture, where input is a long sequence of words and the output will be a short version of the input sequence. The basic idea of the attention mechanism used with it is how much attention do we need to pay to every word in the input sequence for generating a word at timestep.</>} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<><strong>Pointer Gen Model:</strong> The pointer-generator network is the extension of the above model, as it allows both copying words via pointing, and generating words from a fixed vocabulary. For each decoder timestep, a generation probability is calculated, which weights the probability of generating words from the vocabulary, versus copying words from the source text. The vocabulary distribution and the attention distribution are weighted and summed to obtain the final distribution, from which we make our prediction.</>} />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box mt={6}>
                                <Typography variant='h5'>
                                    Technologies Used:
                                </Typography>
                            </Box>
                            <Box mt={2} ml={3}>
                                <Box >
                                    <Typography variant='body1'>
                                        Frontend:
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={reactSvg} alt="react-logo" style={{ height: 50, width: 55 }} /> &nbsp;
                                            <ListItemText primary="React" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={muiSvg} alt="MUI-logo" /> &nbsp;&nbsp;
                                            <ListItemText primary="Material UI" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant='body1'>
                                        Backend:
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={djangoSvg} alt="Django-logo" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="Django REST Framework" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={sqlSvg} alt="SQL-logo" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="SQL" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant='body1'>
                                        Deep Learning (NLP):
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={tfSvg} alt="TF-logo" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="TensorFlow" />
                                        </ListItem>
                                        {" "}
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={pytorch} alt="pytorch" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="PyTorch" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Approach;

/*

reactSvg
djangoSvg
muiSvg
sqlSvg
tfSvg

*/