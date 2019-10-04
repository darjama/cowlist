
function CowDetails(props) {
  if (props.cow === null) {
    return ('')
  }
  const singleCow = props.cow;
  return (
    <div>{singleCow.name}: {singleCow.description}</div>
  );
  }

  export default CowDetails;