import React, { useState } from "react";

const PetFeesModal = ({ onClose, onSave }) => {
  const [petType, setPetType] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [oneTimeFee, setOneTimeFee] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");

  const handleSave = () => {
    if (!petType || !maxWeight || !oneTimeFee || !securityDeposit || !monthlyRent) return;

    const data = {
      petType,
      maxWeight,
      oneTimeFee,
      securityDeposit,
      monthlyRent,
    };
    onSave(data);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Pet fees</h2>
         <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-4xl w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet type <span className="text-red-500">*</span>
              </label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max weight (LB) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={maxWeight}
                onChange={(e) => setMaxWeight(e.target.value)}
                placeholder="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                One time pet fee <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={oneTimeFee}
                onChange={(e) => setOneTimeFee(e.target.value)}
                placeholder="$100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet security deposit <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={securityDeposit}
                onChange={(e) => setSecurityDeposit(e.target.value)}
                placeholder="$100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly pet rent <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(e.target.value)}
                placeholder="$100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
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

export default PetFeesModal;
