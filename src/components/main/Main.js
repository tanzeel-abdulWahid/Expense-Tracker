import React, { useContext } from 'react'
import {Card, CardContent,CardHeader ,Typography, Grid, Divider} from '@material-ui/core';
import { ExpenseTrackerContext } from "../../context/context"
import useStyles from './styles.js'
import Form from './forms/Form.js'
import List from "./list/List.js"
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader  title="Expense Tracker" subheader="Powered by speechly"/>
            <CardContent>
                <Typography align="center" variant='h6'>
                    Total balance ${balance}
                </Typography>
                <Typography 
                variant='subtitle3' style={{lineHeight: '1em', marginTop:"10px"}}>
                    <InfoCard/>
                </Typography>

                <Divider className={classes.divider} />
                <Form/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}


export default Main
