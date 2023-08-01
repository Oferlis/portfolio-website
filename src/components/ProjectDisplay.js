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
            justifyContent: "start",
            flexWrap: "wrap",
          }}
        >
          {content.content.tech.map((item) => {
            return <li className="single-att">{item}</li>;
          })}
        </ul>
      </div>
      <div className="proj-item-body">
        <h2>{content.content.body}</h2>
        <h3>{content.content.desc}</h3>
      </div>
    </div>
  );
}
