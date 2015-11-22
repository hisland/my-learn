'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction(){
    console.log('index logic: ');
  }

  __before(){
    console.log('index logic: __before');
  }
  __after(){
    console.log('index logic: __after');
  }
}
