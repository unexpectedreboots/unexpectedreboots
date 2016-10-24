"use strict";

var Signup = function Signup(props) {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { id: "registerTwo" },
      React.createElement(
        "form",
        null,
        React.createElement(
          "h2",
          null,
          "Welcome"
        ),
        React.createElement("input", { placeholder: "what's your name?", id: "newUsername" }),
        React.createElement("input", { placeholder: "password", id: "newPassword" }),
        React.createElement(
          "button",
          { className: "signupButton", type: "button" },
          "register"
        ),
        React.createElement("br", null),
        React.createElement(
          "button",
          { className: "signupButton", type: "button" },
          "Log In"
        )
      )
    )
  );
};
window.Signup = Signup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVzs7QUFFcEIsU0FDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsUUFBSyxJQUFHLGFBQVI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSx1Q0FBTyxhQUFZLG1CQUFuQixFQUF1QyxJQUFHLGFBQTFDLEdBRkY7QUFHRSx1Q0FBTyxhQUFZLFVBQW5CLEVBQThCLElBQUcsYUFBakMsR0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxRQUF0QztBQUFBO0FBQUEsU0FKRjtBQUtFLHVDQUxGO0FBTUU7QUFBQTtBQUFBLFlBQVEsV0FBVSxjQUFsQixFQUFpQyxNQUFLLFFBQXRDO0FBQUE7QUFBQTtBQU5GO0FBREY7QUFEQSxHQURGO0FBY0QsQ0FoQkg7QUFpQkFDLE9BQU9GLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTaWdudXAgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBpZD1cInJlZ2lzdGVyVHdvXCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxoMj5XZWxjb21lPC9oMj5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ3aGF0J3MgeW91ciBuYW1lP1wiIGlkPVwibmV3VXNlcm5hbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgaWQ9XCJuZXdQYXNzd29yZFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWdudXBCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+cmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ251cEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxud2luZG93LlNpZ251cCA9IFNpZ251cDsiXX0=