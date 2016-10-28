var MarkupPanel = (props) => {

  return (
    <div className='container col-sm-6 panel'>
      <div className='panel-title'>Markup Panel</div>
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


window.MarkupPanel = MarkupPanel;
