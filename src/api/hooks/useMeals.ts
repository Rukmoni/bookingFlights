import { useQuery } from "@tanstack/react-query";
import { Meal } from "../../types/meal";
import mealService from "../services/mealService";

export function useMeals() {
  return useQuery<Meal[]>({
    queryKey: ["meals"],
    queryFn: mealService.getMeals,
  });
}