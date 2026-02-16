import Product from "./Product";
//individual props
const product1 = {
  name: "React", 
  price: "$100"
}
const product2 = {
  name: "Node", 
  price: "$200"
}
const product3 = {
  name: "Express", 
  price: "$300"
}

const Propss = () => {
  return (
    <>
      <Product name={product1.name} price={product1.price}/>
      <Product name={product2.name} price={product2.price}/>

      {/* children props */}
      <Product name={product3.name} price={product3.price}>
        <p>This is a book about Express</p>
      </Product>
    </>
  );
}

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