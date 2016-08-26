import * as React from 'react'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
const {View, Dimensions} = require('react-native')

export default class LViewComponent extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    render() {
        let style: any = {
            flex: this.props.flex,
            minHeight: this.props.minHeight,
            backgroundColor: this.props.backgroundColor,
            flexDirection: this.props.flexDirection,
            flexWrap: this.props.flexWrap,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems,
            overflow: this.props.overflow
        }

        const otherProps = others(new module.Props(), this.props, null, true)

        return (
            <View {...otherProps} style={style}>{this.props.children}</View>
        )
    }
}