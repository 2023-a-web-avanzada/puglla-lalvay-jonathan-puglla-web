'use client';

import React, {FormEventHandler, useState} from "react";
import {useRouter} from "next/navigation";
import {v4 as generateUID} from "uuid";
import {getDefaultSmartphoneImageURL} from "@/app/config/brand/defaultConfig";
import {addSmartphone} from "@/api/smartphoneHandler";
import Modal from "@/app/components/template/Modal";
import {BiSolidAddToQueue} from "react-icons/bi";

interface AddSmartphoneProps {
    brandId: string;
}

const AddSmartphone:React.FC<AddSmartphoneProps> = ({brandId}) => {
    const router = useRouter();
    const [smartphoneModalOpen, setAddSmartphoneModalOpen] = useState<boolean>(false);
    const [smartphoneNameState, setSmartphoneNameState] = useState("");
    const [smartphoneColorState, setSmartphoneColorState] = useState("");
    const [smartphonePriceState, setSmartphonePriceState] = useState("");
    const [smartphoneImageURLState, setSmartphoneImageURLState] = useState("");

    const handleSubmitNewSmartphone: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addSmartphone({
            id: generateUID(),
            name: smartphoneNameState,
            brandId: brandId,
            color: smartphoneColorState,
            price: smartphonePriceState as unknown as number,
            imageURL: smartphoneImageURLState || getDefaultSmartphoneImageURL()
        });
        setAddSmartphoneModalOpen(false);
        router.refresh();
    };
    return(
        <>
            <div className="px-16 pt-4">
                <button
                    onClick={() => setAddSmartphoneModalOpen(true)}
                    className="bg-white px-3 flex py-2 border rounded text-black border-black hover:text-white hover:bg-black backdrop-blur-2xl focus:ring-4 focus:ring-blue-300 font-medium text-sm text-center mr-2 mb-2">
                    <BiSolidAddToQueue size={20} className="mr-1"/> Create new smartphone
                </button>
                <Modal modalOpen={smartphoneModalOpen} setModalOpen={setAddSmartphoneModalOpen}>
                    <form onSubmit={handleSubmitNewSmartphone}>
                        <h3 className='font-bold text-3xl py-2 text-center'>Add a new smartphone</h3>
                        <div>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Smartphone's model name:
                                <input
                                    value={smartphoneNameState}
                                    onChange={(e) => setSmartphoneNameState(e.target.value)}
                                    type='text'
                                    placeholder="Model name"
                                    className='input text-white input-bordered w-full bg-black border-transparent'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Color:
                                <input
                                    value={smartphoneColorState}
                                    onChange={(e) => setSmartphoneColorState(e.target.value)}
                                    type='text'
                                    placeholder='Smartphone color'
                                    className='input text-white input-bordered w-full bg-black border-transparent'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Price:
                                <input
                                    type='number'
                                    value={smartphonePriceState}
                                    onChange={(e) => setSmartphonePriceState(e.target.value)}
                                    placeholder="Price"
                                    className='input text-white input-bordered w-full bg-black border-transparent'
                                />
                            </label>
                            <div className="py-2"></div>
                            <label className="text-left">
                                Smartphone's image URL:
                                <input
                                    type='text'
                                    value={smartphoneImageURLState}
                                    onChange={(e) => setSmartphoneImageURLState(e.target.value)}
                                    placeholder='Smartphone image URL'
                                    className='input text-white input-bordered w-full bg-black border-transparent'
                                />
                            </label>
                            <div className="py-4"></div>
                            <button
                                type='submit'
                                className='btn border border-black w-full bg-white text-black hover:border-transparent hover:bg-black hover:text-white'
                            >
                                Add smartphone
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    );
}

export default AddSmartphone;