var mongo=require('mongodb');
var mongoose=require('mongoose');


var schema=mongoose.Schema;
 
var constructor=new schema({
    id:{
        type:Number
    },
    apikey:{
        type:String
    }
},{collection:'api'});
var data=mongoose.model('data',constructor);



var push={};

push.insert=function(insertdata){
    var insert=new data(insertdata);
    insert.save();
}


module.exports=push;