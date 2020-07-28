import { MockedProvider } from '@apollo/client/testing';
import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Nutrition from '../Nutrition';

describe("<Nutrition />", () => {
  test("should render without error", async () => {
        render(
        <MockedProvider mocks={[]}>
            <Nutrition />
        </MockedProvider>
    )
  });
});