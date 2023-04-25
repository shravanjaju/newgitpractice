import './App.css';

import ProfileCard from './card';



function App() {

    const productDetails1 = {
      // productId : 1,
      productPic : 'http://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2.png?v=1653637007',
      productName : 'Boat Smart-Watch',
      Brand :'Boat', 
      productDescription : 'Laskjndjqbfd askjfbhjef askjfdnkjewfd wskjfdewdkj',
      Price : '7$',
      Rating : '4 Star'
   }

   const productDetails2 = {
    // productId : 1,
    productPic : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
    productName : 'Nike Shoes',
    Brand :'Nike', 
    productDescription : 'Laskjndjqbfd askjfbhjef askjfdnkjewfd wskjfdewdkj',
    Price : '7$',
    Rating : '4 Star'
 }
 const productDetails3 = {
  // productId : 1,
  productPic : 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662443638/Croma%20Assets/Communication/Mobiles/Images/251802_on6al4.png/mxw_2048,s_webp,f_auto',
  productName : 'Oneplus 8Pro',
  Brand :'Oneplus', 
  productDescription : 'Laskjndjqbfd askjfbhjef askjfdnkjewfd wskjfdewdkj',
  Price : '7$',
  Rating : '4 Star'
}
const productDetails4 = {
  // productId : 1,
  productPic : 'http://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2.png?v=1653637007',
  productName : 'Boat Smart-Watch',
  Brand :'Boat', 
  productDescription : 'Laskjndjqbfd askjfbhjef askjfdnkjewfd wskjfdewdkj',
  Price : '7$',
  Rating : '4 Star'
}
const productDetails5 = {
  // productId : 1,
  productPic : 'http://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2.png?v=1653637007',
  productName : 'Boat Smart-Watch',
  Brand :'Boat', 
  productDescription : 'Laskjndjqbfd askjfbhjef askjfdnkjewfd wskjfdewdkj',
  Price : '7$',
  Rating : '4 Star'
}

  function AlertProduct1 () {
    alert( 'hi iam from app.js file' + productDetails1.name)
  }


  const buttonOneStyle = {
    background : 'red',
  }


  return (
    <div className="App">

      <ProfileCard 
        productDetails = {productDetails1}
        alertFunction  = {AlertProduct1}
        buttonStyle = {buttonOneStyle}
      />
      <ProfileCard 
        productDetails = {productDetails2}
        alertFunction  = {AlertProduct1}
        buttonStyle = {buttonOneStyle}
      />
         <ProfileCard 
        productDetails = {productDetails3}
        alertFunction  = {AlertProduct1}
        buttonStyle = {buttonOneStyle}
      />
         <ProfileCard 
        productDetails = {productDetails4}
        alertFunction  = {AlertProduct1}
        buttonStyle = {buttonOneStyle}
      />
         <ProfileCard 
        productDetails = {productDetails5}
        alertFunction  = {AlertProduct1}
        buttonStyle = {buttonOneStyle}
      />

      {/* <ProfileCard/>
      <ProfileCard/> */}

      {/* <h1 className='name'>i am jagdish</h1>
      <h1 className='desgnation'>web developer </h1> */}


    </div>
  );
}

export default App;
