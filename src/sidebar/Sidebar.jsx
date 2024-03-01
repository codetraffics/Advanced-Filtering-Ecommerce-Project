import Cartegory from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";
import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Cartegory />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
