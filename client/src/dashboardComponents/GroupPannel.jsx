var GroupPannel = (props) => {

  return (
    <div>
      <div>(group pannel)</div>
       <AddGroup />
        { props.groups.map(function(group) {
          return (
           <div>
              <Group name={group} />
            </div>
        ); })
      }
    </div>
  );

};


window.GroupPannel = GroupPannel;