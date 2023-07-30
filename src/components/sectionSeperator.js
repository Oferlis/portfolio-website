const SectionSeperator = (props) => {
  return (
    <div className="section-seperator-container">
      <div className="section-seperator">
        <em>#</em>
        {props.sectionName}
        <img
          src={process.env.PUBLIC_URL + "/svgs/line-stroke.svg"}
          alt="line"
          className="stroke"
        ></img>
      </div>
    </div>
  );
};

export default SectionSeperator;
