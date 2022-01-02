import type { NextPage } from 'next';
import styled from 'styled-components';

import { StandardLayout } from 'layouts/StandardLayout';

const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => (
  <StandardLayout>
    <Title>All Game rules</Title>
  </StandardLayout>
);

export default Home;
