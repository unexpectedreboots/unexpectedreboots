class MarkupPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markups: []
    };
  }

  fetchMarkupsFor(groupid) {
    if (groupid === null) {
    //use user markup endpoint 
    } else {
    //use group markup endpoint
    }
  }

  componentDidMount() {
    this.fetchMarkupsFor();
  }

  render() {
    return (
      <div className='container col-sm-6 panel'>
        <div className='panel-title'>Markup Panel</div>
          { this.props.markups.map(function(markup) { //change to the makkups held in 'state'
            return (
             <div className='entry'>
                <MarkupEntry />
              </div>
          ); })
        }
      </div>
    );
  }
}


window.MarkupPanel = MarkupPanel;
