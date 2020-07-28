import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { nutritionReducer } from './reducers/index';
import { StoreState, NutritionData } from './types/index';
import { Provider } from 'react-redux';
import { data } from './mockData';
import { gql, useQuery, ApolloProvider } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


const store = createStore<StoreState, any, any, any>(nutritionReducer, {
  nutritions: []
});

// const mocks = [
//   {
//     request: {
//       query: Get_Rates,
//       variables: {
//         currency: 'INR',
//       },
//     },
//     result: {
//       data
//     },
//   },
// ];

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,

  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
