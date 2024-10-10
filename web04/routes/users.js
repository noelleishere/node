var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  //루트 뒤에 users생략
  res.send("respond with a resource");
});

// 로그인
router.get("/login", function (req, res, next) {
  //랜더링한다.(출력) => view파일의 ejs 파일을(기본적으로 html+서버에서 보낸 변수 처리 가능)
  res.render("index", {
    title: "로그인",
    pageName: "users/login.ejs",
  });
});

// 회원가입
router.get("/join", function (req, res, next) {
  //랜더링한다.(출력) => view파일의 ejs 파일을(기본적으로 html+서버에서 보낸 변수 처리 가능)
  res.render("index", {
    title: "회원가입",
    pageName: "users/join.ejs",
  });
});

module.exports = router;
