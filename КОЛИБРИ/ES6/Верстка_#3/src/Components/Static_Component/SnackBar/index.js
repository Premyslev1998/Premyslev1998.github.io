import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import dataStore from "../../../Lib/Store/dataStore";


const SnackBar = observer(class extends Component {

    constructor(props) {
        super(props);
        this.queue = [];
        this.state = {
            messageInfo: {},
        };
    }

    processQueue = () => {
        if (this.queue.length > 0) {
            this.setState({
                messageInfo: this.queue.shift(),
                open: true,
            });
        }
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') { return }
        this.setState({ open: false });
        dataStore.handleSnackBar(false)
    };

    handleExited = () => {
        this.processQueue();
    };

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={dataStore.snackBarOpen}
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    onExited={this.handleExited}
                    message={<span>Находится в разработке</span>}
                />
            </div>
        )
    }
});

export default withRouter(SnackBar);