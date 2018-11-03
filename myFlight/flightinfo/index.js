var Flight = function(){
    this.data = {
        number: null,
        departure: null,
        arrival: null,
        departureTime: null,
        arrivalTime: null,
    }

    this.fill = function(info){
        for(var e in this.data){
            if(this.data[e] !== 'undefined'){
                this.data[e] = info[e];
            }
        }
    }

    this.recordDepartureTime = function() {
        this.data.departureTime = Date.now();
    }

    this.recordArrivalTime = function() {
        this.data.departureTime = Date.now();
    }
    
    this.getInfo =　function(){
        return this.data;
    } 
}

module.exports = Flight;