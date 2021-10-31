import { TextField, Select, FormControl, MenuItem, InputLabel, Box, Button, FormGroup } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { fetchCategories } from '../../../redux/actions/category';
import { useStyles } from './style';
import { useDispatch } from 'react-redux'
import { saveProduct } from '../../../redux/actions/product';

const ProductCreate = () => {
    const classes = useStyles();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()

    const fetchData = useCallback(async () => {
        const categories = await dispatch(fetchCategories())
        setCategories(categories)
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleProductName = (event) => {
        setProductName(event.target.value);
    };

    const handleSave = async () => {
        const product = {
            name: productName,
            category: selectedCategory
        }
        const result = await dispatch(saveProduct(product))
        console.log(result)
    }

    return (
        <>
            <Box maxWidth="sm" >
                <FormGroup className={classes.formControl}>
                    <FormControl fullWidth >
                        <TextField id="product-name" label="Product" variant="standard" value={productName} onChange={handleProductName} />
                    </FormControl>
                </FormGroup >
                <FormGroup className={classes.formControl} >
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="cateegory-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={selectedCategory}
                            onChange={handleChange}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                categories.map(category => (
                                    <MenuItem key={category.name} value={category.name}>{category.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </FormGroup>
                <Box className={classes.submitWraper} >
                    <FormControl  >
                        <Button variant="contained" size="medium" onClick={handleSave}>
                            save
                        </Button>
                    </FormControl>
                </Box >
            </Box>
        </>
    )
}

export default ProductCreate
