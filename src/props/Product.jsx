import './Product.css';
import Protitle from './Protitle.jsx';

function Product(props) {
  return (
    <div className="product">
       <Protitle title={props.title} description1={props.description1} description2={props.description2}/>
       <p className='price'><span className="oldPrice" style={{textDecoration: "line-through"}}>{props.oldPrice}</span>&nbsp;&nbsp;<span className="newPrice" style={{color: "green"}}>{props.newPrice}</span></p>
       {/* {props.children} */}
    </div>
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