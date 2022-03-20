import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from "react-material-file-upload";

//MUI
import Box from '@mui/material/Box';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[100],
        },
    },
});

const Summarize = () => {

    const [file, setFile] = useState([]);
    const [fileError, setFileError] = useState(false);

    const [text, setText] = useState("");
    const [textError, setTextError] = useState(false)


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
            let form_data = new FormData();
            if (text !== "") {
                form_data.append('text', text);
            }
            if (file.length > 0) {
                form_data.append('name', file[0].name);
                form_data.append('file', file[0]);
            }
            axios.post(`http://localhost:8000/api/summarise`, form_data)
                .then((res) => {
                    console.log(res);
                    alert(res.data.text);
                    // window.location.reload();
                })
                .catch(err => console.log(err));
        }

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
                                title="Drad 'n' Drop or select a text file"
                                sx={fileError ? { borderColor: "red" } : ""}
                            />
                        </ThemeProvider>
                    </Box>
                    <Box mt={3}>
                        <Button type="submit" fullwidth onClick={handleSubmit} variant="contained" color="primary" sx={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Summarize;