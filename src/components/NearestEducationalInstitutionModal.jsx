import React, { useState } from "react";

const NearestEducationalInstitutionModal = ({ onClose, onSave }) => {
  const [institutionType, setInstitutionType] = useState("High school");
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("Mile");
  const [name, setName] = useState("");

  const handleSave = () => {
    if (!institutionType || !distance || !unit || !name.trim()) return;
    onSave({
      institutionType,
      distance,
      unit,
      name: name.trim(),
    });
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
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Add nearest educational institution
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-extrabold leading-none"
          >
            ×
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Row 1: Type & Distance */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Educational institution type<span className="text-red-500">*</span>
              </label>
              <select
                value={institutionType}
                onChange={(e) => setInstitutionType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Preschool</option>
                <option>Elementary</option>
                <option>Middle school</option>
                <option>High school</option>
                <option>College</option>
                <option>University</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance from property<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1.5"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Mile</option>
                  <option>Kilometer</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 2: Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Educational institution name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NearestEducationalInstitutionModal;
