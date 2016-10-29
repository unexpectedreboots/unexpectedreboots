$('body').append(

//Ask what you want the name of the new group to be
"<div class='remodal' data-remodal-id='modal'>"+
  "<button data-remodal-action='close' class='remodal-close'></button>"+
  "<h1>Group Name:</h1>"+
  "<form>"+
    "<br>"+
   "<input class='groupName' type='text' name='groupName' />"+
    "<br><br>"+
    "<button data-remodal-action='confirm' class='remodal-confirm group'>OK</button>"+
  "</form>"+
  "<br>"+
"</div>"+

//failed to make group a group because you already have one with that name
"<div class='remodal' data-remodal-id='group-fail-modal'>"+
  "<button data-remodal-action='close' class='remodal-close'></button>"+
  "<h1>You alraedy have a group with that name  ¯\\_(ツ)_/¯</h1>"+
  "<br>"+
  "<button data-remodal-action='cancel' class='remodal-cancel'>OK ...</button>"+
"</div>"+

"<div class='remodal' data-remodal-id='add-user-modal'>"+
  "<button data-remodal-action='close' class='remodal-close'></button>"+
  "<h1>Add User By User Name:</h1>"+
  "<form>"+
    "<br>"+
   "<input class='newMember' type='text' name='newMember' />"+
    "<br><br>"+
    "<button data-remodal-action='confirm' class='remodal-confirm user'>OK</button>"+
  "</form>"+
  "<br>"+
"</div>"

);