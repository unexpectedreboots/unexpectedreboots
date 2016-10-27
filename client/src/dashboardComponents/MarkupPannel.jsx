var MarkupPannel = (props) => {

  return (
    <div className='container col-sm-6 pannel'>
      <div>Markup Pannel</div>
        { props.markups.map(function(markup) {
          return (
           <div className='entry'>
              <MarkupEntry />
            </div>
        ); })
      }
    </div>
  );

};


window.MarkupPannel = MarkupPannel;
