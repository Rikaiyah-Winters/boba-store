import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DrinkCategory from './components/DrinkCategory';
import CustomizeMilkTea from './components/CustomizeMilkTea';

function App() {
  const [showCustomMilkTeaForm, setShowCustomMilkTeaForm] = useState(null);

  const showCustomizeMilkTeaPage = () => {
    setShowCustomMilkTeaForm(true)
  }


  const drinkCategories = [
    {
      key: 1,
      title: "milk tea",
      img: "https://plus.unsplash.com/premium_vector-1712005192222-53ed25b5a490?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    //{
    //key: 2,
    //title: "lemonade",
    //img: "https://plus.unsplash.com/premium_vector-1733312371246-8301e7fc42e0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //}
  ];

return (
  <div className="App">
    {<Header />}
    {showCustomMilkTeaForm && <CustomizeMilkTea />}
    {!showCustomMilkTeaForm && (drinkCategories.map((category) => (
      <DrinkCategory category={category} key={category.key} showCustomizeMilkTeaPage={showCustomizeMilkTeaPage} />
    )))}

  </div>
);
}

export default App;
