
import { Reducer } from "redux";
import { StoreState } from "../types";
import { NutritionAction } from "../actions";
import { data } from '../mockData'
import { GET_NUTRITIONS, ADD_NUTRITION } from "../constants";

export const nutritionReducer: Reducer = (
  state: StoreState,
  action: NutritionAction
): StoreState => {
  switch (action.type) {
    case GET_NUTRITIONS:
      return { ...state, nutritions: data };
    case ADD_NUTRITION:
      return { ...state, nutritions: data };
  }
  return state;
};
