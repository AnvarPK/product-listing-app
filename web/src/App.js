import './App.css';
import AppContainer from './pages/container';
import configStore from './redux/configStore';
import { Provider } from "react-redux"

const store = configStore();

function App() {
  return (
    <>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </>
  );
}

export default App;
