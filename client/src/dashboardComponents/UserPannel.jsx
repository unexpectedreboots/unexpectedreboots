var UserPannel = (props) => {

  return (
    <div>
      <div>(User Pannel)</div>
        { props.users.map(function(user) {
          return (
           <div>
              <User name={user} />
            </div>
        ); })
      }
    </div>
  );

};


window.UserPannel = UserPannel;
