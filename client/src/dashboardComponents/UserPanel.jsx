var UserPanel = (props) => {

  return (
    <div className='row col-sm-12 user-panel'>
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


window.UserPanel = UserPanel;
