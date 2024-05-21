import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserDetailsProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import RoutesConfig from "./routes/routes";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <RoutesConfig />
        </QueryClientProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
