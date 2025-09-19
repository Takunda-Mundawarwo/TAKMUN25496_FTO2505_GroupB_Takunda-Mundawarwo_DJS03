import Logo from "../assets/echo-logo.svg";

const headerStyles = {
  fontStyle: "italic",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

export default function Header() {
  return (
    <header style={headerStyles}>
      <img src={Logo} alt="Echo Logo" width="48" />
      <h1>Echo</h1>
    </header>
  );
}
