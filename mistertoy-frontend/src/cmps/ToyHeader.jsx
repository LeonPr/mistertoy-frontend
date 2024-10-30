
import { Link, NavLink } from 'react-router-dom'

export function ToyHeader() {

    return <header className="toy-header">
        <Link to="/">
            <h3>Mister Toy</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/toy">Toy's</NavLink>
        </nav>
    </header>
}
