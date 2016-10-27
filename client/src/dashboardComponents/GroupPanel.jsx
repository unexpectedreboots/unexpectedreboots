var GroupPanel = (props) => {

  return (
    <div>
      <AddGroup />
      { props.groups.map(function(group) {
        return (
         <div>
            <Group name={group} changeViewCb={props.changeViewCb} />
          </div>
      ); })
      }  
    </div>
  );

};


window.GroupPanel = GroupPanel;