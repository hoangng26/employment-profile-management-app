import MainLayoutComponent from '@/layouts/MainLayout';
import EmployeeCreatePageComponent from '@/pages/Employee/Create';
import EmployeeEditPageComponent, { EmployeeEditPageLoader } from '@/pages/Employee/Edit';
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
      {
        path: 'create',
        element: <EmployeeCreatePageComponent />,
      },
      {
        path: 'edit/:id',
        element: <EmployeeEditPageComponent />,
        loader: EmployeeEditPageLoader,
      },
    ],
  },
]);
