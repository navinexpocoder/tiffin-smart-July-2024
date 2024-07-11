import { RouterProvider } from "react-router-dom";
import { router } from "../src/utils/RouterProvider.jsx";

import "./App.css";

function App() {
  return (
    <div className="bg-slate-400">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
