import React from "react";
import Grid from "@mui/material/Grid";

const footer = () => {
  return (
    <footer style={{ backgroundColor: "skyblue", color: "white" }}>
      <Grid container>
        <Grid xs={4} lg={4} md={4}>
          <img src="" alt="logo" />
        </Grid>
        <Grid xs={4} lg={4} md={4}>
          <ul>
            <li> Text-1</li>
            <li> Text-2</li>
            <li> Text-3</li>
          </ul>
        </Grid>
        <Grid xs={4} lg={4} md={4}>
          <ul>
            <li> Text-1</li>
            <li> Text-2</li>
            <li> Text-3</li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};
export default footer;
