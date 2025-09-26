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

/**
 * A component that alerts the user to an error
 * @component
 * @example <caption>Basic Usage</caption>
 * <Error message="Error Loading data" />
 * @returns {JSX.Element}
 */
export default function Error(props) {
  return (
    <div style={errorStyles}>
      <img src={Logo} alt="Echo Logo" width="46" />
      <h1>{props.message ? props.message : "Something went wrong..."}</h1>
    </div>
  );
}
