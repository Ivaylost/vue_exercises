Vue.createApp({
    data() {
        return {
            name:'Ivo',
            age: 50,
            url: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        }
    },
    methods: {
        getAgePlusNum(num){
            return this.age + num;
        },

        getRandomNum(){
            return Math.random();
        },

        setName(event){
            this.name = event.target.value;
        }
    }

}).mount('#assignment')