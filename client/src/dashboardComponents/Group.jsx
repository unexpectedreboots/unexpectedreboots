var Group = (props) => {

  return (
    <div onClick={() => props.changeViewCb(event, props.name)} className='col-sm-2 group-bttn'>
      <div className='group-label'>{props.name}</div>
      <div className='role-label'>
        <span className='group-label'>Role: Owner</span>
      </div>
    </div>
  );

};

window.Group = Group;
