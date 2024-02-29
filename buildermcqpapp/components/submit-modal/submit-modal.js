
const Modal = ({ isOpen, onClose, onSubmit, children }) => {
    const handleClose = () => {
        onClose();
        };
        
        const handleSubmit = () => {
            onSubmit();
            handleClose();
        };
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center justify-between mb-4">
            <div className="text-yellow-500 text-4xl mr-2">
                <span className="material-icons">info</span>
            </div>
            <h1 className="text-xl font-bold">
                Are you sure you want to submit the exam?
            </h1>
            <button onClick={handleClose}>&times;</button>
            </div>
            {children}
            <div className="mt-4 flex justify-end">
            <button
                className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={handleClose}
            >
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default Modal;
