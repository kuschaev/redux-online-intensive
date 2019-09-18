// Core
import { applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import { customThunk } from './custom';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#FF0005',
    },
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devTools ? devTools : compose;
// const middleware = [thunk, customThunk];
const middleware = [customThunk];

if (__DEV__) {
    middleware.push(logger);
}
export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
