import React, { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch APIを使用してJSONデータを取得する
    fetch('products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // 取得したデータをReactのstateに設定する
        setProducts(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []); // 空の依存配列を渡すことで、マウント時のみ実行される

  return (
    <>
      <header>
        <h1>The Can Store</h1>
      </header>
      <div>
        <aside>
        <form>
            <div>
              <label htmlFor="category">Choose a category:</label>
              <select id="category">
                <option>All</option>
                <option>Vegetables</option>
                <option>Meat</option>
                <option>Soup</option>
              </select>
            </div>
            <div>
              <label htmlFor="searchTerm">Enter search term:</label>
              <input type="text" id="searchTerm" placeholder="e.g. beans" />
            </div>
            <div>
              <button>Filter results</button>
            </div>
          </form>
        </aside>
        <main>
            <ul>
            {products.map(product => (
              <div key={product.name} className={product.type}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <img
                  src={`images/${product.image}`}
                  alt={product.name}
                />
                </div>
            ))}
            </ul>
        </main>
      </div>
      <footer>
      <p>All icons found at the Noun Project:</p>
          <ul>
            <li>
              Bean can icon by{" "}
              <a href="https://thenounproject.com/yalanis/">Yazmin Alanis</a>
            </li>
            <li>
              Vegetable icon by{" "}
              <a href="https://thenounproject.com/skatakila/">Ricardo Moreira</a>
            </li>
            <li>
              Soup icon by{" "}
              <a href="https://thenounproject.com/ArtZ91/">Arthur Shlain</a>
            </li>
            <li>
              Meat Chunk icon by{" "}
              <a href="https://thenounproject.com/smashicons/">Oliviu Stoian</a>.
            </li>
          </ul>
      </footer>
    </>
  );
}





