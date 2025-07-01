import React from "react";

const CompanyInfoForm = ({
  companyName,
  setCompanyName,
  companyId,
  setCompanyId,
  jobTitle,
  setJobTitle,
  landlordAgreement,
  setLandlordAgreement,
  country,
  setCountry,
  street,
  setStreet,
  apt,
  setApt,
  phone,
  setPhone,
  email,
  setEmail,
  city,
  setCity,
  state,
  setState,
  zip,
  setZip,
  termsAccepted,
  setTermsAccepted,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 mb-6">
      <h3 className="font-semibold mb-4">Company & office info</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company name<span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Identifier (EIN/TIN)
            <span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your job title<span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Agreement with landlord/owner
            <span className="text-black text-xl">*</span>
          </label>

          <label
            htmlFor="landlord-agreement"
            className="w-full max-w-[430px] h-10 flex flex-col justify-center items-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
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
          />
        </div>

        {/* Next row */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country/Region<span className="text-black text-xl">*</span>
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Choose country</option>
            <option value="USA">USA</option>
            <option value="Bangladesh">Bangladesh</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street address<span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">
            Apt, suit, unit (if applicable)
          </label>
          <input
            type="text"
            value={apt}
            onChange={(e) => setApt(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number<span className="text-black text-xl">*</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Next row */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact email<span className="text-black text-xl">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City/Town<span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State/Territory<span className="text-black text-xl">*</span>
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Choose state</option>
            <option value="TX">Texas</option>
            <option value="CA">California</option>
            {/* Add more states as needed */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zip code<span className="text-black text-xl">*</span>
          </label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
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

export default CompanyInfoForm;
