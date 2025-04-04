"use client";
import React from "react";
import { useState, MouseEventHandler } from "react";
import GetApi from "../api/getApi";
import FetchApi from "../api/fetchApi";
export default function FilterFunc({
  res,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  const [displaly, setDisplay] = useState(true);
  const [brandName, setBrandName] = useState([""]);
  const [displayedItem, setDisplayedItem] = useState(true);
  const filter: MouseEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.defaultValue === "Braavosi") {
      setBrandName(["Braavosi"]);
    } else if (e.currentTarget.defaultValue === "Walder")
      setBrandName(["Walder"]);
    else setBrandName([""]);
    if (e.currentTarget.checked) {
      setDisplay(false);
    } else {
      setDisplay(true);
      setDisplayedItem(true);
    }
  };

  const getApi = <GetApi res={res} filter={filter} />;
  const fetchApi = <FetchApi filter={filter} />;
  return <div></div>;
}
