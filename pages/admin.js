import React, { useState, useRef } from 'react';
import eventsData from '../public/eventsData.json';
import axios from 'axios'; // Make sure to import axios
import styles from '../styles/Home.module.css';


const AdminPage = () => {
  // const [image, setImage] = useState(null);
  const [newEvent, setNewEvent] = useState({
    imageName: '',
    titleUa: '',
    titleEn: '',
    descriptionUa: '',
    descriptionEn: '',
    dateStart: '',
    dateEnd: ''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updatedEventsData = [...eventsData, newEvent];
    try {
      await axios.post('/api/update-events', updatedEventsData);
      setNewEvent({
        imageName: '',
        titleUa: '',
        titleEn: '',
        descriptionUa: '',
        descriptionEn: '',
        dateStart: '',
        dateEnd: ''
      });

      if (image) {
        image.value = '';
      }
    } catch (error) {
      console.error('Error updating events:', error);
    }
    location.reload();
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   if (selectedImage) {
  //     const imageName = `/images/${selectedImage.name}`; // Format the image name
  //     setNewEvent((prevEvent) => ({
  //       ...prevEvent,
  //       imageName: imageName, // Store the formatted image name
  //     }));
  //   }
  // }

  // const uploadToServer = async (event) => {        
  //   handleImageChange;
  //   const body = new FormData();
  //   body.append("file", image);    
  //   const response = await fetch("/api/file", {
  //     method: "POST",
  //     body
  //   });
  // };

  
  

  return (
    
    <div>
      <form id='myform' onSubmit={handleFormSubmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          // onChange={uploadToServer}
          // ref={imageInputRef}
          required={true}
        />
        <input
          type="date"
          name="dateStart" // Add the appropriate property name
          placeholder="дата"
          value={newEvent.dateStart} // Bind the value to state
          onChange={handleInputChange} // Call handleInputChange on change
          required={true}
        />
        <input
          type="date"
          name="dateEnd" // Add the appropriate property name
          placeholder="дата"
          value={newEvent.dateEnd} // Bind the value to state
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
