// 选项卡效果
(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var aMenuLi = tab.find('.tab .tab-item');

		// 获取所有的panel
		var aPanel = tab.find('.mc-hide');

		aMenuLi.click(function () {
			var index = $(this).index();

			// 切换菜单
			aMenuLi.removeClass('active').eq(index).addClass('active');

			// 切换panel
			aPanel.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);


