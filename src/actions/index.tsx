import * as constants from '../constants';
import { GET_NUTRITIONS } from '../constants';

export interface GetNutritions {
    type: constants.GET_NUTRITIONS;
    payload?: any;
}
export interface AddNutrition {
    type: constants.ADD_NUTRITION;
    payload?: any;
}

export type NutritionAction = GetNutritions | AddNutrition;

export function getNutritions(payload?: any): GetNutritions {
    return {
        type: constants.GET_NUTRITIONS,
        payload
    }
}
export function addNutrition(payload?: any): AddNutrition {
    return {
        type: constants.ADD_NUTRITION,
        payload
    }
}
