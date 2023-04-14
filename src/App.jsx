import { useState } from "react";
import Button from "./components/button";
import Header from "./components/header";
import Products from "./components/products";
import SelectCategories from "./components/select-categories";

const data = [
  { category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { category: "Fruits", price: 1, stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: 2, stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: 2, stocked: true, name: "Spinach" },
  { category: "Vegetables", price: 4, stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: 1, stocked: true, name: "Peas" },
];

const uniqueCategories = [...new Set(data.map((item) => item.category))];

function App() {
  // useState is a hook that allows us to manage state in a function component. It returns an array with two elements. The first element is the state, and the second element is a function that allows us to update the state. The argument passd to useStae is the initial state. Whatever any of that means idfk
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  return (
    <>
      <Header />
      <SelectCategories
        categories={uniqueCategories}
        onChange={(event) => {
          setSelectedCategory(event.target.value);
        }}
      />
      <Products
        products={data
          .filter((item) => item.category === selectedCategory)
          // If showInStock is true, then we want to filter out the items that are not in stock. If showInStockOnly is false, then we want to return all items.
          .filter((item) => (showInStockOnly ? item.stocked : true))}
      />

      {/* This comment is way too fkn long bruh what the hell, Instructor... */}
      {/* We want to manage the state of the UI such that whenever the user clicks the button, this display gets updated.
      '0' needs to be a place of state that we will track.
      Whenever it is updated, we will re-render this component.
      In other words, we react to changes in state by updating and re-rendering the DOM/components. */}
      <p className="text-center text-5xl font-extrabold text-red-500">
        {count}
      </p>

      {/* Move this to its own component */}
      <label htmlFor="show-in-stock-only">Show in stock only</label>
      <input
        type="checkbox"
        onChange={(event) => setShowInStockOnly(event.target.checked)}
        id="show-in-stock-only"
      />

      <Button
        text="Increase Count"
        onClick={() => setCount((prev) => prev + 1)}
      />

      {/* Add another button that decreases count by one */}
      <button
        className="rounded bg-green-500 px-2 py-4 text-white"
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrease count by 1
      </button>

      <button
        className="rounded bg-green-500 px-2 py-4 text-white"
        onClick={() => {
          setCount(
            // The callback function is passed the previous state, and returns the new state. This is the preferred way to update state when the new state depends on the previous state.
            (prevCount) => prevCount + 1
          );
        }}
      >
        Increase count by 1
      </button>
      {/* I wanna update count when I click. How? */}
    </>
  );
}

export default App;
