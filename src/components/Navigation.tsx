import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RootPage } from "./RootPage"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </BrowserRouter>
  )
}
