import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//     },
//     dense: {
//         marginTop: theme.spacing(2),
//     },
//     menu: {
//         width: 200,
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
//     input: {
//         display: 'none',
//     },
// }));


class LoginForm extends Component {
    // classes = useStyles();
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        email: "",
        password: ""
    };

    handleChange = name => event => {
        console.log("HandleChange is running. event.target.value = " + event.target.value);
        this.setState({ [name]: event.target.value });
        console.log(this.state[name])
    };

    render() {
        return (
            <form /* className={classes.container} */ noValidate autoComplete="off">
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    // className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange("email")}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    // className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange("password")}
                />
                <Button variant="outlined" color="primary" /* className={classes.button} */>
                    Log In
            </Button>
                <Button variant="outlined" color="secondary" /* className={classes.button} */ /* onClick={signUp} */>
                    Sign Up
            </Button>
            </form>
        );
    }
}
export default LoginForm;