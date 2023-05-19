import ProductItem from "./ProductItem";
import productData from ".//productData";

const Products = (props) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-8 max-[600px]:grid-cols-1 ">
      {productData.map((product)=> (
        <ProductItem product={product} key={product.id} cart={props.cart}
         setCart={props.setCart} />
        
      ))}
    </div>
  );
};

export default Products;
