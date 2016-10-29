var Views = (props) => {

  if (props.viewType === 'home') {
    return (
      <div className='container'>
        <Heading title={'Dashboard'} changeViewCb={props.changeViewCb} />
        <MarkupPanel groupid={props.groupid} markups={[1, 2, 3, 4, 5, 6, 7, 8]} />
        <GroupPanel changeViewCb={props.changeViewCb} />
      </div>
    );
  } else {
  //make this the callback to a get request for the user's group data and pass it into the three panels
    return (
      <div className='container'>
        <Heading title={props.viewType} changeViewCb={props.changeViewCb} />
        <UserPanel owner={props.owner} groupid={props.groupid} />
        <MarkupPanel groupid={props.groupid} markups={[1, 2]}/>
        <SharedPanel sites={[1, 2, 3]}/>
      </div>
    ); 
  }


};

window.Views = Views;
