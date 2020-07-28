export interface StoreState {
    nutritions: NutritionData[]
}

export interface NutritionInfo {
    calories: number;
    carb: number;
    fat: number;
    protein: number;
}
export interface NutritionData {
    Dessert: string;
    nutritionInfo: NutritionInfo;
}