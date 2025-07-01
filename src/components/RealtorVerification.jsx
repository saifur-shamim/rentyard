import React from "react";

const RealtorVerification = ({
  lenienceNumber,
  setLenienceNumber,
  realtorDoc,
  setRealtorDoc,
  landlordAgreement,
  setLandlordAgreement,
  termsAccepted,
  setTermsAccepted,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 mb-6">
      <h3 className="font-semibold ">Realtor verification</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-5">
        {/* Lenience Number */}
        <div className="h-10">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lenience number<span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            placeholder="000000000000"
            value={lenienceNumber}
            onChange={(e) => setLenienceNumber(e.target.value)}
            className="w-full h-full p-2 border rounded"
            required
          />
        </div>

        {/* Additional Documents (optional) */}
        <div className="mb-4 mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional documents for realtor
          </label>

          <label
            htmlFor="realtor-doc"
            className="w-full max-w-[410px] h-12 flex flex-col justify-center items-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M12 4v4"
              />
            </svg>
            <span className="text-sm">(Pdf only)</span>
          </label>

          <input
            id="realtor-doc"
            type="file"
            accept=".pdf"
            onChange={(e) => setRealtorDoc(e.target.files[0])}
            className="hidden"
          />
        </div>

        {/* Agreement with Landlord (required) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Agreement with landlord
            <span className="text-red-500 text-xl font-bold ml-1">*</span>
          </label>

          <label
            htmlFor="landlord-agreement"
            className="w-full max-w-[410px] h-12 flex flex-col justify-center items-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M12 4v4"
              />
            </svg>
            <span className="text-sm">(Pdf only)</span>
          </label>

          <input
            id="landlord-agreement"
            type="file"
            accept=".pdf"
            onChange={(e) => setLandlordAgreement(e.target.files[0])}
            className="hidden"
            required
          />
        </div>

        
      </div>

      {/* Terms */}
      <label className="inline-flex items-start space-x-2">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mt-1"
        />
        <span className="text-sm text-gray-700">
          Accept RentYard property adding terms & condition
        </span>
      </label>
    </div>
  );
};

export default RealtorVerification;
