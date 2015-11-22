'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(http){
    super.init(http);
    console.log('需要手工首先执行 super.init(http);, 后面的逻辑才能正常');
    console.log(333);
  }
  initAction(){
    this.end('init(http) 被自动调用了');
  }
}
