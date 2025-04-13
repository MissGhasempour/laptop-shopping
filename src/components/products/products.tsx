import React from "react";
import ProductInfo from "../product-card/productInfo";

export default function Products({
  res,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  return (
    <div className="flex m-3">
      {res.map((card) => {
        return <ProductInfo res={res} index={7} key={card.aliases} />;
      })}
      {/* <div className="flex">
          <ProductInfo res={res} index={0} />
          <ProductInfo res={res} index={1} />
          <ProductInfo res={res} index={2} />
        </div>

        <div className="mx-10 flex">
          <ProductInfo res={res} index={3} />
          <ProductInfo res={res} index={4} />
        </div> */}
    </div>
  );
}
