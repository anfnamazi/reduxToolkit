import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Primary from './pages/Primary';
// import Secondary from './pages/Secondary';
// import ProtectedRoute from './common/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<ProtectedRoute />}>
        <Route path="primary" element={<Primary />} />
        <Route path="secondary" element={<Secondary />} />
      </Route> */}
    </Routes>
  );
}

export default App;
