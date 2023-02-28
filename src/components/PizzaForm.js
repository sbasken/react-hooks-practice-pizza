import React from "react";

function PizzaForm({ formData, handleInputChange, handleSubmit }) {
  const { id, topping, size, vegetarian } = formData

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            placeholder="Pizza Topping"
            onChange={(e)=>handleInputChange(e, id)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={(e)=>handleInputChange(e, id)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={vegetarian}
              checked={vegetarian ? true : false}
              onChange={(e)=>handleInputChange(e, id)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={vegetarian}
              checked={vegetarian ? false : true}
              onChange={(e)=>handleInputChange(e, id)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
