import React from "react";

function Modal() {
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" />
                <p>
                    Photo description
                </p>
                <button type="button">Close modal</button>
            </div>
        </div>
    );
};

export default Modal;