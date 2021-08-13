import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import App from '../src/components/App';
import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';

const Index: React.FC = () => (
    <>
        <Head>
            <title>Sorting Visualization</title>
        </Head>
        <App/>
    </>
);

export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps();

export default Index;