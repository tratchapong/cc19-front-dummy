import { useEffect, useRef } from "react";

function UploadWidget({updateProfilePic}) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log(cloudinaryRef.current)
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "tratchapong",
        uploadPreset: "cc19-upload",
        cropping: true,
      },
      (error, result) => {
        if(error) {return alert('upload error')}
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info)
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
