class SharedPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sites: []
    };
  }

  fetchGroupSites() {
    //endpoint
  }

  conponentDidMount() {
    this.fetchGroupSites();
  }

  render() {
    return (
      <div className='container col-sm-5 shared-panel'>
        <div className='panel-title'>Shared Sites</div>
          { this.props.sites.map(function(site) {  //change props to state on refactor
            return (
             <div className='entry'>
                <SiteEntry site={site} />
              </div>
          ); })
        }
      </div>
    );
  }

}


window.SharedPanel = SharedPanel;
