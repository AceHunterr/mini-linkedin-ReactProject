import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

export function Products(props) {
    return (
      <div className='productList'>
        <div key={props.id} className='productCard'>
          <div className='productCard__content'>
            <div className='productCard__header'>
            <img src={props.image} alt='product-img' className='productImage'></img>
            <h3 className='productName'>{props.name}</h3>
            </div>
            <div>
              <FaRegBookmark className='productCard__wishlist' />
              
            </div>
            <div className='displayStack__1'>
              <div className='productPrice'><a href='/jobs'>{props.price}</a></div>
              <div className='productSales'>{props.totalSales} units sold</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  