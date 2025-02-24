//import Link from "next/link";
import { GFS_Neohellenic } from "next/font/google";
import ButtonLogin from "./Component/ButtonLogin";
// import ListItem from "./Component/ListItem";

export default function Home() {
  const isLoggedIn = true;
  const name = "Lohit";
  const age = 19;
  let canVote;
  const pricingFeatureList = [
    "collect customer feedback",
    "Unlimited board",
    "Admindashboard",
    "24/7 support",
  ];
  // if (age >= 18) {
  //   canVote = "Yes";
  // } else {
  //   canVote = "No";
  // }
  // instead we use ternary operator

  //canVote = age >= 18 ? "Yes" : "No";

  return (
    <main>
      {/* header */}
      <section className="flex justify-between items-center px-10 py-3 bg-base-300 max-w-3xl mx-auto">
        <div className="font-semibold">Code Fast</div>
        <div className="space-x-8 link link-hover hidden md:block">
          <a className="">Pricing</a>
          <a className="">Home</a>
          <a className="">Info</a>
        </div>
        <div className="">
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      {/* Hero section */}
      <section className=" bg-base-100 px-8 text-center max-w-3xl mx-auto py-32">
        <h1 className="text-4xl font-extrabold mb-6 pb-100">
          Collect Customer feedback to build a better product
        </h1>
        <div className="mb-6 opacity-90">
          Create a feeback board in minutes,priorties features and build product
          that your customer loves
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* Pricing section */}
      <section className="bg-base-200">
        <div className="px-8 max-w-3xl mx-auto py-32">
          <p className="font-medium text-center text-primary uppercase mb-6">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 pb-100">
            Collect Customer feedback to build a better product
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6 ">
            <div className="flex gap-1 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="font-medium opacity-55 uppercase text-sm">
                /months
              </div>
            </div>
            <ul className="text-left py-4 space-y-1">
              {pricingFeatureList.map((priceItem) => {
                return (
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4.5}
                      stroke="currentColor"
                      className="text-green-400 size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="bg-base-200">
        <div className="px-8 max-w-3xl mx-auto py-32">
          <p className="font-medium text-center text-primary uppercase mb-6">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 pb-100">
            Collect Customer feedback to build a better product
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6 ">
            <div className="flex gap-1 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="font-medium opacity-55 uppercase text-sm">
                /months
              </div>
            </div>
            <ul className="text-left py-4 space-y-1">
              {pricingFeatureList.map((priceItem) => {
                return (
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4.5}
                      stroke="currentColor"
                      className="text-green-400 size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
