import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const VideoDetail = lazy(() => import("./pages/VideoDetail"));
const Shorts = lazy(() => import("./pages/shorts"));

function App({ mode, setMode }) {
  return (
    <Router>
      <Navbar mode={mode} setMode={setMode} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/shorts" element={<Shorts />} />
        </Routes>
      </Suspense>

      <Toaster richColors position="top-center" />
    </Router>
  );
}

export default App;
