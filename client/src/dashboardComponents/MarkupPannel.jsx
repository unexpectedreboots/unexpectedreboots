var MarkupPannel = (props) => {

  return (
    <div>
      <div>Markup Pannel</div>
        { props.markups.map(function(markup) {
          return (
           <div>
              <MarkupEntry />
            </div>
        ); })
      }
    </div>
  );

};


window.MarkupPannel = MarkupPannel;
