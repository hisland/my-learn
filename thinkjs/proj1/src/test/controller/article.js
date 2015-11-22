'use strict';

import Base from './base.js';

export default class extends Base {
  detailAction(){
    this.end('i am article: ' + this.get('id'));
  }
  detail2Action(){
    let year = this.get('year');
    let month = this.get('month');
    this.end(`i am article2: year:${year}, month: ${month}`);
  }
  detail3Action(){
    this.end(`i am article3: static`);
  }
}
