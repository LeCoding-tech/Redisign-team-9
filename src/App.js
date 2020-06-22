
import React, { Component } from 'react';
import productData from  './Components/ProductsBody/ProductsData.json';
import Products from './Components/ProductsBody/ProductsBody';
class App extends Component {
    render() {
      return (
        <Products/>
      );
    }
  }






//   constructor(){
//     super();

//     this.state={
//       search:null
//     };
//   }

//   searchSpace=(event)=>{
//     let keyword = event.target.value;
//     this.setState({search:keyword})
//   }

//   render(){
//     const styleInfo = {
//       paddingRight:'10px',
//     }

//     const elementStyle ={
//       border:'solid',
//       borderRadius:'10px',
//       position:'relative',
//       left:'10vh',
//       height:'3vh',
//       width:'20vh',
//       marginTop:'5vh',
//       marginBottom:'10vh'
//     }

//     const items = productData.filter((productData)=>{
//       if(this.state.search == null)
//           return productData
//       else if(productData.productname.toLowerCase().includes(this.state.search.toLowerCase()) || productData.description.toLowerCase().includes(this.state.search.toLowerCase())){
//           return productData
//       }
//     })
//     .map(productData=>{
//       return(
//       <div>
//         <ul>
//           <li style={{position:'relative',left:'10vh'}}>
//             <span style={styleInfo}>{productData.productname}</span>
//           </li>
//         </ul>
//       </div>
//       )
//     })

//     return (
//       <div>
//       <input 
//       type="text" 
//       placeholder="Enter item to be searched"
//       style={elementStyle} 
//       onChange={(e)=>this.searchSpace(e)} />

//       {items}
//       </div>
//     )
// }
// }
export default App;
