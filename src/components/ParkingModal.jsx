import React, { useState } from "react";

const ParkingModal = ({ onClose, onSave, initialData }) => {
  const [guestParkingTime, setGuestParkingTime] = useState(
    initialData?.guestParkingTime || "2H"
  );
  const [overview, setOverview] = useState(initialData?.overview || "");

  const options = ["1H", "2H", "3H", "4H", "5H", "Unlimited"];

  const handleSave = () => {
    onSave({ guestParkingTime, overview });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Parking</h3>
       <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-4xl w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Guest vehicle parking time */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Guest vehicle parking time
          </label>
          <select
            value={guestParkingTime}
            onChange={(e) => setGuestParkingTime(e.target.value)}
            className="w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <textarea
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            maxLength={200}
            placeholder="Write parking overview"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-right text-xs text-gray-400 mt-1">
            {overview.length}/200
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t pt-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkingModal;
