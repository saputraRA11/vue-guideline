// console.log("halo vue")

const app = Vue.createApp({
    // template:"<h2> i am template vue </h2>",
    data:()=>{
        return {
            showBooks:true,
            books:[
                { title: 'name of the wind', author: 'patrick rothfuss',img:"assets/1.png",fav:true},
                { title: 'the way of kings', author: 'brandon sanderson',img:"assets/2.png" ,fav:false},
                { title: 'the final empire', author: 'brandon sanderson',img:"assets/3.png" ,fav:true},
            ]
        }
        // return {
        //     showBooks:false,
        //     title: "the final empire",
        //     author: "saputra",
        //     age: 10
        // }
    },
    methods: {
        // changeTitle(){
        //     this.title = "words of randiance"
        // }
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.fav = !book.fav
        }
    },
    // running in first initiate
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.fav)
        }
    }
})

// vue createApp(data or template) choose one

app.mount("#app")