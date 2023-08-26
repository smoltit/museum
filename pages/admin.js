import React, { useState } from 'react';
import eventsData from '../public/eventsData.json';
import axios from 'axios'; // Make sure to import axios

const AdminPage = () => {
  const [newEvent, setNewEvent] = useState({
    imageName: '',
    titleUa: '',
    titleEn: '',
    descriptionUa: '',
    descriptionEn: '',
    date: ''
    // ... other properties
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updatedEventsData = [...eventsData, newEvent];
    console.log(updatedEventsData); // Check if the data is correct
    console.log('Form submitted');
    try {
      await axios.post('/api/update-events', updatedEventsData);
      // Clear the form
      setNewEvent({
        imageName: '',
        titleUa: '',
        titleEn: '',
        descriptionUa: '',
        descriptionEn: '',
        date: '',
        // ... other properties
      });
      // Clear the image input
      const imageInput = document.querySelector('input[type="file"]');
      if (imageInput) {
        imageInput.value = '';
      }
    } catch (error) {
      console.error('Error updating events:', error);
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
  
    if (selectedImage) {
      const imageName = `/images/${selectedImage.name}`; // Format the image name
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        imageName: imageName, // Store the formatted image name
      }));
    }
  };
  

  return (
    
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required={true}
        />
        <input
          type="text"
          name="date" // Add the appropriate property name
          placeholder="дата"
          value={newEvent.date} // Bind the value to state
          onChange={handleInputChange} // Call handleInputChange on change
          required={true}
        />
        <input
          type="text"
          name="titleUa" // Add the appropriate property name
          placeholder="назва (укр)"
          value={newEvent.titleUa} // Bind the value to state
          onChange={handleInputChange} // Call handleInputChange on change
          required={true}
        />
        <input
          type="text"
          name="titleEn" // Add the appropriate property name
          placeholder="назва (англ)"
          value={newEvent.titleEn} // Bind the value to state
          onChange={handleInputChange} // Call handleInputChange on change
          required={true}
        />
        <input
          type="text"
          name="descriptionUa" // Add the appropriate property name
          placeholder="опис (укр)"
          value={newEvent.descriptionUa} // Bind the value to state
          onChange={handleInputChange} // Call handleInputChange on change
          required={true}
        />
        <input
          type="text"
          name="descriptionEn" // Add the appropriate property name
          placeholder="опис (англ)"
          value={newEvent.descriptionEn} // Bind the value to state
          onChange={handleInputChange} // Call handleInputChange on change
          required={true}
        />

        <button type="submit">Зберегти</button>
      </form>
      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          max-width: 100%;
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>
    </div>
  );
};

export default AdminPage;
