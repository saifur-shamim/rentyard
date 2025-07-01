import React, { useState } from "react";

const LeasingInfoModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    leasingManagerName: "",
    leasingManagerPhone: "",
    leasingManagerEmail: "",
    sameAsProperty: false,
    streetAddress: "",
    aptSuitUnit: "",
    cityTown: "",
    stateTerritory: "",
    zipCode: "",
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
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-4">
    {/* Header */}
    <div className="flex justify-between items-center p-6 border-b">
      <h2 className="text-lg font-semibold text-gray-900">Leasing info</h2>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 text-4xl w-10 h-10 flex items-center justify-center"
      >
        ×
      </button>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      {/* Top Row - Name and Phone */}
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

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Leasing manager Phone number
            <span className="text-red-500">*</span>
          </label>
          <div className="flex min-w-0">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-24 px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
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
              placeholder="123456789"
              className="flex-1 min-w-0 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>

      {/* Email Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Leasing manager email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="leasingManagerEmail"
            value={formData.leasingManagerEmail}
            onChange={handleInputChange}
            placeholder="leasing@rentyeard.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-end pb-2">
          <div className="flex items-center">
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
              className="ml-2 text-sm text-gray-700"
            >
              Address (same as property)
            </label>
          </div>
        </div>
      </div>

      {/* Address Fields */}
      <div className="grid grid-cols-3 gap-4">
        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Street address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            placeholder="111 Austin Ave"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Apt, suite, unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apt, suit, unit<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="aptSuitUnit"
            value={formData.aptSuitUnit}
            onChange={handleInputChange}
            placeholder="123"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* City/Town */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City/Town<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cityTown"
            value={formData.cityTown}
            onChange={handleInputChange}
            placeholder="Dallas"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* State and Zip Code */}
      <div className="grid grid-cols-2 gap-4">
        {/* State/Territory */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State/Territory<span className="text-red-500">*</span>
          </label>
          <select
            name="stateTerritory"
            value={formData.stateTerritory}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-500"
          >
            <option value="">Choose state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="TX">Texas</option>
            {/* Add more states if needed */}
          </select>
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zip code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="75061"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
