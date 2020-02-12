import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import StarRateIcon from '@material-ui/icons/StarRate'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    stars: {
        display: 'inline-flex',
    },
    starIcon: {
        height: '24px',
    },
})

const DetailsDialog = ({ open, setOpen, repo }) => {
    const classes = useStyles()
    const handleClose = () => setOpen(false)
    const { html_url, stargazers_count, forks, language } = repo
    
    return repo && (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Repo Details</DialogTitle>
            <DialogContent>
                <Typography>
                    Url: <a href={html_url}>{html_url}</a>
                </Typography>
                <Typography className={classes.stars}>
                    Stars: <span className={classes.starIcon}><StarRateIcon /></span> {stargazers_count}
                </Typography>
                <Typography>
                    Forks: {forks}
                </Typography>
                <Typography>
                    Language: {language}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DetailsDialog
