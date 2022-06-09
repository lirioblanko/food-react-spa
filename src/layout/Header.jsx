import { Link } from 'react-router-dom'

export function Header () {
    return <nav className='grey darken-4'>
        <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">Food - React SPA</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/test">Test routing</Link></li>
                <li><a href="https://github.com/lirioblanko/food-react-spa" target="_blank">Repo</a></li>
            </ul>
        </div>
    </nav>
}
