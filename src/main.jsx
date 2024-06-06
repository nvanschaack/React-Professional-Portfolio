import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import AboutMe from './components/pages/AboutMe.jsx'
import ContactMe from './components/pages/ContactMe.jsx'
import Resume from './components/pages/Resume.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'

const router = createBrowserRouter([
  {
    path: '/', //will always render the App parent component at this '/' path
    element: <App />,
    children: [
      {
        index: true,
        element: <Portfolio />, //if the route is just '/', then <Portfolio /> will always be displayed as the "home" page because it's being inserted into <App />
      },
      {
        path: '/Aboutme',
        element: <AboutMe />,
      },
      {
        path: '/Contactme',
        element: <ContactMe />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> //disseminates props to any component that needs it
)
