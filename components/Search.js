import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles, fade } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade('#ffffff', 0.15),
      '&:hover': {
        backgroundColor: fade('#ffffff', 0.25),
      },
      marginLeft: 0,
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      width: '100%',
    },
  }));

const ENTER = 13

const Search = ({ onSearch }) => {
    const classes = useStyles()
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleOnChange = event => setSearchTerm(event.target.value)

    const handleOnKeyDown = event => {
      event.keyCode === ENTER && onSearch(searchTerm)
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search GitHub"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                value={searchTerm}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
            />
        </div>
    )
}

export default Search
