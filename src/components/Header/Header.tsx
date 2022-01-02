import { FC } from "react";
import styled from "styled-components";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "components/Logo";

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const Header: FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <StyledToolbar>
        <Logo />
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </StyledToolbar>
    </AppBar>
  </Box>
);
