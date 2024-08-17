import React from 'react'
import { productGetByIdQuaries } from '../../services/UseQuery';
import {  Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Cartslice';

export const Productdetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { isPending, isError, data: user, error } = productGetByIdQuaries(id);
 



  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img
          src={user.thumbnail}
          alt={user.title}
          className="product-img"
        />
      </div>
      <div className="product-content">
        <h2 className="product-name">{user.name}</h2>
        <p className="product-description">{user.description}</p>
        <p className="product-price">Price: ${user.price}</p>
        <div
            style={{
              display: 'flex',
              gap: '5px',
              justifyContent: 'center',
              paddingTop: '30px',
            }}
          >
            <button style={{ backgroundColor: '#232f3e', color: '#fff', border: 'none', padding: '10px 20px' }}>Buy Now</button>

            <Link to={`/cart/${user.id}`}>
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: 'yellow',
                  color: '#000',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(addToCart(user))}
              >
                Add To Cart
              </button>
            </Link>
          </div>
      </div>
    </div>
  )
}
