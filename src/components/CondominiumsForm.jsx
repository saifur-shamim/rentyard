import React, { useState } from "react";
import PropertyAddressModal from "./PropertyAddressModal";

const CondominiumsForm = () => {
  const [featuredPhoto, setFeaturedPhoto] = useState(null);
  const [featuredPhotos, setFeaturedPhotos] = useState([]);
  const [morePhotos, setMorePhotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propertyAddress, setPropertyAddress] = useState(null);

  const handlePhotoUpload = (file, index, type = 'featured') => {
    if (file) {
      if (type === 'featured') {
        const newFeaturedPhotos = [...featuredPhotos];
        newFeaturedPhotos[index] = file;
        setFeaturedPhotos(newFeaturedPhotos);
      } else {
        const newMorePhotos = [...morePhotos];
        newMorePhotos[index] = file;
        setMorePhotos(newMorePhotos);
      }
    }
  };

  const UploadBox = ({ isLarge = false, label = "", subtext = "", onChange, hasFile = false }) => (
    <div className={`
      ${isLarge ? 'aspect-[4/3]' : 'aspect-square'} 
      border-2 border-dashed border-gray-300 rounded-lg 
      flex flex-col justify-center items-center text-center text-gray-400 
      relative hover:border-gray-400 transition-colors cursor-pointer
      ${hasFile ? 'bg-gray-50' : 'bg-white'}
      shadow-sm
    `}>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <div className="text-2xl mb-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
          <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {label && <div className="text-sm font-medium text-gray-600 mb-1">{label}</div>}
      {subtext && <div className="text-xs text-gray-400">{subtext}</div>}
    </div>
  );

  const leftFields = [
    ["Property address", true],
    ["Leasing info", true],
    ["Charges", true],
    ["Rent frequency & payment reminder", true],
    ["Application agreement"],
    ["About the property"],
    ["Community's amenity/features"],
  ];

  const rightFields = [
    ["Pet fees"],
    ["Parking"],
    ["Nearest educational institution"],
    ["Nearest stations"],
    ["Nearest landmark"],
    ["Utilities provider"],
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAddress = (addressData) => {
    setPropertyAddress(addressData);
  };

  return (
    <div className="min-h-screen bg-white p-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Condominiums Information</h2>
        <button className="text-gray-600 border px-5 py-2 rounded hover:bg-gray-100 text-base">
          Save & Exit
        </button>
      </header>

      {/* Field grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Left column */}
        <div className="space-y-4">
          {leftFields.map(([label, required], idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border rounded p-4"
            >
              <span className="text-base">
                {label}
                {required ? (
                  <span className="text-red-500"> (Required)</span>
                ) : (
                  <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                )}
              </span>
              {label === "Property address" && propertyAddress ? (
                <span className="text-gray-700">{propertyAddress.propertyName}, {propertyAddress.streetAddress}</span>
              ) : (
                <button
                  onClick={handleOpenModal}
                  className="text-blue-600 text-base font-medium"
                >
                  + Add
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {rightFields.map(([label], idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border rounded p-4"
            >
              <span className="text-base">
                {label}
                <span className="text-gray-500 text-sm ml-1">(Optional)</span>
              </span>
              <button className="text-blue-600 text-base font-medium">
                + Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Gallery Section */}
      <div className="mb-10">
        <h3 className="text-lg font-medium mb-4 text-gray-900">
          Property gallery{" "}
          <span className="text-sm text-gray-500 font-normal">(It's not unit photo)</span>
          <span className="text-red-500">*</span>
        </h3>

        <div className="flex gap-6">
          {/* Featured Photos Section */}
          <div className="flex-1">
            <label className="text-sm font-medium mb-3 block text-gray-700">
              Featured photos <span className="text-red-500">*</span>
            </label>
            
            <div className="grid grid-cols-3 gap-3">
              {/* Cover Photo - Takes 2 rows */}
              <div className="row-span-2">
                <UploadBox
                  isLarge={true}
                  label="Upload cover photo"
                  subtext="(jpg, png only)"
                  onChange={(e) => setFeaturedPhoto(e.target.files[0])}
                  hasFile={!!featuredPhoto}
                />
              </div>

              {/* Featured Photos Grid - 2x2 on the right */}
              {[...Array(4)].map((_, index) => (
                <div key={index}>
                  <UploadBox
                    onChange={(e) => handlePhotoUpload(e.target.files[0], index, 'featured')}
                    hasFile={!!featuredPhotos[index]}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* More Photos Section */}
          <div className="flex-1">
            <label className="text-sm font-medium mb-3 block text-gray-700">
              More photos <span className="text-sm text-gray-500 font-normal">(optional)</span>
            </label>
            
            <div className="grid grid-cols-4 gap-3">
              {[...Array(8)].map((_, index) => (
                <div key={index}>
                  <UploadBox
                    onChange={(e) => handlePhotoUpload(e.target.files[0], index, 'more')}
                    hasFile={!!morePhotos[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video upload */}
      <div className="mb-10">
        <label className="block text-sm font-medium mb-1">
          Videos <span className="text-xs text-gray-500">(optional)</span>
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between border-t pt-4">
        <button className="text-blue-600 underline">Back</button>
        <button
          className={`px-6 py-2 rounded text-white ${
            featuredPhoto
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }`}
          disabled={!featuredPhoto}
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <PropertyAddressModal
          onClose={handleCloseModal}
          onSave={handleSaveAddress}
        />
      )}
    </div>
  );
};

export default CondominiumsForm;