require.config({
	paths : {
		"jquery" : ["http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min","jquery-3.1.1.min"],
		"index" : ["index"],
		"clas" : ["class"],
		"distpicker.data":["distpicker.data"],
		"distpicker":["distpicker"],
		"validate":["validate"]
	}
});

require(["jquery","index","class","distpicker.data","distpicker","validate"],function($,index,clas,distpicker.data,distpicker,validate) {	
},function() {
});