import * as React from 'react'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
const {TextInput} = require('react-native')

export default class TextInputComponent extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    render() {
        const style = {
            fontSize: this.props.fontSize
        }

        const otherProps = others(new module.Props(), this.props, null, true)

        const customProps = {
            placeholder: this.props.placeholder
        }

        return (
            <TextInput {...otherProps} style={style} {...customProps}/>
        )
    }
}