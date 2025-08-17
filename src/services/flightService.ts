import { Flight } from "../types/flight";

const mockFlights: Flight[] = [
  {
    id: "1",
    airline: "AirAsia",
    flightNumber: "AK123",
    origin: "KUL",
    destination: "PEN",
    departureTime: "2025-08-20T09:30:00Z",
    arrivalTime: "2025-08-20T10:30:00Z",
    price: 120,
    currency: "MYR",
  },
  {
    id: "2",
    airline: "Malindo Air",
    flightNumber: "OD456",
    origin: "KUL",
    destination: "LGK",
    departureTime: "2025-08-20T12:00:00Z",
    arrivalTime: "2025-08-20T13:15:00Z",
    price: 180,
    currency: "MYR",
  },
  {
    id: "3",
    airline: "Malaysia Airlines",
    flightNumber: "MH789",
    origin: "PEN",
    destination: "KUL",
    departureTime: "2025-08-20T16:45:00Z",
    arrivalTime: "2025-08-20T17:45:00Z",
    price: 150,
    currency: "MYR",
  },
];

export const flightService = {
  getFlights: async (): Promise<Flight[]> => {
    // simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockFlights), 800);
    });
  },
};
