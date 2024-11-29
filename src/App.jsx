import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form } from "./components/Form";
import { GlobalProvider } from "./hooks/GlobalProvider";
import { PostList } from "./components/PostList";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <Layout>
        <Form />
        <PostList />
      </Layout>
    </GlobalProvider>
  </QueryClientProvider>
);

export default App;
