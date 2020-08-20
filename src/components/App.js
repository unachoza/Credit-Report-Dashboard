import React, { Component } from 'react';
import logo from '../logo.svg';
import SimpleTable from '../pages/SimpleTable/index';
import Loading from '../pages/LoadingSpinner';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReports } from '../redux/actions/reports';
import LoadMoreButton from '../pages/LoadMoreButton';
import { CURSOR } from '../constants/reports';

class App extends Component {
  componentDidMount() {
    this.props.fetchReports(this.props.count, CURSOR);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
      this.props.fetchReports(nextProps.count, CURSOR);
    }
  }
  render() {
    const { reports } = this.props;

    return (
      <div className="App">
        <header style={{ marginBottom: 60 }} className="App-header">
          <img style={{ marginTop: 30 }} src={logo} className="App-logo" alt="logo" />
        </header>

        {reports.length > 0 ? <SimpleTable reports={this.props.reports} /> : <Loading />}

        <LoadMoreButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reports: state.reports.reports,
  count: state.reports.count,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchReports,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
