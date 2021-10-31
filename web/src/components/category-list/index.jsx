import React from 'react'
import { Paper, Stack } from "@mui/material"
import { useStyles } from './style';

const CategoryList = (props) => {
    const { categories } = props;
    const classes = useStyles();
    return (
        <>
            {
                categories.map(category => (
                    <Stack direction="row" spacing={2}>
                        <Paper className={classes.paper}>{category.name}</Paper>
                    </Stack>
                ))
            }
        </>
    )
}

export default CategoryList
