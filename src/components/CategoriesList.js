import React, { useState, useEffect } from 'react';

import './CategoriesList.css';

import CategoryCard from './CategoryCard';

export default () => {
    const [titleInput, setTitleInput] = useState('');
    const [categories, setCategories] = useState([]);

    const addCategory = (event) => {
        event.preventDefault();
        const newCategory = {
            id: categories.length + 1,
            title: titleInput,
            items: []
        };

        setCategories([...categories, newCategory]);
        setTitleInput('');
    };

    const addItem = (categoryId, title) => {
        setCategories([...categories.map(c => {
            if (c.id === categoryId) {
                return { ...c, items: [...c.items, { id: c.items.length + 1, title}]};
            }
            return c;
        })])
    };

    useEffect(() => {
        try {
            const categories = JSON.parse(localStorage.categories);
            setCategories(categories);
        } catch (error) {

        }
    }, []);

    useEffect(() => {
        localStorage.categories = JSON.stringify(categories);
    });

    return (
        <div className="CategoriesList">
            <h1>Categories!</h1>
            <ul>
            <form onSubmit={addCategory}>
                <input value={titleInput} onChange={(event) => setTitleInput(event.target.value)} />
                <button type="submit">Add category</button>
            </form>
            {categories.map(c => 
                <li key={c.id}>
                    <CategoryCard {...c} onAddItem={addItem} />
                </li>    
            )}
            </ul>
        </div>
    );
}

