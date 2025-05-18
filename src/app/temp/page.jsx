'use client';
import React, { useState } from 'react';

const ProductCatalogue = () => {
    const categories = [
        {
            id: 1, name: "Electronics", products: [{
                id: 1, name:
                    "Smartphone", price: "$1000"
            }, { id: 2, name: "Laptop", price: "$1500" }]
        },
        {
            id: 2, name: "Fashion", products: [{
                id: 3, name: "Shirt",
                price: "$50"
            }, { id: 4, name: "Jeans", price: "$70" }]
        },
        {
            id: 3, name: "Home", products: [{
                id: 5, name: "Table", price:
                    "$200"
            }, { id: 6, name: "Chair", price: "$100" }]
        }
    ];

    const [products, setProducts] =
        useState(categories.flatMap(category => category.products));
    const [categoryFilter, setCategoryFilter] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleProductFilter = (category) => {
        if (category === null) {
            setProducts(categories.flatMap(category =>
                category.products));
        } else {
            const filteredProducts = products.filter(product =>
                product.category.id === category);
            setProducts(filteredProducts);
        }
    };

    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
    };

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="flex justify-between mb-8">
                <h1 className="text-lg font-bold">Product Catalogue</h1>
                <div className="flex">
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 
text-white font-bold py-2 px-4 rounded`}
                        onClick={() => setCategoryFilter(null)}
                    >
                        All Categories
                    </button>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`mr-2 ${categoryFilter === category
                                ? "bg-blue-500" : ""}`}
                            onClick={() => handleProductFilter(category)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold">Price Range:</h2>
                    <div className="flex">
                        <button
                            className={`mr-2 ${priceRange[0] === 0 ?
                                "bg-blue-500" : ""}`}
                            onClick={() => setPriceRange([0,
                                priceRange[1]])
                            }
                        >
                            $0 - {priceRange[1]}
                        </button>
                        <input
                            type="number"
                            className="w-16 text-lg font-bold pl-4 
bg-gray-200 rounded"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                        />
                    </div>
                </div>

                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold">Sort Order:</h2>
                    <div className="flex">
                        <button
                            className={`mr-2 ${sortOrder === "asc" ?
                                "bg-blue-500" : ""}`}
                            onClick={() => handleSortOrderChange("asc")}
                        >
                            Ascending
                        </button>
                        <button
                            className={`mr-2 ${sortOrder === "desc" ?
                                "bg-blue-500" : ""}`}
                            onClick={() => handleSortOrderChange("desc")}
                        >
                            Descending
                        </button>
                    </div>
                </div>

                <ul>
                    {products.map(product => (
                        <li key={product.id} className="flex 
justify-between mb-2">
                            <div className="text-lg 
font-bold">{product.name}</div>
                            <div className="flex">
                                <span className="text-sm 
font-medium">${product.price}</span>
                                <button
                                    className={`bg-blue-500 
hover:bg-blue-700 text-white font-bold py-1 px-4 rounded`}
                                    onClick={() => console.log(product)}
                                >
                                    View Details
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-8">
                {products.map((product, index) => (
                    <div key={index} className="bg-gray-200 rounded p-4 
mb-2">
                        <h3 className="text-lg 
font-bold">{product.name}</h3>
                        <p className="text-sm 
font-medium">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalogue;