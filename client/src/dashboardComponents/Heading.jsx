var Heading = (props) => {

  return ( 
    <div className='row heading'>
    <div>
      <div className='col-sm-4 heading-title'>{props.title} 
        <div className='welcome' >Welcome back,{' ' + document.cookie.split('=')[1]}</div>  
      </div>
      <div className='col-sm-4 heading-bttn'>Logout</div>
      <a href="javascript:history.go(0)">
        <div className='col-sm-4 heading-bttn' >Home</div>
      </a>
    </div>
    </div>
  );

};


window.Heading = Heading;