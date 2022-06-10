import { useNavigate } from 'react-router-dom'

export function Test() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Test routing</h1>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
