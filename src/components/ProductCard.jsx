import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductCard() {
  // variabile di stato che conterrà i dati dell'api
  const [products, setProducts] = useState([]);
    useEffect(() => {

      axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        console.log("Dati ricevuti:", response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log("Errore nella richiesta:", error);
      });

    }, []);
    
    return (
      <>
        <div className="wrap-card">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
             <span className='title-product'>{product.title}</span>
             <span className='price-product'>{`${product.price.toFixed(2)}€`}</span>
             <Link to={`/product/${product.id}`}>
             Dettaglio
             </Link>
          </div>
          ))}
        </div>
      </>
    )
}