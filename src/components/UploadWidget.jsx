import { useEffect, useRef, useState } from "react";

function UploadWidget({setSecureURL}) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [publicId, setPublicId] = useState('')
  

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log(cloudinaryRef.current)
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "tratchapong",
        uploadPreset: "cc19-upload",
      },
      (error, result) => {
        if(error) {return alert('upload error')}
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info);
          setPublicId(result.info.public_id);
          setSecureURL(result.info.secure_url);
        }
      }
    );
  }, []);
  return (
    <button
      className="btn btn-primary"
      onClick={() => widgetRef.current.open()}
    >
      Upload
    </button>
  );
}

export default UploadWidget;
