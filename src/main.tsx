import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { About } from './component/pages/About.tsx';
import Event from './component/pages/Event.tsx';
import { Home } from './component/pages/Home.tsx';
import { News } from './component/pages/News.tsx';
import { AdminLayout } from './component/templates/AdminLayout.tsx';
import './index.css';
import EventFormPage from './component/pages/EventFormPage.tsx';
import { AdminEvents } from './component/pages/AdminEvents.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/event',
        element: <Event />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/events/create', // L'URL pour accéder au formulaire
        element: <EventFormPage />, // Le composant à afficher
      },
      {
        path: '/admin/events',
        element: <AdminEvents />,
      },
      // La page du formulaire pour la CRÉATION
      {
        path: '/admin/events/create',
        element: <EventFormPage />,
      },
      // La page du formulaire pour la MODIFICATION
      {
        path: '/admin/events/edit/:id', // :id est un paramètre dynamique
        element: <EventFormPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
