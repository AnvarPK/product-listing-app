import { Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material"
import { useStyles } from "./style";

const Products = () => {
    const classes = useStyles();
    return (
        <>

            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom component="div">
                        Categories :
                    </Typography>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <Stack direction="row" spacing={2}>
                                <Paper className={classes.paper}>wew</Paper>
                                <Paper className={classes.paper}>wew</Paper>
                                <Paper className={classes.paper}>wew</Paper>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom component="div">
                        Sub Categories :
                    </Typography>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <Stack direction="row" spacing={2}>
                                <Paper className={classes.paper}>wew</Paper>
                                <Paper className={classes.paper}>wew</Paper>
                                <Paper className={classes.paper}>wew</Paper>
                            </Stack>
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
