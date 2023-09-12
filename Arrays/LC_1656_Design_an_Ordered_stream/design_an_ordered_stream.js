/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr=[];
    this.p=0;
    this.arr.length=n;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  let streamData=[];
  this.arr[idKey-1]=value;
  while(this.arr[this.p]){
    streamData.push(this.arr[this.p])
    this.p++;
  }
  return streamData
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */