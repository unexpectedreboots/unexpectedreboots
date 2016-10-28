class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
      groupid: null
    };

  }
  
  
  componentDidMount() {
    
  }

  changeView(event, state, groupid) {
    this.setState({
      view: state, 
      groupid: groupid
    });
  }

  
  render() {
    return (
      <Views groupid={this.state.groupid} viewType={this.state.view} changeViewCb={this.changeView.bind(this)} />
    );
  }
}

window.App = App;
