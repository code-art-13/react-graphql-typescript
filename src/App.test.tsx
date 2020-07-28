import configureStore from 'redux-mock-store';
import { MockedProvider } from '@apollo/client/testing';
import React from "react";
import { render, fireEvent, waitForElement, getByText } from "@testing-library/react";
import App from './App';
import { Provider } from 'react-redux';
import {data} from './mockData'
import { Get_Nutritions } from './graphql/queries';

const mocks = [
  {
    request: {
      query: Get_Nutritions,
    },
    result: {
        data: data
    },
  },
];

const mockStore = configureStore();
let mockStores = mockStore({
    nutritions: []
});
describe("App tests", () => {
    test("should render without error", async () => {
        render(
            <MockedProvider mocks={mocks}>
                <Provider store={mockStores}>
                    <App />
                </Provider>
            </MockedProvider>
        )
    });
    test("should render without error", async () => {
       const {getByText} = render(
            <MockedProvider mocks={[]}>
                <Provider store={mockStores}>
                    <App />
                </Provider>
            </MockedProvider>
        );
         const h1Element = getByText("Nutritions Application");
        expect(h1Element).toBeInTheDocument();
    });
});