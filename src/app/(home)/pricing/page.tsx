import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PricingCard from "@/components/PricingCard";

export default function Pricing() {
  return (
    <MaxWidthWrapper className="bg-red-400">
      <section className="flex flex-col items-center mt-[192px] mb-12 gap-24">
        <div>
          <h1 className="mb-5 font-bold text-6xl text-center md:text-6xl lg:tracking-[-4.8px] lg:leading-[95%] lg:max-w-5xl">
            Pricing.
          </h1>
          <p className="mb-8 text-center lg:max-w-2xl">
            PdPal allows you to have conversations with any PDF document. Simply
            upload your file and start asking questions right away.
          </p>
        </div>

        <div className="flex gap-8 flex-col md:flex-row ">
          <PricingCard type="free" />
          <PricingCard type="pro" price={14} previousPrice="20" />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
