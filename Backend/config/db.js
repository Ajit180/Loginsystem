module.exports ={
    HOST :'localhost',
    USER:'root',
    PASSWORD:'12345',
    DB:'node_sequlize_api_db',
    dialect:'mysql',


    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }

}
