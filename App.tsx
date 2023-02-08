import React, { FC } from 'react';
import { Person } from './src/components/Person';
import './style.css';

const App: FC = () => {
  // const getName = (name: string): number => {
  //   if (name === 'john') {
  //     return 20;
  //   }
  //   return 0;
  // };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Person email="john@doe.com" name="John" />
    </div>
  );
};
export default App;
