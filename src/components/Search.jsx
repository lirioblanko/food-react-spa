import { useState } from "react";

export function Search ({cb = Function.prototype}) {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="row">
            <div className="search-wrap input-field col-12">
                <input type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={handleInput}
                    value={value}
                />
                <button
                    className="btn search-btn"
                    onClick={handleSubmit}
                >Search</button>
            </div>
        </div>
    )
}
