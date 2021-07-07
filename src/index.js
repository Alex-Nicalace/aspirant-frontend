import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'fontsource-roboto';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {ruRU} from '@material-ui/core/locale'; // локализация компонентов MU

import App from "./components/app";
import store from "./store";
import {AspirantApi} from "./components/context/aspirant-api-context";
import ErrorBoundary from "./components/error-boundry";

const theme = createMuiTheme({
    palette: {
        //primary: {main: '#1976d2'}
    }
}, ruRU)

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AspirantApi>
                    <ErrorBoundary>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </ErrorBoundary>
                </AspirantApi>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

