export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PRODUCT = 'FILTER_PRODUCT'
//cuando ejecutamos pasa un id de producto
export const selectProduct= (productId) => ({
    type: SELECT_PRODUCT,
    productId,
})
export const filterProduct= (productId) => ({
    type: FILTER_PRODUCT,
    productId,
})