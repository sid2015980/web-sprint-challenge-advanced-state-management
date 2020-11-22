import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="smurflist">
      {props.smurfs.map((smurf) => (
        <Smurf
          id={smurf.id}
          name={smurf.name}
          age={smurf.age}
          height={smurf.height}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
