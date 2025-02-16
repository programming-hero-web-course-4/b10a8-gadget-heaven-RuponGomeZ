import { FaCircleCheck } from "react-icons/fa6";

const Modal = ({ isOpen, onClose, children, totalCost }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col gap-6 justify-center items-center">
            <div className="">

            </div>
            <div className="bg-white p-4 rounded my-4">
                <div className="text-7xl pl-14"><FaCircleCheck /></div>
                <h2 className="pt-4">Payment Successful</h2>
                <p>Thanks for purchasing.</p>
                <p>Total:{totalCost} </p>
                <button onClick={onClose} className="text-red-500">Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;