import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FaSearch, FaSave, FaTrash, FaSpinner } from "react-icons/fa"; // Add FaSpinner for loading indicator
import axios from "axios";
import "./EditTable.css";

const EditTable = () => {
  const [query, setQuery] = useState("");
  const [searchField, setSearchField] = useState("name_boat");
  const [data, setData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newRow, setNewRow] = useState({
    name_boat: "",
    reg_no: "",
    owner: "",
    Harbour: "",
    no_crew: 0,
    biometric_card: "",
    other_id: "",
    crew_without_id_card: "",
    fishing_boat_document: "",
    GPS: "",
    compass: "",
    HF: "",
    VHF: "",
    Life_Buoy: "",
    Life_Jacket: "",
    Dats: "",
    owner_contact: "",
    colour_coding: "",
  });

  const [loading, setLoading] = useState(false); // Track loading state for form submission

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

  const handleAddNewRow = () => {
    setIsFormVisible(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prevRow) => ({ ...prevRow, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    try {
      const response = await axios.post("https://icg-project-1.onrender.com/create", newRow);
      setData((prevData) => [...prevData, response.data]);
      setIsFormVisible(false);
      setNewRow({
        name_boat: "",
        reg_no: "",
        owner: "",
        Harbour: "",
        no_crew: 0,
        biometric_card: "",
        other_id: "",
        crew_without_id_card: "",
        fishing_boat_document: "",
        GPS: "",
        compass: "",
        HF: "",
        VHF: "",
        Life_Buoy: "",
        Life_Jacket: "",
        Dats: "",
        owner_contact: "",
        colour_coding: "",
      });
      console.log("Data loaded successfully");
    } catch (error) {
      console.log("Error occurred in loading data");
    } finally {
      setLoading(false); // Set loading to false once the request is completed
    }
  };

  const filteredData = useMemo(
    () => data.filter((row) => row[searchField]?.toString().toLowerCase().includes(query)),
    [query, searchField, data]
  );

  return (
    <div className={`table-container ${isFormVisible ? "blur-background" : ""}`}>
      {/* Search Section */}
      <div className="search-box">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={`Search by ${searchField}...`}
            value={query}
            onChange={handleSearch}
          />
          <select className="search-dropdown" value={searchField} onChange={handleFieldChange}>
            {[
              "name_boat",
              "Harbour",
              "owner",
              "no_crew",
              "colour_coding",
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
            ].map((field) => (
              <option key={field} value={field}>
                {field.replace(/_/g, " ")}
              </option>
            ))}
          </select>
          <button className="edit-button" onClick={handleAddNewRow}>+</button>
        </div>
      </div>

      {/* Add New Row Form */}
      {isFormVisible && (
        <div className="form-overlay">
          <form className="add-row-form" onSubmit={handleFormSubmit}>
            {Object.keys(newRow).map((field) => (
              <div key={field} className="form-group">
                <label>{field.replace(/_/g, " ")}</label>
                <input
                  type={field === "no_crew" ? "number" : "text"}
                  name={field}
                  value={newRow[field]}
                  onChange={handleFormChange}
                />
              </div>
            ))}
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? <FaSpinner className="spinner" /> : "Add Data"}
            </button>
            <button type="button" className="cancel-button" onClick={() => setIsFormVisible(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

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
