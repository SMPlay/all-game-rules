import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "components/Logo";

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme: { color } }) => color.primary};
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme: { color } }) => color.grey};
`;

const StyledLogo = styled(Logo)`
  cursor: pointer;
`;

export const Header: FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <StyledAppBar position="static">
      <StyledToolbar>
        <Link href="/" passHref>
          <StyledLogo />
        </Link>
        <IconButton size="large" edge="end" aria-label="menu">
          <StyledMenuIcon />
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  </Box>
);
