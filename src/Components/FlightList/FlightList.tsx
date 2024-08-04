import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store"; 
import FlightCard from '../FlightCard/FlightCard';
import { Ticket } from "../../slices/flightSlice";
import "./flightList.css"

const FlightList: React.FC<{ filters: number[], companies: string[] }> = ({ filters, companies }) => {
  const tickets = useSelector((state: RootState) => state.flights.tickets);

  const filteredTickets = tickets.filter((ticket) => {
    const connectionFilter = filters.length ? filters.includes(ticket.connectionAmount || 0) : true;
    const companyFilter = companies.length ? companies.includes(ticket.company) : true;
    return connectionFilter && companyFilter;
  });

  return (
    <div className="list">
      {filteredTickets.map((ticket: Ticket) => (
        <FlightCard key={ticket.id} {...ticket} />
      ))}
    </div>
  );
};

export default FlightList;