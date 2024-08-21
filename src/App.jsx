import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import RootLayout from './layouts/rootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import PrivateRoute from './components/common/PrivateRouter';

import InitialScreen from './pages/InitialScreen';
import MessageHolder from './pages/MessageHolder';
import Support from './pages/Support';
import CreateProfile from './components/farmers/CreateProfile';
import UpdateProfile from './components/farmers/UpdateProfile';
import AllProduct from './components/farmers/AllProduct';
import AddProduct from './components/farmers/AddProduct';
import EditProduct from './components/farmers/EditProduct';
import DeleteProdruct from './components/farmers/DeleteProduct';
import ProductList from './components/farmers/ProductList'
import MyOrders from './components/farmers/MyOrders';
import UpdateOrderStatus from './components/farmers/UpdateOrderStatus';
import Messages from './components/farmers/Messages';
import OrderHistory from './components/customers/OrderHistory';
import CreateCustomerProfile from './components/customers/CreateCustomerProfile.jsx'
import UpdateCustomerProfile from './components/customers/UpdateCustomerProfile.jsx';
import CustomerMessages from './components/customers/Message.jsx'
import CreateNewOrder from './components/customers/CreateOrder.jsx'

import CancelOrder from './components/customers/CancelOrder.jsx'
import UpdateOrder from './components/customers/UpdateOrder.jsx';
import AddItemToCart from './components/customers/AddToCart.jsx'
import ViewCartItems from './components/customers/ViewCart.jsx'
import RemoveItemCart from './components/customers/RemoveCart.jsx'

import ProductUpdate from './components/farmers/UpdateProduct.jsx'
import SearchForm from './pages/Search.jsx';
import SearchResults from './pages/SearchResult.jsx';
import ProductDetail from './pages/ProductDetail.jsx';







const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    
     { path: '/support', element: <Support /> },
    
      {
        path: '/farmer-dashboard',
        element: (
          <PrivateRoute>
            <FarmerDashboard />
          </PrivateRoute>
        ),
        children: [
          { path: 'profile/create', element: <CreateProfile/>},
          { path: 'profile/update', element: <UpdateProfile/>},
          { path: 'product-management/all', element: <AllProduct/>},
          { path: 'product-management/add', element: <AddProduct/>},
          { path: 'product-management/edit', element: <EditProduct/>},
          { path: 'product-management/delete', element: <DeleteProdruct/>},
          { path: 'product-management/list', element: <ProductList/>},
          { path: 'order-management/my-orders', element: <MyOrders/>},
          { path: 'order-management/update-status', element: <UpdateOrderStatus/>},
          { path: 'order-management/update-product', element: <ProductUpdate/>},
          { path: 'messages', element: <Messages /> },
          
          
        ],
      },
      {
        path: '/customer-dashboard',
        element: (
          <PrivateRoute>
            <CustomerDashboard />
          </PrivateRoute>
        ),
        children: [
          { path: 'profile/create', element: <CreateCustomerProfile /> },
          { path: 'profile/update', element: <UpdateCustomerProfile /> },
          { path: 'order-management/order-history', element: <OrderHistory /> },
          { path: 'order-management/cancel-order', element: <CancelOrder /> },
          { path: 'order-management/new-order', element: <CreateNewOrder /> },
        
          { path: 'order-management/update-status', element: <UpdateOrder/> },
          { path: 'cart/add-item', element: <AddItemToCart /> },
          { path: 'cart/view-items', element: <ViewCartItems /> },
          { path: 'cart/remove-item', element: <RemoveItemCart/> },
          { path: 'messages', element: <CustomerMessages /> },
          
        ],
      },
      
      { path: '/initial-screen', element: <InitialScreen /> },
      { path: '/message-holder', element: <MessageHolder /> },
      { path: '/', element: <SearchForm /> },
      { path: '/search', element: <SearchResults /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const App = () => (
  <AuthProvider>
    <CartProvider>
      <div style={rootStyle}>
        <main style={{ flex: 1 }}>
          <RouterProvider router={router} />
        </main>
      </div>
    </CartProvider>
  </AuthProvider>
);

export default App;
