import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./button";

function PhotoDetail() {
  const accessKey = "lREd57L0lN_VrethbtOt9_o65UeReHrSP3SCuVLSWuY";
  const [imagedata, setimagedate] = useState();
  const params = useParams();

  let photoId = params.photoid;
  useEffect(() => {
    async function call() {
      let result = await axios.get(
        `https://api.unsplash.com/photos/${photoId}?client_id=${accessKey}`
      );
      setimagedate(result.data);
    }
    call();
  });
  const shareurl = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "view the image.",
          url: `${imagedata.urls.small}`,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={imagedata?.urls.raw} style={{ height: 400, width: 400 }} />
      <div>
        <Button
          name="share"
          text="white"
          color="#ff7b7b "
          fnCall={shareurl}
        ></Button>
        <a href={`${imagedata?.urls.small_s3}`} download>
          <Button name="download" text="white" color="#ff7b7b "></Button>
        </a>
      </div>
      <h1>Download: {imagedata?.downloads} </h1>
      <h1>likes: {imagedata?.likes}</h1>
    </div>
  );
}

export default PhotoDetail;
