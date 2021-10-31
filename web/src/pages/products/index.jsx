import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react";
import CategoryList from "../../components/category-list";
import { useStyles } from "./style";
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../redux/actions/category';


const Products = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()

    const fetchData = useCallback(async () => {
        const categories = await dispatch(fetchCategories())
        setCategories(categories)
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>

            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom component="div">
                        Categories :
                    </Typography>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <CategoryList categories={categories} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom component="div">
                        Sub Categories :
                    </Typography>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <CategoryList categories={categories} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom component="div">
                        Products :
                    </Typography>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Products
