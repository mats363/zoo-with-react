import { Link, Outlet } from "react-router-dom";

export function Layout () {

    return (
        <>
            <header>
                <div className="Logo-container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Hem</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                
            </footer>
        
        </>
    )
}