import React from 'react'
import { List, ListItem, ListItemText, Paper, Stack } from "@mui/material"
import { useStyles } from './style';

const ProductList = (props) => {
    const { products } = props;
    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                {
                    products.map(product => (
                        <ListItem className={classes.listItem} key={product.name}>
                            <ListItemText
                                primary={product.name}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}

export default ProductList