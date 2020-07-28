import { MockedProvider } from '@apollo/client/testing';
import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { DeleteNutritionButton } from '../DeleteNutritionButton';

describe("DeleteNutritionButton", () => {
  test("should render without error", async () => {
        render(
        <MockedProvider mocks={[]}>
            <DeleteNutritionButton selectedItemIds={[]} onDelete={jest.fn()} />
        </MockedProvider>
    )
  });
});