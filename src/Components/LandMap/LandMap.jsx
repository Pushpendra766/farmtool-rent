import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LandMap = () => {
  const { t } = useTranslation();
  const landData = [
    {
      name: "Ravi Patel",
      coordinates: { long: 76.63749926715721, lat: 30.691637633445154 },
      place: "Jaipur, Rajasthan",
      contact: "91654-78367",
      soil_type: "Sandy",
      test_reports: {
        pH: "6.6",
        nitrogen: "3",
        phosphorous: "3",
        pottasium: "40",
      },
      area: "3.5 Acre",
      rate: "₹ 60,000 per acre per year",
    },
    {
      name: "Ajay Sharma",
      coordinates: { lat: 26.468772590806033, long: 74.72532815379083 },
      place: "Ajmer, Rajasthan",
      contact: "91654-78367",
      soil_type: "Loamy",
      test_reports: {
        pH: "64.5",
        nitrogen: "4",
        phosphorous: "3",
        pottasium: "34",
      },
      area: "2.3 Acre",
      rate: "₹ 70,000 per acre per year",
    },
    {
      name: "Mohd. Haider Khan",
      coordinates: { long: 77.45475280138768, lat: 23.29425396569655 },
      place: "Bhopal, Madhya Pradesh",
      contact: "91654-78367",
      soil_type: "Clay",
      test_reports: {
        pH: "3.6",
        nitrogen: "6",
        phosphorous: "2",
        pottasium: "60",
      },
      area: "5 Acre",
      rate: "₹ 70,000 per acre per year",
    },
  ];
  const [currentLand, setCurrentLand] = useState(landData[0]);
  return (
    <div className="py-10 bg-gradient-to-r from-[#c8f7c6] via-[#eef3dc] to-[#c8f7c6] hidden md:flex flex-col">
      <p className="text-center text-3xl font-bold md:pb-8 mobile:pb-4">
        {t("land_on_lease")}
      </p>
      <div className="w-min mx-auto flex gap-4 p-4 rounded-md bg-[#ffffff]">
        <div className="border-2 border-[#9fa7b9] p-4 rounded-md">
          <h3 className="text-lg font-semibold whitespace-nowrap text-dark-green">
            List of locations :-
          </h3>
          {landData.map((land, idx) => {
            return (
              <div
                className={`cursor-pointer rounded-md hover:bg-[#e8f3fc] ${
                  land.name === currentLand.name && "bg-[#cfe2f2]"
                }`}
                onClick={() => setCurrentLand(landData[idx])}
              >
                <p className="whitespace-nowrap px-3 py-2">
                  {idx + 1}. {land.place}
                </p>
              </div>
            );
          })}
        </div>
        <iframe
          src={
            "https://maps.google.com/maps?q=" +
            currentLand.coordinates.lat +
            "," +
            currentLand.coordinates.long +
            "&hl=en&z=14&amp&output=embed"
          }
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="border-2 border-[#9fa7b9] rounded-md p-4 whitespace-nowrap">
          <h3 className="text-lg font-semibold whitespace-nowrap text-dark-green">
            Land details :-
          </h3>
          <p>
            <span className="font-semibold">Owner name: </span>
            {currentLand.name}
          </p>
          <p>
            <span className="font-semibold">Location: </span>{" "}
            {currentLand.place}
          </p>
          <p>
            <span className="font-semibold">Owner's contact: </span>{" "}
            {currentLand?.contact}
          </p>
          <p>
            <span className="font-semibold">Soil type: </span>
            {currentLand?.soil_type}
          </p>
          <p>
            <span className="font-semibold">Soil test report : </span>
          </p>
          <table className="text-left border p-2">
            <th className="p-2 border">
              <tr>pH</tr>
              <tr>Nitrogen</tr>
              <tr>Phosphorous</tr>
              <tr>Potassium</tr>
            </th>
            <td className="p-2 border">
              <tr>{currentLand.test_reports.pH}</tr>
              <tr>{currentLand.test_reports.nitrogen}</tr>
              <tr>{currentLand.test_reports.phosphorous}</tr>
              <tr>{currentLand.test_reports.pottasium}</tr>
            </td>
          </table>
          <p>
            <span className="font-semibold">Area : </span>
            {currentLand.area}
          </p>
          <p>
            <span className="font-semibold">Rate : </span>
            {currentLand.rate}
          </p>
          <div className="text-center pt-4">
            <button>Contact owner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandMap;
