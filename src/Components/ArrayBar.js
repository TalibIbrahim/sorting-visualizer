const ArrayBar = (props) => {
  return (
    <div
      className="array-bar mx-1"
      style={{
        height: `${props.value}px`,
        backgroundColor: props.isSorted ? "green" : props.color, // Conditional background color
      }}
    ></div>
  );
};

export default ArrayBar;
