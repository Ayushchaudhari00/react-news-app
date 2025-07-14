import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general"); // default category

  return (
    <>
      <Navbar setcategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}

export default App;
