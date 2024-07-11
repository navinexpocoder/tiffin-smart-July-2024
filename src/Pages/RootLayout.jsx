import { Footer, Header } from "../Layouts";
import { Outlet } from "react-router-dom";

function RootLayOut() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayOut;
