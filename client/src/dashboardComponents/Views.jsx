var Views = (props) => {

  if (props.viewType === 'home') {
    return (
      <div className='container'>
        <Heading title={'Dashboard'} changeViewCb={props.changeViewCb} />
        <MarkupPannel markups={[1, 2, 3, 4, 5, 6, 7, 8]} />
        <GroupPannel groups={['Animals Tech HackReactor', 'Tech', 'Family', 'HackReactor', 'CoWorkers']} changeViewCb={props.changeViewCb} />
      </div>
    );
  } else {
  //make this the callback to a get request for the user's group data and pass it into the three pannels
    return (
      <div className='container'>
        <Heading title={props.viewType} changeViewCb={props.changeViewCb} />
        <UserPannel users={['ron', 'fred', 'george', 'bill', 'charlie']}/>
        <MarkupPannel markups={[1, 2]}/>
        <SharedPannel sites={[1, 2, 3]}/>
      </div>
    ); 
  }


};

window.Views = Views;
