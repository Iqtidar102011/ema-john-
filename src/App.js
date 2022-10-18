
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';

import Shop from './components/Shop/Shop';
import Main from './Layout/Main';
import Orders from './components/Orders//Orders'
import Inventory from './components/Inventory/Inventory'
import { productsAndCartLoader } from './components/loader/productsAndCartLoader';
import Login from './components/logIn/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'order',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
