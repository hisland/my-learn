'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  __before(){
    console.log('__before(): do something');
  }
  __after(){
    console.log('__after(): do something');
  }
  initAction(){
    this.end('__before(), __after() 里面做一些事情');
  }
}
