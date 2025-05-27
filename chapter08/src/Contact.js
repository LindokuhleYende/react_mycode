import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Contact extends Component {

    render() {
        const rows = [
            { name: 'Cadee Rousseau', calories: 50, fat: 50, carbs: 4, protein: 100 },
            { name: 'Courtney	Cook', calories: 37, fat: 40, carbs: 3, protein: 100 },
            { name: 'Ethan	Hurwitz', calories: 22, fat: 20, carbs: 2, protein: 100 },
            { name: 'Lindokuhle Yende', calories: 35, fat: 37, carbs: 2, protein: 100 },
            { name: 'Marvelous	Kahundahunda', calories: 37, fat: 37, carbs: 1, protein: 100 }
        ];
        return (
            <div>
                <h1 style={{ color: "blue" }}>Code College Students</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: "blue" }}>
                            <TableRow>
                                <TableCell style={{ color: "white", fontWeight: 'bold' }}>Name & Surname</TableCell>
                                <TableCell align="right" style={{ color: "white", fontWeight: 'bold' }}>Drive</TableCell>
                                <TableCell align="right" style={{ color: "white", fontWeight: 'bold' }}>Navs</TableCell>
                                <TableCell align="right" style={{ color: "white", fontWeight: 'bold' }}>Support points</TableCell>
                                <TableCell align="right" style={{ color: "white", fontWeight: 'bold' }}>Attendence</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" style={{ color: "orange" }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" style={{ color: "#f909f5" }}>{row.calories}</TableCell>
                                    <TableCell align="right" style={{ color: "#00ff65" }}>{row.fat}</TableCell>
                                    <TableCell align="right" style={{ color: "#0eb7f4" }}>{row.carbs}</TableCell>
                                    <TableCell align="right" style={{ color: "#f909f5" }}>{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
};

export default Contact;
