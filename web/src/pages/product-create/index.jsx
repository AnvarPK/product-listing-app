import { TextField, Select, FormControl, MenuItem, InputLabel, Box, Button, FormGroup } from '@mui/material';
import { useStyles } from './style';

const ProductCreate = () => {
    const classes = useStyles();

    const handleChange = (event) => {
    };

    return (
        <>
            <Box maxWidth="sm" >
                <FormGroup className={classes.formControl}>
                    <FormControl fullWidth >
                        <TextField id="product-name" label="Product" variant="standard" />
                    </FormControl>
                </FormGroup >
                <FormGroup className={classes.formControl} >
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="cateegory-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={null}
                            onChange={handleChange}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
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

export default ProductCreate
