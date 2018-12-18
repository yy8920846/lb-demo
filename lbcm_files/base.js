/*基础公共脚本*/
$(function(){
    //轮播图事件绑定
    var imgRun = document.getElementById('img_run');
    window.imgAutoRun = Swipe(imgRun, {
        auto: 5000,
        continuous: true,
        callback: function(index, element) {
            $('.img_ctrl').find('div').removeClass('now');
            $($('.img_ctrl').find('div')[index]).addClass('now');
        }
    });
});