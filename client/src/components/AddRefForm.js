import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        multiline: 'Controlled',
    });

    state = {
        relationship: {relationship},
        dateMet: {dateMet},
        prefix: {prefix},
        firstName: {firstName},
        lastName: {lastName},
        suffix: {suffix},
        pronouns: {pronouns},
        email: {email},
        phone: {phone},
        lastContacted: {lastContacted},
        prefAddr: {prefAddr},
        twitters: {twitters},
        linkedIn: {linkedIn},
        facebook: {facebook},
        location: {location},
        workHistory: {workHistory},
        traits: {traits},
        stories: {stories},
        network: {network}
    };


    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
// TODO Fill the values with empty string if saving a new reference, else fill values/placeholders with the information from the ref from database
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.relationship}
                placeholder={this.state.relationship}
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Relationship"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.dateMet}
                placeholder={this.state.dateMet}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Date Met"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.prefix}
                placeholder={this.state.prefix}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Prefix"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.firstName}
                placeholder={this.state.firstName}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="First Name"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.lastName}
                placeholder={this.state.lastName}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Last Name"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.pronouns}
                placeholder={this.state.pronouns}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Pronouns"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.email}
                placeholder={this.state.email}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Email Addresses"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.phone}
                placeholder={this.state.phone}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Phone Numbers"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.lastContacted}
                placeholder={this.state.lastContacted}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Last Contacted"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.prefAddr}
                placeholder={this.state.prefAddr}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Preferred Address"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.twitters}
                placeholder={this.state.twitters}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Twitter Accounts"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.linkedIn}
                placeholder={this.state.linkedIn}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="LinkedIn Accounts"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.facebook}
                placeholder={this.state.facebook}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Facebook"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.location}
                placeholder={this.state.location}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Location"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.workHistory}
                placeholder={this.state.workHistory}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Work History"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.traits}
                placeholder={this.state.traits}                
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Traits"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.stories}
                placeholder={this.state.stories}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Stories To Remember"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                rowsMax="10"
                value={this.state.network}
                placeholder={this.state.network}                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="Networks They Have Access To"
                variant="outlined"
            />
        </form>
    );
}