export interface PropsInterface {
    fontSize?: number
    placeholder?: string
    width?: number
    height?: number
}

export class PropsGaea {
    gaeaName = '输入框'
    gaeaIcon = 'pencil-square-o'
    gaeaUniqueKey = 'gaea-input'
    gaeaEdit = [{
        field: 'fontSize',
        label: '字体大小',
        editor: 'text',
        editable: true
    }, {
        field: 'placeholder',
        label: '占位符',
        editor: 'text',
        editable: true
    }, {
        field: 'width',
        label: '宽',
        editor: 'text',
        editable: true
    }, {
        field: 'height',
        label: '高',
        editor: 'text',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    fontSize = 14
    placeholder = '请输入内容'
    width = 200
    height = 25
}

export interface StateInterface {

}

export class State implements StateInterface {

}