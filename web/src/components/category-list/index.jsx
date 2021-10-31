import React from 'react'
import { Paper, Stack } from "@mui/material"
import { useStyles } from './style';
import { Link } from 'react-router-dom'

const CategoryList = (props) => {
    const { categories } = props;
    const classes = useStyles();
    return (
        <>
            <Stack direction="row" spacing={2} >
                {
                    categories.map(category => (
                        <Paper className={classes.paper} key={category.name}>
                            <Link to={`/${category._id}`}>
                                {category.name}
                            </Link>
                        </Paper>

                    ))
                }
            </Stack>
        </>
    )
}

export default CategoryList
