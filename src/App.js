import "./App.css";
import React, { Suspense, lazy } from "react";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
const Posts = lazy(() => import("./pages/posts"));
const Test = lazy(() => import("./pages/test"));
const DetailPost = lazy(() => import("./pages/posts/detail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/test" element={<Test />} />
          <Route path="/detail/:id" element={<DetailPost />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
