import san from 'san';
import './index.css';
import Icon from './icon.png';

var MyApp = san.defineComponent({
    template: '<div><p class="hello">Hello {{name}}!</p><img src="{{ImgUrl}}"/></div>',

    initData: function () {
    	var ImgUrl = Icon;
        return {
            name: 'San',
            ImgUrl:ImgUrl
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);