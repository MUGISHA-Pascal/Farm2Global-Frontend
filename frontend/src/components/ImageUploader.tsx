import React, { useState } from "react";

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
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
    </div>
  );
};

export default ImageUploader;
