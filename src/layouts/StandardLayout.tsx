import { FC } from "react";

import { Header } from "components/Header";

export const StandardLayout: FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
