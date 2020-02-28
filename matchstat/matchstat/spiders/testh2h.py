import scrapy
from matchstat.database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

class H2HSpider(scrapy.Spider):
    name = 'H2H'
    # allowed_domains = ['https://www.atptour.com/en/scores/archive/australian-open/580/2020/results']
    
    start_urls=["https://www.atptour.com/en/scores/archive/australian-open/580/2020/results"]

    def parse(self,response):
        for href in response.xpath('/*[@id="scoresResultsContent"]/div/table/tbody/tr/td/a'):
            print(href)
    #         yield response.follow(href,parse_h2h)
        
    # def parse_h2h(self,response):
