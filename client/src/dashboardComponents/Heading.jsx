var Heading = (props) => {

  return ( 
    <div>
      <div>{props.title}</div> 
      <div onClick={() => props.changeViewCb(event, 'home')}>Home</div>
      <div>Logout</div>
    </div>
  );

};


window.Heading = Heading;