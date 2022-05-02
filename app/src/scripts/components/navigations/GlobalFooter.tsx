import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

export const GlobalFooter = () => {
  return (
    <StyledFooter>
      <StyledServiceNameTypography variant="h4" color="white" align="left">
        meipuru
      </StyledServiceNameTypography>
      <StyledGrid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Typography variant="body1" color="white" align="left">
            What is meipuru
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" color="white" align="left">
            About Us
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" color="white" align="left">
            Contact
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="right">
          kaede
        </Grid>
      </StyledGrid>
      <StyledCopyright>
        <Typography variant="body2" color="white" align="center">
          Copyright © meipuru {new Date().getFullYear()}
        </Typography>
      </StyledCopyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  background: #565252;
`;

const StyledServiceNameTypography = styled(Typography)`
  padding: 0.5em;
`;

const StyledGrid = styled(Grid)`
  margin-top: 0.5em;
`;

const StyledCopyright = styled.div`
  margin-top: 2em;
`;
