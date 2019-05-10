var d = new Date();
laydate.render({
	   elem: '#searchdate',
	   type: 'month',//指定元素
	   theme: '#17B3A3',
	   value: d.getFullYear() + '-' + lay.digit(d.getMonth())
		});
layui.use('form', function(){
	  var form = layui.form(); //只有执行了这一步，部分表单元素才会自动修饰成功
	  form.on('select(lay)', function(data){
		  /*vm.reload();*/
		  form.render();
	});
	});