class SharedPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sites: []
    };
  }

  fetchGroupSites() {
    var context = this;
    console.log('fetching group sites');
    fetch('http://104.237.1.118:3000/test/groups/sites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({groupID: '2'}) //TODO: change to groupid in props
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(value) {
      console.log(value);
      context.setState({
        sites: value
      });
    }); 
  }

  componentDidMount() {
    this.fetchGroupSites();
  }

  render() {
    return (
      <div className='container col-sm-5 shared-panel'>
        <div className='panel-title'>Shared Sites</div>
          { this.state.sites.map(function(site) {  //change props to state on refactor
            return (
             <div className='entry'>
                <SiteEntry title={site.title} url={site.url} />
              </div>
          ); })
        }
      </div>
    );
  }

}


window.SharedPanel = SharedPanel;
