function Product(props) {
  return (
    <>
       <h1>{props.name}</h1>
       <h3 className='author'>{props.price}</h3>
       {props.children}
    </>
  );
}

// destucturing props in function:
// function Product(props) {
//   const {name, price} = props;
//   return (
//     <>
//        <h1>{name}</h1>
//        <p>{price}</p>
//     </>
//   );
// }

// destucturing props in function arguments:
// function Product({name, price}) {
//   return (
//     <>
//        <h1>{name}</h1>
//        <p>{price}</p>
//     </>
//   );
// }
export default Product;