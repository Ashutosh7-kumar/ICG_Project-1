import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FaSearch, FaSave, FaTrash } from "react-icons/fa";
import axios from "axios";
import "./EditTable.css";

const EditTable = () => {
  const [query, setQuery] = useState("");
  const [searchField, setSearchField] = useState("name_boat");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://icg-project-1.onrender.com/getBoat")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching boats:", error));
  }, []);

  const handleSearch = (e) => setQuery(e.target.value.toLowerCase());
  const handleFieldChange = (e) => setSearchField(e.target.value);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://icg-project-1.onrender.com/${id}`);
      setData((prevData) => prevData.filter((row) => row._id !== id));
      toast.success("Deleted successfully!");
    } catch (error) {
      toast.error("Error deleting boat.");
    }
  };

  const handleEdit = useCallback((id, field, value) => {
    setData((prevData) =>
      prevData.map((row) => (row._id === id ? { ...row, [field]: value } : row))
    );
  }, []);

  const handleSave = async (id, rowData) => {
    try {
      await axios.put(`https://icg-project-1.onrender.com/${id}`, rowData);
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error("Error updating boat.");
    }
  };

  const filteredData = useMemo(
    () => data.filter((row) => row[searchField]?.toString().toLowerCase().includes(query)),
    [query, searchField, data]
  );

  return (
    <div className="table-container">
      {/* Search Section */}
      <div className="search-box">
      <div className="search-container">
  <FaSearch className="search-icon" />
  <input
    type="text"
    className="search-input"  // Added class name here
    placeholder={`Search by ${searchField}...`}
    value={query}
    onChange={handleSearch}
  />
  <select className="search-dropdown" value={searchField} onChange={handleFieldChange}>
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
  <button className="edit-button">+</button>
</div>
</div>

      {/* Table */}
      <table className="results-table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Serial No.</th>
            {[
              "Boat Name",
              "Reg No",
              "Owner",
              "Harbour",
              "No. of Crew",
              "Biometric Card",
              "Other ID",
              "Crew Without ID",
              "Boat Document",
              "GPS",
              "Compass",
              "HF",
              "VHF",
              "Life Buoy",
              "Life Jacket",
              "DATS",
              "Owner Contact",
              "Colour Coding",
            ].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={row._id}>
                <td>
                  <FaSave
                    className="action-icon save-icon"
                    onClick={() => handleSave(row._id, row)}
                  />
                  <FaTrash
                    className="action-icon delete-icon"
                    onClick={() => handleDelete(row._id)}
                  />
                </td>
                <td>{index + 1}</td>
                {[
                  "name_boat",
                  "reg_no",
                  "owner",
                  "Harbour",
                  "no_crew",
                  "biometric_card",
                  "other_id",
                  "crew_without_id_card",
                  "fishing_boat_document",
                  "GPS",
                  "compass",
                  "HF",
                  "VHF",
                  "Life_Buoy",
                  "Life_Jacket",
                  "Dats",
                  "owner_contact",
                  "colour_coding",
                ].map((field) => (
                  <td key={field}>
                    <input
                      type={field === "no_crew" ? "number" : "text"}
                      value={row[field] || ""}
                      onChange={(e) => handleEdit(row._id, field, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="20" className="no-data">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EditTable;
