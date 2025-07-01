import React, { useState } from "react";

const ChargesModal = ({ onClose, onSave }) => {
  const [applicationFee, setApplicationFee] = useState("");
  const [applicantType, setApplicantType] = useState("All 18+ applicant");
  const [adminFee, setAdminFee] = useState("");

  const handleSave = () => {
    const chargesData = {
      applicationFee: applicationFee || "0",
      applicantType,
      adminFee: adminFee || "0",
    };
    onSave(chargesData);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Charges</h2>
         <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-4xl w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Application fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application fee(one-time)*
              </label>

              <div>
                <input
                  type="text"
                  value={applicationFee}
                  onChange={(e) => setApplicationFee(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100              All 18+ applicant"
                />
              </div>
            </div>

            {/* Vertical divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

            {/* Admin fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin fee(one-time)*
              </label>
              <input
                type="number"
                value={adminFee}
                onChange={(e) => setAdminFee(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="15"
              />
            </div>
          </div>

          {/* Info note */}
          <div className="mt-6 flex items-center gap-2">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              Type 0 if charges not applicable
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChargesModal;
