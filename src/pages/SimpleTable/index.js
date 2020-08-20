import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArchiveButton from '../ArchiveButton';

const TABLE_CELLS = ['Id', 'Score', 'First Name', 'Last Name', 'DOB', 'SSN', 'Record Created', 'Archive Record'];

const SimpleTable = ({ reports }) => {
  return (
    <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {TABLE_CELLS.map((text, i) => (
              <TableCell key={i} align="right">
                {text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map(report => (
            <TableRow key={report.id}>
              <TableCell align="right">{report.id}</TableCell>
              <TableCell align="right">{report.score}</TableCell>
              <TableCell align="right">{report.firstName}</TableCell>
              <TableCell align="right">{report.lastName}</TableCell>
              <TableCell align="right">{report.dob}</TableCell>
              <TableCell align="right">{report.ssn}</TableCell>
              <TableCell align="right">{report.createdAt}</TableCell>
              <TableCell align="right">
                <ArchiveButton reportId={report.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SimpleTable;
