//import Link from "next/link";
import ButtonLogin from "./Component/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;
  const name = "Lohit";
  return (
    <main>
      <h1 className="p-8 text-center">
        Collect Customer feedback to build a better product
      </h1>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>

      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
    </main>
  );
}
