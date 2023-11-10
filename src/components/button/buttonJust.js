export default function ButtonJust({ buttonText, buttonText2 }) {
  return (
    <>
      <button
        style={{
          width: "240px",
          height: "36px",
        }}
      >
        {" "}
        {buttonText}{" "}
      </button>
      <button
        style={{
          width: "240px",
          height: "36px",
          marginTop: "12px",
        }}
      >
        {" "}
        {buttonText2}{" "}
      </button>
    </>
  );
}
