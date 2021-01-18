import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from "./styles"

const CustomizedSnackbar = ( {open, setOpen} ) => {
    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Snackbar onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={3000}>
                <MuiAlert  onClose={handleClose} elevation={6} variant="filled" severity="success" > 
                    transaction successfully created.
                </MuiAlert>
            </Snackbar >
        </div>
    )
}
export default CustomizedSnackbar
