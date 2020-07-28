import { gql } from '@apollo/client';

export const ADD_NUTRITION = gql`
  mutation AddNutrition($input: NutritionInfoInput!) {
    addNutritionItem(input: $input){
        Dessert
    }
  }
`;

export const DELETE_NUTRITION = gql`
  mutation DeleteNutrition($id: Int!) {
    deleteNutritionItem(id: $id){
        id
    }
  }
`;
