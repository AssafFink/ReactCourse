import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import { store } from './Storage/store';
import { interceptors } from './Utils/Interceptors';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { myTheme } from './Utils/Theme';

// Register interceptors: 
interceptors.registerInterceptors();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={myTheme}>
                <Layout />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
