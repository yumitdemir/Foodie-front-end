import React from 'react';

function PageContainer(props) {
    return (
        <div className={"mx-auto xl:px-40 container"}>
            {props.children}
        </div>
    );
}

export default PageContainer;