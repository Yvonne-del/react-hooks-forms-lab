import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const searchItems = items.filter(item=> {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  
  const itemsToDisplay = searchItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={(newItem) => setItems([...items, newItem])} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
