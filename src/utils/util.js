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
    if (typeof myObj != "object") {
      return myObj;
    }
    if (myObj == null) {
      return myObj;
    }
    let myNewObj;
    if (Object.prototype.toString.call(myObj) == "[object Array]") {
      myNewObj = new Array();
    } else {
      myNewObj = new Object();
    }
    for (var i in myObj) {
      myNewObj[i] = this.cloneObj(myObj[i]);
    }
    return myNewObj;
  }
}
