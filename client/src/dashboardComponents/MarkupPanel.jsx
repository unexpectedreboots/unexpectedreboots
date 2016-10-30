class MarkupPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markups: []
    };
  }

  fetchMarkupsFor(groupid) {
    var context = this;

    if (groupid === null) {
      fetch('http://104.237.1.118:3000/test/users/markups', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: 'nytimes2'}) //TODO: change to username in cookie
      })
      .then(function(res) {
        return res.json();
      })
      .then(function(value) {
        context.setState({
          markups: value
        });
      }); 
    } else {
      fetch('http://104.237.1.118:3000/test/groups/markups', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({groupID: '1'}) //TODO: change to groupid passed into function
      })
      .then(function(res) {
        return res.json();
      })
      .then(function(value) {
        context.setState({
          markups: value
        });
      }); 
    }
  }

  componentDidMount() {
    this.fetchMarkupsFor(this.props.groupid);
  }

  render() {
    return (
      <div className='container col-sm-6 panel'>
        <div className='panel-title'>Markup Panel</div>
          { this.state.markups.map(function(markup) { //change to the makkups held in 'state'
            return (
             <div className='entry'>
                <MarkupEntry title={markup.title} url={markup.url} />
              </div>
          ); })
        }
      </div>
    );
  }
}


window.MarkupPanel = MarkupPanel;
