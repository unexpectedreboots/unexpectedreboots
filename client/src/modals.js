$('body').append(

//Ask what you want the name of the new group to be
"<div class='remodal' data-remodal-id='modal'>"+
  "<button data-remodal-action='close' class='remodal-close'></button>"+
  "<h1>Group Name:</h1>"+
  "<form>"+
    "<br>"+
   "<input class='groupName' type='text' name='groupName' autofocus='autofocus' />"+
    "<br><br>"+
    "<button data-remodal-action='confirm' class='remodal-confirm group'>Add</button>"+
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

//Ask the username of the new user
"<div class='remodal' data-remodal-id='add-user-modal'>"+
  "<button data-remodal-action='close' class='remodal-close'></button>"+
  "<h1>Add User By User Name:</h1>"+
  "<form>"+
    "<br>"+
   "<input class='newMember' type='text' name='newMember' autofocus='autofocus' />"+
    "<br><br>"+
    "<button data-remodal-action='confirm' class='remodal-confirm user'>Add</button>"+
  "</form>"+
  "<br>"+
"</div>"+

//failed to add user because username does not exist
"<div class='remodal' data-remodal-id='user-fail-modal'>"+
  "<button data-remodal-action='close' class='remodal-close'></button>"+
  "<h1>User by that Username does not exist</h1>"+
  "<br>"+
  "<button data-remodal-action='cancel' class='remodal-cancel'>OK ...</button>"+
"</div>"

);









