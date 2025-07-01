import React, { useState } from "react";

const NearestLandmarkModal = ({ onClose, onSave, initialData = null }) => {
  const [landmarkType, setLandmarkType] = useState(initialData?.landmarkType || "");
  const [landmarkName, setLandmarkName] = useState(initialData?.landmarkName || "");
  const [distance, setDistance] = useState(initialData?.distance || "");
  const [unit, setUnit] = useState(initialData?.unit || "Mile");

  const handleSave = () => {
    if (!landmarkType.trim() || !landmarkName.trim() || !distance.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const landmarkData = {
      landmarkType: landmarkType.trim(),
      landmarkName: landmarkName.trim(),
      distance: distance.trim(),
      unit
    };

    onSave(landmarkData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Add landmark</h2>
        <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-4xl w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Landmark Type and Distance from property in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Landmark Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Landmark type<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={landmarkType}
                onChange={(e) => setLandmarkType(e.target.value)}
                placeholder="Museum"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Distance from property */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Distance from property<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="1.5"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="0.1"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Mile">Mile</option>
                  <option value="Km">Km</option>
                  <option value="Feet">Feet</option>
                  <option value="Meter">Meter</option>
                </select>
              </div>
            </div>
          </div>

          {/* Landmark Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Landmark name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={landmarkName}
              onChange={(e) => setLandmarkName(e.target.value)}
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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

export default NearestLandmarkModal;