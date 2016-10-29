class GroupPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      groups: []
    };
  }

  
  componentDidMount() {
    var context = this;

    fetch('http://104.237.1.118:3000/test/users/groups', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'dylan'})
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(value) {
      context.setState({
        groups: value
      });
    });


    $(document).ready(function() {
      var askGroup = $('[data-remodal-id=modal]').remodal();
      var failGroup = $('[data-remodal-id=group-fail-modal]').remodal();

      var $bttn = $('.group');
      $bttn.click(function() {
        $.ajax({
          url: 'http://104.237.1.118:3000/test/groups/create',
          method: 'POST',
          data: {
            groupName: $('.groupName').val(),
            owner: 'dylan'  //TODO: change this to the username in the cookie
          },
          success: function(data) {
            if (data === true) {
              //get rid of the modal
              askGroup.close();
              //rerender the GroupPanel controller
              context.componentDidMount();
            } else {
              //get rid of the modal
              askGroup.close();
              //show a 'duplicate group modal'
              failGroup.open();
            } 
          }
        });
        return false;
      });
    });

  }

  



  render() {
    return (
      <div>
        <AddGroup />
        { this.state.groups.map((group) => {
          return (
            <div>
              <Group group={group} changeViewCb={this.props.changeViewCb} />
            </div>
        ); })
        }  
      </div>
    );
  }
}


window.GroupPanel = GroupPanel;