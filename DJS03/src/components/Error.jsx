import Logo from "../assets/echo-logo.svg";

const errorStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Error() {
  return (
    <div style={errorStyles}>
      <img src={Logo} alt="Echo Logo" width="46" />
      <h1>Something went wrong...</h1>
    </div>
  );
}
