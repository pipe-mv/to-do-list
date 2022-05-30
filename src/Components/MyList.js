import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import ListItem from "./ListItem";
import subtitle from "../images/subtitle.png";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MyList = ({ theList }) => {
  const [todoItems, setTodoItems] = useState(theList);
  const [newItem, setNewItem] = useState("");

  const todoItemsArray = todoItems.map((item, index) => (
    <ListItem
      id={index}
      key={index}
      todoItem={item}
      onDelete={deleteItem}
      onEdit={editItem}
    />
  ));

  const clearList = (event) => {
    event.preventDefault();
    setTodoItems([]);
  };

  const addItem = (event) => {
    // console.log("Hello");
    event.preventDefault();

    setTodoItems([...todoItems, newItem]);
    setNewItem("");
  };

  function deleteItem(id) {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.filter((listItem, index) => {
        return index !== id;
      });
    });
  }
  function editItem(id) {
    let editedItem = prompt("Edit the Item");
    if (editedItem === null) {
      return;
    } else {
      const currentItems = todoItems.slice();
      currentItems[id] = editedItem;
      return setTodoItems(currentItems);
    }
  }

  const updateInput = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
      <Header />

      <img src={subtitle} className="subtitle" alt="" />
      <ul className="list">{todoItemsArray}</ul>
      <form className="create-list">
        <input
          type="text"
          placeholder="Add an Item to the list!"
          onChange={updateInput}
          value={newItem}
        />

        <Fab className="add-button" onClick={addItem}>
          <AddIcon />
        </Fab>
        <br />
        <br />

        <Fab className="delete-all-button" onClick={clearList}>
          <DeleteForeverIcon />
        </Fab>
      </form>
      <Footer />
    </div>
  );
};

export default MyList;
