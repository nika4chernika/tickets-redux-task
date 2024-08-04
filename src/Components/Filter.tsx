import React, { useState } from "react";
import "./filter.css";

const Filter: React.FC<{ onFilterChange: (filters: number[], companies: string[]) => void }> = ({
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<number[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    const newFilters = event.target.checked
      ? [...filters, value]
      : filters.filter((filter) => filter !== value);
    setFilters(newFilters);
    onFilterChange(newFilters, companies);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newCompanies = event.target.checked
      ? [...companies, value]
      : companies.filter((company) => company !== value);
    setCompanies(newCompanies);
    onFilterChange(filters, newCompanies);
  };

  return (
    <div className="filters">
      <div className="checkbox-amount">
        <h2 className="h2">Количество пересадок</h2>
        {/* <form className="checkbox-form">
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="connectionAmount"
              value="0"
              checked={filters.includes(0)}
              onChange={handleCheckboxChange}
            ></input>
            Без пересадок
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="connectionAmount"
              value="1"
              checked={filters.includes(1)}
              onChange={handleCheckboxChange}
            ></input>
            1 пересадка
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="connectionAmount"
              value="2"
              checked={filters.includes(2)}
              onChange={handleCheckboxChange}
            ></input>
            2 пересадки
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="connectionAmount"
              value="3"
              checked={filters.includes(3)}
              onChange={handleCheckboxChange}
            ></input>
            3 пересадки
          </label>
        </form>
      </div>
      <div className="radiobutton-company">
        <h2 className="h2">Компании</h2>
        <form className="radiobutton-form">
        <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="company"
              value="Победа"
              checked={companies.includes("Победа")}
              onChange={handleCompanyChange}
            ></input>
            Победа
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="company"
              value="Red Wings"
              checked={companies.includes("Red Wings")}
              onChange={handleCompanyChange}
            ></input>
            Red Wings
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="company"
              value="S7 Airlines"
              checked={companies.includes("S7 Airlines")}
              onChange={handleCompanyChange}
            ></input>
            S7 Airlines
          </label>

        </form> */}
        <form className="checkbox-form">
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="connectionAmount"
          value="0"
          checked={filters.includes(0)}
          onChange={handleCheckboxChange}
        />
        <span className="custom-checkbox-rect"></span>
        Без пересадок
      </label>
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="connectionAmount"
          value="1"
          checked={filters.includes(1)}
          onChange={handleCheckboxChange}
        />
        <span className="custom-checkbox-rect"></span>
        1 пересадка
      </label>
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="connectionAmount"
          value="2"
          checked={filters.includes(2)}
          onChange={handleCheckboxChange}
        />
        <span className="custom-checkbox-rect"></span>
        2 пересадки
      </label>
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="connectionAmount"
          value="3"
          checked={filters.includes(3)}
          onChange={handleCheckboxChange}
        />
        <span className="custom-checkbox-rect"></span>
        3 пересадки
      </label>
    </form>
  </div>
  <div className="radiobutton-company">
    <h2 className="h2">Компании</h2>
    <form className="radiobutton-form">
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="company"
          value="Победа"
          checked={companies.includes("Победа")}
          onChange={handleCompanyChange}
        />
        <span className="custom-checkbox"></span>
        Победа
      </label>
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="company"
          value="Red Wings"
          checked={companies.includes("Red Wings")}
          onChange={handleCompanyChange}
        />
        <span className="custom-checkbox"></span>
        Red Wings
      </label>
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name="company"
          value="S7 Airlines"
          checked={companies.includes("S7 Airlines")}
          onChange={handleCompanyChange}
        />
        <span className="custom-checkbox"></span>
        S7 Airlines
      </label>
    </form>
      </div>
    </div>
  );
};

export default Filter;
