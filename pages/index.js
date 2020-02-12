import AppBar from '../components/AppBar'
import DetailsDialog from '../components/DetailsDialog'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const appBarHeight = '64px'

const useStyles = makeStyles({
    content: {
        marginTop: appBarHeight,
        padding: '16px',
    },
    space: {
        height: '24px'
    },
})

const GitHubSearch = () => {
    const classes = useStyles()
    const [repo, setRepo] = React.useState({})
    const [detailsOpen, setDetailsOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const showDetails = () => setDetailsOpen(true)

    const onSearch = async searchTerm => {
        if (!searchTerm) return
        setLoading(true)
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
        setRepo(data.items[0])
        setLoading(false)
    }

    return (
        <>
            <AppBar onSearch={onSearch} />
            <div className={classes.content}>
                {loading && <Typography>loading...</Typography>}
                {repo.name &&
                    <>
                        <Typography variant="h5">{repo.name}</Typography>
                        <Typography variant="body1">{repo.description}</Typography>
                        <div className={classes.space} />
                        <Button onClick={showDetails}>
                            See Details
                        </Button>
                    </>}
            </div>
            <DetailsDialog repo={repo} open={detailsOpen} setOpen={setDetailsOpen} />
        </>
    )
}

export default GitHubSearch
