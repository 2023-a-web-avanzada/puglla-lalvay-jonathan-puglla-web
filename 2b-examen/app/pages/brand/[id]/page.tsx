'use client';

import React, {useState} from 'react';
import {useParams} from "next/navigation";

const BrandEditPage = () => {
    const { id } = useParams();

    const [brandData, setBrandData] = useState({
        name: '',
        country: '',
        established: '',
        active: true,
    });

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Edit Brand {id}</h1>
            <form className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={brandData.name}
                        onChange={(e) => setBrandData({ ...brandData, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block font-semibold mb-1">
                        Country:
                    </label>
                    <input
                        type="text"
                        id="country"
                        value={brandData.country}
                        onChange={(e) => setBrandData({ ...brandData, country: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="established" className="block font-semibold mb-1">
                        Established:
                    </label>
                    <input
                        type="text"
                        id="established"
                        value={brandData.established}
                        onChange={(e) => setBrandData({ ...brandData, established: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="active" className="block font-semibold mb-1">
                        Active:
                    </label>
                    <input
                        type="checkbox"
                        id="active"
                        checked={brandData.active}
                        onChange={(e) => setBrandData({ ...brandData, active: e.target.checked })}
                        className="mr-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default BrandEditPage;
