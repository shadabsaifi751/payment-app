import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Incentive from './components/incentive';
import Incomeexpress from './components/Incomeexpress';
import Transation from './components/Transation';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Incentive/>
        <Incomeexpress/>
        <Transation/>
      </div>
    </GlobalProvider>
  );
}

export default App;
