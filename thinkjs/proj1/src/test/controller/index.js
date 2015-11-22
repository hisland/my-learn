'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.write('hello\n')
    this.display();
    // return this.display(); // 如果是return, __after没有执行
  }
  helloAction(){
    return this.display();
  }

  __before(){
    console.log('index controller: __before');
  }
  __after(){
    console.log('index controller: __after');
  }
}
