import React, { useState } from "react";
import Counter from "./components/Counter";
import MealsList from "./components/MealsList";
import MealsProvider from "./provider/MealsProvider";
import "./App.css";
function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
