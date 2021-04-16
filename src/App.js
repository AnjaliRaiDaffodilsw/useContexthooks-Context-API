
import { createContext } from 'react';
import './App.css';

import ComA from './CompA';

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value={"Vidhya"}>
        <LastName.Provider value={"Rai"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName , LastName };