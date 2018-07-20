var express=require('express');
var path=require('path');
var url = require('url');
var mongo=require('mongodb');
var mongoose=require('mongoose');
var push=require('./data');
var StringDecoder = require('string_decoder').StringDecoder;
var app=express();

//mongoose.connect('mongodb://localhost/postesp');
mongoose.connect('mongodb://taruntadi:Bujji%40bangaram143@ds135441.mlab.com:35441/postesp');

var db=mongoose.connection;

app.post('/:api',function(req,res){
    var api=req.params.api;
    console.log(api);
    var method = req.method;
    var headers = req.headers;
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function(data) 
    {
        buffer += decoder.write(data);
    });
    req.on('end', function() 
    {
        buffer += decoder.end();
        var data={
            "id":buffer,
            "apikey":api
        };
        
        push.insert(data);
        
    });
});






var server=app.listen(8000,function(){
    console.log('server at 8000');
});
