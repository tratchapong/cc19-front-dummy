import { useEffect, useRef, useState } from "react";
import getPublicId from "../utils/getPublicId";

function UploadWidget({updateProfilePic, oldProfilePic}) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  // const [publicId, setPublicId] = useState('')
  

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log(cloudinaryRef.current)
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "tratchapong",
        uploadPreset: "cc19-upload",
        cropping: true,
        // overwrite: true //cannot use in unsigned_mode
      },
      (error, result) => {
        if(error) {return alert('upload error')}
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info);
          // setPublicId(result.info.public_id);

          updateProfilePic(result.info.secure_url);
        }
      }
    );
  }, []);
  return (
    <button
      className="btn btn-primary"
      onClick={() => widgetRef.current.open()}
    >
      Change Profile Image
    </button>
  );
}

export default UploadWidget;
