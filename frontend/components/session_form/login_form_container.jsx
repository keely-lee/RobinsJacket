import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
 formType: 'login',
 errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;