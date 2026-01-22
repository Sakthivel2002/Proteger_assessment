import React from "react";

const AssetCard = ({ name, code, startDate, clearDate }) => {
  return (
    <div className="relative bg-white rounded-2xl p-4 shadow-sm overflow-hidden">
      
      {/* Arrow button */}
      <div className="absolute top-0 right-0 w-10 h-10 bg-[#D4D4D4] rounded-tr-2xl flex items-center justify-center cursor-pointer">
        <span className="text-lg leading-none">→</span>
      </div>

      <div className="space-y-2 text-sm text-gray-900">
        <div>
          <span className="font-semibold">Asset name</span> : {name}
        </div>
        <div>
          <span className="font-semibold">Asset code</span> : {code}
        </div>
        <div>
          <span className="font-semibold">Start Date</span> : {startDate}
        </div>
        <div>
          <span className="font-semibold">Clear Date</span> : {clearDate}
        </div>
      </div>
    </div>
  );
};

const DepartmentHeader = ({ title, department, stats }) => {
  return (
    <div className="bg-[#56ABF8] rounded-xl px-6 py-4 text-white flex justify-between items-start">
      <div>
        <h2 className="font-semibold text-base">{title}</h2>
        <p className="mt-2 text-sm">
          Department : <span className="font-medium">{department}</span>
        </p>
      </div>

      {stats && (
        <div className="text-sm space-y-1 text-right">
          <div>Incidents Reported : {stats.reported}</div>
          <div>Incidents Open : {stats.open}</div>
          <div>Total Downtime : {stats.downtime}</div>
        </div>
      )}
    </div>
  );
};

const SimpleDepartmentHeader = ({ department }) => {
  return (
    <div className="bg-[#56ABF8] rounded-xl px-6 py-4 text-white font-medium">
      Department : {department}
    </div>
  );
};

export default function IncidentPerDept() {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl w-full space-y-6">
      {/* ===== Dermatology ===== */}
      <DepartmentHeader
        title="Incident Reported per department"
        department="Anesthesiology"
        stats={{
          reported: 5,
          open: 20,
          downtime: "7 min 22 sec",
        }}
      />

      <div className="grid grid-cols-4 gap-4">
        <AssetCard
          name="Strecher"
          code="A001234"
          startDate="21-08-2025"
          clearDate="26-08-2025"
        />
        <AssetCard
          name="Strecher"
          code="A001234"
          startDate="21-08-2025"
          clearDate="26-08-2025"
        />
        <AssetCard
          name="Strecher"
          code="A001234"
          startDate="21-08-2025"
          clearDate="26-08-2025"
        />
        <AssetCard
          name="CT scan"
          code="A001234"
          startDate="18-06-2025"
          clearDate="19-06-2025"
        />
      </div>

      {/* ===== Gynaecology ===== */}
      <SimpleDepartmentHeader department="Gynacology" />

      <div className="grid grid-cols-4 gap-4">
        <AssetCard
          name="Strecher"
          code="A001234"
          startDate="21-08-2025"
          clearDate="26-08-2025"
        />
        <AssetCard
          name="Strecher"
          code="A001234"
          startDate="21-08-2025"
          clearDate="26-08-2025"
        />
        <AssetCard
          name="Strecher"
          code="A001234"
          startDate="21-08-2025"
          clearDate="26-08-2025"
        />
        <AssetCard
          name="CT scan"
          code="A001234"
          startDate="18-06-2025"
          clearDate="19-06-2025"
        />
      </div>
    </div>
  );
}
