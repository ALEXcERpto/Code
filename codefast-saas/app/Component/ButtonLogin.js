import Link from "next/link";

//Every react function has a parameter called props

// Here button is use when use is login to send to dashboard page
const ButtonLogin = (props) => {
  if (props.isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back {props.name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};
export default ButtonLogin;
