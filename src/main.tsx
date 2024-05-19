import React from "react"
import ReactDOM from "react-dom/client"
import { Providers } from "./components/Providers"

import { Navigation } from "./components/Navigation"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Navigation />
    </Providers>
  </React.StrictMode>,
)
