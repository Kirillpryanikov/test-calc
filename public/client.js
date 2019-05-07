angular.module('calcApp', [])
    .controller('MainCtrl', ['$http', function MainCtrl(http) {
        
        let mc = this;
        mc.value1 = 0; mc.value2 = 0;
        mc.calculate = function() {
            http.post('/api/calc', { value1: mc.value1, value2: mc.value2 })
            .then(( { data } ) => {
                mc.result = data.result;
            });
        };
    }]);