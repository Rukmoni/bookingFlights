import { Meal } from "../../types/meal";
import apiClient from "../client";

const mealService = {
  getMeals: async (): Promise<Meal[]> => {
    const { data } = await apiClient.get("/meals");
    return data;
  },
};

export default mealService;