
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


export function ToyList({ toys }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'toyName', headerName: 'Toy name', width: 200 },
        {
            field: 'price',
            headerName: 'price',
            type: 'number',
            width: 90,
        },
        {
            field: 'inStock',
            headerName: 'inStock',
            type: 'boolean',
            width: 90,
        },
    ]
    console.log('toys before passing to ToyList:', toys)

    const rows = toys.map(toy => ({
        id: toy._id, 
        toyName: toy.name,
        price: toy.price,
        inStock: toy.inStock,
    }))
    console.log('rows:', rows)
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>

    )
}