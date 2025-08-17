import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Flight } from "../../types/flight";
import flightService from "../services/flightService";

export const flightsKeys = {
  all: ["flights"] as const,
  detail: (id: string) => [...flightsKeys.all, "detail", id] as const,
};

export function useFlights() {
  return useQuery<Flight[]>({
    queryKey: flightsKeys.all,
    queryFn: flightService.getAllFlights,
  });
}

/* export function useFlight(id: string) {
  return useQuery<Flight>({
    queryKey: flightsKeys.detail(id),
    queryFn: () => flightService.getFlightById(id),
    enabled: !!id,
  });
} */

// Example mutation pattern (not used yet)
export function useRefetchFlightsOnSomeMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => Promise.resolve(true),
    onSuccess: () => qc.invalidateQueries({ queryKey: flightsKeys.all }),
  });
}