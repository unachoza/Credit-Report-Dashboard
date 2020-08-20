import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreReports } from '../../redux/actions/reports';
import { bindActionCreators } from 'redux';

const LoadMoreButton = ({ fetchMoreReports }) => <button onClick={() => fetchMoreReports()}>Load More</button>;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMoreReports,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LoadMoreButton);
