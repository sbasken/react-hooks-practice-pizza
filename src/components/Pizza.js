import React from "react";

function Pizza({ pizza, onEditPizza }) {
  const { topping, size, vegetarian } = pizza
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => onEditPizza(pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
