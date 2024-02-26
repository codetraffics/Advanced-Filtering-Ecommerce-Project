import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      {/* <Products /> */}
    </>
  );
};

export default App;
