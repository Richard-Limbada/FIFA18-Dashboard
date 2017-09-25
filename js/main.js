var options = {  
    useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
};
var number1 = 323
var number2 = 130
var number3 = 989

var demo = new CountUp('counter1', 100, this.number1, 0, 3, options);
if (!demo.error) {  
    demo.start();
} else {  
    console.error(demo.error);
};
var demo = new CountUp('counter2', 56, this.number2, 0, 4, options);
if (!demo.error) {  
    demo.start();
} else {  
    console.error(demo.error);
};
var demo = new CountUp('counter3', 786, this.number3, 0, 5, options);
if (!demo.error) {  
    demo.start();
} else {  
    console.error(demo.error);
};



var templates = [
    {
        id: 1,
        name: 'FIFA',
        value: 'css/dark.css'
    },
    {
        id: 2,
        name: 'FIFA Legends',
        value: 'css/light.css'
    }
];



var app = new Vue({
    el: '#app',
    data: {
        tabledata: tabledata,
        templates: templates,
        current_template: templates[0],
        default_template: 1,
        current_player_name: '',
        current_player_name: '',
    },
    methods: {
        tableHeader: function (tableData) {
            var keys = [];
            for (key in tableData[0]) {
                keys.push(key);
            }
            return keys;
        },
        setTemplate: function (id) {
            var selected_template = this.templates.filter(function (ele) {
                return (ele.id == id)
            })[0];

            this.current_template = selected_template;
        },
        pullPlayer: function (tabledata, name) {

            var player = tabledata.filter(function (ele) {
                return (ele.Name == name)
            })[0];
            console.log(player.Name);
            this.current_player_name = player.Name;
            return player



        }

    }
})


