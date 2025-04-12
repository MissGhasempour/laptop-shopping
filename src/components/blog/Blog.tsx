import Image from "next/image"
import img from '@/app/images/we-legion-7-3-hp-hero-4.jpg'

export default function Blog () {
    return <div>
      <Image src={img} alt="laptop-pic" className="mt-50"/>  
      <h1 className="m-4">Lenovo Gaming</h1>
      <p className="m-4">Switch to the latest gaming tech at incredible deals.</p>
      <a href="/" className="block m-4 mt-10 border-1 rounded p-2 w-40 pl-7" >Explore Deals</a>
    </div>
}