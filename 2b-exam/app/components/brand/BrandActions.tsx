'use client';

import React, {FormEventHandler, useState} from 'react';
import {useRouter} from "next/navigation";
import Modal from "@/app/components/template/Modal";
import {deleteBrand, editBrand} from "@/api/brandHandler";
import {Brand} from "@/app/types/Brand";

interface BrandActionsProps {
    brand: Brand;
    onClose: () => void;
}

const BrandActions: React.FC<BrandActionsProps> = ({ brand, onClose }) => {
    const router = useRouter();
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

    const [newNameState, setNewNameState] = useState(brand.name);
    const [newActiveState, setNewActiveState] = useState<boolean>(brand.active);
    const [newImageURLState, setNewImageURLState] = useState(brand.imageURL);

    const handleSubmittedNewBrand: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editBrand({
            id: brand.id,
            name: newNameState,
            country: brand.country,
            established: brand.established,
            active: newActiveState,
            imageURL: newImageURLState
        });
        setOpenModalEdit(false);
        onClose();
        router.refresh();
    };

    const handleDeleteBrand = async (id: string) => {
        await deleteBrand(id);
        setOpenModalDelete(false);
        onClose();
        router.refresh();
    };
    const handleEdit = () => {
        setOpenModalEdit(true);
    };

    const handleDelete = () => {
        setOpenModalDelete(true);
    };

    const handleListSmartphones = () => {
        router.push(`pages/brand/${brand.id}/smartphones`);
    };

    return (
        <>
            <div className="fixed inset-0 flex w-full justify-center focus:rounded-xl hover:rounded-xl items-center rounded-xl backdrop-blur-2xl transition">
                <div className="bg-transparent p-12 grid grid-cols-1 focus:rounded-xl hover:rounded-xl rounded-xl text-center">
                    <button className={`
                                mt-4
                                text-md 
                                w-full
                                px-4
                                text-white
                                bg-black 
                                py-2 
                                rounded-xl 
                                shadow-lg 
                                hover:text-black
                                hover:bg-white
                            `}
                            onClick={handleListSmartphones}
                    >
                        Show smartphones
                    </button>
                    <button className={`
                                mt-4
                                text-md 
                                w-full
                                px-4
                                text-white
                                bg-black 
                                py-2 
                                rounded-xl 
                                shadow-lg 
                                hover:text-black
                                hover:bg-white
                            `}
                            onClick={handleEdit}
                    >
                        Edit brand
                    </button>
                    <button className={`
                                mt-4
                                text-md 
                                w-full
                                px-4
                                text-white
                                bg-black 
                                py-2 
                                rounded-xl 
                                shadow-lg 
                                hover:text-black
                                hover:bg-white
                            `}
                            onClick={handleDelete}
                    >
                        Delete brand
                    </button>
                    <button className={`
                                mt-4
                                text-md 
                                w-full
                                px-4
                                text-white
                                bg-black 
                                py-2 
                                rounded-xl 
                                shadow-lg 
                                hover:text-black
                                hover:bg-white
                            `}
                            onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                <form onSubmit={handleSubmittedNewBrand}>
                    <h3 className='font-bold text-lg text-center'>
                        Edit brand
                    </h3>
                    <div className="py-2"></div>
                    <div>
                        <label className="text-left px-1">
                            Brand's name:
                            <input
                                value={newNameState}
                                onChange={(e) => setNewNameState(e.target.value)}
                                type='text'
                                placeholder='Type here'
                                className='input text-white input-bordered w-full bg-black border-transparent'
                            />
                        </label>
                        <div className="py-2"></div>
                        <label className="text-left px-1">
                            Image URL:
                            <input
                                type='text'
                                value={newImageURLState}
                                onChange={(e) => setNewImageURLState(e.target.value)}
                                placeholder='Type here'
                                className='input text-white input-bordered w-full bg-black border-transparent'
                            />
                        </label>
                        <div className="py-2"></div>
                        <label className="label font-semibold">
                            Currently active:
                            <input
                                type="checkbox"
                                checked={newActiveState} onChange={() => setNewActiveState(!newActiveState)}
                                className='checkbox'
                            />
                        </label>
                        <div className="py-2"></div>
                        <button type='submit' className='btn border border-black w-full bg-white text-black hover:border-transparent hover:bg-black hover:text-white'>
                            Save changes
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                <p className="font-semibold px-4 py-2">Are you sure you want to delete this brand?</p>
                <div className="modal-action">
                    <button
                        className="btn px-10 py-1 bg-white text-black border border-black hover:bg-black hover:text-white hover:border-transparent"
                        onClick={() => handleDeleteBrand(brand.id)}>
                        Yes
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default BrandActions;
