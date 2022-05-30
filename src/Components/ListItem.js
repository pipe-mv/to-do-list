// import React, { Component } from 'react';
import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItem = ({ todoItem, onDelete, id, onEdit }) => {
  const handleEditButton = () => {
    onEdit(id);
  };
  const handleDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div>
      <li>
        {todoItem}
        <button onClick={handleEditButton} className="edit-button">
          {" "}
          <BrushIcon />{" "}
        </button>
        <button onClick={handleDeleteButton} className="delete-button">
          {" "}
          <DeleteIcon />{" "}
        </button>
      </li>
    </div>
  );
};
// }

export default ListItem;
