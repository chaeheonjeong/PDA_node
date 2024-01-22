let browser = navigator.userAgent.toLowerCase();
let browserType = " ";
let flag = true;
if (browser.indexOf("chrome") != -1) {
  browserType = "Chrome";
} else if (browser.indexOf("edge") != -1) {
  browserType = "Edge";
} else if (browser.indexOf("firefox") != -1) {
  browserType = "Firefox";
} else if (browser.indexOf("Safari") != -1) {
  browserType = "safari";
} else if (browser.indexOf("Opera") != -1) {
  flag = false;
  alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
} else {
  flag = false;
  alert("현재 페이지가 괜찮아보이길 바랍니다.");
}

if (flag == true) {
  alert(`${browserType}을 사용하고 계시네요!`);
}
