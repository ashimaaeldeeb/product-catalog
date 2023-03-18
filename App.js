import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigation from "./navigation/AppNavigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}
