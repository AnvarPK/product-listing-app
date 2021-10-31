import React from 'react'
import { Paper, Stack} from "@mui/material"
import { useStyles } from './style';

const CategoryList = () => {
    const classes = useStyles();
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Paper className={classes.paper}>wew</Paper>
                <Paper className={classes.paper}>wew</Paper>
                <Paper className={classes.paper}>wew</Paper>
            </Stack>
        </div>
    )
}

export default CategoryList
