[![Stories in Ready](https://badge.waffle.io/unexpectedreboots/unexpectedreboots.png?label=ready&title=Ready)](https://waffle.io/unexpectedreboots/unexpectedreboots)
# unexpectedreboots

*extension

to add the extension to your chrome browser, go to Settings > Extensions, check the 'Developer mode' box. Click 'Load unpacked extension...' and load the whole extension folder in the project directory

*database endpoints

// Test Routes: no authentication required

*/test/groups/create expects: {groupName, owner}  (Used in GroupPanel.jsx)
*/test/groups/add  expects: {groupID, username, newMember} (Used in UserPanel.jsx)
*/test/groups/users  expects: {groupID} (Used in UserPanel.jsx)
*/test/groups/markups expects: {groupID} (Used in MarkupPannel.jsx)
*/test/groups/sites

*/test/users/groups expects: {username}  (Used in GroupPanel.jsx) 
*/test/users/markups  expects: {usename} (Used in MarkupPannel.jsx)

*/test/markups/create
*/test/markups/share

*/test/websites/create
*/test/websites/share


* The struscure of the react components that make the dashboard
![HomeView](http://dylanlrrb.github.io/HomeView.png)
![GroupView](http://dylanlrrb.github.io/GroupView.png)
