import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Homepage</p>
            </Layout>
          }
        ></Route>

<Route
          path="/search"
          element={
            <Layout>
              <p>Searchpage</p>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
