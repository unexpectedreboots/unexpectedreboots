var SharedPanel = (props) => {

  return (
    <div className='container col-sm-5 shared-panel'>
      <div className='panel-title'>Shared Sites</div>
        { props.sites.map(function(site) {
          return (
           <div className='entry'>
              <SiteEntry site={site} />
            </div>
        ); })
      }
    </div>
  );

};


window.SharedPanel = SharedPanel;
