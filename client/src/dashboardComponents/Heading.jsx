var Heading = (props) => {

  return ( 
    <div className='row heading'>
    <div>
      <div className='col-sm-4 heading-title'>{props.title}</div> 
      <div className='col-sm-4 heading-bttn'>Logout</div>
      <div className='col-sm-4 heading-bttn' onClick={() => props.changeViewCb(event, 'home')}>Home</div>
    </div>
    </div>
  );

};


window.Heading = Heading;