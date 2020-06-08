import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions"


const mapStateToProps = (state, ownProps) => ({
  formType: "signup",
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;
