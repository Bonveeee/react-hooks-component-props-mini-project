import React from "react";


function Header(props) {
  return (
    <div>
    <blogData/>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Header;
