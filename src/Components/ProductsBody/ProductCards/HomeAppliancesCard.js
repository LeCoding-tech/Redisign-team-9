import React from 'react';
import '../../ProductsBody/productsBody.css';

// class HomeApplianceCard extends React.Component {
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

//             {products.map((products) => (
//                       <div className="card">
//                       <img src={HomeApplianceCard.home_name} alt="Image of product" className="MenuImg"/>
//                       <div className="container2">
//                           <h3 className="ProductName">{HomeAppliance.homeAppliance_category}</h3>
//                           <div className="descriptionBox">
//                           <p className="Description">{HomeAppliance.homeAppliance_name}</p>
//                           </div>
//                           <p className="price">${HomeAppliance.homeAppliancePrice}</p>
//                           <button className="ProductButton " type="button">Buy Now</button>
//                       </div>
//                   </div>
    
//             ))}
//         </>
//       );
//     }
//   }

 const HomeApplianceCard = ({ name, description, price, image }) => {
    return (
        <div className="card">
            <img src={image} alt="product" className="MenuImg"/>
            <div className="container2">
                <h3 className="ProductName">{name}</h3>
                <div className="descriptionBox">
                <p className="Description">{description}</p>
                </div>
                <p className="price">${price}</p>
                <button className="ProductButton " type="button">Buy Now</button>
            </div>
        </div>
    )
}
export default HomeApplianceCard;