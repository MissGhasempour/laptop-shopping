import style from "@/css/bg-image.module.css";
import Image from "next/image";
import img from "@/images/about-us-page-examples.png";

export default function Desktop() {
  return (
    <div className="bg-zinc-50 text-stone-950">
      <Image src={img} alt="about-us" className="h-120" />
      <h1 className="font-sans font-bold text-stone-950 p-20 text-5xl absolute top-45">
        About Us
      </h1>
      <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-15 tablet:grid-cols-3  bg-no-repeat p-5 ">
        {/* <p className="font-Arial w-150  bg-pink-700 rounded-2xl ml-5 p-5 h-50">
        SoftTech aims to empower your business to unleash ecommerce growth by
        outsmarting risk. Ecommerce fraud teams play a crucial role in enabling
        their company’s growth and profitability. To do so, you require an
        enterprise-grade fraud and risk intelligence solution that can
        efficiently combat fraud, curb policy abuse, and boost revenue to the
        max. The problem is, the speed, scale, and sophistication of fraud and
        abuse can stretch the team and profit margins thin.
      </p> */}
        <div>
          <p className="text-orange-500 text-6xl border-l-2 p-4 font-bold">30+</p>
          <h2 className="text-3xl font-bold mt-5">Countries worldwide</h2>
          <p className="p-5">
            Tytle is continually expanding its services. We’re now helping
            clients in the EU, UK, US, Brazil, and parts of Asia. Most
            importantly, we do not only help within countries, but also between
            them. Often, cross-border situations create headaches for people as
            double reporting and double taxation may be triggered. Tytle
            specializes in such cases and can help you out on an ever-growing
            number of routes.
          </p>
        </div>
        <div>
          <p className="text-orange-500 text-6xl font-bold border-l-2 p-4">50+</p>
          <h2 className="text-3xl font-bold mt-5">Qualified experts</h2>
          <p className="p-5">
            Tytle works with a large team of qualified experts specializing in
            various services, from filings to tax planning and from bookkeeping
            to audits. By closely working together (when needed), they’ll always
            provide the best possible help in a comprehensive and coordinated
            way. This means peace of mind for you: your taxes will be handled by
            the right people and nothing gets lost in translation.
          </p>
        </div>
        <div>
          <p className="text-orange-500 text-6xl border-l-2 p-4 font-bold">70%</p>
          <h2 className="text-3xl font-bold mt-5">Time saved on tax filings</h2>
          <p className="p-5">
            Tytle believes that handling your taxes can be simplified a lot. We
            only ask the information we need and we do so through smart
            questionnaires. By digitalizing the whole process, we make sure that
            you stay well-organized and we prevent endless correspondence about
            missing documents. With Tytle, managing your taxes is simpler and
            faster – almost to the point that you’ll start enjoying it!
          </p>
        </div>
      </div>
    </div>
  );
}
