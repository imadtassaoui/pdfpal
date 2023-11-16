import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Link from "next/link";
import Image from "next/image";
import appMockup from "@/assets/app-mockup.jpg";
import chatMockup from "@/assets/chat-mockup.jpg";
import Label from "@/components/ui/Label";

import Card from "@/components/ui/Card";

//assets
import user from "@/assets/icons/user.svg";
import upload from "@/assets/icons/upload.svg";
import chat from "@/assets/icons/chat.svg";
import Button from "@/components/ui/Button";
import arrow from "@/assets/icons/arrow-right.svg";
import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
    <MaxWidthWrapper className="bg-red-400">
      <section className="flex flex-col items-center mt-[192px] mb-12">
        <h1 className="mb-5 font-bold text-4xl text-center md:text-7xl lg:text-8xl lg:tracking-[-4.8px] lg:leading-[95%] lg:max-w-5xl">
          Chat 💬 with your documents using Ai ✨.
        </h1>
        <p className="mb-8 text-center lg:max-w-2xl">
          PdPal allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>
        <div className="mb-12 flex gap-2">
          <Button>
            Get started <Image src={arrow} alt="arrow-icon" />{" "}
          </Button>
          <Button variant="secondary">How does it work?</Button>
        </div>
        <Image
          className="rounded-xl w-full shadow-xl border border-neutral-300 max-w-screen-lg"
          src={appMockup}
          alt="app-mockup"
        />
      </section>
      <section className="py-12 lg:py-24 flex flex-col items-center gap-12 lg:gap-24">
        <div className="flex flex-col items-center">
          <Label className="mb-4">Onboarding</Label>
          <p className="font-bold text-3xl lg:text-6xl">How does it work?</p>
        </div>
        <div className="flex flex-col gap-8 max-w-[868px]">
          <div className="flex flex-col gap-8 md:flex-row">
            <Card className="bg-neutral-900">
              <Image src={user} alt="user" />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-white text-2xl">
                  Sign up for an account
                </h3>
                <p className="text-white">
                  Either starting out with a free plan or choose our{" "}
                  <Link href="/dashboard" className="text-white underline">
                    pro plan
                  </Link>
                  .
                </p>
              </div>
            </Card>
            <Card className="bg-neutral-100">
              <Image src={upload} alt="user" />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-neutral-900 text-2xl">
                  Upload your PDF file
                </h3>
                <p className="text-neutral-900">
                  We`&#39;`ll process your file and make it ready for you to
                  chat with.
                </p>
              </div>
            </Card>
          </div>
          <Card className="bg-primary relative overflow-hidden ">
            <Image src={chat} alt="user" />
            <div className="flex flex-col gap-4 max-w-sm items-start">
              <h3 className="font-bold text-white text-2xl">
                Start asking questions
              </h3>
              <p className="text-white">
                It`&#39;`s that simple. Try out PdPal today! - it really takes
                less than a minute.
              </p>
              <Button variant="tertiary">Get started</Button>
              <Image
                className="hidden md:block absolute right-0 rounded-s-xl top-20 object-cover w-auto h-full shadow-2xl"
                src={chatMockup}
                alt="chat-mockup"
              />
            </div>
          </Card>
        </div>
      </section>
      <section className="py-12 lg:py-24 flex flex-col items-center gap-24">
        <div className="flex flex-col items-center ">
          <Label className="mb-4">Pricing</Label>
          <p className="font-bold text-3xl text-center lg:text-6xl">
            Choose the right plan for your usage.
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
