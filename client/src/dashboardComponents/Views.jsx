var Views = (props) => {

  if (props.viewType === 'home') {
    return (
      <div>
        <Heading title={'Home'} />
        <MarkupPannel markups={[1, 1, 1]} />
        <GroupPannel groups={[1, 2, 3, 4]} />
      </div>
    );
  } else {
    return (<Heading title={'Nope'} />); 
  }


};


window.Views = Views;