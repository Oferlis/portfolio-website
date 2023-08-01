export default function ProjectDisplay(content) {
  return (
    <div className="proj-display">
      <img
        src={content.content.img}
        alt={content.content.alt}
        className="proj-img"
      />
      <div className="proj-att">
        <ul
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            justifyContent: "space-around",
          }}
        >
          {content.content.head.map((item) => {
            return <li className="single-att">{item}</li>;
          })}
        </ul>
      </div>
      <div>{content.content.body}</div>
    </div>
  );
}
