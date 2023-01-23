import { createRoot } from "react-dom/client";
import * as React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';
import TopNav from "./AppBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const container = document.getElementById("app");

if (container) {
    const root = createRoot(container);

    root.render(
        <Grid2 container spacing={3}>
            <TopNav />
            <Grid2 xs={12}>
            

            <Typography variant="h1">Online Experimentation Library</Typography>

            <Card>
                <CardContent>
                    <Typography gutterBottom color="text.secondary">Hej svejs</Typography>
                    <Typography variant="body2">well meaning and kindly.
                        "a benevolent smile"</Typography>
                </CardContent>
            </Card>
            </Grid2>
        </Grid2>
    );
}