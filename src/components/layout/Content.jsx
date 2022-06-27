import React from "react";
import { Box, Container, Grid, Toolbar } from '@mui/material';
import { styleMain } from "../../styles/drawer";
import Rutas from "../../routes/Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Content = () => {

  return (
    <>
      <Box component="main" sx={styleMain}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container>
            <>{Rutas}</>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
