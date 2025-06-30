import React, { useState } from "react";

const LeasingInfoModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    leasingManagerName: "",
    leasingManagerPhone: "",
    leasingManagerEmail: "",
    sameAsProperty: false,
  });

  const [countryCode, setCountryCode] = useState("+880");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.leasingManagerName ||
      !formData.leasingManagerPhone ||
      !formData.leasingManagerEmail
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.leasingManagerEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    const leasingData = {
      ...formData,
      fullPhoneNumber: countryCode + formData.leasingManagerPhone,
    };

    onSave(leasingData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Leasing info</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-light"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Leasing Manager Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leasing manager name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="leasingManagerName"
                value={formData.leasingManagerName}
                onChange={handleInputChange}
                placeholder="Alex Johan"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leasing manager email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="leasingManagerEmail"
                value={formData.leasingManagerEmail}
                onChange={handleInputChange}
                placeholder="leasing@rentvcard.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Phone + Checkbox */}
            <div className="col-span-2 flex items-start justify-between gap-2">
              {/* Phone */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leasing manager phone number
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+86">🇨🇳 +86</option>
                  </select>
                  <input
                    type="tel"
                    name="leasingManagerPhone"
                    value={formData.leasingManagerPhone}
                    onChange={handleInputChange}
                    placeholder="1234567890"
                    className="w-[45%] px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center mt-7 max-w-[150px]">
                <input
                  type="checkbox"
                  id="sameAsProperty"
                  name="sameAsProperty"
                  checked={formData.sameAsProperty}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="sameAsProperty"
                  className="ml-2 text-xs text-gray-700 leading-snug"
                >
                  Address (same as property)
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeasingInfoModal;
