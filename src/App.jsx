import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form } from "./Form";
import { GlobalProvider } from "./GlobalProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <Form />
    </GlobalProvider>
  </QueryClientProvider>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
