<%@ page contentType="text/html;charset=UTF-8" language="java"
         deferredSyntaxAllowedAsLiteral="true" %>
<% String basepath = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
  <title>数字化校园</title>
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <script type="text/javascript">
    <%-- 获取项目basepath --%>
    var basepath = '<%=request.getContextPath()%>';
  </script>
  <style type="text/css">
    .index-loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .index-loading .spinner div {
      display: inline-block;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      background: #3eb5ac;
      animation: bouncedelay 1.4s infinite ease-in-out;
    }
    .index-loading .spinner .bounce1 {
      animation-delay: -0.32s;
    }
    .index-loading .spinner .bounce2 {
      animation-delay: -0.16s;
    }
    .dashbord {
      opacity: 0;
      transition: opacity 1s;
    }
    .dashbord.loaded {
      opacity: 1;
    }
    @keyframes bouncedelay {
      0%,
      80%,
      100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
    }
  </style>
  <link rel="shortcut icon" href="<%=basepath%>/resources/images/favicon.ico" />
  <link rel="stylesheet" type="text/css" href="<%=basepath%>/resources/dist/vendor.css">
  <link rel="stylesheet" type="text/css" href="<%=basepath%>/resources/dist/jquery-ui/themes/start/jquery-ui.min.css">
  <link rel="stylesheet" type="text/css" href="<%=basepath%>/resources/dist/ztree/css/zTreeStyle/zTreeStyle.css">


<link href="dist/styles.css" rel="stylesheet"></head>
<body>
  <div class="home-wrap" ng-class="{'left-menu-close': leftMenu.closed}" ui-view></div>

  <div class="index-loading" ng-if="loading">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>

  <script type="text/javascript" src="<%=basepath%>/resources/dist/My97DatePicker/WdatePicker.js"></script>
  <script type="text/javascript" src="<%=basepath%>/resources/dist/vendor.js"></script>
  <script type="text/javascript" src="<%=basepath%>/resources/dist/echarts/echarts.min.js"></script>
  <script type="text/javascript" src="<%=basepath%>/resources/dist/jquery-ui/jquery-ui.min.js"></script>
  <script type="text/javascript" src="<%=basepath%>/resources/dist/ztree/js/jquery.ztree.all-3.5.min.js"></script>
  <script src="http://test.com:8100/resources/dist/main.js"></script>
  <script src="http://test.com:8100/webpack-dev-server.js"></script>


<script type="text/javascript" src="dist/b.8a90c60a567c006c9a07.js"></script><script type="text/javascript" src="dist/a.8a90c60a567c006c9a07.js"></script></body>
</html>
