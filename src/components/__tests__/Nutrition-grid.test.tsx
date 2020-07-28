import { MockedProvider } from '@apollo/client/testing';
import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import NutritionGrid from '../Nutrition-grid';
import { data } from '../../mockData'
import { Get_Nutritions } from '../../graphql/queries';
import configureStore from 'redux-mock-store';

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

describe("Nutrition Grid", () => {
    test("should render without error", async () => {
        render(
            <MockedProvider mocks={[]}>
                <NutritionGrid data={[]} />
            </MockedProvider>
        )
    });

    test("should render without error with mocked data", async () => {
        render(
            <MockedProvider mocks={[]}>
                <NutritionGrid data={[]} />
            </MockedProvider>
        )
    });
});