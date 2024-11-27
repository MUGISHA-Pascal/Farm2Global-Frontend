import axios from "axios";
import React, { useState } from "react";

interface userProp {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    district: string;
    phoneNo: string;
    role: string;
  };
}
const ImageUploader: React.FC<userProp> = ({ user }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUpload = async () => {
    if (!image) {
      setMessage("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    console.log(user);
    formData.append("user", JSON.stringify(user));
    try {
      const response = await axios.post(
        `http://localhost:4000/user/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("File upload successfully");
      if (response) {
        setImage(null);
        setPreview(null);
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      setMessage("File upload failed");
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className=" mx-auto mt-10 p-6 w-[300px] bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
        Upload an Image
      </h2>
      <div className="flex flex-col items-center">
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-lg border"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ) : (
          <label className="w-48 h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <span className="text-gray-500">Click to upload</span>
          </label>
        )}
      </div>
      {image && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Selected File: <span className="font-medium">{image.name}</span>
        </p>
      )}
      {message && <p className="p-[10px] text-gray-700 text-sm">{message}</p>}
      <button
        onClick={handleUpload}
        className="w-[150px] bg-[#FF9933] md:mt-[10px] max-sm:w-[100px] max-sm:p-[4px] max-sm:text-[13px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
      >
        Update Image
      </button>
    </div>
  );
};

export default ImageUploader;
