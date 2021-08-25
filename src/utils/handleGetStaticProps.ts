import { GetStaticPropsResult } from 'next';
import { initializeStore } from '../redux/store';

export function handleGetStaticProps(): GetStaticPropsResult<unknown> {
    const store = initializeStore();

    return {
        props: {
            initialReduxState: store.getState(),
        },
    };
}