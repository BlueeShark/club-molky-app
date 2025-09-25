import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { About } from './component/pages/About.tsx';
import { AdminEvents } from './component/pages/AdminEvents.tsx';
import Event from './component/pages/Event.tsx';
import EventFormPage from './component/pages/EventFormPage.tsx';
import { Home } from './component/pages/Home.tsx';
import { News } from './component/pages/News.tsx';
import { AdminLayout } from './component/templates/AdminLayout.tsx';
import './index.css';

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
        path: '/admin/events', // ✅ Route générale en premier
        element: <AdminEvents />,
      },
      {
        path: '/admin/events/create', // ✅ Route spécifique avant la route avec paramètre
        element: <EventFormPage />,
      },
      {
        path: '/admin/events/edit/:id', // ✅ Route avec paramètre en dernier
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
