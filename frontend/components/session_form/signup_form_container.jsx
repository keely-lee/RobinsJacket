import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
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
