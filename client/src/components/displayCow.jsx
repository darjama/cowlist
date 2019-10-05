function DisplayCow(props) {
  const singleCow = props.cow;
  return (
    <div>{singleCow.name}: {singleCow.description}</div>
  );
  }

  export default DisplayCow;