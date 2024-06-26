import MainLayoutComponent from '@/layouts/MainLayout';
import HomePageComponent from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePageComponent />,
      },
    ],
  },
]);
