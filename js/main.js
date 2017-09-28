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



//aggression agility ballcontrol foot crossing dribbling finishing freekickaccuracy headingaccuracy longshots penalties shortpassing shotpower sprintspeed standingtackle stamina strength vision volleys


var app = new Vue({
    el: '#app',
    data: {
        tableData2: tableData2,
        templates: templates,
        current_template: templates[0],
        default_template: 1,
        current_player_name: '',
        current_player_url: '',
        current_player_age: '',
        current_player_acceleration: '',
        current_player_aggression: '',
        current_player_agility: '',
        current_player_ballcontrol: '',
        current_player_foot: '',
        current_player_crossing: '',
        current_player_dribbling: '',
        current_player_finishing: '',
        current_player_freekickaccuracy: '',
        current_player_headingaccuracy: '',
        current_player_longshots: '',
        current_player_penalties: '',
        current_player_shortpassing: '',
        current_player_shotpower: '',
        current_player_sprintspeed: '',
        current_player_standingtackle: '',
        current_player_stamina: '',
        current_player_strength: '',
        current_player_vision: '',
        current_player_volleys: '',

    },
    methods: {
        tableHeader: function (tableData2) {
            var keys = [];
            for (key in tableData2[0]) {
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
        pullPlayer: function (tableData2, name) {

            var player = tableData2.filter(function (ele) {
                return (ele.name == name)
            })[0];
            console.log(player.name);
            this.current_player_name = player.name;
            this.current_player_url = player.headshotImgUrl;
            this.current_player_name = player.name;
            this.current_player_age = player.age;
            this.current_player_acceleration = player.acceleration;
            this.current_player_aggression = player.aggression;
            this.current_player_agility = player.agility;
            this.current_player_ballcontrol = player.ballcontrol;
            this.current_player_foot = player.foot;
            this.current_player_crossing = player.crossing;
            this.current_player_dribbling = player.dribbling;
            this.current_player_finishing = player.finishing;
            this.current_player_freekickaccuracy = player.freekickaccuracy;
            this.current_player_headingaccuracy = player.freekickaccuracy;
            this.current_player_longshots = player.longshots;
            this.current_player_penalties = player.penalties;
            this.current_player_shortpassing = player.shortpassing;
            this.current_player_shotpower = player.shotpower;
            this.current_player_sprintspeed = player.sprintspeed;
            this.current_player_standingtackle = player.standingtackle;
            this.current_player_stamina = player.stamina;
            this.current_player_strength = player.strength;
            this.current_player_vision = player.vision;

            return player
        },


    }
})
