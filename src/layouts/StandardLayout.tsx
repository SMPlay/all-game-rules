import { FC } from "react";
import { Container } from "@mui/material";

import { Header } from "components/Header";

export const StandardLayout: FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);
