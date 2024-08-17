import React, { useState } from 'react';
import { userGetQueries } from '../../services/UseQuery';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, changeSearchProduct, selectCategory } from '../redux/Cartslice';

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchProduct , searchCategory} = useSelector((state) => state.cart);

  const handleSearch = (e) => {
    dispatch(changeSearchProduct(e.target.value)); // Dispatch the action to update searchProduct
  };

  const handleCategory = (e) => {
    dispatch(selectCategory(e))
  }

  const { isPending, isError, data, error } = userGetQueries();

  
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // Filter products based on search query
// Filter products based on search query and selected category
const filteredProducts = data?.products.filter((product) =>
  product.title.toLowerCase().includes(searchProduct.toLowerCase()) &&
  (!searchCategory || product.category.toLowerCase() === searchCategory.toLowerCase())
);

  return (
    <div>
      <form style={{ textAlign: 'center', marginTop: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchProduct}
          style={{
            padding: '10px',
            width: '80%',
            maxWidth: '400px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </form>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <button style={styles.button} onClick={() =>handleCategory(null)}>All</button>
        <button style={styles.button} onClick={()=>handleCategory("beauty")}>Beauty</button>
        <button style={styles.button} onClick={()=>handleCategory("fragrances")}>Fragrances</button>
        <button style={styles.button} onClick={()=>handleCategory("furniture")}>Furniture</button>
        <button style={styles.button} onClick={()=>handleCategory("groceries")}>Groceries</button>
       
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '0px',
        }}
      >
        {filteredProducts.map((user) => (
          <div
            key={user.id}
            style={{
              height: '390px',
              width: '270px',
              marginTop: '80px',
              placeItems: 'center',
              textAlign: 'center',
              boxShadow: '0 6px 6px rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              padding: '5px',
            }}
          >
            <img
              onClick={() => navigate(`/product/${user.id}`)}
              src={user.thumbnail}
              alt=""
              style={{ height: '200px', width: '200px', padding: '20px' }}
            />

            <h4>{user.title}</h4>
            <h2>Price: ${user.price}</h2>
            <h2>Rating: {user.rating}*</h2>

            <div
              style={{
                display: 'flex',
                gap: '5px',
                justifyContent: 'center',
                paddingTop: '30px',
              }}
            >
              <button style={styles.buyButton}>Buy Now</button>

              <Link to={`/cart/${user.id}`}>
                <button
                  style={styles.addButton}
                  onClick={() => dispatch(addToCart(user))}
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#232f3e',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'background-color 0.3s',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'yellow',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buyButton: {
    backgroundColor: '#232f3e',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

