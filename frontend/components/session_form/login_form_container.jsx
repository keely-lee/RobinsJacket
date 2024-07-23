import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
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
