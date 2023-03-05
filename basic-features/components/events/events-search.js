import { useState } from 'react';
import Button from '../ui/button';
import claases from './events-search.module.css';

function EventsSearch(props) {
  const [year, setYear] = useState('2021');
  const [month, setMonth] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSearch(year, month);
  };

  return (
    <form className={claases.form} onSubmit={handleSubmit}>
      <div className={claases.controls}>
        <div className={claases.control}>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={claases.control}>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
