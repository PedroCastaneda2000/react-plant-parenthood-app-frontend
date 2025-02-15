import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProductPage from "./pages/ProductPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
