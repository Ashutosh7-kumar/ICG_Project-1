import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaSearch, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./ResultTable.css";

const ResultTable = () => {
  const [query, setQuery] = useState("");
  const [searchField, setSearchField] = useState("name_boat");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    axios.get("https://icg-project-1.onrender.com/getBoat")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  const filteredData = useMemo(() => 
    data.filter((item) => 
      item[searchField]?.toString().toLowerCase().includes(query)
    ), 
    [query, searchField, data]
  );

  // Function to redirect on edit button click
  const handleEdit = () => {
    navigate("/Admin_Page");
  };

  return (
    <div className="table-container">
      {/* Search Box */}
      <div className="search-box">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={`Search by ${searchField}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <select
            className="search-dropdown"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          >
            {["name_boat", "Harbour", "owner", "no_crew", "colour_coding", 
              "biometric_card", "other_id", "crew_without_id_card", 
              "fishing_boat_document", "GPS", "compass", "HF", "VHF", 
              "Life_Buoy", "Life_Jacket", "Dats", "owner_contact"
            ].map((field) => (
              <option key={field} value={field}>
                {field.replace(/_/g, " ")}
              </option>
            ))}
          </select>
          {/* Edit Button (Pencil Icon) */}
          <button className="edit-button" onClick={handleEdit}>
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="loading-container">
          <img
            src="/images/loading.gif"  // Replace with your boat GIF URL
            alt="Loading boat"
            className="loading-gif"
          />
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              {["S.No", "Name", "Reg No", "Owner", "Harbour", "No. of Crew", 
                "Biometric Card", "Other ID", "Crew Without ID", "Boat Document", 
                "GPS", "Compass", "HF", "VHF", "Life Buoy", "Life Jacket", 
                "DATS", "Owner Contact", "Color Coding"
              ].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{index + 1}</td>
                  {["name_boat", "reg_no", "owner", "Harbour", "no_crew", 
                    "biometric_card", "other_id", "crew_without_id_card", 
                    "fishing_boat_document", "GPS", "compass", "HF", "VHF", 
                    "Life_Buoy", "Life_Jacket", "Dats", "owner_contact", 
                    "colour_coding"
                  ].map((field) => (
                    <td key={field}>{item[field]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="19" className="no-data">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultTable;
