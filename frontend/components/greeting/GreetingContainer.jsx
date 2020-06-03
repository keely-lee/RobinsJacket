import { connect } from "react-redux";
import Greeting from "./Greeting"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting)

export default GreetingContainer;