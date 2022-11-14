// Modules
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Page from "./components/pages/Page";

// Setup
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </QueryClientProvider>
  );
}

export default App;
