class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      view: 'home'
    };

  }
  
  
  componentDidMount() {
    
  }

  changeView(event, state) {
    this.setState({
      view: state
    });
  }

  
  render() {
    return (
      <Views viewType={this.state.view} changeViewCb={this.changeView.bind(this)} />
    );
  }
}

window.App = App;
