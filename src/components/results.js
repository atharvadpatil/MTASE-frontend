import React from 'react';
import { results } from '../atoms';
import { useRecoilValue } from 'recoil';

//MUI
import { Box } from '@mui/material';


const Results = () => {

    const result = useRecoilValue(results)

    return (
        <Box>
            <pre>{JSON.stringify(result.len, null, 4)}</pre>
            <br />
            {JSON.stringify(result.text)}
        </Box>
    );
}

export default Results;