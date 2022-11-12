export function Background() {
  return (
    <>
      <svg
        className="block md:hidden"
        preserveAspectRatio="none"
        width="auto"
        height="auto"
        viewBox="0 0 524 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <path
          d="M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z"
          fill="#6BEFA3"
        />
      </svg>

      <svg
        className="hidden md:block"
        preserveAspectRatio="none"
        width="auto"
        height="100vh"
        viewBox="0 0 613 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <path
          d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
          fill="#6BEFA3"
        />
      </svg>
    </>
  );
}
