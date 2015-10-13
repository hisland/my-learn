$(function() {
$("#input-repl-1").fileinput({
    uploadUrl: "/file-upload-batch/2",
    autoReplace: true,
    maxFileCount: 1,
    allowedFileExtensions: ["jpg", "png", "gif"]
});
  $("#input-id")
    .fileinput({
    uploadUrl: "/site/image-upload",
    allowedFileExtensions: ["jpg", "png", "gif"],
    maxImageWidth: 200,
    maxFileCount: 2,
    resizeImage: true,
      layoutTemplates: {
        actions: '<div class="file-actions">\n' +
          '    <div class="file-footer-buttons">\n' +
          '        {upload}{delete}<button type="button" class="btn btn-xs btn-default setCover" title="设置封面">设置封面</button>' +
          '    </div>\n' +
          '    <div class="file-upload-indicator" tabindex="-1" title="{indicatorTitle}">{indicator}</div>\n' +
          '    <div class="clearfix"></div>\n' +
          '</div>'
      }
    });

  $('.container').on('click', '.setCover', function(e){
    window.aaa = $('.container .setCover');
    window.bbb = this;
  });
});
