function Product(props) {
  return (
    <>
       <h1>{props.title}</h1>
       <h3 className='author'>{props.price}</h3>
       {props.children}
    </>
  );
}

// destucturing props in function:
// function Product(props) {
//   const {title, price} = props;
//   return (
//     <>
//        <h1>{title}</h1>
//        <p>{price}</p>
//     </>
//   );
// }

// destucturing props in function arguments:
// function Product({title, price}) {
//   return (
//     <>
//        <h1>{title}</h1>
//        <p>{price}</p>
//     </>
//   );
// }
export default Product;