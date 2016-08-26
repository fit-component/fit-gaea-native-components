export interface PropsInterface {
    minHeight?: number|string
    flex?: number
    justifyContent?: string
    alignItems?: string
    flexDirection?: string
    flexWrap?: string
    flexGrow?: number
    backgroundColor?: string
    overflow?: string
}

export class PropsGaea {
    gaeaName = '布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout'
    gaeaEdit = [{
        field: 'minHeight',
        label: '最小高度',
        editor: 'text',
        editable: true,
    }, {
        field: 'flex',
        label: 'flex',
        editor: 'text',
        editable: true
    }, {
        field: 'justifyContent',
        label: '主轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'space-between',
            value: 'space-between'
        }, {
            key: 'space-around',
            value: 'space-around'
        }]
    }, {
        field: 'alignItems',
        label: '交叉轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'baseline',
            value: 'baseline'
        }, {
            key: 'stretch',
            value: 'stretch'
        }]
    }, {
        field: 'flexDirection',
        label: '布局方向',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'row',
            value: 'row'
        }, {
            key: 'row-reverse',
            value: 'row-reverse'
        }, {
            key: 'column',
            value: 'column'
        }, {
            key: 'column-reverse',
            value: 'column-reverse'
        }]
    }, {
        field: 'flexWrap',
        label: '排列方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'nowrap',
            value: 'nowrap'
        }, {
            key: 'wrap',
            value: 'wrap'
        }, {
            key: 'wrap-reverse',
            value: 'wrap-reverse'
        }]
    }, {
        field: 'flexGrow',
        label: 'flex-grow',
        editor: 'none',
        editable: false,
    }, {
        field: 'backgroundColor',
        label: '背景',
        editor: 'color',
        editable: true
    }, {
        field: 'overflow',
        label: 'overflow',
        editor: 'none',
        editable: false
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    flex = 1
    minHeight = 80
    justifyContent = 'flex-start'
    alignItems = 'flex-start'
    flexDirection = 'row'
    flexWrap = 'nowrap'
    flexGrow = null as any
    backgroundColor = 'white'
    overflow = 'hidden'
}

export interface StateInterface {

}

export class State implements StateInterface {

}