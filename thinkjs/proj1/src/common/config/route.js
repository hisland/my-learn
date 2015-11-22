'use strict';
/**
 * routes
 */
export default [
  [/^article\/(\d+)$/, 'test/article/detail?id=:1'],
  ['article/:year/:month', 'test/article/detail2'],
  ['article/list', 'test/article/detail3']
]
