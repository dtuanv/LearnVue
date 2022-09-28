import axios from 'axios'
import Product from "/src/apis/Product.js"
export const getProduct = ({commit}) => {
  // axios
  // .get("http://localhost:8687/product")
  Product.allProduct()
  .then((response) => {
   commit('SET_PRODUCT', response.data)
  });

}

// export const addNewTodo =({commit}, payload) => {
//   commit('addNewTodo', payload)
// }
export const addProductToCart = ({commit}, { product, quantity}) => {
  commit('ADD_TO_CART', { product, quantity})
}
export const removeProductFromCart = ({commit},product) => {
  commit('REMOVE_FROM_CART', product)
}
export const checkOut = ({commit}) => {
      commit('CHECK_OUT')

}
export const changeGuestNum = ({commit}, orGuestNum) =>{
  commit('CHANGE_GUEST_NUM',orGuestNum)
}
