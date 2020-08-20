import { FETCH_REPORTS } from '../constants/constants';
import { ARCHIVE_REPORT } from '../constants/constants';
import { FETCH_MORE_REPORTS } from '../constants/constants';
import { DEFAULT_COUNT } from '../../constants/reports';

const initialState = {
  reports: [],
  count: DEFAULT_COUNT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPORTS:
      return { ...state, reports: action.payload.reports };
    case ARCHIVE_REPORT:
      const reports = state.reports.filter(report => report.id !== action.payload.reportId);
      return { ...state, reports };
    case FETCH_MORE_REPORTS:
      return { ...state, count: state.count + DEFAULT_COUNT };
    default:
      return state;
  }
};
