import React, { useState } from "react";
import RoleSelection from "./RoleSelection";
import OwnershipProof from "./OwnershipProof";
import RealtorVerification from "./RealtorVerification";
import CompanyInfoForm from "./CompanyInfoForm";
import CondominiumsForm from "./CondominiumsForm";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [propertyType, setPropertyType] = useState(null);
  const [role, setRole] = useState(null);
  const [file, setFile] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [lenienceNumber, setLenienceNumber] = useState("");
  const [realtorDoc, setRealtorDoc] = useState(null);
  const [landlordAgreement, setLandlordAgreement] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  const propertyOptions = [
    {
      title: "Single House Property",
      desc: "Single unit house for single family",
    },
    {
      title: "Apartments complex",
      desc: "Multiple unit house for families",
    },
    {
      title: "Condominiums",
      desc: "Multiple unit house for families",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full bg-white shadow rounded-lg p-6">
        <header className="flex justify-between items-center mb-8">
          <img src="/img/image 4.png" alt="RentYard Logo" className="h-10" />

          <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Exit
          </button>
        </header>

        {/* Property Type Selection */}
        <section className="mb-8 mt-10">
          <h2 className="text-xl font-semibold mb-4">Property type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {propertyOptions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPropertyType(item.title);
                  if (item.title === "Condominiums") {
                    navigate("/property/condominiums");
                  }
                }}
                className={`border rounded-lg p-4 text-left ${
                  propertyType === item.title
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Role Selection */}
        <RoleSelection role={role} setRole={setRole} />

        {/* Conditional Proof Upload */}
        {role === "Landlord" && (
          <OwnershipProof
            file={file}
            setFile={setFile}
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
          />
        )}

        {role === "Realtor" && (
          <RealtorVerification
            lenienceNumber={lenienceNumber}
            setLenienceNumber={setLenienceNumber}
            realtorDoc={realtorDoc}
            setRealtorDoc={setRealtorDoc}
            landlordAgreement={landlordAgreement}
            setLandlordAgreement={setLandlordAgreement}
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
          />
        )}

        {role === "Property management company" && (
          <CompanyInfoForm
            companyName={companyName}
            setCompanyName={setCompanyName}
            companyId={companyId}
            setCompanyId={setCompanyId}
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            landlordAgreement={landlordAgreement}
            setLandlordAgreement={setLandlordAgreement}
            country={country}
            setCountry={setCountry}
            street={street}
            setStreet={setStreet}
            apt={apt}
            setApt={setApt}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            zip={zip}
            setZip={setZip}
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
          />
        )}

        <div className="flex justify-between items-center">
          <button className="text-black-600 underline">Back</button>

          <button className="px-6 py-2 rounded text-white bg-blue-600 hover:bg-blue-700">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
