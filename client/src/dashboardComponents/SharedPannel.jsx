var SharedPannel = (props) => {

  return (
    <div>
      <div>Shared Sites</div>
        { props.sites.map(function(site) {
          return (
           <div>
              <SiteEntry site={site} />
            </div>
        ); })
      }
    </div>
  );

};


window.SharedPannel = SharedPannel;
