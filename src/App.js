import './App.css';
import Header from "./component/Header" ; 
// import Category from './component/Category';
// import Best30 from './component/Best30';
// import TimeSale from './component/TimeSale';
// import StrongSale from './component/StrongSale';
import {Button} from 'semantic-ui-react' ;
import Login from './component/Login';
import Product from './component/Product';

function App() {
  return (
    <div>
      <Header />
      <Login />

      <Product />
      {/* <Category />
      <Best30 />
      <TimeSale />
      <StrongSale /> */}
    </div>
  );
}

export default App;
