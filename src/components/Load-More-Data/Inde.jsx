import { useEffect, useRef, useState } from "react";
import './style.css'
const Index = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const hasFetched = useRef(false);

  const fetchProducts = async () => {
    if (products.length === 100) return;
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      console.log(data);
      if (data?.products?.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
      }
    } catch (e) {
      console.log("Something went wrong", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchProducts().finally(() => {
      hasFetched.current = false;
    });
  }, [count]);

  useEffect(() => {
    if (products?.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return (
      <div>
        <h1>Loading data plz wait ...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Products</h1>
      {products && products.length ? (
        <div className="boxes">
          {products.map((item, idx) => {
            return (
              <div className="box" key={idx}>
                <img className="imges" src={item.thumbnail} alt={item.title} />
              </div>
            );
          })}
        </div>
      ) : null}
      <button
        disabled={disableButton}
        onClick={() => setCount(count + 1)}
        className="data-laoder"
      >
        Load More Data
      </button>
      {disableButton && <h3>No more data available !!</h3>}
    </div>
  );
};

export default Index;
