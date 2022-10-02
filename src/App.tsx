import { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';
import router from './pages/router';

const App: FC<{}> = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
