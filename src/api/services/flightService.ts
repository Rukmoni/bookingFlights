import { Flight } from "../../types/flight";

const mockFlights: Flight[] = [
    {
      id: "F1001",
      airline: "AirAsia",
      from: "KUL",
      to: "PEN",
      departure: "2025-08-18T09:30:00",
      arrival: "2025-08-18T10:30:00",
      price: 120,
      currency: "MYR",
    },
    {
      id: "F1002",
      airline: "Malaysia Airlines",
      from: "KUL",
      to: "SIN",
      departure: "2025-08-18T11:00:00",
      arrival: "2025-08-18T12:00:00",
      price: 180,
      currency: "MYR",
    },
    {
      id: "F1003",
      airline: "Singapore Airlines",
      from: "SIN",
      to: "BKK",
      departure: "2025-08-18T14:00:00",
      arrival: "2025-08-18T16:00:00",
      price: 350,
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
  getAllFlights: async (): Promise<Flight[]> => {
    // simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockFlights), 800);
    });
  },
};
export const fetchFlights = async (searchParams?: any) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
  
    // Simple filter logic (expand later)
    if (searchParams?.from && searchParams?.to) {
      return mockFlights.filter(
        (f) => f.from === searchParams.from && f.to === searchParams.to
      );
    }
    return mockFlights;
  };

export default flightService;
