class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      view: 'home'
    };

  }
  
  
  componentDidMount() {
    
  }

  changeView() {
    if (this.state === 'home') {
      this.setState({
        view: 'groups'
      });
    } else if (this.state === 'groups') {
      this.setState({
        view: 'home'
      });
    }
  }

  
  render() {
    return (
      <Views viewType={this.state.view} />
    );
  }
}

window.App = App;