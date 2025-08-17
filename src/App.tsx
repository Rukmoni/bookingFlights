import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import { store } from "./store";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
}
