import React from "react";
import { Ticket } from "../../slices/flightSlice";
import "./flightCard.css";

const FlightCard: React.FC<Ticket> = ({
  price,
  from,
  to,
  time,
  duration,
  connectionAmount,
  logo,
}) => {
  return (
    <div className="card">
      <div className="row1">
        <p className="p-price">{price} Р</p>
        <p className="p-default">
          {from} - {to}
        </p>
        <p className="p-active">
          {new Date(time.startTime).toLocaleTimeString()} -{" "}
          {new Date(time.endTime).toLocaleTimeString()}
        </p>
      </div>

      <div className="row2">
        <p className="p-default">В пути</p>
        <p className="p-active">
          {Math.floor(duration / 60)} ч{" "}
          {duration - Math.floor(duration / 60) * 60} мин
        </p>
      </div>
      <div className="row3">
        <img src={logo} alt="" />
        <p className="p-default">Пересадки</p>
        <p className="p-active">
          {connectionAmount === 0
            ? "Без пересадок"
            : `${connectionAmount} пересадк${connectionAmount > 1 ? 'и' : 'а'}`}
        </p>
      </div>
    </div>
  );
};

export default FlightCard;
