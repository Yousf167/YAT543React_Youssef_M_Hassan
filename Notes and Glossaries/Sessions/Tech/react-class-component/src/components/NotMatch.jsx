import React, { Component } from 'react';

class NotMatch extends Component {
    render() { 
        return (
            <>
                <div className="container w-50 my-5 text-center py-3 alert alert-warning">
                    Error 404 Page Not Found
                </div>
            </>
        );
    }
}
 
export default NotMatch;