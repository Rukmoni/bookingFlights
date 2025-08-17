export interface Flight {
    id: string;
    airline: string;
    flightNumber?: string;
    from: string;
    to: string;
    departure: string; // ISO string
    arrival: string;   // ISO string
    price: number;
    currency: string;
  }