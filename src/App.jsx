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
import CustomerProfile from './components/customers/CustomerProfile';
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
import InquiryForm from './components/customers/CustomerProfile';
import CustomerMessages from './components/customers/CustomerMessages';







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
          { path: 'profile', element: <CustomerProfile /> },
          { path: 'orders', element: <OrderHistory /> },
          { path: 'inquiries', element: <InquiryForm /> },
          { path: 'messages', element: <CustomerMessages /> },
          
        ],
      },
      
      { path: '/initial-screen', element: <InitialScreen /> },
      { path: '/message-holder', element: <MessageHolder /> },
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
