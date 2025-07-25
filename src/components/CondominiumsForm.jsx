import React, { useState } from "react";
import PropertyAddressModal from "./PropertyAddressModal";
import LeasingInfoModal from "./LeasingInfoModal";
import ChargesModal from "./ChargesModal";
import RentReminderModal from "./RentReminderModal";
import ApplicationAgreementModal from "./ApplicationAgreementModal";
import AboutPropertyModal from "./AboutPropertyModal";
import PetFeesModal from "./PetFeesModal";
import AmenitiesModal from "./AmenitiesModal";
import ParkingModal from "./ParkingModal";
import NearestEducationalInstitutionModal from "./NearestEducationalInstitutionModal";
import NearestStationModal from "./NearestStationModal";
import NearestLandmarkModal from "./NearestLandmarkModal";
import UtilitiesProviderModal from "./UtilitiesProviderModal";
import { useNavigate } from "react-router-dom";

const CondominiumsForm = () => {
  const navigate = useNavigate();
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

  const UploadBox = ({
    isLarge = false,
    label = "",
    subtext = "",
    onChange,
    hasFile = false,
  }) => (
    <div
      className={`
      w-full h-full
      border-2 border-dashed border-gray-300 rounded-lg 
      flex flex-col justify-center items-center text-center text-gray-400 
      relative hover:border-gray-400 transition-colors cursor-pointer
      ${hasFile ? "bg-gray-50" : "bg-white"}
      shadow-sm
    `}
    >
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <div className="text-2xl mb-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto"
        >
          <path
            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {label && (
        <div className="text-sm font-medium text-gray-600 mb-1">{label}</div>
      )}
      {subtext && <div className="text-xs text-gray-400">{subtext}</div>}
    </div>
  );

  // ---------- MEDIA STATES ----------
  const [featuredPhoto, setFeaturedPhoto] = useState(null);
  const [featuredPhotos, setFeaturedPhotos] = useState([]);
  const [morePhotos, setMorePhotos] = useState([]);
  const [video, setVideo] = useState({
    property: null,
    virtualTour: null,
    aerial: null,
  });

  // ---------- PROPERTY INFORMATION STATES ----------
  const [propertyAddress, setPropertyAddress] = useState(null);
  const [leasingInfo, setLeasingInfo] = useState(null);
  const [charges, setCharges] = useState(null);
  const [rentReminder, setRentReminder] = useState(null);
  const [applicationAgreement, setApplicationAgreement] = useState(null);
  const [aboutProperty, setAboutProperty] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [petFees, setPetFees] = useState(null);
  const [parkingInfo, setParkingInfo] = useState(null);
  const [educationalInstitution, setEducationalInstitution] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);

  // ---------- MODAL STATES ----------
  const [isPropertyAddressModalOpen, setIsPropertyAddressModalOpen] =
    useState(false);
  const [isLeasingInfoModalOpen, setIsLeasingInfoModalOpen] = useState(false);
  const [isChargesModalOpen, setIsChargesModalOpen] = useState(false);
  const [isRentReminderModalOpen, setIsRentReminderModalOpen] = useState(false);
  const [isApplicationAgreementModalOpen, setIsApplicationAgreementModalOpen] =
    useState(false);
  const [isAboutPropertyModalOpen, setIsAboutPropertyModalOpen] =
    useState(false);
  const [isPetFeesModalOpen, setIsPetFeesModalOpen] = useState(false);
  const [isParkingModalOpen, setIsParkingModalOpen] = useState(false);
  const [
    isEducationalInstitutionModalOpen,
    setIsEducationalInstitutionModalOpen,
  ] = useState(false);
  const [isStationModalOpen, setIsStationModalOpen] = useState(false);
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
  const [nearestLandmark, setNearestLandmark] = useState(null);
  const [isLandmarkModalOpen, setIsLandmarkModalOpen] = useState(false);

  const [utilitiesProvider, setUtilitiesProvider] = useState(null);
  const [isUtilitiesProviderModalOpen, setIsUtilitiesProviderModalOpen] =
    useState(false);

  // ---------- MODAL HANDLERS ----------
  const handleOpenPropertyAddressModal = () =>
    setIsPropertyAddressModalOpen(true);
  const handleClosePropertyAddressModal = () =>
    setIsPropertyAddressModalOpen(false);
  const handleSaveAddress = (data) => setPropertyAddress(data);

  const handleOpenLeasingInfoModal = () => setIsLeasingInfoModalOpen(true);
  const handleCloseLeasingInfoModal = () => setIsLeasingInfoModalOpen(false);
  const handleSaveLeasingInfo = (data) => setLeasingInfo(data);

  const handleOpenChargesModal = () => setIsChargesModalOpen(true);
  const handleCloseChargesModal = () => setIsChargesModalOpen(false);
  const handleSaveCharges = (data) => setCharges(data);

  const handleOpenRentReminderModal = () => setIsRentReminderModalOpen(true);
  const handleCloseRentReminderModal = () => setIsRentReminderModalOpen(false);
  const handleSaveRentReminder = (data) => setRentReminder(data);

  const handleOpenApplicationAgreementModal = () =>
    setIsApplicationAgreementModalOpen(true);
  const handleCloseApplicationAgreementModal = () =>
    setIsApplicationAgreementModalOpen(false);
  const handleSaveApplicationAgreement = (data) =>
    setApplicationAgreement(data);

  const handleOpenAboutPropertyModal = () => setIsAboutPropertyModalOpen(true);
  const handleCloseAboutPropertyModal = () =>
    setIsAboutPropertyModalOpen(false);
  const handleSaveAboutProperty = (text) => setAboutProperty(text);

  const handleOpenPetFeesModal = () => setIsPetFeesModalOpen(true);
  const handleClosePetFeesModal = () => setIsPetFeesModalOpen(false);
  const handleSavePetFees = (data) => setPetFees(data);

  const handleOpenParkingModal = () => setIsParkingModalOpen(true);
  const handleCloseParkingModal = () => setIsParkingModalOpen(false);
  const handleSaveParking = (data) => setParkingInfo(data);

  const handleOpenEducationalInstitutionModal = () =>
    setIsEducationalInstitutionModalOpen(true);
  const handleCloseEducationalInstitutionModal = () =>
    setIsEducationalInstitutionModalOpen(false);
  const handleSaveEducationalInstitution = (data) =>
    setEducationalInstitution(data);

  const handleOpenStationModal = () => setIsStationModalOpen(true);
  const handleCloseStationModal = () => setIsStationModalOpen(false);
  const handleSaveStation = (data) => setNearestStation(data);

  const handleAmenitiesSave = (amenities) => setSelectedAmenities(amenities);
  const handleOpenLandmarkModal = () => setIsLandmarkModalOpen(true);
  const handleCloseLandmarkModal = () => setIsLandmarkModalOpen(false);
  const handleSaveLandmark = (data) => setNearestLandmark(data);

  const handleOpenUtilitiesProviderModal = () =>
    setIsUtilitiesProviderModalOpen(true);
  const handleCloseUtilitiesProviderModal = () =>
    setIsUtilitiesProviderModalOpen(false);
  const handleSaveUtilitiesProvider = (data) => setUtilitiesProvider(data);

  // ---------- HELPER FUNCTIONS ----------
  const handlePhotoUpload = (file, index, type = "featured") => {
    if (file) {
      if (type === "featured") {
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

  const handleAddClick = (label) => {
    switch (label) {
      case "Property address":
        handleOpenPropertyAddressModal();
        break;
      case "Leasing info":
        handleOpenLeasingInfoModal();
        break;
      case "Charges":
        handleOpenChargesModal();
        break;
      case "Rent frequency & payment reminder":
        handleOpenRentReminderModal();
        break;
      case "Application agreement":
        handleOpenApplicationAgreementModal();
        break;
      case "About the property":
        handleOpenAboutPropertyModal();
        break;
      case "Community's amenity/features":
        setShowAmenitiesModal(true);
        break;
      case "Pet fees":
        handleOpenPetFeesModal();
        break;
      case "Parking":
        handleOpenParkingModal();
        break;
      case "Nearest educational institution":
        handleOpenEducationalInstitutionModal();
        break;
      case "Nearest stations":
        handleOpenStationModal();
        break;
      case "Nearest landmark":
        handleOpenLandmarkModal();
        break;
      case "Utilities provider":
        handleOpenUtilitiesProviderModal();
        break;
      default:
        console.log(`Opening modal for: ${label}`);
        break;
    }
  };

  const getDisplayText = (label) => {
    switch (label) {
      case "Property address":
        return propertyAddress
          ? `${propertyAddress.propertyName}, ${propertyAddress.streetAddress}`
          : null;
      case "Leasing info":
        return leasingInfo
          ? `${leasingInfo.leasingManagerName} - ${leasingInfo.leasingManagerEmail}`
          : null;
      case "Charges":
        return charges
          ? `App fee: $${charges.applicationFee}, Admin fee: $${charges.adminFee}`
          : null;
      case "Rent frequency & payment reminder":
        return rentReminder
          ? `${rentReminder.frequency}, Reminder: ${rentReminder.reminderDate}, Due: ${rentReminder.dueDate}`
          : null;
      case "Application agreement":
        return applicationAgreement
          ? `${applicationAgreement.pdfFile?.name || "Agreement uploaded"}${
              applicationAgreement.acceptInternational ? " (Accepts intl.)" : ""
            }`
          : null;
      case "About the property":
        return aboutProperty ? `${aboutProperty.slice(0, 40)}...` : null;
      case "Community's amenity/features":
        return selectedAmenities.length > 0
          ? `${selectedAmenities.length} amenity${
              selectedAmenities.length !== 1 ? "ies" : ""
            } selected`
          : null;
      case "Pet fees":
        return petFees
          ? `${petFees.petType}, Fee: ${petFees.oneTimeFee}, Deposit: ${petFees.securityDeposit}, Rent: ${petFees.monthlyRent}`
          : null;
      case "Parking":
        return parkingInfo
          ? `Time: ${
              parkingInfo.guestParkingTime
            }, Note: ${parkingInfo.overview.slice(0, 30)}...`
          : null;
      case "Nearest educational institution":
        return educationalInstitution
          ? `${educationalInstitution.name} (${educationalInstitution.distance} ${educationalInstitution.unit})`
          : null;
      case "Nearest stations":
        return nearestStation
          ? `${nearestStation.name} (${nearestStation.distance} ${nearestStation.unit})`
          : null;
      case "Nearest landmark":
        return nearestLandmark
          ? `${nearestLandmark.landmarkName} (${nearestLandmark.distance} ${nearestLandmark.unit})`
          : null;
      case "Utilities provider":
        return utilitiesProvider
          ? `${utilitiesProvider.utilityType} - ${utilitiesProvider.providerCompanyName}`
          : null;
      default:
        return null;
    }
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
          {leftFields.map(([label, required], idx) => {
            const displayText = getDisplayText(label);

            return (
             <div
  key={idx}
  className="border rounded p-4 space-y-1"
>
  <div className="flex justify-between items-center">
    <span className="text-base">
      {label}
      {required ? (
        <span className="text-red-500"> (Required)</span>
      ) : (
        <span className="text-gray-500 text-sm ml-1">(Optional)</span>
      )}
    </span>
    <button
      onClick={() => handleAddClick(label)}
      className="text-blue-600 text-sm font-medium"
    >
      {displayText ? "Edit" : "+ Add"}
    </button>
  </div>

  {displayText && (
    <div className="mt-1">
      <span className="text-gray-700 text-sm">{displayText}</span>
    </div>
  )}
</div>

            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {rightFields.map(([label], idx) => {
  const displayText = getDisplayText(label);

  return (
    <div
      key={idx}
      className="border rounded p-4 space-y-1"
    >
      <div className="flex justify-between items-center">
        <span className="text-base">
          {label}
          <span className="text-gray-500 text-sm ml-1">(Optional)</span>
        </span>
        <button
          onClick={() => handleAddClick(label)}
          className="text-blue-600 text-sm font-medium"
        >
          {displayText ? "Edit" : "+ Add"}
        </button>
      </div>

      {displayText && (
        <div className="mt-1">
          <span className="text-gray-700 text-sm">{displayText}</span>
        </div>
      )}
    </div>
  );
})}

        </div>
      </div>

      {/* Updated Gallery Section */}
      <div className="mb-10">
        <h3 className="text-lg font-medium mb-4 text-gray-900">
          Property gallery{" "}
          <span className="text-sm text-gray-500 font-normal">
            (It's not unit photo)
          </span>
          <span className="text-red-500">*</span>
        </h3>

        <div className="flex gap-10 items-start flex-wrap">
          {/* Featured Photos Section */}
          <div>
            <label className="text-sm font-medium mb-3 block text-gray-700">
              Featured photos <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-4">
              {/* Cover Photo */}
              <div className="w-[248px] h-[248px]">
                <UploadBox
                  isLarge={true}
                  label="Upload cover photo"
                  subtext="(jpg, png only)"
                  onChange={(e) => setFeaturedPhoto(e.target.files[0])}
                  hasFile={!!featuredPhoto}
                />
              </div>

              {/* 2x2 Featured Photos */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div className="w-[120px] h-[120px]" key={index}>
                    <UploadBox
                      onChange={(e) =>
                        handlePhotoUpload(e.target.files[0], index, "featured")
                      }
                      hasFile={!!featuredPhotos[index]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More Photos Section */}
          <div>
            <label className="text-sm font-medium mb-3 block text-gray-700">
              More photos{" "}
              <span className="text-sm text-gray-500 font-normal">
                (optional)
              </span>
            </label>

            <div className="grid grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div className="w-[120px] h-[120px]" key={index}>
                  <UploadBox
                    onChange={(e) =>
                      handlePhotoUpload(e.target.files[0], index, "more")
                    }
                    hasFile={!!morePhotos[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 border rounded-lg">
        <details open className="p-4 group">
          <summary className="flex justify-between items-center text-sm font-medium text-gray-700 cursor-pointer mb-4">
            <span>
              Videos{" "}
              <span className="text-xs text-gray-500 ml-1">(optional)</span>
            </span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-200 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          {/* Use inline grid with fixed width, and auto width so container shrinks */}
          <div className="inline-grid grid-cols-3 gap-4">
            {[
              ["property", "Property Video"],
              ["virtualTour", "Property Virtual Tour"],
              ["aerial", "Property Aerial Video"],
            ].map(([key, label]) => (
              <div key={key} className="w-50 h-48">
                {" "}
                {/* 192px x 192px */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}{" "}
                  <span className="text-xs text-gray-500">(optional)</span>
                </label>
                <UploadBox
                  label="Upload video"
                  subtext="(MP4, MOV only)"
                  onChange={(e) =>
                    setVideo({ ...video, [key]: e.target.files[0] })
                  }
                  hasFile={!!video?.[key]}
                />
              </div>
            ))}
          </div>
        </details>
      </div>

      {/* Navigation */}
      <div className="flex justify-between border-t pt-4">
        <button
          className="text-blue-600 underline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <button className="px-6 py-2 rounded text-white bg-blue-600 hover:bg-blue-700">
          Next
        </button>
      </div>

      {/* Modals */}
      {isPropertyAddressModalOpen && (
        <PropertyAddressModal
          onClose={handleClosePropertyAddressModal}
          onSave={handleSaveAddress}
        />
      )}

      {isLeasingInfoModalOpen && (
        <LeasingInfoModal
          onClose={handleCloseLeasingInfoModal}
          onSave={handleSaveLeasingInfo}
        />
      )}

      {isChargesModalOpen && (
        <ChargesModal
          onClose={handleCloseChargesModal}
          onSave={handleSaveCharges}
        />
      )}

      {isRentReminderModalOpen && (
        <RentReminderModal
          onClose={handleCloseRentReminderModal}
          onSave={handleSaveRentReminder}
        />
      )}

      {isApplicationAgreementModalOpen && (
        <ApplicationAgreementModal
          onClose={handleCloseApplicationAgreementModal}
          onSave={handleSaveApplicationAgreement}
        />
      )}

      {isAboutPropertyModalOpen && (
        <AboutPropertyModal
          onClose={handleCloseAboutPropertyModal}
          onSave={handleSaveAboutProperty}
        />
      )}

      {isPetFeesModalOpen && (
        <PetFeesModal
          onClose={handleClosePetFeesModal}
          onSave={handleSavePetFees}
        />
      )}

      {showAmenitiesModal && (
        <AmenitiesModal
          onClose={() => setShowAmenitiesModal(false)}
          onSave={handleAmenitiesSave}
          selectedAmenities={selectedAmenities.map((a) => a.id)}
        />
      )}

      {isParkingModalOpen && (
        <ParkingModal
          onClose={() => setIsParkingModalOpen(false)}
          onSave={(data) => setParkingInfo(data)}
          initialData={parkingInfo}
        />
      )}
      {isEducationalInstitutionModalOpen && (
        <NearestEducationalInstitutionModal
          onClose={handleCloseEducationalInstitutionModal}
          onSave={handleSaveEducationalInstitution}
        />
      )}

      {isStationModalOpen && (
        <NearestStationModal
          onClose={handleCloseStationModal}
          onSave={handleSaveStation}
        />
      )}

      {isLandmarkModalOpen && (
        <NearestLandmarkModal
          onClose={handleCloseLandmarkModal}
          onSave={handleSaveLandmark}
          initialData={nearestLandmark}
        />
      )}

      {isUtilitiesProviderModalOpen && (
        <UtilitiesProviderModal
          onClose={handleCloseUtilitiesProviderModal}
          onSave={handleSaveUtilitiesProvider}
          initialData={utilitiesProvider}
        />
      )}
    </div>
  );
};

export default CondominiumsForm;
