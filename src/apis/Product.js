import API from './Api'

export default {
    all() {
        return API.get('posts')
    },
    show(id) {
        return API.get(`posts/${id}`)
    }
}
