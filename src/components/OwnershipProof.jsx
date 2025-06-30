import React from "react";

const OwnershipProof = ({ file, setFile, termsAccepted, setTermsAccepted }) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 mb-6">
      <h3 className="font-semibold mb-2">Proof of ownership</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ownership doc<span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full p-2 border border-dashed border-gray-300 rounded bg-white"
        />
      </div>

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

export default OwnershipProof;
