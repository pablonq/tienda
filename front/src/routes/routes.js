import Customers from '../pages/Customers'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Welcome from '../pages/Welcome'
import NotFound from '../pages/NotFound' // Asumiendo que tienes una página para 404

export const routes = [
  {
    path: '/',
    element: Welcome
  },
  {
    path: '/login',
    element: Login
  },
  {
    path: '/register',
    element: Register
  },
  {
    path: '/customers', 
    element: Customers
  },
  {
    path: '/home',
    element: Home
  },
  {
    path: '*', // Esta ruta capturará cualquier URL que no coincida con las anteriores
    element: NotFound
  }
]