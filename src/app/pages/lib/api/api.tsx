"use client";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import img from "../components/header/laptop-2.jpg";
export default function Api() {
  const [displaly, setDisplay] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [brandName, setBrandName] = useState([""]);
  // useEffect(() => {
  //   //: Promise<ReactNode>
  //   const fetchData = async () => {
  //     // const response = await fetch("https://xkcd.com/info.0.json");

  //     // const storedData = await fetch("https://www.anapioficeandfire.com/api/characters", {
  //     //   method: "GET",
  //     //   headers: {
  //     //     //'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   mode: "no-cors",
  //     // });

  //     const fetched = await fetch('https://www.anapioficeandfire.com/api/characters')
  //     const res = await fetched.json()
  //     console.log(res[0])

  //   //   try {
  //   //     //  const postData =  JSON.parse(data) || [];
  //   //     const fetchedData = await storedData.json();
  //   //     console.log(fetchedData.text);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   };

  //   fetchData();
  // }, []);

  // const res = await fetch(
  //   "http://universities.hipolabs.com/search?name=middle",
  //   {
  //     method: "GET",
  //        headers: {
  //     "Content-Type": "application/json",
  //   },
  //   mode: 'no-cors'
  //   }
  // );

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.anapioficeandfire.com/api/characters", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText); // Parse the response text
      console.log("Success:", data[0]);
    }
  };
  
  const dataToSend = JSON.stringify({ name: "John", age: 30 });
  xhr.send(dataToSend);

  const filter: MouseEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.defaultValue === "ThinkPad") setBrandName(["ThinkPad"]);
    else if (e.currentTarget.defaultValue === "Yoga") setBrandName(["Yoga"]);
    else setBrandName([""]);
    if (e.currentTarget.checked) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <div>
      {displaly ? (
      <div className="flex">
        <div>
          <h1>Filter by specs</h1>
          <h2>Brand</h2>
          <input
            type="checkbox"
            onClick={filter}
            value={"ThinkPad"}
          /> ThinkPad <br />
          <input type="checkbox" onClick={filter} /> Yoga <br />
          <input type="checkbox" onClick={filter} /> Legion <br />
          <input type="checkbox" onClick={filter} /> ThinkPad <br />
          <input type="checkbox" onClick={filter} /> ThinkPad <br />
        </div>
        <div>
          <h2 className="text-purple-800">{}</h2>
          <Image src={img} alt="book" width={200} height={50}></Image>
          {/* <p className="text-pink-500">{fetchedData[0]}</p> */}
          <Link
            href={"../productInfo"}
            className="text-blue-800 p-2 block border-2 w-25 m-2 rounded-md bg-purple-300"
          >
            details ...
          </Link>
          <br />
          {/* <h2>{fetchedData[0].books}</h2> */}
          {/* <h2 className="text-red-600">{fetchedData[0].name}</h2> */}
          <Image
            src="/laptop-1.jpeg"
            alt="book"
            width={200}
            height={50}
          ></Image>
        </div>
      </div>
       ) : ( 
      <div className="flex">
        <div>
          <h1>Filter by specs</h1>
          <h2>Brand</h2>
          <input
            type="checkbox"
            onClick={filter}
            value={"ThinkPad"}
          /> ThinkPad <br />
          <input type="checkbox" onClick={filter} value={"Yoga"} /> Yoga <br />
          <input
            type="checkbox"
            onClick={filter}
            value={"Legion"}
          /> Legion <br />
          <input type="checkbox" onClick={filter} value={""} /> ThinkPad <br />
          <input type="checkbox" onClick={filter} value={""} /> ThinkPad <br />
        </div>
        <div>
           {brandName[0] ? (
              <h2 className="text-red-600 m-4">laptop name : {brandName[0]}</h2>
            ) : null} 
        </div>
      </div>
      )}
    </div>
  );
}
