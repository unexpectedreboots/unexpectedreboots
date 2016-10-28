var Views = (props) => {

  if (props.viewType === 'home') {
    return (
      <div className='container'>
        <Heading title={'Dashboard'} changeViewCb={props.changeViewCb} />
        <MarkupPanel markups={[1, 2, 3, 4, 5, 6, 7, 8]} />
        <GroupPanel groups={['Animals Tech HackReactor', 'Tech', 'Family', 'HackReactor', 'CoWorkers']} changeViewCb={props.changeViewCb} />
      </div>
    );
  } else {
  //make this the callback to a get request for the user's group data and pass it into the three panels
    return (
      <div className='container'>
        <Heading title={props.viewType} changeViewCb={props.changeViewCb} />
        <UserPanel groupid={props.groupid} />
        <MarkupPanel markups={[1, 2]}/>
        <SharedPanel sites={[1, 2, 3]}/>
      </div>
    ); 
  }


};

window.Views = Views;
