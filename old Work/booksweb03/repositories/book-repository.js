let Book=require('../entities/book');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER; 

const dbname='booksweb';
const collectionName='books';

const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });



// client.connect()

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



class BookRepository{

   

    constructor(){
        this.collection=null;
        client
            .connect()
            .then(async()=>{
                this.collection= await client.db(dbname).collection(collectionName);
                //console.log('collection is created');
            });
    }

    _waitForConnect(){

        return new Promise( resolve=>{
            process.stdout.write('connecting');
            let id= setInterval( ()=>{
                //console.log('connecting');
                
                process.stdout.write('.');
                if(this.collection){
                    clearInterval(id);
                    process.stdout.write('done\n');
                    resolve(); //work is over
                } //if the connection is set
            },10); //keep trying till the connection is ready
        });

    }

    //this is a function that will execute a call back over mongo collection
    //it will wait till collection is available. and then execute the command
    //it will return the value returned by the command
    async _execute( action ){
        
        await this._waitForConnect();
        return await action(this.collection);
    }

   
    async getAll(){
        
        //let collection =await this.getAuthorCollection();   
        await this._waitForConnect();     
        return await this.collection.find().toArray();       
    
    }

    async add(book){
       
        await this._waitForConnect();
        await this.collection.insert(book);
        
    }

    async addAll(books){
        for (let book of books)
            await this.add(book);
    }

    async getById(id){
        await this._waitForConnect();
        let book =await this.collection.findOne({isbn:id});
        return book;
    }

    async remove(id){
       await this._waitForConnect();
       await collection.deleteOne({isbn:id});
    }

    async update(id, book){
        await this.save();
    }

    save(){
        return new Promise(resolve=>{
            setTimeout(()=>resolve(), 10);
        });
    }

}


module.exports=BookRepository;