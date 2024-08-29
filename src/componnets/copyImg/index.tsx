import React, { useState, useEffect, useRef } from "react";
//图片复制到输入框
function App() {
  const [imageBase64List, setImageBase64List] = useState([]); // Changed to store multiple images
  const [textValue, setTextValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Listen for paste events
    document.addEventListener("paste", handlePaste);

    return () => {
      // Remove listener on component unmount
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;
    const imagePromises = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        const reader = new FileReader();

        // Create a promise to read the file and add to the image list
        const readPromise = new Promise((resolve) => {
          reader.onload = () => {
            resolve(reader.result);
          };
        });

        reader.readAsDataURL(file);
        imagePromises.push(readPromise);
      }
    }

    // Set state when all images are loaded
    Promise.all(imagePromises).then((images) => {
      setImageBase64List((prevImages) => [...prevImages, ...images]);
    });
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <div>
        {imageBase64List.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pasted Image ${index + 1}`}
            style={{ margin: "10px" }}
          />
        ))}
      </div>
      <textarea
        ref={inputRef}
        value={textValue}
        onChange={handleChange}
        style={{ width: "500px", height: "300px", border: "1px solid #000" }}
      />
    </>
  );
}

export default App;
