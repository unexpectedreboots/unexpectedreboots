class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
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

    return (<Heading headingTitle={'Home'} />);
     
    //if (this.state === 'home') {
     // return ( 
     //   <Heading headingTitle={'Home'} />
     // );
    //} else if (this.state === 'groups') {
     // return ( 
     //   <Heading headingTitle={'Group'} />
     // );
    //}
  }
}

window.App = App;