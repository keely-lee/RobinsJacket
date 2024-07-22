import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => ({
  formType: "signup", // delete
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  demoUser: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
export default SignupFormContainer;
