import React, {Suspense} from 'react';
import reactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import './i18next';

const root=reactDOM.createRoot(document.querySelector('#root'));

root.render(
    <Suspense fallback={(<div>Loading...</div>)}>
        <App/>
    </Suspense>
)