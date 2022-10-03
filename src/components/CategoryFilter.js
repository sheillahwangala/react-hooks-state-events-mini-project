import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {

  const categoryBtns = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
      key={category}
      className={className}
      onClick={(e) => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
