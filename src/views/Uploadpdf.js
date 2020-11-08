import React from 'react';

import blue from '@material-ui/core/colors/blue';
import Typography from "@material-ui/core/es/Typography/Typography";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme} from '@material-ui/core/styles';

import ImageUploadDemo from './ImageUploader/ImageUploadDemo';

const theme = createMuiTheme({
    palette: {
        primary: {
            ...blue
        },
    },

    typography: {
        fontFamily: 'Open Sans',
        // fontSize: '5rem',
    },
});

const styles = {
    pageStyle: {
        margin: 25,
        padding: 25,
    },
    typography: {
        marginBottom: 20,
    }

};

const Uploadpdf = () => (
    <MuiThemeProvider theme={theme}>

            <Typography
                variant="display1"
                align='center'
                style={styles.typography}
            >
                Mufasa - Calculadora de Imposto de Renda
            </Typography>

            <Typography
                align='center'
                style={styles.typography}
            >
                Insira abaixo as notas de corretagem para fazermos os cálculos!
            </Typography>
            <ImageUploadDemo/>
    </MuiThemeProvider>
);

export default Uploadpdf;