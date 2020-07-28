import { gql } from "@apollo/client";

export const Get_Nutritions = gql`
query GetNutritions {
    nutritions{
        id
        Dessert
        nutritionInfo {
            calories
            fat
            carb
            protein
        }
    }
}
`;