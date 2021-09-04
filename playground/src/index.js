import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import DatePicker, { Calendar } from '../../src';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [selectedDay, setValue] = useState(null);
  const [selectedDay4, setValue4] = useState(null);
  return (
    <>
      <DatePicker value={selectedDay} onChange={setValue} shouldHighlightWeekends locale="fa" />
      <hr />
      <Calendar
        value={selectedDay4}
        onChange={setValue4}
        calendarClassName="fontWrapper -persian"
        shouldHighlightWeekends
        locale="fa"
      />
    </>
    // <>
    // </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
