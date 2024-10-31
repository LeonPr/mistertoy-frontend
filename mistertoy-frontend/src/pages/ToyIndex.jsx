import { useEffect,useState  } from "react"
import { toyService } from "../services/toy.service.js"
import { useSelector, useDispatch } from "react-redux"
import { ToyList } from "../cmps/ToyList.jsx"
import { loadToys } from "../store/actions/toy.actions.js"


export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter())


    useEffect((filterBy) => {
        loadToys().catch(err => {
            console.log('err:', err)
            // showErrorMsg('Cannot load toys')
        })
    }, [filterBy])


    if (!toys.length) {
        return <div>No toys available</div>; 
    }
        return (
            <div>
                <h2>Toy Index</h2>
                {isLoading
                    ? <p>Loading...</p>
                    : <ToyList toys={toys} />
                }
                
            </div>
        )

}