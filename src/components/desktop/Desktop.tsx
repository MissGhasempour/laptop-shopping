import style from "@/css/bg-image.module.css";
import Image from "next/image";
import img from '@/images/about-us-page-examples.png'

export default function Desktop() {
  return (
   <div className="bg-sky-500 text-stone-100">
    <h1 className="font-Serif">About Us</h1>
     <div  className="grid grid-flow-col grid-rows-3 h-250 bg-no-repeat">
      
      <p className="font-Arial row-span-3 w-100">
        SoftTech aims to empower your business to unleash ecommerce growth by
        outsmarting risk. Ecommerce fraud teams play a crucial role in enabling
        their company’s growth and profitability. To do so, you require an
        enterprise-grade fraud and risk intelligence solution that can
        efficiently combat fraud, curb policy abuse, and boost revenue to the
        max. The problem is, the speed, scale, and sophistication of fraud and
        abuse can stretch the team and profit margins thin.
      </p>
      <Image src={img} alt="about us" width={500} height={300} />
    </div>
   </div>
  );
}
