'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBrand = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [established, setEstablished] = useState('');
    const [active, setActive] = useState(true); // Set default to true

    const handleCreateBrand = async () => {
        // Create a new brand and get the generated brandId
        // const brandId = await createBrand({
        //     name,
        //     country,
        //     established,
        //     active,
        // });
        //
        // router.push(`/brands/${brandId}`);
    };

    return (
        <div>
            <h1>Create New Brand</h1>
            <label>Name: <input value={name} onChange={(e) => setName(e.target.value)} /></label>
            <label>Country: <input value={country} onChange={(e) => setCountry(e.target.value)} /></label>
            <label>Established: <input value={established} onChange={(e) => setEstablished(e.target.value)} /></label>
            <label>Active: <input type="checkbox" checked={active} onChange={() => setActive(!active)} /></label>
            <button onClick={handleCreateBrand}>Create Brand</button>
        </div>
    );
};

export default CreateBrand;
