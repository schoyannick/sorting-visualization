import React from 'react';
import { GetStaticPathsResult, GetStaticProps } from 'next';

import App from '../src/components/App';
import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';

const Dynamic: React.FC = () => (
    <App/>
);

export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps();

export const getStaticPaths = (): GetStaticPathsResult => ({
    paths: [],
    fallback: false,
});

export default Dynamic;