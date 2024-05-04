'use client';

import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import Navbar from './(main)/navbar';
import { WireframeProvider } from '@/context/WireframeContext';
import { AppProvider } from '@/context/AppContext';

const Template = ({ children }) => {

    // useEffect(() => {
    //   require('bootstrap/dist/js/bootstrap.min.js');
    // }, [])

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={2000}>
            <AppProvider>
            <WireframeProvider>
                {children}
            </WireframeProvider>
            </AppProvider>
        </SnackbarProvider>
    )
}

export default Template;