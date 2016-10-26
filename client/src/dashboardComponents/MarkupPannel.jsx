var MarkupPannel = (props) => {

  return (
    <div>
      <div>Markup Pannel</div>
        { props.markups.map(function(markup) {
          return (
           <div>
              <div>Markup Entry</div>
            </div>
        ); })
      }
    </div>
  );

};


window.MarkupPannel = MarkupPannel;
