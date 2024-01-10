import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register/Register";

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

<Route
          path="/register"
          element={
            <Layout>
              <Register/>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
