function CowListItem(props) {
  const mooer = props.value;
  console.log(props.value);
  return (
    <li>
      {mooer}
    </li>
  );
};

function CowList(props) {
  const cowsList = props.cows;
  const listItems = cowsList.map((moo) => {
    <CowListItem key={moo.id.toString()} value={moo.name} />
    }
  );
  return (
    <ul>{listItems}</ul>
  );
};

export default CowList;