// 定义基准字体

new function () {
    var _self = this;
    _self.width = 750;//设置默认最大宽度
    _self.fontSize = 100;//默认字体大小
    _self.widthProportion = function () {
        var _dom = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
        return _dom;
    };
    _self.changePage = function () {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px");
    }
    _self.changePage();
    window.addEventListener('resize', function () {
        _self.changePage();
    }, false);
};
