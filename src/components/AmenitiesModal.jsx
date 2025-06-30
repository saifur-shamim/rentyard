import React, { useState } from "react";

const AmenitiesModal = ({ onClose, onSave, selectedAmenities = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState(selectedAmenities);

  const amenitiesList = [
    { id: "air-conditioning", label: "Air conditioning", icon: "❄️" },
    { id: "cable-ready", label: "Cable ready", icon: "📺" },
    { id: "ceiling-fan", label: "Ceiling fan", icon: "🌀" },
    { id: "high-ceilings", label: "High ceilings", icon: "🏛️" },
    { id: "private-balcony", label: "Private balcony", icon: "🏠" },
    { id: "refrigerator", label: "Refrigerator", icon: "🧊" },
    { id: "wooded-views", label: "Wooded views", icon: "🌲" },
    { id: "w-d-hookup", label: "W/D hookup", icon: "🔌" },
    { id: "hardwood-floor-home", label: "Hardwood Floor (home)", icon: "🏠" },
    { id: "fireplace-home", label: "Fireplace (home)", icon: "🔥" },
    { id: "first-aid-kit", label: "First aid kit", icon: "🏥" },
    { id: "carbon-monoxide-alarm", label: "Carbon monoxide alarm", icon: "⚠️" },
    { id: "expanded-patios-home", label: "Expanded patios (home)", icon: "🏡" },
    {
      id: "free-parking-premises",
      label: "Free parking on premises",
      icon: "🅿️",
    },
    { id: "fire-extinguisher", label: "Fire extinguisher", icon: "🧯" },
  ];

  const filteredAmenities = amenitiesList.filter((amenity) =>
    amenity.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemToggle = (amenityId) => {
    setSelectedItems((prev) =>
      prev.includes(amenityId)
        ? prev.filter((id) => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  const handleSave = () => {
    const selectedAmenitiesData = amenitiesList.filter((amenity) =>
      selectedItems.includes(amenity.id)
    );
    onSave(selectedAmenitiesData);
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
          <h2 className="text-lg font-semibold text-gray-900">
            Community's amenity/features
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-extrabold leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Search Input */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search amenities"
            />
          </div>

          {/* Amenities List */}
          <div className="">
            <div className="flex flex-col gap-2">
              {(() => {
                const rows = [];
                const itemsPerRow = 3;
                const lastTwoRowsCount = 2;

                const total = filteredAmenities.length;

                for (let i = 0; i < total; ) {
                  let rowItems = [];

                  // If we're at the last two rows and fewer than 6 items left, use 2 per row
                  if (total - i <= lastTwoRowsCount * 2) {
                    rowItems = filteredAmenities.slice(i, i + 2);
                    i += 2;
                  } else {
                    rowItems = filteredAmenities.slice(i, i + itemsPerRow);
                    i += itemsPerRow;
                  }

                  rows.push(
                    <div
                      className={`grid gap-2 ${
                        rowItems.length === 2 ? "grid-cols-2" : "grid-cols-3"
                      }`}
                      key={i}
                    >
                      {rowItems.map((amenity) => (
                        <button
                          key={amenity.id}
                          onClick={() => handleItemToggle(amenity.id)}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                            selectedItems.includes(amenity.id)
                              ? "bg-blue-50 border-blue-200 text-blue-700"
                              : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-lg text-black">
                            {amenity.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {amenity.label}
                          </span>
                          {selectedItems.includes(amenity.id) && (
                            <svg
                              className="w-5 h-5 text-blue-600 ml-auto"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  );
                }

                return rows;
              })()}
            </div>
          </div>

          {/* Selected count */}
          {selectedItems.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              {selectedItems.length} amenity
              {selectedItems.length !== 1 ? "ies" : ""} selected
            </div>
          )}
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

export default AmenitiesModal;
