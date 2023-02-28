import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [ pizzas, setPizzas ] = useState([])
  const [ formData, setFormData ] = useState({
    id: 0,
    topping: "",
    size: "",
    vegetarian: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedPizzas = pizzas.map(pizza => {
      if (pizza.id === formData.id) {
        return formData
      } else {
        return pizza
      }
    })
    setPizzas(updatedPizzas)
  }

  const handleInputChange = (e, id) => {
    console.log(e)
    const key = e.target.name
    const value = e.target.value

    setFormData({...formData,
       [key]: value
    })  
  }


  const editPizza = (pizza) => {
    setFormData(pizza)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(res => res.json())
      .then(data => setPizzas(data))
  },[])

  return (
    <>
      <Header />
      <PizzaForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      <PizzaList pizzas={pizzas} onEditPizza={editPizza}/>
    </>
  );
}


export default App;
