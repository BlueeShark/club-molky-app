import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { About } from './component/pages/About.tsx';
import { AdminDashboard } from './component/pages/AdminDashboard.tsx';
import { AdminEvents } from './component/pages/AdminEvents.tsx';
import { AdminNews } from './component/pages/AdminNews.tsx';
import { AdminUsers } from './component/pages/AdminUsers.tsx';
import { CreateEvent } from './component/pages/CreateEvent';
import { EditEvent } from './component/pages/EditEvent';
import { Event } from './component/pages/Event.tsx';
import { EventDetail } from './component/pages/EventDetail';
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
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/admin/users',
        element: <AdminUsers />,
      },
      {
        path: '/admin/events',
        element: <AdminEvents />,
      },
      {
        path: '/admin/events/create',
        element: <CreateEvent />,
      },
      {
        path: '/admin/events/:id',
        element: <EventDetail />,
      },
      {
        path: '/admin/events/:id/edit',
        element: <EditEvent />,
      },
      {
        path: '/admin/news',
        element: <AdminNews />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

