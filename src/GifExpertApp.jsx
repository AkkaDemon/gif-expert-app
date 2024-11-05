import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["MERCEDES"]);

  const addCategory = (value) => {
    //console.log(value);
    const categoriesSet = new Set(
      categories.map((category) => category.toUpperCase())
    );
    if (!categoriesSet.has(value.toUpperCase()))
      setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => addCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
