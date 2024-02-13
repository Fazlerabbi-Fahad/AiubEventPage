import MainRoutes from "./routes/MainRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={MainRoutes}></RouterProvider>
    </div>
  );
}

export default App;
