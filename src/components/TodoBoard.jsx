import { useState } from "react";

function TodoBoard() {
  const [item, setItem] = useState(""); // State of the single item
  const [itemList, setItemList] = useState([]); // State for the todo items array

  // Handle input change
  const handleInputChange = (e) => {
    setItem(e.target.value); // Update input value on change
  };

  // Add items to my item list array
  const addItem = () => {
    if (item.trim()) {
      // Check if input is not empty
      setItemList([...itemList, item]); // Add the input value to the itemList
      setItem(""); // Clear the input field
    }
  };

  // Delete items from my item list array
  const deletItem = (index) => {
    const newItemList = itemList.filter((_, i) => i !== index); // Filter out the item to delete
    setItemList(newItemList); // Update the state with the new item list
  };

  //Mapped list items array, so i can render it
  const mappedListItems = itemList.map((i, index) => {
    return (
      <li className="item" key={index}>
        {i}{" "}
        <button
          onClick={() => {
            deletItem(index);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="big-container">
        <div className="add">
          <input
            placeholder="Add an item"
            type="text"
            value={item} // Save the input value
            onChange={handleInputChange} // Handle input change
          />
          <button onClick={addItem}>Add</button>
        </div>
        <ol className="items-container">{mappedListItems}</ol>
      </div>
    </>
  );
}

export default TodoBoard;
