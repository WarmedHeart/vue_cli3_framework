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
  }
}