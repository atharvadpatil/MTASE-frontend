import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from "react-material-file-upload";
import { useNavigate } from 'react-router-dom';
import { results } from '../atoms';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

//MUI
import Box from '@mui/material/Box';
import { Grid, TextField, Typography, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

const theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[100],
        },
    },
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Summarize = () => {

    const result = useRecoilValue(results);

    const navigate = useNavigate();

    const [file, setFile] = useState([])
    const [fileError, setFileError] = useState(false)

    const [text, setText] = useState("")
    const [textError, setTextError] = useState(false)

    const [loading, setLoading] = useState(false)
    const setResult = useSetRecoilState(results)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleSubmit = e => {
        e.preventDefault();

        let submit = true;
        setFileError(false);
        setTextError(false);

        if ((text === "" && file.length === 0) || (text.length > 0 && file.length > 0)) {
            submit = false;
            setFileError(true);
            setTextError(true);
        }

        if (submit) {
            setResult({});
            let form_data = new FormData();
            if (text !== "") {
                form_data.append('text', text);
            }
            if (file.length > 0) {
                form_data.append('name', file[0].name);
                form_data.append('file', file[0]);
            }
            setLoading(true);
            axios.post(`http://localhost:8000/api/summarise`, form_data)
                .then((res) => {
                    setLoading(false);
                    console.log(res);
                    setResult(res.data);
                    if (res.data.text.translated_text)
                        handleOpen();
                    else
                        navigate("/results");
                    // alert(res.data.text);
                    // window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    alert("An error occured! Please try again.")
                });
        }
    }

    const goToResults = () => {
        navigate("/results");
    }

    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={8} md={5} mt={8} p={2}>
                    <Typography variant="h5">
                        Enter Text to Summarise &amp; Analyze:
                    </Typography>
                    <Box>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="text"
                            label="Text"
                            type="textarea"
                            maxRows={6}
                            id="instructions"
                            error={textError}
                            multiline
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Box>
                    <Box mt={3}>
                        <ThemeProvider theme={theme}>
                            <FileUpload
                                required
                                value={file}
                                onChange={setFile}
                                buttonText="Upload .txt file"
                                title="Drag 'n' Drop or select a text file"
                                sx={fileError ? { borderColor: "red" } : ""}
                            />
                        </ThemeProvider>
                    </Box>
                    <Box mt={3}>
                        <LoadingButton
                            loading={loading}
                            loadingIndicator="Processing..."
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                            color="primary"
                            sx={{ width: '100%' }}
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{textAlign: "center" }}>The input text has been translated from <b>{result?.original_lang}</b> to <b>English</b>.</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box mr={2} pt={3} pb={3} sx={{ textAlign: "center" }} style={{ width: "50%" }} >
                            <Paper style={{ backgroundColor: "#e3f2fd", maxHeight: 500, overflow: "auto" }}>
                                <Typography pt={1} variant="h6" color="primary">Original Text ({result?.original_lang})</Typography>
                                <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                    {result?.text?.text}
                                </Typography>
                            </Paper>
                        </Box>
                        <Box ml={2} pt={3} pb={3} sx={{ textAlign: "center" }} style={{ width: "50%" }}>
                            <Paper style={{ backgroundColor: "#e3f2fd", maxHeight: 500, overflow: "auto" }}>
                                <Typography pt={1} variant="h6" color="primary">Translated Text (English)</Typography>
                                <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                    {result?.text?.translated_text}
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                    <Box mt={3}>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={goToResults}
                            color="primary"
                            sx={{ width: '100%' }}
                        >
                            View Full Summary
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

export default Summarize;