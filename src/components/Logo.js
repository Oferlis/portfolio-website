const Logo = (props) => {
  return (
    <div id={props.id} className="logo tooltip">
      <img src={props.src} alt={props.alt} />
      <span className="tooltiptext">{props.text}</span>
    </div>
  );
};

export default Logo;
