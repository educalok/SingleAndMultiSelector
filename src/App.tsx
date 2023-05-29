import { useState } from 'react';

import {Select, SelectOption} from './Select';
import styles from './select.module.css';

const options = [
  {label: '⚛️', value: 1},
  {label: '🌲', value: 2},
  {label: '🔧', value: 3},
  {label: '🌈', value: 4},
  {label: '🎨', value: 5},
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.selectorContainer}>
        <label>Single Selector </label> <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
      </div>
      <div className={styles.selectorContainer}>
        <label>Multiple Selector </label> <Select multiple options={options} value={value1} onChange={(o) => setValue1(o)} />
      </div>
    </div>
  );
}

export default App;
