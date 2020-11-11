import { connect } from "react-redux";
import Greeting from "./Greeting"
import { logout } from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  ownProps: ownProps,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting)

export default GreetingContainer;