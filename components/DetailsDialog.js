import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const DetailsDialog = ({ open, setOpen, repo }) => {
    const handleClose = () => setOpen(false)
    const { html_url, stargazers_count, watchers_count, forks } = repo
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Repo Details</DialogTitle>
            <DialogContent>
                <Typography>Url: <a href={html_url}>{html_url}</a></Typography>
                <Typography>Stars: {stargazers_count}</Typography>
                <Typography>Watchers: {watchers_count}</Typography>
                <Typography>Forks: {forks}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DetailsDialog
