import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import AllProducts from './views/AllProducts';
import EditProduct from './views/EditProduct';
import OneProduct from './views/OneProduct';
import NewProduct from './views/NewProduct';
import NotFound from './views/NotFound';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Product Manager</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/products"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Products
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<NewProduct/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/Products/:id/edit" element={<EditProduct/>}/>
        <Route path="/Products/:id" element={<OneProduct/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;