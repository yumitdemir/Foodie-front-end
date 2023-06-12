import React from 'react';

function PageContainer(props) {
    return (
        <div className={"mx-auto container"}>
            {props.children}
        </div>
    );
}

export default PageContainer;