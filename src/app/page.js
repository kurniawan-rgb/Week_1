"use client";

import ButtonJust from "../components/button/buttonJust";

export default function Home() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "12px",
          fontSize: "24px",
        }}
      >
        Welcome to my App
      </h1>
      <ButtonJust buttonText={"Reza Punya"} buttonText2={"i love you to"} />
    </section>
  );
}
