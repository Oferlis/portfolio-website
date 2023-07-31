const Container = (props) => {
  return (
    <div className="box-container">
      <div className="container">{props.headline}</div>
      <ul className="container">
        {props.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Container;
