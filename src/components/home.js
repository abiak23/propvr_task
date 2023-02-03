import { useEffect, useState } from "react";
import "../App.css";
import Button from "./button";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setDate] = useState();
  const [usertext, setusertext] = useState();

  const accessKey = "lREd57L0lN_VrethbtOt9_o65UeReHrSP3SCuVLSWuY";

  useEffect(() => {
    async function call() {
      let result = await axios.get(
        `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`
      );

      setDate(result.data);
    }
    call();
  }, []);

  function hand(e) {
    setusertext(e.target.value);
  }

  async function searchImage() {
    let res = await axios.get(
      `https://api.unsplash.com/photos/random/?query=${usertext}&client_id=${accessKey}&count=10`
    );
    setDate(res.data);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <h1>Image Search</h1>
      <div>
        <input
          type="text"
          value={usertext}
          onChange={hand}
          style={{
            width: "50%",
            height: 20,
            margin: "10px 0px",
            padding: "4px 5px",
          }}
          placeholder="Search"
        />
        <Button
          name="Search"
          color="#3388FF"
          text="white"
          fnCall={() => searchImage()}
        />
      </div>{" "}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {data !== undefined ? (
          data.map((e) => (
            <Link to={`/photo/${e.id}`}>
              <img
                src={e.urls.raw}
                style={{ height: 400, width: 400, margin: "10px" }}
              />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
