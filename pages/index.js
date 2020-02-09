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

const Page = () => {
    const classes = useStyles()
    const [repo, setRepo] = React.useState({})
    const [detailsOpen, setDetailsOpen] = React.useState(false)

    React.useEffect(() => {
        axios
            .get('https://api.github.com/repos/testing-library/react-testing-library')
            .then(({ data }) => {
                console.log(data)
                setRepo(data)
            })
    }, [])

    const showDetails = () => setDetailsOpen(true)

    return (
        <>
            <AppBar />
            <div className={classes.content}>
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

export default Page

// mocks when fetching data
// integration vs unit
// false positive
// false negative
// snapshot tests