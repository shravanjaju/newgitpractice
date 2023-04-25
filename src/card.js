import './card.css'

export default function ProfileCard ({productDetails,alertFunction,buttonStyle}) {

    const {
            // productId,
            productPic,
            productName,
            Brand,
            productDescription,
            Price,
            Rating, 
         }=productDetails

    // const halerNmae = () => {
    //     alert(productName)
    // }

    return (
        <div className='wrapper'>
            <img
                src={productPic}
                height = '100px'
                width = '100px'
                alt=''
                style={{borderRadius : '50%'}}
            />
            {/* <h6>{productId}</h6> */}
            <h4>{productName}</h4>
            <h4>{Brand}</h4>
            <p>{productDescription}</p>
            <p>{Price}</p>
            <p>{Rating}</p>
            <button 
                // onClick={halerNmae}
                onClick = {alertFunction}
                style = {buttonStyle}
            
            >Buy Now</button>
        </div>
    )
}