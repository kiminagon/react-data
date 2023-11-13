import { useState } from "react";

export default function App() {
  const [content, setContent] = useState("");
  return (
    <>
      <h1>Fetch starting point</h1>
      <form>
        <label htmlFor="verse-choose">Choose a verse</label>
        <select
          id="verse-choose"
        >
          <option value="verse1">Verse 1</option>
          <option value="verse2">Verse 2</option>
          <option value="verse3">Verse 3</option>
          <option value="verse4">Verse 4</option>
        </select>
      </form>
      <h2>
        The Conqueror Worm, <em>Edgar Allen Poe, 1843</em>
      </h2>
      <pre>{content}</pre>
    </>
  );
}