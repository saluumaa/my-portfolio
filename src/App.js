import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layout';

function App() {
  return (
    <>
    <Rootes>
      <Route path="/" element={<Layout />} />
    </Rootes>
    </>
  );
}

export default App;
