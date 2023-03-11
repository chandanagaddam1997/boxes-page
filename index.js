const Box = (props) => {
  //  Write your code here.

  const { text, className } = props;
  return (
    <div className={`${className} Boxes`}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.

  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <Box text="small" className="orange" />
    <Box text="Medium" className="green" />
    <Box text="Large" className="pink" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
