import React from 'react';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    toolbar: {
        display:'flex',
        justifyContent: 'flex-end',
        width: '400px'
    }
});