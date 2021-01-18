import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
        // marginTop: '50px',
        // height: '600px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardContent: {
        paddingTop: 0,
    },
    divider: {
        margin: '5px 0',
    },
}));