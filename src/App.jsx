import React, { useEffect, useState } from 'react';

async function fetchProducts(category, keyword){
  const response = await fetch("products.json");
  const data = await response.json();
  return data.filter((item) =>{
    return (
    (category === 'all' || category === item.type) && 
    item.name.includes(keyword)
    );
  });
}

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts("all");
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <header>
        <h1>The Can Store</h1>
      </header>
      <div>
        <aside>
        <form onSubmit={async (event) => {
          event.preventDefault()
          const category = event.target.elements.category.value
          const keyword = event.target.elements.keyword.value
          const data = await fetchProducts(category, keyword)
          setProducts(data);
        }}>
            <div>
              <label htmlFor="category">Choose a category:</label>
              <select id="category" name ='category'>
                <option value = "all">All</option>
                <option value = "vegetables">Vegetables</option>
                <option value = "meat">Meat</option>
                <option value = "soup">Soup</option>
              </select>
            </div>
            <div>
              <label htmlFor="searchTerm">Enter search term:</label>
              <input type="text" id="searchTerm" name = "keyword" placeholder="e.g. beans" />
            </div>
            <div>
              <button>Filter results</button>
            </div>
          </form>
        </aside>
        <main>
            {products.map((product) => {
              return(
              <section key={product.name} className={product.type}>
                <h2>{product.name[0].toUpperCase()}
                {product.name.slice(1)}</h2>
                <p>${product.price}</p>
                <img
                  src={`images/${product.image}`}
                  alt={product.name}
                />
                </section>
            );
            })}
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





