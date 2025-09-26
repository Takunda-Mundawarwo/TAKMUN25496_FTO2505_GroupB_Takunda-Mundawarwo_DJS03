import "../styles/Loading.css";
import Logo from "../assets/echo-logo.svg";

export default function Loading() {
  return (
    <div className="loading">
      <img src={Logo} alt="Echo Logo" width="48" />
    </div>
  );
}
