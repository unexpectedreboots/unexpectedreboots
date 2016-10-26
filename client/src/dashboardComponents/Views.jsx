var Views = (props) => {

  if (props.viewType === 'home') {
    return (<Heading title={'Home'} />);
  } else {
    return (<Heading title={'Nope'} />); 
  }


};


window.Views = Views;