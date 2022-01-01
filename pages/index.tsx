import styled from "styled-components";
import type { NextPage } from "next";

const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => <Title>All Game rules</Title>;

export default Home;
