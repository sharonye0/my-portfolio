import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage, { loader } from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import Error from "./pages/Error";
import { useEffect } from "react";

function App() {
   useEffect(() => {
      localStorage.setItem("selectedTheme", "dark");
   }, []);
   const router = createBrowserRouter([
      {
         path: "/",
         element: <RootLayout />,
         errorElement: <Error />,
         children: [
            { index: true, element: <HomePage />, loader: loader },
            {
               path: "projects",
               element: <ProjectsPage />,
            },
            { path: "about-me", element: <About /> },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
