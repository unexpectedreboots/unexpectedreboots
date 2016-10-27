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
      body: JSON.stringify({username: '1'})
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(value) {
      console.log(value);
      context.setState({
        groups: value
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