import { GetStaticPropsResult } from 'next';
import { generateNewArray } from '../redux/app/actions';
import { initializeStore } from '../redux/store';

export function handleGetStaticProps(): GetStaticPropsResult<unknown> {
    const store = initializeStore();
    
    store.dispatch(generateNewArray());

    return {
        props: {
            initialReduxState: store.getState(),
        },
    };
}