import Product from "./Product";
import "./Propss.css";

//array of objects
const products = [
  { title: "Mobile", price: 10000 },
  { title: "Laptop", price: 40000 },
  { title: "Tablet", price: 30000 }
];

//display array of objects
const Propss = () => {
  return (
    <div className="productSec">
      {products.map((product) => (
        <Product title={product.title} price={product.price}/>
      ))}
    </div>
  );
}

//individual Objects
// const product1 = {
//   title: "Mobile", 
//   price: 10000
// }
// const product2 = {
//   title: "Laptop", 
//   price: 40000
// }
// const product3 = {
//   title: "Tablet", 
//   price: 30000
// }

//desplay individual objects
// const Propss = () => {
//   return (
//     <>
//       <Product title={product1.title} price={product1.price}/>
//       <Product title={product2.title} price={product2.price}/>
//       <Product title={product3.title} price={product3.price}/>

//       {/* children props */}
//       <Product title={product3.title} price={product3.price}>
//         <p>This is a book about Express</p>
//       </Product>
//     </>
//   );
// }


//using hard coded props with chidrens
// function Propss() {
//   return (
//     <>
//        <Product name="React" author="Sanju"/>
//        <Product name="Node" author="Sanjeev"/>

//        {/* children props */}
//        <Product name="Express" author="Koshti">
//         <p>This is a book about Express</p>
//        </Product>
//        <Product name="MongoDB" author="Sanjay">
//         <p>This is a book about MongoDB</p>
//        </Product>
//     </>
//   );
// }

export default Propss;