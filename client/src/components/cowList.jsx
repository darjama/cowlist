function CowListItem(props) {
  return<li onClick={() => (props.getDetails(props.mooer))}>{props.mooer.name}</li>;
}

function CowList(props) {
  const cowsList = props.cows;
  return (
    <ul>
    {cowsList.map((moo) =>
    <CowListItem key={moo.id.toString()}
      mooer={moo} getDetails={props.getDetails}/>
    )}
    </ul>

  );
};

export default CowList;