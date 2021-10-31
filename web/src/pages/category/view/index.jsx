import { Grid, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react";
import CategoryList from "../../../components/category-list";
import { useStyles } from "./style";
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../../redux/actions/category';
import { fetchProducts } from "../../../redux/actions/product";
import ProductList from "../../../components/product-list";


const CategoryView = ({match}) => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()

    console.log(match.params.id)

    const fetchData = useCallback(async () => {
        const categories = await dispatch(fetchCategories())
        setCategories(categories)
    }, [])

    const fetchProductsData = useCallback(async () => {
        const products = await dispatch(fetchProducts())
        setProducts(products)
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        fetchProductsData();
    }, [fetchProductsData]);


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
                            <ProductList  products={products}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CategoryView
