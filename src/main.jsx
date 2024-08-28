import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store'; 

createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>,
)
