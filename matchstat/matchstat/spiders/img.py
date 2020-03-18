# -*- coding: utf-8 -*-
import json
import scrapy
from matchstat.database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse
from matchstat.matchstatsql import geturl

class sportsSpider(scrapy.Spider):
    name = 'sports'
    
    def start_requests(self):
        urls=geturl()
        for url in urls:
            # print(h2h)
            yield scrapy.Request(url=url[0],callback=self.parse)

    # allowed_domains = ['https://www.atptour.com/en/scores/archive/australian-open/580/2020/results']

    
    def parse(self, response):
        sq='REPLACE INTO `matchstat`.`imgofsportsman`(`name`, `img`, `nation`) VALUES (%s,%s,%s)'
        firstnamel=response.xpath('//*[@id="modalScoresMatchStatsTable"]/div[1]/div[1]/div[2]/a/span[1]/text()').get()
        lastnamel=response.xpath('//*[@id="modalScoresMatchStatsTable"]/div[1]/div[1]/div[2]/a/span[2]/text()').get()
        namel=str(str(firstnamel).strip()+' '+str(lastnamel).strip())
        firstnamer=response.xpath('//*[@id="modalScoresMatchStatsTable"]/div[1]/div[3]/div[2]/a/span[1]/text()').get()
        lastnamer=response.xpath('//*[@id="modalScoresMatchStatsTable"]/div[1]/div[3]/div[2]/a/span[2]/text()').get()
        namer=str(str(firstnamer).strip()+' '+str(lastnamer).strip())
        imgl='www.atptour.com'+str(response.xpath('//*[@id="modalScoresMatchStatsTable"]/div[1]/div[1]/div[1]/a/img/@src').get())
        imgr='www.atptour.com'+str(response.xpath('//*[@id="modalScoresMatchStatsTable"]/div[1]/div[3]/div[1]/a/img/@src').get())
        tbody=response.xpath('//*[@id="completedScoreBox"]/div/div/div/table/tbody/tr').getall()
        # print(tbody)
        nationl='www.atptour.com'+str(Selector(text=tbody[0]).xpath('//td[@class="won-game"]/div/div/div[2]/a[1]/img/@src').get())
        nationr='www.atptour.com'+str(Selector(text=tbody[1]).xpath('//td[1]/div/div/div[2]/a[1]/img/@src').get())
        
        # nationl=response.xpath('//*[@id="580_MS001_TeamOne_ServingStatus"]/div/div/div[2]/a[1]/img/@src').get()
        # nationr=response.xpath('//*[@id="580_MS001_TeamTwo_ServingStatus"]/div/div/div[2]/a[1]/img/@src').get()

       
        with DB(db='matchstat') as db:
            db.execute(sq,(namel,imgl,nationl))
            db.execute(sq,(namer,imgr,nationr))