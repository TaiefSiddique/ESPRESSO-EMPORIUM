import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import ErrorPage from './components/ErrorPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('http://localhost:5002/coffee'),
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5002/coffee/${params.id}`),
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>,
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
