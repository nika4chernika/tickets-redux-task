import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface Ticket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: "RUB";
  time: TicketTime;
  duration: number;
  date: string;
  connectionAmount: number;
  logo: string;
}

export const ticketList: Ticket[] = [
  // Мои данные
  {
    id: 1,
    from: "SVO",
    to: "LED",
    company: "Победа",
    price: 5000,
    currency: "RUB",
    time: {
      startTime: "2023-10-01T09:00:00",
      endTime: "2023-10-01T10:30:00",
    },
    duration: 100,
    date: "2023-10-01",
    connectionAmount: 1,
    logo: "./images/logo1.png",
  },
  {
    id: 2,
    from: "SVO",
    to: "LED",
    company: "Red Wings",
    price: 3000,
    currency: "RUB",
    time: {
      startTime: "2023-10-02T12:00:00",
      endTime: "2023-10-02T13:15:00",
    },
    duration: 75,
    date: "2023-10-02",
    connectionAmount: 2,
    logo: "./images/logo2.png",
  },
  {
    id: 3,
    from: "SVO",
    to: "LED",
    company: "S7 Airlines",
    price: 2500,
    currency: "RUB",
    time: {
      startTime: "2023-10-03T14:00:00",
      endTime: "2023-10-03T15:30:00",
    },
    duration: 90,
    date: "2023-10-03",
    connectionAmount: 0,
    logo: "./images/logo3.png",
  },
  {
    id: 4,
    from: "SVO",
    to: "LED",
    company: "Red Wings",
    price: 4000,
    currency: "RUB",
    time: {
      startTime: "2023-10-02T12:00:00",
      endTime: "2023-10-02T13:15:00",
    },
    duration: 135,
    date: "2023-10-02",
    connectionAmount: 2,
    logo: "./images/logo2.png",
  },
  {
    id: 5,
    from: "SVO",
    to: "LED",
    company: "S7 Airlines",
    price: 5500,
    currency: "RUB",
    time: {
      startTime: "2023-10-03T14:00:00",
      endTime: "2023-10-03T15:30:00",
    },
    duration: 80,
    date: "2023-10-03",
    connectionAmount: 0,
    logo: "./images/logo3.png",
  },
];

export interface FlightState {
  tickets: Ticket[];
}

const initialState: FlightState = {
  tickets: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload;
    },
    sortTicketsByPrice: (state) => {
      state.tickets.sort((a, b) => a.price - b.price);
    },
    sortTicketsByDuration: (state) => {
      state.tickets.sort((a, b) => a.duration - b.duration)
    },
    sortTicketsByConnectionAmount: (state) => {
      state.tickets.sort((a, b) => a.connectionAmount - b.connectionAmount)
    }
  },
});

export const { setTickets, sortTicketsByPrice, sortTicketsByDuration, sortTicketsByConnectionAmount } = flightSlice.actions;
export default flightSlice.reducer;
