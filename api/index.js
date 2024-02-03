import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
})

function fetchPopularMenuList() {
    const response = instance.get('api/order/menus/popular/menus')
    console.log(response);

    return response
}

function fetchMenuById(id) {
    return instance.get(`api/order/menus/${id}`)
}

export { fetchPopularMenuList, fetchMenuById }