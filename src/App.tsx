import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import Filter from "./Components/Filter";
import FlightList from "./Components/FlightList/FlightList";
import { useAppDispatch } from "./hooks";
import {
  setTickets,
  ticketList,
  sortTicketsByPrice,
  sortTicketsByDuration,
  sortTicketsByConnectionAmount,
} from "./slices/flightSlice";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [filters, setFilters] = useState<number[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);

  useEffect(() => {
    dispatch(setTickets(ticketList));
  }, [dispatch]);

  const handleSortByPrice = () => {
    dispatch(sortTicketsByPrice());
    setActiveButton(0);
  };

  const handleSortByDuration = () => {
    dispatch(sortTicketsByDuration());
    setActiveButton(1);
  };

  const handleSortByConnectionAmount = () => {
    dispatch(sortTicketsByConnectionAmount());
    setActiveButton(2);
  };

  const handleFilterChange = (newFilters: number[], newCompanies: string[]) => {
    setFilters(newFilters);
    setCompanies(newCompanies);
  };

  return (
    <div>
      <Container>
        <div className="header">
          <img src="./images/logo-main.png" alt="logo" className="logo" />
          <h1 className="h1">Поиск авиабилетов</h1>
        </div>
        <Box display="flex">
          <Filter onFilterChange={handleFilterChange} />
          <Box flex="1" paddingLeft={2}>
            <div className="filter-from-to">
              <button
                onClick={handleSortByPrice}
                className={`button-toggle ${
                  activeButton === 0 ? "active" : ""
                }`}
              >
                Самый дешевый
              </button>
              <button
                onClick={handleSortByDuration}
                className={`button-toggle ${
                  activeButton === 1 ? "active" : ""
                }`}
              >
                Самый быстрый
              </button>
              <button
                onClick={handleSortByConnectionAmount}
                className={`button-toggle ${
                  activeButton === 2 ? "active" : ""
                }`}
              >
                Самый оптимальный
              </button>
            </div>
            <FlightList filters={filters} companies={companies} />
            <button className="button-more">Загрузить еще билеты</button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default App;
