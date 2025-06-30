import React from "react";

const RoleSelection = ({ role, setRole }) => {
  const roleOptions = [
    { title: "Landlord", desc: "Owner of the property" },
    { title: "Realtor", desc: "Manage property on behalf on owner" },
    { title: "Property management company", desc: "For management company" },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Select your role</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roleOptions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setRole(item.title)}
            className={`border rounded-lg p-4 text-left ${
              role === item.title
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
  );
};

export default RoleSelection;
