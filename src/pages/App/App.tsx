import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../Landing/Landing";
import Layout from "../Layout/Layout";
import ErrorPage from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const queryClient: QueryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
