import { ConfigProvider, ConfigProviderProps } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './core/redux/store';
import { browserRouter } from './routes';

function App() {
  const configProviderProps: ConfigProviderProps = {
    theme: {
      algorithm: [],
    },
    componentSize: 'large',
  };

  return (
    <Provider store={store}>
      <ConfigProvider {...configProviderProps}>
        <RouterProvider router={browserRouter} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
