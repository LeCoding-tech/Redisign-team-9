import React from 'react';
import TvAudioCard from '../ProductCards/TvAudioCard';
import TvAudioData from '../ProductsJsonFiles/TvAudio.json';
import '../productsBody.css';


const initialState = {
    products: TvAudioData,
    search: null
  }
  // this.state is our brain 
  class TvAudioPage extends React.Component {

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

    const elementStyle ={
      border:'solid white 2px',
      borderRadius:'10px',
      position:'center',
      left:'10vh',
      height:'3vh',
      width:'60%',
    }

  

  var mappedProducts = this.state.products.map(product => {
      return <TvAudioCard name={product.productname} price={product.price} description={product.description} image={product.image} />
  })
  

  var items = TvAudioData.filter((TvAudioData)=>{
          if(this.state.search == null)
              return TvAudioData
          else if(TvAudioData.productname.toLowerCase().includes(this.state.search.toLowerCase()) || TvAudioData.description.toLowerCase().includes(this.state.search.toLowerCase())){
              return TvAudioData
          }
        })
        .map(TvAudioData=>{
          return <TvAudioCard name={TvAudioData.productname} price={TvAudioData.price} description={TvAudioData.description} image={TvAudioData.image} />
        })

      return (

   <div>
  
    <div className="ProductsContainer">
    <h1 className="h1Products" >TV & Audio</h1>
      <input 
      type="text" 
      placeholder="Search within our Galaxy"
      style={elementStyle} 
      onChange={(e)=>this.searchSpace(e)} />

        <div className="filtersContainer">
        <select className="Selectfilters" onChange={evt => this.filterProducts(evt)} >
                <option value="All">All Types</option>
                <option value="Accessories">Accessories</option>
                <option value="Audio">Audio</option>
                <option value="TV">Television's</option>
        </select> 
      
        <select className="Selectfilters" onChange={evt => this.filterPrice(evt)} >
                <option value="All">All Prices</option>
                <option value="1.00-299.99">$1.00-$299.99</option>
                <option value="300.00-699.99">$300.00-$699.999</option>
                <option value="700.00-$4599.99">$700.00-$4599.99</option>
        </select> 
        </div>
  
     <div className= "MapContainer">
     {this.state.search != null ? items : mappedProducts}
    </div>   
    </div>
    </div>    
  );
  }
  }

  
  export default TvAudioPage;