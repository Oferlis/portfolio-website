const Container = (props) => {
  return (
    <div className="box-container">
      <div className="container">
        <h2>
          <span className="highlight">{props.headline}</span>
        </h2>
      </div>
      <ul className="container collapse-mobile">
        {props.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Container;
