import { useState , useRef } from "react";

export default function FileUpload({setImagePreview , imagePreview}) {
  
  
  const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     console.log(file + file.type)
//     setPreview(URL.createObjectURL(file)); // generate preview URL
//   };
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
     if (fileInputRef.current) fileInputRef.current.value = "";

   


  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="file_input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Upload file
      </label>

      <input
        type="file"
        id="file_input"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-2 max-h-20 rounded-lg border"
        />
      )}
    </div>
  );
}
