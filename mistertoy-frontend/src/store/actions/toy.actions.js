import { toyService } from "../../services/toy.service.js"
import { SET_TOYS ,SET_IS_LOADING} from "../reducers/toy.reducer.js"
import { store } from '../store'


export function loadToys(filterBy) {

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    return toyService.query(filterBy)
        .then(toys => {
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('Toys actions -> Cannot load toys:', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}