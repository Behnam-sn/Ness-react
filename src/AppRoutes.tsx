import { Route, Routes } from "react-router";
import { AboutPage } from "./pages/about-page";
import { HomePage } from "./pages/home-page";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}
