import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">

{/* mapping the whole array of objects and load the items in MwnuItem */}
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      <div class="container d-flex justify-content-between">
      <button disabled={true} type="button" class="byn btn-danger ">&larr; Previous</button>
      {/* page is 1 so there is no meaning of previous button */}
      <button type="button" class="byn btn-danger">Next &rarr;</button>
      </div>
      <br/>
    </div>
  );
}

export default Menu;