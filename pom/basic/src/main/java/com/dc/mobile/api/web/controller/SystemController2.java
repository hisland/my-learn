package com.dc.mobile.api.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 手机接口服务系统公共 Controller
 *
 * @author nibo
 */
@RequestMapping
@Controller
public class SystemController2 {

    /**
     * 首页
     *
     * @return 响应页面：WEB-INF/pages/index.jsp
     */
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/index_pad")
    public String index_pad() {
        return "index_pad";
    }
    public String index_pad_dev() {
        return "index_pad_dev";
    }
    public String index_pad_dev2() {
        return "index_pad_dev2";
    }
}
