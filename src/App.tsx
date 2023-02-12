import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoute } from './routes/index';

function App() {
  return (
    <Router basename="slash">
      <div className="App">
        <Routes>
          { publicRoute.map((route, index) => {
            const Layout = route.layout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          }) }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
