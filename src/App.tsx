import routs from "./components/ZK_Bazar/Routs.tsx";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}

export default App;
