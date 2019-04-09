/**
 * @description 数据管理
 * @author cuizhongzhi@moyi365.com
 * @version 1.0
 */
 import Dtype from './vartype.js';

 class SpeechData {
     constructor(data) {
         if (!Array.isArray(data)) {
             new Error('Type of DBM.constructor argument must be Array.');
         }

         if (data.length <= 0) {
             new Error('DBM.constructor argument must be not empty.');
         }

         for (let item in data) {
             if (Dtype.isObject(item)) {
                 new Error('Type of DBM.constructor argument.item must be Object.');
             }
         }

         this.idx = -1;
         this.data = Object.assign({}, data);
     }

     current() {
         if (this.idx === -1) {
             this.idx++;
         }

         return this.data[this.idx];
     }

     next() {
         if (this.isTail()) {
             return null;
         }

         return this.data[++this.data];
     }

     prev() {
         if (this.isHead()) {
             return null;
         }

         return this.data[--this.data];
     }

     isHead() {
         return this.idx === 0 || this.idx === -1;
     }

     isTail() {
         return (this.data.length - 1) === this.idx;
     }

     offset(idx) {
         if (idx < 0 || idx > this.data.length) {
             return false;
         }

         this.idx = idx;
         return true;
     }

     get(idx) {
         return this.data[idx] ? this.data[idx] : null;
     }
}

 export default SpeechData;
