import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import AppNavigation from "./navigation/AppNavigation";
import { store } from "./redux/store";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
}
