const ArrayBar = (props) => {
  return (
    <div
      className="array-bar bg-blue-700 mx-1"
      style={{ height: `${props.value}px`, backgroundColor: props.color }}
    ></div>
  );
};

export default ArrayBar;
