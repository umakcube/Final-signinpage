
import React, { Fragment, Component } from 'react';
import MediaQuery from 'react-responsive';

import Form from './Form';
import FromSiginUp from './FromSiginUp';

class MyMediaQuery extends Component {
    render() {
        return (
            <Fragment>
               

                <MediaQuery minDeviceWidth={1224}>
                    <div>
                        <div>
                            <Form />
                            {/* <FormSiginUp /> */}
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <div>
                        <FromSiginUp />
                    </div>
                </MediaQuery>
              
            </Fragment>
        );
    }
}

export default MyMediaQuery;
