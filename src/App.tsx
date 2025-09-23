import { Outlet } from "react-router-dom";
import { Navbar } from "./component/templates/Navbar";
import { Footer } from "./component/templates/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
