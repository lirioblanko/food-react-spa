import { useMemo } from "react";

export function Footer () {
    const year = useMemo(() => {
        return new Date().getFullYear()
    }, [])

    return (
        <footer className="page-footer grey darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © { year } Food - react spa by lirioblanko
                    <a className="grey-text text-lighten-4 right" href="https://github.com/lirioblanko/food-react-spa" target="_blank">Repo</a>
                </div>
            </div>
        </footer>
    )
}
