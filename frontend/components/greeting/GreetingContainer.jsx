import { connect } from "react-redux";
import Greeting from "./Greeting"

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting)

export default GreetingContainer;