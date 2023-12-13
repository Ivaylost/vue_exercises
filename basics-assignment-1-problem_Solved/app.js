Vue.createApp({
    data() {
        return {
            name: 'Ivo',
            age: 50,
            //url: 'https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg'
        }
    },
    methods: {
        agePlusFive() {
            return this.age + 5
        },

        getRandomNumber() {
            return Math.random()
        },

        setName(event){
                this.name = event.target.value;
        }


    }
}).mount('#assignment')