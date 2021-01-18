import { makeStyles } from '@material-ui/core/styles';
// import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: 'green',
    },
    avatarExpense: {
        color: 'black',
        backgroundColor: 'red',
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    },
}));