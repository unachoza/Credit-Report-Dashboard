import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreReports } from '../../redux/actions/reports';
import { bindActionCreators } from 'redux';

const LoadMoreButton = ({ fetchMoreReports }) => (
  <button
    style={{
      padding: 10,
      color: 'white',
      backgroundColor: '#3D68A3',
      fontSize: 15,
      borderRadius: 5,
      cursor: 'pointer',
      margin: 30,
    }}
    onClick={() => fetchMoreReports()}
  >
    Load More
  </button>
);

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMoreReports,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LoadMoreButton);
