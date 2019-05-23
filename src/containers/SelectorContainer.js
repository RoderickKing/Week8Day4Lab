import { connect } from "react-redux";
import Selector from "../components/Selector";

const mapDispatchToProps = dispatch => ({
  getNewBreed(breed) {
    // format API call here:
    const dogUrl = "https://dog.ceo/api/breed/" + breed + "/images/random";
    dispatch(() => {
      // make API call here:
      fetch(dogUrl)
        // then reformat response:
        .then(res => res.json())
        .then(dogData => {
          if (dogData.status == "success") {
            dispatch({
              type: "SET_FLAG",
              breedFound: true
            });
            dispatch({
              type: "ADD_DOG",
              dogData: dogData.message
            });
          } else {
            dispatch({
              type: "SET_FLAG",
              breedFound: false
            });
          }
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Selector);
