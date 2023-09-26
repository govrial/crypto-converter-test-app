import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoute } from 'app/provider/route';
import { Loader } from '../shared/ui/Loader/Loader';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <div className="content-page">
            <Suspense fallback={<Loader />}>
                <AppRoute />
            </Suspense>
        </div>
    </div>
);

export default App;
