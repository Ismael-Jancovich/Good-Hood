import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id_producto } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/products/${id_producto}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id_producto]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>ProductDetail: {id_producto}</h1>
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductDetail;