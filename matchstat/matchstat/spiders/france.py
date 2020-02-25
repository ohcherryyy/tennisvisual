# -*- coding: utf-8 -*-
import scrapy
from matchstat.database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse


class FranceSpider(scrapy.Spider):
    name = 'france'
    # allowed_domains = ['https://www.atptour.com/en/scores/archive/australian-open/580/2020/results']
    
    start_urls=["https://www.atptour.com/en/scores/archive/wimbledon/540/2019/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2018/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2017/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2016/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2015/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2014/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2013/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2012/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2011/results",
    "https://www.atptour.com/en/scores/archive/wimbledon/540/2010/results"]

    
    def parse(self, response):
        matchn=response.xpath('//*[@id="scoresResultsContent"]/div/table/thead/tr/th/text()').getall()
        y=response.xpath('//*[@id="scoresResultsContent"]/div/table/tbody').getall()
        year=response.xpath('//span[@class="tourney-dates"]/text()').get()
        sq='INSERT INTO `matchstat`.`Wimbledon`(`winnerseed`, `winnername`, `loserseed`, `losername`, `score`, `round`,`year`,`id`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s) '
        if y is not None:
            with DB(db='matchstat') as db:
                for tr in range(0,len(y)):
                    TR=Selector(text=y[tr]).xpath('//tr').getall()
                    scores=Selector(text=y[tr]).xpath('//tr/td[@class="day-table-score"]/a').getall()              
                    for td in range(0,len(scores)):
                        winners=Selector(text=TR[td]).xpath('//td[@class="day-table-seed"]').getall()          
                        winnern=Selector(text=TR[td]).xpath('//td[@class="day-table-name"]/a/text()').getall()                  
                        db.execute(sq,(winners[0],winnern[0],winners[1],winnern[1],scores[td],matchn[tr],year.strip(),0))
            
