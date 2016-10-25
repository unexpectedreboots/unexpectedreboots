"use strict";

var Signup = function Signup(props) {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { id: "SignUp" },
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
          "Register"
        ),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVzs7QUFFcEIsU0FDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsUUFBSyxJQUFHLFFBQVI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSx1Q0FBTyxhQUFZLG1CQUFuQixFQUF1QyxJQUFHLGFBQTFDLEdBRkY7QUFHRSx1Q0FBTyxhQUFZLFVBQW5CLEVBQThCLElBQUcsYUFBakMsR0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxRQUF0QztBQUFBO0FBQUEsU0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxRQUF0QztBQUFBO0FBQUE7QUFMRjtBQURGO0FBREEsR0FERjtBQWFELENBZkg7O0FBaUJBQyxPQUFPRixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2lnbnVwID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9XCJTaWduVXBcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGgyPldlbGNvbWU8L2gyPlxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIndoYXQncyB5b3VyIG5hbWU/XCIgaWQ9XCJuZXdVc2VybmFtZVwiIC8+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cIm5ld1Bhc3N3b3JkXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ251cEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnbnVwQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxud2luZG93LlNpZ251cCA9IFNpZ251cDtcbiJdfQ==