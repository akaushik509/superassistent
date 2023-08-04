import React, { useState } from 'react';


const Comprehension = () => {
  const [formFields, setFormFields] = useState([]);

  const handleAddField = () => {
    setFormFields([...formFields, { type: 'text', label: '', name: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  const handleSave = () => {
    // Send formFields to the backend and save in the database using Axios
    axios.post('/api/save-form', { formFields })
      .then((response) => {
        console.log('Form saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving form:', error);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Form Editor</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4"
        onClick={handleAddField}
      >
        Add Field
      </button>
      {formFields.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block font-bold">Label:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={field.label}
            onChange={(e) => handleChange(index, 'label', e.target.value)}
          />
          <label className="block font-bold mt-2">Name:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={field.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2"
            onClick={() => handleRemoveField(index)}
          >
            Remove Field
          </button>
        </div>
      ))}
      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Form
      </button>
    </div>
  );
};

export default Comprehension;
