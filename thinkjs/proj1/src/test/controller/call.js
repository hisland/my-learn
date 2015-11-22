'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  __call(){
    console.log('__call(): 没有匹配的action就执行我了');
    this.end('__call(): 没有匹配的action就执行我了');
  }
  initAction(){
    this.end('__call(): 匹配initAction, __call没有执行');
  }
}
