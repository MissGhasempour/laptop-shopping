"use client";

export default function FilterData({
  filter,
}: {
  filter: React.MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>Filter by specs</h1>
          <h2>Brand</h2>
          <input type="checkbox" onClick={filter} value={"Braavosi"} />
          Braavosi <br />
          <input type="checkbox" onClick={filter} value={"Walder"} /> Wlder
          <br />
          <input
            type="checkbox"
            onClick={filter}
            value={"Legion"}
          /> Legion <br />
          <input type="checkbox" onClick={filter} value={""} /> ThinkPad <br />
          <input type="checkbox" onClick={filter} value={""} /> ThinkPad <br />
        </div>
      </div>
    </div>
  );
}
