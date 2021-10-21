export default {
  /* 延迟函数 （外层函数套有async/await会有阻塞方法内部后续执行的效果）*/
  sleep(delayTime) {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  },
  /* 阻塞主线程（js属于单线程） */
  blockMainThread(delayTime) {
    let startTime = new Date().getTime();
    // eslint-disable-next-line no-empty
    while (new Date().getTime() - startTime < delayTime) {}
  },
  //克隆对象(浅拷贝)
  clone(obj) {
    return Object.assign({}, obj);
  },
  //克隆对象(深拷贝)
  cloneObj(myObj) {
    // 对非Object(number、string、boolean、undefined、function)、Object特例(null、Date、RegExp)进行特殊处理
    if (typeof myObj !== "object") return myObj;
    if (myObj === null) return null;
    if (myObj instanceof Date) return new Date(myObj);
    if (myObj instanceof RegExp) return new RegExp(myObj);

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
      if (Object.protptype.hasOwnProperty.call(myObj, key)) {
        //不遍历其原型链上的属性
        var val = myObj[key];
        // myNewObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合（vue-cli通过babel将代码转成es5语法时，默认使用的严格模式，严格模式下不能使用callee）
        myNewObj[key] = typeof val === "object" ? this.cloneObj(val) : val;
      }
    }
    return myNewObj;
  }
};
