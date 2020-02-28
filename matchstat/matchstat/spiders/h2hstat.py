# -*- coding: utf-8 -*-
import json
import scrapy
from matchstat.database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse
from matchstat.matchstatsql import h2hurl

class h2hmatchSpider(scrapy.Spider):
    name = 'h2hmatch'
    
    def start_requests(self):
        urls=h2hurl()
        for h2h in urls:
            # print(h2h)
            yield scrapy.Request(url=h2h[0],callback=lambda response, link=h2h[1]: self.parse(response,link))

    # allowed_domains = ['https://www.atptour.com/en/scores/archive/australian-open/580/2020/results']

    
    def parse(self, response,link):
        data=response.xpath('//*[@id="playerDataModalDefault"]/text()').get()
        test=json.loads(data)
        sq='REPLACE INTO `matchstat`.`h2h`(`URL`, `playerl`, `wincountl`, `rankl`, `agel`, `birthplacel`, `heightl`,`weightl`, `playsl`, `backhandl`, `turnedprol`, `playerr`, `wincountr`, `rankr`, `ager`, `birthplacer`, `heightr`, `weightr`,`playsr`, `backhandr`, `turnedpror`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) '
        backhl=response.xpath('//*[@id="pageScoresH2h"]/div[4]/table/tbody/tr[7]/td[1]/text()').get()
        backhr=response.xpath('//*[@id="pageScoresH2h"]/div[4]/table/tbody/tr[7]/td[3]/text()').get()

        # print((response.url,test["playerLeft"]["firstName"]+test["playerLeft"]["lastName"],test["playerLeft"]["winCount"],test["playerLeft"]["ranking"],test["playerLeft"]["Age"],test["playerLeft"]["BirthPlace"],test["playerLeft"]["HeightCm"],test["playerLeft"]["WeightKg"],test["playerLeft"]["PlayHand"],backhl,test["playerLeft"]["ProYear"],
        #     test["playerRight"]["firstName"]+test["playerRight"]["lastName"],test["playerRight"]["winCount"],test["playerRight"]["ranking"],test["playerRight"]["Age"],test["playerRight"]["BirthPlace"],test["playerRight"]["HeightCm"],test["playerRight"]["WeightKg"],test["playerRight"]["PlayHand"],backhr,test["playerRight"]["ProYear"]))
        with DB(db='matchstat') as db:
            db.execute(sq,(link,test["playerLeft"]["firstName"]+test["playerLeft"]["lastName"],test["playerLeft"]["winCount"],test["playerLeft"]["ranking"],test["playerLeft"]["Age"],test["playerLeft"]["BirthPlace"],test["playerLeft"]["HeightCm"],test["playerLeft"]["WeightKg"],test["playerLeft"]["PlayHand"],backhl,test["playerLeft"]["ProYear"],
            test["playerRight"]["firstName"]+test["playerRight"]["lastName"],test["playerRight"]["winCount"],test["playerRight"]["ranking"],test["playerRight"]["Age"],test["playerRight"]["BirthPlace"],test["playerRight"]["HeightCm"],test["playerRight"]["WeightKg"],test["playerRight"]["PlayHand"],backhr,test["playerRight"]["ProYear"]))