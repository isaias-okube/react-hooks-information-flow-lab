import React from "react";

function Filter({ category, onCategoryChange }) {
  const handleChange = (event) => {
    const newCategory = event.target.value;
    onCategoryChange(newCategory);
    };

    return (
        <div className="Filter">
            <select name="filter" onChange={handleChange} value={category}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
            </div>
    );
}

export default Filter