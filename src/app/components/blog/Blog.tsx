import Image from "next/image"
import img from '../../images/we-legion-7-3-hp-hero-4.jpg'
export default function Blog () {
    return <div>
      <Image src={img} alt="laptop-pic" />  
      <h1>Lenovo Gaming</h1>
      <p>Switch to the latest gaming tech at incredible deals.</p>
      <a href="/" className="block m-2 border-1 rounded p-2 w-40 pl-7" >Explore Deals</a>
    </div>
}