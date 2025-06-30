import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import CondominiumsForm from "../CondominiumsForm";
const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/property/condominiums" element={<CondominiumsForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
