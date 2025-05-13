import Image from "next/image"
import Link from "next/link"
export default function ProductId () {
    return <div>
        <h1>product brand</h1>
        <Image src="/" alt="product-img" /> 
        <p>product defenition</p>
        <Link href='#'>View All  |</Link>
        <Link href='#'>Learn More</Link>
    </div>
}