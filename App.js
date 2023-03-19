import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import AppNavigation from "./navigation/AppNavigation";
import { store } from "./redux/store";

const queryClient = new QueryClient();
const persistor = persistStore(store);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
