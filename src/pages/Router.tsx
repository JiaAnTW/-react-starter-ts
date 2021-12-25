import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

// Page Component
import Index from './Index';

const Router: FC<{}> = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </HashRouter>
    );
};

export default Router;
