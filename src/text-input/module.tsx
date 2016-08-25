export interface PropsInterface extends FitGaea.ComponentProps {
}

export class Props implements PropsInterface {
    name = '输入框'
    icon = 'pencil'
    uniqueKey = 'gaea-input'

    options = {
        fontSize: {
            label: '字体大小',
            value: 14,
            editor: 'text',
            editable: true
        },

        placeholder: {
            label: '占位符',
            value: '请输入内容',
            editor: 'text',
            editable: true
        }
    } as any
}

export interface StateInterface {

}

export class State implements StateInterface {

}