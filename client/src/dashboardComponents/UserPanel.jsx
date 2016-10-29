class UserPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    var context = this;

    fetch('http://104.237.1.118:3000/test/groups/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({groupID: this.props.groupid})
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(value) {
      context.setState({
        users: value
      });
    });

    $(document).ready(function() {
      var askUser = $('[data-remodal-id=add-user-modal]').remodal();
      var failUser = $('[data-remodal-id=user-fail-modal]').remodal();

      var $bttn = $('button.user');
      $bttn.click(function() {
        $.ajax({
          url: 'http://104.237.1.118:3000/test/groups/add',
          method: 'POST',
          data: {
            groupID: context.props.groupid, 
            username: 'alec',  //TODO: change this to the username in the cookie
            newMember: $('.newMember').val()
          },
          success: function(data) {
            console.log(data);
            if (data === true) {
              askUser.close();
              context.componentDidMount();
            } else {
              askUser.close();
              failUser.open();
            }
          }
        });
        return false;
      });
    });


  }


  render() {
    var context = this;
    return (
      <div className='row col-sm-12 user-panel'>
        { this.state.users.map(function(user) {
          return (
            <div>
              <User user={user} />
            </div>
          ); })
        }
        {function() {
          if (context.state.users.length < 6 && context.props.owner) {
            return (
              <div>
                <AddUser />
              </div>
            );
          }
        }()}
      </div>
    );
  }

}


window.UserPanel = UserPanel;

//cannot add a user that is already a member of the group
