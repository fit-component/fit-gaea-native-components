/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../gaea/models/tsd.d.ts" />

import * as React from 'react'
import View from './view'
import Text from './text'
import TextInput from './text-input'

export default [View, Text, TextInput] as Array<React.ComponentClass<FitGaea.ComponentProps>>