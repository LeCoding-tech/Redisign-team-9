import React from 'react';
import '../../ProductsBody/productsBody.css';

// class Product extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         products: [],
//       };
//     }
//     componentDidMount() {
//       fetch('http://localhost:3006/api/products')
//         .then((res) => res.json())
//         .then(
//           (data) => {
//             this.setState({
//               products: data,
//             });
//           }
//         );
//     }
//     render() {
//       // passing state down
//       const { products } = this.state;
//       return (
//         <>

//             {/* {products.map((products) => (
//                       <div className="card">
//                       <img src={image} alt="Image of product" className="MenuImg"/>
//                       <div className="container2">
//                           <h3 className="ProductName">{name}</h3>
//                           <div className="descriptionBox">
//                           <p className="Description">{description}</p>
//                           </div>
//                           <p className="price">${price}</p>
//                           <button className="ProductButton " type="button">Buy Now</button>
//                       </div>
//                   </div> */}
    
//             ))}
//         </>
//       );
//     }
//   }
const Product = ({ name, description, price, image }) => {
    return (
        <div className="card">
            <img src={image} alt="product" className="MenuImg"/>
            <div className="container2">
                <h3 className="ProductName">{name}</h3>
                <p className="Description">{description}</p>
                <p className="price">${price}</p>
                <button className="ProductButton " type="button">Buy Now</button>
            </div>
        </div>
    )
}
export default Product;