import "./styles.css";
import React, { useState } from "react";
import ShowTrain from "./Components/ShowSeat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowTrain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
