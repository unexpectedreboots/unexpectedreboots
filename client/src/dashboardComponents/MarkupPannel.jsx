var MarkupPannel = (props) => {

  return (
    <div>
      <div>Markup Pannel</div>
        { props.markups.map(function(markup) {
          return (
           <div>
              <MarkupEntry />
              <MarkupAnnotes />
            </div>
        ); })
      }
    </div>
  );

};


window.MarkupPannel = MarkupPannel;
