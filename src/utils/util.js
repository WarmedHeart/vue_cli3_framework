export default {
  /* 延迟函数 （外层函数套有async/await会有阻塞方法内部后续执行的效果）*/
  sleep(delayTime) {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime)
    });
  },
  /* 阻塞主线程（js属于单线程） */
  blockMainThread(delayTime) {
    let startTime = new Date().getTime();
    while((new Date().getTime() - startTime) < delayTime) {}
  },
  //克隆对象(浅拷贝)
  clone(obj) {
    return Object.assign({}, obj);
  },
  //克隆对象(深拷贝)
  cloneObj(myObj) {
    // 对null、非Object、Date、RegExp进行特殊处理
    if (myObj === null) return null;
    if (typeof myObj !== "object") return myObj;
    if (a instanceof Date) return new Date(obj);
    if (a instanceof RegExp) return new RegExp(obj);

    let myNewObj = new myObj.constructor(); // 保证原型链的构造方法（经过以上过滤只剩：Object、Array）
    /* 
      等效于:
      let myNewObj;
      if (Object.prototype.toString.call(myObj) == "[object Array]") {
        myNewObj = new Array();
      } else if (Object.prototype.toString.call(myObj) == "[object Object]"){
        myNewObj = new Object();
      } 
    */
    for (var key in myObj) {
      if (myObj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
        var val = myObj[key];
        myNewObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
        // myNewObj[key] = this.cloneObj(myObj[key]);
      }
    }
    return myNewObj;
  }
}
