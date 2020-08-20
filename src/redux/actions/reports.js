import { FETCH_REPORTS } from '../constants/constants';
import { ARCHIVE_REPORT } from '../constants/constants';
import { FETCH_MORE_REPORTS } from '../constants/constants';

import fetch from 'isomorphic-fetch';
import { BACKEND_SERVER_PORT } from '../../constants';

const BASE_URL = 'api/requests';

export const fetchReports = (count, cursor) => async dispatch => {
  let response = await fetch(`http://localhost:${BACKEND_SERVER_PORT}/${BASE_URL}?count=${count}&cursor=${cursor}`);
  response = await response.json();
  dispatch({
    type: FETCH_REPORTS,
    payload: {
      reports: response.reports,
    },
  });
};

export const archiveReport = reportId => async dispatch => {
  let response = await fetch(`http://localhost:${BACKEND_SERVER_PORT}/${BASE_URL}/archive`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ id: reportId }),
  });
  response = await response.json();

  dispatch({
    type: ARCHIVE_REPORT,
    payload: { reportId },
  });
};

export const fetchMoreReports = () => dispatch => {
  dispatch({
    type: FETCH_MORE_REPORTS,
  });
};
