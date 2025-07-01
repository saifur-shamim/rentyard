import React, { useState } from "react";

const UtilitiesProviderModal = ({ onClose, onSave, initialData = null }) => {
  const [utilityType, setUtilityType] = useState(
    initialData?.utilityType || ""
  );
  const [providerCompanyName, setProviderCompanyName] = useState(
    initialData?.providerCompanyName || ""
  );

  const utilityOptions = [
    "Electricity",
    "Gas",
    "Water",
    "Internet",
    "Cable TV",
    "Trash/Recycling",
    "Sewer",
    "Heating",
    "Air Conditioning",
  ];

  const handleSave = () => {
    if (!utilityType.trim() || !providerCompanyName.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const utilitiesData = {
      utilityType: utilityType.trim(),
      providerCompanyName: providerCompanyName.trim(),
    };

    onSave(utilitiesData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Utilities provider
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-4xl w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
          
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Utility Type and Provider Company Name in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Utility Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Utility type<span className="text-red-500">*</span>
              </label>
              <select
                value={utilityType}
                onChange={(e) => setUtilityType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                <option value="">Select</option>
                {utilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Provider Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Provider company name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={providerCompanyName}
                onChange={(e) => setProviderCompanyName(e.target.value)}
                placeholder="Enter name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UtilitiesProviderModal;
