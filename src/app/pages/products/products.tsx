import Product from "./product";

export default function Products() {
  return (
    <div>
      <div className="flex">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="flex">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="flex">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
