var GroupPannel = (props) => {

  return (
    <div>
      <div>(group pannel)</div>
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


window.GroupPannel = GroupPannel;