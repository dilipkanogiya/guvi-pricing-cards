import logo from './logo.svg';
import './App.css';
import PricingCard from './Components/PricingCard';
import { pricings } from './utlis/constant';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <div className='row mt-4 pt-4'>
       {
        pricings.map((element)=>{
          return  <PricingCard {...element}/>
        })
       }
      </div>
      </div>
    </div>
  );
}

export default App;