import React from 'react';
import './productsBody.css';
import Product from './ProductCards';
import productData from './ProductsData.json';
import '../ProductsBody/productsBody.css';


const initialState = {
    products: productData,
    search: null
  }
  // this.state is our brain 
  class Products extends React.Component {

    constructor() {
      super()
      this.state = initialState
    }

    
  
  filterProducts =(evt) => {
    let value = evt.target.value
  
    // makes a new array for all products
    const allProducts =  [...initialState.products] 
      if (value === "All"){
        this.setState({products: allProducts})
        return 
      }
      // makes a new array for product availability 
      //filters by category
    const filterProducts = allProducts.filter(product => {
      return product.category === value
    })
    // only products that we filter
    this.setState({products: filterProducts})
  };
  
  
  filterPrice =(evt) => {
    let value = evt.target.value
  
    // makes a new array for product availability 
    const allProducts =  [...initialState.products] 
      if (value === "All"){
        this.setState({products: allProducts})
        return 
      }
      //filters by price
    const filterPrice = allProducts.filter(product => {
      if (value)
      return product.priceRange === value
    })
    // only products that we filter
    this.setState({products: filterPrice})
  };


  searchSpace=(evt)=>{
    let keyword = evt.target.value;
    this.setState({search:keyword})
  }
  
 
  
  render(){
    const styleInfo = {
      paddingRight:'10px',
    }

    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    // const items = productData.filter((productData)=>{
    //   if(this.state.search == null)
    //       return productData
    //   else if(productData.productname.toLowerCase().includes(this.state.search.toLowerCase()) || productData.description.toLowerCase().includes(this.state.search.toLowerCase())){
    //       return productData
    //   }
    // })

  var mappedProducts = this.state.products.map(product => {
      return <Product name={product.productname} price={product.price} description={product.description} image={product.image} />
  })
  

  var items = productData.filter((productData)=>{
          if(this.state.search == null)
              return productData
          else if(productData.productname.toLowerCase().includes(this.state.search.toLowerCase()) || productData.description.toLowerCase().includes(this.state.search.toLowerCase())){
              return productData
          }
        })
        .map(productData=>{
          return <Product name={productData.productname} price={productData.price} description={productData.description} image={productData.image} />
        })

      return (

        
  
    <div className="ProductsContainer">
      <h1 >Mobile Products</h1>
      <div>
     <input 
      type="text" 
      placeholder="Enter item to be searched"
      style={elementStyle} 
      onChange={(e)=>this.searchSpace(e)} />

      </div>
        <div className="filtersContainer">
        
        <select className="Selectfilters" onChange={evt => this.filterProducts(evt)} >
                <option value="All">All Types</option>
                <option value="PersonalAudio">Headphones</option>
                 <option value="MobilePhones">Smart Phones</option>
                 <option value="Tablets">Tablets</option>
                 <option value="Watches">Watches</option>
                 <option value="Laptops">Laptops</option>
        </select> 
  
        <select className="Selectfilters" onChange={evt => this.filterPrice(evt)} >
                <option value="All">All Prices</option>
                <option value="1.00-149.99">$1.00-$149.99</option>
                <option value="150.00-499.99">$150.00-$499.99</option>
                <option value="499.99-999.99">$499.99-$999.99</option>
                <option value="1000.00-1500.00">$1000.00-$1500.00</option>
        </select> 
        </div>
  
     <div className= "container">
     {this.state.search != null ? items : mappedProducts}
    </div>   
    </div>
  );
  }
  }

  
  export default Products;