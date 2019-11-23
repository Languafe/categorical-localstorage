import React, { useState } from 'react';

import './CategoryCard.css';

export default ({ id, title, items, onAddItem }) => {
    const [titleInput, setTitleInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddItem(id, titleInput);
        setTitleInput('');
    }

    return (
        <div className="CategoryCard">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <input value={titleInput} onChange={(event) => setTitleInput(event.target.value)} />
                <button type="submit">Add item</button>
            </form>
            {items.length > 0 ?
                <ul>
                {items.map(i =>
                    <li key={i.id}>{i.title}</li>    
                )}
                </ul>
                : 'no items have been added'
            }
        </div>
    );
}