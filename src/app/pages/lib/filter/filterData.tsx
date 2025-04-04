"use client";
import React from 'react';
export default function FilterData({
  filter,
}: {
  filter: React.MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="mb-5">Filter by specs</h1>
          <h2 className="text-red-600 my-2">Brand</h2>
          <input type="checkbox" onClick={filter} value={"Braavosi"} /> Braavosi <br />
          <input type="checkbox" onClick={filter} value={"Walder"} /> Walder
          <br />
          <input
            type="checkbox"
            onClick={filter}
            value={"Lamprey"}
          /> Lamprey <br />
          <input type="checkbox" onClick={filter} value={"Merling"} /> Merling <br />
          <input type="checkbox" onClick={filter} value={"Crackbones"} /> Crackbones <br />
        </div>
      </div>
    </div>
  );
}
