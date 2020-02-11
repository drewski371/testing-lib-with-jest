import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#5AC18E',
    },
    toolbar: {
        justifyContent: 'space-between',
    },
})

const AppBar = props => {
    const classes = useStyles()
    return (
        <MuiAppBar classes={{
            colorPrimary: classes.appBar,
        }}>
            <Toolbar classes={{
                root: classes.toolbar,
            }}>
                <Typography variant="h6">
                    React Testing Demo
                </Typography>
                <Search {...props} />
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar
