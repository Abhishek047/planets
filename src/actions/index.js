import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch({
        type:'ITEM_LOADING',
    })
    axios.get('https://swapi.dev/api/planets/')
    .then(res => {
        dispatch({
            type: 'GET_ITEMS',
            payload: res.data.results
        })
    })
    .catch(err => console.log(err));
}