import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillPhone } from "react-icons/ai";
const Assets = () => {
  const [data, setData] = useState();
  const handleAssets = () => {
    axios("https://randomuser.me/api/").then((res) => {
      setData(res.data.results[0]);
    });
  };
  useEffect(() => {
    handleAssets();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="header">
        <h4 className="h4">SELECT ONE OF THE RANDOM PROFİLES</h4>
        {data ? (
          <div>
            <img src={data.picture.large} />
            <p>
              {data.name.title} {data.name.first} {data.name.last}
            </p>
            <p>
              {data.location.city}-{data.location.country} {""}
            </p>
            <p>{data.email}</p>
            <p>
              <AiFillPhone />
              {data.phone}
            </p>
            <p>{data.dob.age}</p>
            <p>{data.registered.date.slice(0, 10)}</p>

            <div>
              <button onClick={handleAssets}>Random Users</button>
            </div>
          </div>
        ) : (
          "Data Not Found"
        )}
      </div>
      ;
    </div>
  );
};

export default Assets;
