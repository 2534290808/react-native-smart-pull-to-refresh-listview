
import React, {
    PropTypes,
    Component,
} from 'react'
import {
    View,
    requireNativeComponent,
} from 'react-native'

export default class ListItem extends Component {


    static propTypes = {
        ...View.propTypes,
    }

    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
        }
    }

    render() {
        //console.log(`rowID = ${this.props.rowID} -> hidden = ${this.state.hidden}`)
        return (
            <NativeListItem {...this.props} onWindowVisibilityChange={this._onWindowVisibilityChange}>
                {!this.state.hidden ? this.props.children : null}
            </NativeListItem>
        )
    }

    _onWindowVisibilityChange = (e) => {
        let hidden = e.nativeEvent.hidden
        //console.log(`hidden = ${hidden}`)
        this.setState({
            hidden,
        })
    }
}

const NativeListItem = requireNativeComponent('RCTLazyLoadView', ListItem)


