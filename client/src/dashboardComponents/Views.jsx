var Views = (props) => {

  if (props.viewType === 'home') {
    return (
      <div>
        <Heading title={'Home'} />
        <MarkupPannel markups={[1, 1, 1]} />
      </div>
    );
  } else {
    return (<Heading title={'Nope'} />); 
  }


};


window.Views = Views;