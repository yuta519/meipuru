import React from "react";
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styled from "styled-components";

export const GlobalFooter = () => {
  return (
    <StyledFooter>
      <StyledServiceNameTypography variant="h4" color="white" align="left">
        meipuru
      </StyledServiceNameTypography>
      <StyledGrid container>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={2}>
          <Link variant="body1" color="white" underline="hover" align="center">
            What is meipuru
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link variant="body1" color="white" underline="hover" align="center">
            About Us
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link variant="body1" color="white" underline="hover" align="center">
            Contact
          </Link>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3} textAlign="right">
          <Chip icon={<TwitterIcon />} color="info" label="Twitter"/>
          <Chip icon={<FacebookIcon  />} color="primary" label="Facebook"/>
          <Chip icon={<InstagramIcon />} color="secondary" label="Instagram"/>
          <Chip icon={<YouTubeIcon/>} color="error" label="YouTube"/>
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
