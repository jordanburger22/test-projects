import Alert from "@mui/material/Alert"
import { Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../stores/actions/authActions";


function AlertNotification(props) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open
            onClose={() => { }}
            autoHideDuration={6000}
        >
            <Alert severity="info">Alert Message</Alert>
        </Snackbar>
    );
}

export default AlertNotification;