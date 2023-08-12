'use client';

import React, {FormEventHandler, useState} from "react";
import Modal from "@/app/components/template/Modal";
import {addBrand} from "@/api/brandHandler";
import {useRouter} from "next/navigation";
import { v4 as generateUID } from 'uuid';
import {getDefaultBrandImageURL} from "@/app/config/brand/defaultConfig";
import {BiSolidAddToQueue} from "react-icons/bi";

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
        setActiveState(true);
        setImageURLState("");
        setNameState("");
        setCountryState("");
        setEstablishedState("");
        router.refresh();
    };

    return(
        <>
            <div className="px-16 pt-4">
                <button
                    onClick={() => setModalOpen(true)}
                    className="flex bg-white px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-black backdrop-blur-2xl focus:ring-4 focus:ring-blue-300 font-medium text-sm text-center mr-2 mb-2">
                    <BiSolidAddToQueue size={20} className="mr-1"/> Create new brand
                </button>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    <form onSubmit={handleSubmitNewBrand}>
                        <h1 className='font-bold text-3xl py-2 text-center'>Add new brand</h1>
                        <div>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Brand's name:
                                <input
                                    value={nameState}
                                    onChange={(e) => setNameState(e.target.value)}
                                    type='text'
                                    placeholder="Brand's name"
                                    className='input text-white input-bordered w-full bg-black border-transparent'
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
                                    className='input text-white input-bordered w-full bg-black border-transparent'
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
                                    className='input text-white input-bordered w-full bg-black border-transparent'
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
                                    className='input text-white input-bordered w-full bg-black border-transparent'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="label font-semibold">
                                Is the brand still active?
                                <input
                                    type="checkbox"
                                    checked={activeState} onChange={() => setActiveState(!activeState)}
                                    className='checkbox bg-white text-black shadow-lg'
                                />
                            </label>
                            <div className="py-2"></div>
                            <button type='submit' className='btn border border-black w-full bg-white text-black hover:border-transparent hover:bg-black hover:text-white'>
                                Add brand
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default AddBrand;