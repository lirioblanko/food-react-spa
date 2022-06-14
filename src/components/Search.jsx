import { useState } from "react";

export function Search ({cb = Function.prototype, searchValue, setSearchValue }) {
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(searchValue)
    }

    const handleInput = (e) => {
        setSearchValue(e.target.value.trim())
    }

    return (
        <div className="row">
            <div className="search-wrap input-field col-12">
                <input type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={handleInput}
                    value={searchValue}
                />
                <button
                    className="btn search-btn"
                    onClick={handleSubmit}
                >Search</button>
            </div>
        </div>
    )
}
