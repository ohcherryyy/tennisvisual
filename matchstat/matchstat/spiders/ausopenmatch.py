# -*- coding: utf-8 -*-
import scrapy
from matchstat.database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

class AusopenmatchSpider(scrapy.Spider):
    name = 'ausopenmatch'
    # allowed_domains = ['https://www.atptour.com/en/scores/archive/australian-open/580/2020/results']
    
    start_urls=["https://www.atptour.com/en/scores/2020/580/MS001/match-stats?isLive=False"]

    
    def parse(self, response):
        # statcatg=response.xpath('//*[@id="completedMatchStats"]/table/tbody/tr/th').getall()
        # statname=response.xpath('//*[@id="completedMatchStats"]/table/tbody/tr[@]').getall()
        with open('matchstat.html', 'wb') as f:
            f.write(response.body)
