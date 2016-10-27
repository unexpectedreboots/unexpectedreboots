var UserPannel = (props) => {

  return (
    <div className='row col-sm-12 user-pannel'>
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
