import { TextField, Select, FormControl, MenuItem, InputLabel, Box, Button, FormGroup } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useStyles } from './style';
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../redux/actions/category';

const CategoryCreate = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch()
    const classes = useStyles();

    const fetchCAtegoryData = useCallback(async () => {
        const categories = await dispatch(fetchCategories())
        setCategories(categories)
    }, [])

    useEffect(() => {
        fetchCAtegoryData();
    }, [fetchCAtegoryData]);

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <>
            <Box maxWidth="sm" >
                <FormGroup className={classes.formControl}>
                    <FormControl fullWidth >
                        <TextField id="product-name" label="Category Name" variant="standard" />
                    </FormControl>
                </FormGroup >
                <FormGroup className={classes.formControl} >
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="cateegory-label">Parent Category</InputLabel>
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
                        <Button variant="contained" size="medium">
                            save
                        </Button>
                    </FormControl>
                </Box >
            </Box>
        </>
    )
}

export default CategoryCreate
