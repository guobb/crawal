/**
 * Created by apple on 17/2/23.
 */

const request = require('request');

// 实现gbk到utf-8编码的转化
const iconvLite = require('iconv-lite');

request({url: 'http://top.baidu.com/category?c=10&fr=topindex', encoding: null}, (err, response, body) => {

    let result = iconvLite.decode(body, 'gbk');
    let cheerio = require('cheerio');

    let $ = cheerio.load(result);


    $('.hd h2 a').each(function(){
        let $me = $(this);

       // console.log($me)
        console.log($me.text());
    });


});