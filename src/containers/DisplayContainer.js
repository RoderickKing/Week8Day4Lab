import { connect } from "react-redux";
import Display from "../components/Display";

const mapStateToProps = state => {
  return {
    dogs: state.dogs,
    breedFound: state.breedFound
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
