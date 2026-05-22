/**
 * 各测试页共用：把 SCRIPT_LOG 渲染到 #log
 * 每项: { id, phase, t, extra? }
 * phase: execute | dom | parse-block | ...
 */
(function () {
  window.SCRIPT_LOG = window.SCRIPT_LOG || [];

  window.logScript = function (id, phase, extra) {
    console.log("logScript id, phase, extra: ", id, phase, extra);
    SCRIPT_LOG.push({
      id: id,
      phase: phase,
      t: performance.now(),
      extra: extra || "",
    });
  };

  window.renderLog = function (title) {
    var el = document.getElementById("log");
    if (!el) return;
    var rows = SCRIPT_LOG.slice().sort(function (a, b) {
      return a.t - b.t;
    });
    var html =
      "<h2>" + (title || "执行顺序（按 performance.now 排序）") + "</h2><ol>";
    rows.forEach(function (r, i) {
      html +=
        "<li>#" +
        (i + 1) +
        " <b>" +
        r.id +
        "</b> [" +
        r.phase +
        "] " +
        r.t.toFixed(2) +
        "ms" +
        (r.extra ? " — " + r.extra : "") +
        "</li>";
    });
    html += "</ol><p>共 " + rows.length + " 条</p>";
    el.innerHTML = html;
  };
})();
