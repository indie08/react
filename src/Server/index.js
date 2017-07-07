//Dependencies
import express from'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-Middleware';
import open from 'open';
import exphbs from 'express-handlebars';

// Webpack Configuration

import webpackConfig from'../../webpack.config.babel';
//API
import blogApi from './api/blog';

//Helpers
import * as hbsHelpers from '../lib/handlebars';
//Utils
import {isMobile} from'../lib/utils/device';

//Server Port
const port =3000;

//enviroment
const isDevelopment = process.env.NODE_ENV !== 'production';
 
//Express app
const app=express();
 //Public
 app.use(express.static(path.join(__dirname, '../public')));

 //Handlebars setup
 app.engine('.hbs',exphbs({
 	extname:'.hbs',
 	helpers:hbsHelpers
 }));

// view engine setup
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','.hbs');
//Webpack compiler
const webpackCompiler=webpack(webpackConfig);

if(isDevelopment){
//Webpack Middlewares
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

}
//device detector
app.use((req,res,next) =>{
	res.locals.isMobile=isMobile(req.headers['user-agent'])
	return next();
});

//API dispatch
app.use('/api/blog',blogApi);

//Sending all traffic to React
app.get('*',(req,res) => {
res.render('frontend/index',{
	layout:false
})
});
//Listen port
app.listen(port,err => {
	if(!err){
		open('http://localhost:3000');
	}
});