import React, { useState } from 'react';
import axios from 'axios';

//MUI
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

const Summarize = () => {

    const [selectedTextFile, setSelectedTextFile] = useState(null);
    const [isFile, setIsFile] = useState(false);
    const [text, setText] = useState("");
    // const [error, setError] = useState(false)


    const handleFile = e => {
        if (e.target.files[0]) {
            setSelectedTextFile(e.target.files[0]);
            setIsFile(true);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        let submit = true;

        if (submit) {
            let form_data = new FormData();
            if (text !== "") {
                form_data.append('text', text);
            }
            if(isFile) {
                form_data.append('name', selectedTextFile.name);
                form_data.append('file', selectedTextFile);
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
            <Box>
                <Box>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="instructions"
                            label="Instructions"
                            type="textarea"
                            id="instructions"
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Box mt={3}>
                            <label>Text File:</label>
                            <br></br>
                            <input
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={handleFile}
                            />
                        </Box>
                        <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
                            Create
                        </Button>
                    </form>
                </Box>
            </Box>
        </>
    );
}

export default Summarize;