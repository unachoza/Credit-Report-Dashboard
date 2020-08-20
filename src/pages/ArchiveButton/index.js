import React from 'react';
import { bindActionCreators } from 'redux';
import { archiveReport } from '../../redux/actions/reports';
import { connect } from 'react-redux';

const ArchiveButton = ({ reportId, archiveReport }) => (
  <button
    style={{
      padding: 10,
      color: 'white',
      backgroundColor: '#3D68A3',
      fontSize: 15,
      borderRadius: 5,
      cursor: 'pointer',
    }}
    onClick={() => archiveReport(reportId)}
  >
    Archive{' '}
  </button>
);

const mapStateToDispatch = (dispatch) => bindActionCreators({ archiveReport }, dispatch);

export default connect(null, mapStateToDispatch)(ArchiveButton);
