const Logo = (props) => {
  return (
    <div id={props.id} className="logo">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Logo;
