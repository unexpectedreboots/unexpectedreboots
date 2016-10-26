var Views = (props) => {

  if (props.viewType === 'home') {
    return (
      <div>
        <Heading title={'Dashboard'} changeViewCb={props.changeViewCb} />
        <MarkupPannel markups={[1, 2, 3]} />
        <GroupPannel groups={[1, 2, 3, 4]} changeViewCb={props.changeViewCb} />
      </div>
    );
  } else {
    return (
      <div>
        <Heading title={props.viewType} changeViewCb={props.changeViewCb} />
        <UserPannel users={['ron', 'fred', 'george', 'bill', 'charlie']}/>
        <MarkupPannel markups={[1, 2]}/>
        <SharedPannel sites={[1, 2, 3]}/>
      </div>
      ); 
  }


};


window.Views = Views;