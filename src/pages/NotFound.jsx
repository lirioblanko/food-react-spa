import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <h1>404: Page not found</h1>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
