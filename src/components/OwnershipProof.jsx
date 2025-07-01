import React from "react";

const OwnershipProof = ({ file, setFile, termsAccepted, setTermsAccepted }) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 mb-6">
      <h3 className="font-semibold mb-2">Proof of ownership</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ownership doc<span className="text-black text-xl">*</span>
        </label>

        <label
          htmlFor="ownership-doc"
          className="w-full max-w-[430px] h-24 flex flex-col justify-center items-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
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
          id="ownership-doc"
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
      </div>

      <label className="inline-flex items-start space-x-2">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mt-1"
        />
        <span className="text-sm text-black-700">
          Accept RentYard property adding terms & condition
        </span>
      </label>
    </div>
  );
};

export default OwnershipProof;
