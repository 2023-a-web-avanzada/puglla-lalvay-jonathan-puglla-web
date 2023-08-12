'use client';

import React, {FormEventHandler, useState} from 'react';
import {useRouter} from "next/navigation";
import Modal from "@/app/components/Modal";
import {deleteBrand, editBrand} from "@/api/api";
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
        // Implement your List Smartphones action here
        console.log(`Listing smartphones for brand with ID: ${brand.id}`);
    };

    return (
        <>
            <div className="fixed inset-0 flex w-full justify-center items-center rounded-xl backdrop-blur-2xl transition">
                <div className="bg-white p-12 grid grid-cols-1 rounded-lg text-center">
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
                        Smartphones
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
                        Edit Brand
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
                        Delete Brand
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
                                className='input input-bordered w-full'
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
                                className='input input-bordered w-full'
                            />
                        </label>
                        <div className="py-2"></div>
                        <label className="label">
                            Currently active:
                            <input
                                type="checkbox"
                                checked={newActiveState} onChange={() => setNewActiveState(!newActiveState)}
                                className='checkbox'
                            />
                        </label>
                        <div className="py-2"></div>
                        <button type='submit' className='btn w-full'>
                            Save changes
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                <h3>Are you sure you want to delete this brand?</h3>
                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={() => handleDeleteBrand(brand.id)}>
                        Yes
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default BrandActions;
