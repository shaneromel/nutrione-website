import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProduct, selectProducts } from '../redux/features/product-slice';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const products = useSelector(selectProducts).map(item => item.product).flat();
  const product = useSelector(selectProduct);
  const [items,setItems] = useState(products);
  const [categoryActive,setCategoryActive] = useState('');
  const [price, setPrice] = useState(500);
  const [sizeActive,setSizeActive] = useState('');
  const [color,setColor] = useState('');
  const [showSidebar,setShowSidebar] = useState(false);

  // handle Category Change
  const handleCategoryChange = (category) => {
    setCategoryActive(category);
    const newProducts = products.filter(item => item.category === category);
    setItems(newProducts)
  }
  // handle price change
  const handlePriceChange = (value) => {
    setPrice(value);
    const newProducts = products.filter(item => item.price < value);
    setItems(newProducts)
  }

  // handle sizes
  const handleProductSizes = (size) => {
    setSizeActive(size);
    const newProducts = products.filter(item => item.sizes.indexOf(size) > -1);
    setItems(newProducts)
  }

  // handle sizes
  const handleColors = (color) => {
    setColor(color);
    const newProducts = products.filter(item => item.colors.indexOf(color) > -1);
    setItems(newProducts)
  }

  // handle select change
  const handleSelectChange = e => {
    if(e.target.value === 'Default Sorting'){
      setItems(products)
    }
    if(e.target.value === 'Short by new'){
      const newProducts = products.filter(item => item.product__sale?.indexOf('new') > -1);
      setItems(newProducts)
    }
    if(e.target.value === 'Short by featured'){
      const newProducts = products.filter(item => item.feature_prd);
      setItems(newProducts)
    }
    if(e.target.value === 'Short by price'){
      const newProducts = products.sort((a,b) => a.price - b.price);
      setItems(newProducts)
    }
  }

  // all values
  const value = {
    items, setItems,
    price,setPrice,
    handleCategoryChange,categoryActive,
    handlePriceChange, price,
    handleProductSizes,sizeActive,
    handleColors,color,
    handleSelectChange,
    showSidebar,setShowSidebar,
    product,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;