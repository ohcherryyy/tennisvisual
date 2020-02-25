# -*- coding: utf-8 -*-
import scrapy
from matchstat.database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse
from matchstat.matchstatsql import geturl

class AusopenmatchSpider(scrapy.Spider):
    name = 'ausopenmatch'
    
    def start_requests(self):
        urls=geturl()
        for url in urls:
            yield scrapy.Request(url=url[0], callback=lambda response, id=url[1]: self.parse(response,id))

    # allowed_domains = ['https://www.atptour.com/en/scores/archive/australian-open/580/2020/results']

    
    def parse(self, response,id):
        statcatg=response.xpath('//*[@id="completedMatchStats"]/table/tr/th/text()').getall()
        statname=response.xpath('//*[@id="completedMatchStats"]/table/tr[@class="match-stats-row percent-on"]').getall()
        sq='INSERT INTO `matchstat`.`wmatchstat`(`id`, `statcateg`,`statslabel`,`loser`,`winner`) VALUES (%s,%s,%s,%s,%s) '
        with DB(db='matchstat') as db:
            for tr in range(0,len(statname)):
                x=Selector(text=statname[tr]).xpath('//td[@class="match-stats-number-left"]/span/a/text()').get()
                if x is None:
                    loser=(Selector(text=statname[tr]).xpath('//td[@class="match-stats-number-right"]/span/text()').get()).strip()
                    winner=(Selector(text=statname[tr]).xpath('//td[@class="match-stats-number-left"]/span/text()').get()).strip()
                    statnames=(Selector(text=statname[tr]).xpath('//td[@class="match-stats-label"]/text()').get()).strip()
                    y=Selector(text=statname[tr]).xpath('//td[@class="match-stats-number-left"]/span[@class="stat-breakdown"]/text()').get()
                    z=Selector(text=statname[tr]).xpath('//td[@class="match-stats-number-right"]/span[@class="stat-breakdown"]/text()').get()
                    if z is not None:
                        loser=loser+z.strip()
                    if y is not None:
                        winner=winner+y.strip()
                    if (tr<8) and (tr>0):
                        db.execute(sq,(id,statcatg[0].strip(),statnames,loser,winner))
                    if (tr>7) and (tr<13):
                        db.execute(sq,(id,statcatg[1].strip(),statnames,loser,winner))
                    if (tr>12):
                        db.execute(sq,(id,statcatg[2].strip(),statnames,loser,winner))
