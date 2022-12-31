import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { remove_cart_product } from '../../redux/features/cart-slice';

const SidebarCart = ({ openCart, setOpenCart }) => {
    const { cartProducts } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { total } = useCartInfo();
    return (
        <>
            <div className="fix">
                <div className={`sidebar-action sidebar-cart ${openCart ? 'cart-open' : ''}`}>
                    <button className="close-sidebar" onClick={() => setOpenCart(false)}>Close<i className="fal fa-times"></i></button>
                    <h4 className="sidebar-action-title">Shopping Cart</h4>
                    {cartProducts.length === 0 && <h5>Your cart is empty</h5>}

                    {cartProducts.length >= 1 && <><div className="sidebar-action-list">
                        {cartProducts.map((item, index) => (
                            <div className="sidebar-list-item" key={index}>
                                <div className="product-image pos-rel">
                                    <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="" /></a></Link>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name">
                                        <Link href={`/shop-details/${item.id}`}><a>{item.productTitle} </a></Link>
                                    </div>
                                    <div className="product-pricing">
                                        <span className="item-number">{item?.quantity}</span>
                                        <span className="price-now">$ {item.price}</span>
                                    </div>
                                    <button className="remove-item" onClick={() => dispatch(remove_cart_product(item))}><i className="fal fa-times"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                        <div className="product-price-total">
                            <span>Subtotal :</span>
                            <span className="subtotal-price">${parseFloat(total)}</span>
                        </div>
                        <div className="sidebar-action-btn">
                            <Link href="/cart"><a className="fill-btn">View cart</a></Link>
                            <Link href="/checkout"><a className="border-btn">Checkout</a></Link>
                        </div></>}
                </div>
            </div>
            <div onClick={() => setOpenCart(false)} className={`offcanvas-overlay ${openCart ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default SidebarCart;