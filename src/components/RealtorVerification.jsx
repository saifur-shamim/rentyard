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
      <h3 className="font-semibold mb-4">Realtor verification</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Lenience Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lenience number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="000000000000"
            value={lenienceNumber}
            onChange={(e) => setLenienceNumber(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Additional Documents (optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional documents for realtor
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setRealtorDoc(e.target.files[0])}
            className="w-full p-2 border border-dashed rounded"
          />
        </div>

        {/* Agreement with Landlord (required) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Agreement with landlord<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setLandlordAgreement(e.target.files[0])}
            className="w-full p-2 border border-dashed rounded"
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
