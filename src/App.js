import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./App.css";

function App() {
  const [focusedDate, setFocusedDate] = useState(null);
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  return (
    <div className="App">
      <DateRangePicker
        startDate={dates.startDate}
        endDate={dates.endDate}
        startDateId={"start"}
        endDateId={"end"}
        onDatesChange={({ startDate, endDate }) => {
          setDates({ startDate, endDate });
        }}
        focusedInput={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </div>
  );
}

export default App;
