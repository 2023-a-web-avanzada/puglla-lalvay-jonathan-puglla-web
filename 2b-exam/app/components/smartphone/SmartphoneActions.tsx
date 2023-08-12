'use client';

import {Smartphone} from "@/app/types/Smartphone";
import React, {FormEventHandler, useState} from "react";
import {useRouter} from "next/navigation";
import {deleteSmartphone, editSmartphone} from "@/api/smartphoneHandler";
import Modal from "@/app/components/template/Modal";

interface SmartphoneActionsProps {
    smartphone: Smartphone;
    onClose: () => void;
}
const SmartphoneActions: React.FC<SmartphoneActionsProps> = ({smartphone, onClose}) => {
    const router = useRouter();
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

    const [newPriceState, setNewPriceState] = useState(smartphone.price as unknown as string);
    const [newSmartphoneImageState, setNewSmartphoneImageState] = useState(smartphone.imageURL);

    const handleSubmitNewSmartphoneDetails: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editSmartphone({
            id: smartphone.id,
            name: smartphone.name,
            brandId: smartphone.brandId,
            color: smartphone.color,
            price: newPriceState as unknown as number,
            imageURL: newSmartphoneImageState
        });
        setOpenModalEdit(false);
        onClose();
        router.refresh();
    };

    const handleDeleteSmartphone = async (id: string) => {
        await deleteSmartphone(id);
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

    return(
        <>
            <div className="fixed inset-0 flex w-full justify-center items-center rounded-xl backdrop-blur-2xl transition">
                <div className="bg-transparent p-12 grid grid-cols-1 rounded-lg text-center">
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
                        Edit smartphone
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
                        Delete smartphone
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
                <form onSubmit={handleSubmitNewSmartphoneDetails}>
                    <h3 className='font-bold text-lg text-center'>
                        Edit Smartphone
                    </h3>
                    <div className="py-2"></div>
                    <div>
                        <label className="text-left px-1">
                            Smartphone's price:
                            <input
                                value={newPriceState}
                                onChange={(e) => setNewPriceState(e.target.value)}
                                type='text'
                                placeholder='Type here'
                                className='input text-white input-bordered w-full bg-black border-transparent'
                            />
                        </label>
                        <div className="py-2"></div>
                        <label className="text-left px-1">
                            Smartphone image URL:
                            <input
                                type='text'
                                value={newSmartphoneImageState}
                                onChange={(e) => setNewSmartphoneImageState(e.target.value)}
                                placeholder='Type here'
                                className='input text-white input-bordered w-full bg-black border-transparent'
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
                <p className="font-semibold px-4 py-2">Are you sure you want to delete this smartphone?</p>
                <div className="modal-action">
                    <button
                        className="btn px-10 py-1 bg-white text-black border border-black hover:bg-black hover:text-white hover:border-transparent"
                        onClick={() => handleDeleteSmartphone(smartphone.id)}>
                        Yes
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default SmartphoneActions;