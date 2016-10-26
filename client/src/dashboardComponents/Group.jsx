var Group = (props) => {

  return (
    <div>
      <div onClick={() => props.changeViewCb(event, props.name)} >Group {props.name}</div>
    </div>
  );

};


window.Group = Group;