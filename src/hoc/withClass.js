import React from 'react';

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends React.Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    })
}

export default withClass;