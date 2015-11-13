import _ from 'lodash'

import requireDirectory from 'require-directory'

export default requireDirectory(module, { rename: (name) => _.capitalize(_.camelCase(name)) })
