import { useMemo } from "react";
import { NavLink, Link, Outlet } from 'react-router-dom'

const setActive = ({isActive}) => isActive ? 'header-link_active' : '';

export function Layout () {
    const year = useMemo(() => {
        return new Date().getFullYear()
    }, [])

    return (
        <>
            <header>
                <nav className='grey darken-4'>
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">Food - React SPA</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/test" className={setActive}>Test routing</NavLink></li>
                            <li><a href="https://github.com/lirioblanko/food-react-spa" target="_blank">Repo</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className='container content'>
                <Outlet />
            </main>

            <footer className="page-footer grey darken-4">
                <div className="footer-copyright">
                    <div className="container">
                        © { year } Food - react spa by lirioblanko
                        <a className="grey-text text-lighten-4 right" href="https://github.com/lirioblanko/food-react-spa" target="_blank">Repo</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
