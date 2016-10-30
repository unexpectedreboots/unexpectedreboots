var Group = (props) => {
  var role;
  if (props.group.userid === props.group.groupowner) {
    role = ' Owner';
  } else {
    role = ' Member';
  }

  return (
    <div onClick={() => props.changeViewCb(event, props.group.groupname, props.group.groupid, props.group.userid === props.group.groupowner)} className='col-sm-2 group-bttn'>
      <div className='group-label'>{props.group.groupname}</div>
      <div className='role-label'>
        <span className='group-label'>Role:  
        {role}
        </span>
      </div>
    </div>
  );

};

window.Group = Group;
