import React from "react";

function ConfirmationBox({
  isModalOpen,
  setModalOpen,
  message,
  setConfirmation,
}) {
  return (
    <>
      {isModalOpen ? (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 h-full w-full px-4 py-4">
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md py-4">
            <div className="p-6 pt-0 text-center">
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                {message}
              </h3>
              <button
                onClick={() => setConfirmation(true)}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-user-modal"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ConfirmationBox;
