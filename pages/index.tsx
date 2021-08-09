import { GetStaticProps } from 'next';
import React from 'react';

import App from '../src/components/App';
import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';

const Index: React.FC = () => (
    <App/>
);

export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps();

export default Index;