import React from 'react'

export default function ServiceMasterModal() {
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="serviceMasterModal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="serviceMasterModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="serviceMasterModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="serviceMasterModal" className="btn">done</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
