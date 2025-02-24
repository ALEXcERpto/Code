import Link from "next/link";

//Every react function has a parameter called props

// Here button is use when use is login to send to dashboard page
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary  ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};
export default ButtonLogin;
