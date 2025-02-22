//import Link from "next/link";
import ButtonLogin from "./Component/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Lohit";
  return (
    <main>
      <section className="bg-purple-100">
        <div>Code Fast</div>
        <div>
          {" "}
          <a>Pricing</a> <a>Home</a> <a>Info</a>
        </div>
        <div>
          <ButtonLogin isLoggedIn="isLoggedIn" />
        </div>
      </section>
      <section className="p-10 text-center">
        <h1 className="test-xl font-extrabold mb-6">
          Collect Customer feedback to build a better product
        </h1>
        <div className="mb-6 opacity-90">
          Create a feeback board in minutes,priorties features and build product
          that your customer loves
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
