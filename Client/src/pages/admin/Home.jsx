import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const cards = [1, 2, 3];


const Home = () => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{ mt: 10 }}
                    >
                        Manage Users
                    </Typography>

                    <DataTable/>

                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        {/* <Button variant="contained">Edit Profile</Button> */}
                        <Button sx={{ backgroundColor: 'red' }} variant="contained">Logout</Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default Home


function DataTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>Users</TableCell>
              <TableCell align='center'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center'>Thashreef</TableCell>
                <TableCell align='center'>
                    <Button variant='contained'>Block</Button>
                </TableCell>
              </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }