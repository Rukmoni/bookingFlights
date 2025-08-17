export interface Flight {
    id: string;
    airline: string;
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: string; // ISO string
    arrivalTime: string;   // ISO string
    price: number;
    currency: string;
  }