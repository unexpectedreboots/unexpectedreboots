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
    // if (this.state === 'home') {
    //   this.setState({
    //     view: 'groups'
    //   });
    // } else if (this.state === 'groups') {
    //   this.setState({
    //     view: 'home'
    //   });
    // }

    this.setState({
      view: state
    });

    console.log(state);
  }

  
  render() {
    return (
      <Views viewType={this.state.view} changeViewCb={this.changeView.bind(this)} />
    );
  }
}

window.App = App;
