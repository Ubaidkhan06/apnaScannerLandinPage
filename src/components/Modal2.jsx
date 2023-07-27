"use client";
const Modal2 = () => {
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      {/* Open the modal using ID.showModal() method */}
      <button className="capitalize" onClick={() => window.my_modal_6.showModal()}>
        Sign Up
      </button>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal2;
