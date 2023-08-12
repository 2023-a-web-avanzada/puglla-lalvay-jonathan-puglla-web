'use client';

import React, {FormEventHandler, useState} from "react";
import Modal from "@/app/components/Modal";
import {addBrand} from "@/api/api";
import {useRouter} from "next/navigation";
import { v4 as generateUID } from 'uuid';
import {getDefaultBrandImageURL} from "@/app/config/brand/defaultConfig";

const AddBrand = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [nameState, setNameState] = useState("");
    const [countryState, setCountryState] = useState("");
    const [establishedState, setEstablishedState] = useState("");
    const [activeState, setActiveState] = useState<boolean>(true);
    const [imageURLState, setImageURLState] = useState("");

    const handleSubmitNewBrand: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addBrand({
            id: generateUID(),
            name: nameState,
            country: countryState,
            established: establishedState as unknown as number,
            active: activeState,
            imageURL: imageURLState || getDefaultBrandImageURL()
        });
        setModalOpen(false);
        router.refresh();
    };

    return(
        <>
            <div className="px-16 pt-4">
                <button
                    onClick={() => setModalOpen(true)}
                    className={`
                            mt-4 
                            text-xl 
                            w-full 
                            text-white
                            bg-black 
                            py-2 
                            rounded-xl 
                            shadow-lg 
                            hover:text-black
                            hover:bg-white
                        `}>
                    Create new brand
                </button>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    <form onSubmit={handleSubmitNewBrand}>
                        <h3 className='font-bold text-lg text-center'>Add new brand</h3>
                        <div>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Brand's name:
                                <input
                                    value={nameState}
                                    onChange={(e) => setNameState(e.target.value)}
                                    type='text'
                                    placeholder="Brand's desired name"
                                    className='input input-bordered w-full'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Country:
                                <input
                                    value={countryState}
                                    onChange={(e) => setCountryState(e.target.value)}
                                    type='text'
                                    placeholder='Home country'
                                    className='input input-bordered w-full'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Foundation year:
                                <input
                                    type='number'
                                    value={establishedState}
                                    onChange={(e) => setEstablishedState(e.target.value)}
                                    placeholder='Foundation year'
                                    className='input input-bordered w-full'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Image URL:
                                <input
                                    type='text'
                                    value={imageURLState}
                                    onChange={(e) => setImageURLState(e.target.value)}
                                    placeholder='Logo URL'
                                    className='input input-bordered w-full'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="label">
                                Active:
                                <input
                                    type="checkbox"
                                    checked={activeState} onChange={() => setActiveState(!activeState)}
                                    className='checkbox'
                                />
                            </label>
                            <div className="py-2"></div>
                            <button type='submit' className='btn w-full'>
                                Submit
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default AddBrand;