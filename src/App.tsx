import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./shared-components";
import { MainContent } from "./App.styles";
import { JobsList } from "./views";
import { SelectedJob } from "./views/selected-job";

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<JobsList />} />
          <Route path="/selected-job/:id" element={<SelectedJob />} />
        </Routes>
      </MainContent>
    </>
  );
}

export default App;
