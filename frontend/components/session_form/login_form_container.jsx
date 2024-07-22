import { connect } from "react-redux";
// import SessionForm from "./session_form";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, _ownProps) => ({
  formType: "login",
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
export default LoginFormContainer;
