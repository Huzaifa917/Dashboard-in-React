import React from 'react'
import './ListUser.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(Name, ID, Expense, Salary, Status) {
  return {
    Name,  
    ID,
    Expense,
    Salary,
    Status,
    
    history: [
      {
        date: '2022-06-18',
        UserId: '1',
        Expense: '28000$' ,
        Salary: '32000',
      },
      {
        date: '2020-01-02',
        UserId: '2',
        Expense: '32000$',
        Salary: '23000',
      },
    ],
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Name}
        </TableCell>
        <TableCell align="right">{row.ID}</TableCell>
        <TableCell align="right">{row.Expense}</TableCell>
        <TableCell align="right">{row.Salary}</TableCell>
        <TableCell align="right">
            <button onClick={() => alert('Finally Approved') }>{row.Status}</button>
            <Link to={"/users/" }>
            <button>Decline</button>
            </Link>
            </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>USER</TableCell>
                    <TableCell align="right">Expense</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.UserId}</TableCell>
                      <TableCell align="right">{historyRow.Expense}</TableCell>
                      {Math.round(historyRow.Salary * row.Expense * 100) / 100}
                      <TableCell align="right">
                     
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('HUZAIFA SARFRAZ', 159, 6.0, 23 , 'Approve'),
  createData('SALMAN SHAHEER', 237, 9.0, 37, 'Approve'),
  createData('FATIMA ZAHRA', 262, 16.0, 24, 'Approve'),
  createData('MARVA AFTAB', 305, 3.7, 67, 'Approve'),
 
];



const ListUser = () => {
     






  return (
    <div className='userList'>
         <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Expense</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>




         

    </div>
  )
}

export default ListUser