import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'

// todo: change color
const AppBar = () => (
    <MuiAppBar>
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                React Testing Demo
            </Typography>
            <Search />
        </Toolbar>
    </MuiAppBar>
)

export default AppBar
