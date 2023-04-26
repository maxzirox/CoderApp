export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const LIST_PRODUCTS = 'LIST_PRODUCTS';
//cuando ejecutamos pasa un id de producto
export const selectProduct= (productId) => ({
    type: SELECT_PRODUCT,
    productId,
})
export const filterProduct= (productId) => ({
    type: FILTER_PRODUCT,
    productId,
})
export const listProducts = (products) => ({
    type: LIST_PRODUCTS,
    products
})