import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions"


const mapStateToProps = (state, ownProps) => ({
  formType: "signup",
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;
