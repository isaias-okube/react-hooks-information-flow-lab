import React from "react";

function Header({darkMode, onDarkModeClick}) {
  return (
    <header>
      <h2>ShoppingList</h2>
      <button onClick={onDarkModeClick}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;