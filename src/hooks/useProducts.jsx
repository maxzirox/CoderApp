import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../utils/firebase'

export const useProducts = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {

        const productSnapshot = await getDocs(collection(dataBase, 'productos'))
        const productList = productSnapshot.docs.map((item) => {
            let product = item.data()
            product.id = item.id
            return product
        })
        return productList
    }

    useEffect( () => {
       getProducts()
       .then( (response) => {
       setProducts(response)
       }) 
    }, [])
  return products;
}
