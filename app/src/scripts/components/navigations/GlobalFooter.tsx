import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

export const GlobalFooter = () => {
  return (
    <StyledFooter>
      <Typography variant="h4" color="white" align="left">
        meipuru
      </Typography>
      <StyledGrid container>
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
  padding: 4em;
  background: #565252;
`;

const StyledGrid = styled(Grid)`
  margin-top: 2em;
`;

const StyledCopyright = styled.div`
  margin-top: 2em;
`;
