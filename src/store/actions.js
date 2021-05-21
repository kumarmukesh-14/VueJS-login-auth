//import axios from 'axios';
import Product from '../apis/Product';

export const getProducts = ({commit}) => {

    Product.all().then(response => {
        commit('SET_PRODUCTS', response.data);
    })

    // Product.show('id').then(response => {
    //     commit('SET_PRODUCTS', response.data);
    // })

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //  .then(response => {
    //      commit('SET_PRODUCTS', response.data);
    //  })

}