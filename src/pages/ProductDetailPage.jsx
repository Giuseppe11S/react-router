import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";



export default function ProductDetailPage () {

  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      console.log("Dati ricevuti:", response.data);
      setProduct(response.data);
    })
    .catch(error => {
      console.log("Errore nella richiesta:", error);
    });
  },[id]);

  return (
    <>
    <div className="wrap-card">
    <div className="card">
      <img src={product.image} alt={product.title} />
      <span className='title-product'>{product.title}</span>
    </div>
    </div>
    </>
  )
}