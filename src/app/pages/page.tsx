import Products from "./products/products";

export default function Page() {
    return <div>
        <div>
            <a href="/">Home</a>{' > '}
            <a href="/pages">View all</a>
        </div>
        <Products />
    </div>
}