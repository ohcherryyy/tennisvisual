# -*- coding: UTF-8 -*-
# from database import DB
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

if __name__ == "__main__":
    with open('completematchstat.html',encoding='utf-8') as body:
        text=body.read()
        response=Selector(text=text)
        
        statcatg=response.xpath('//*[@id="completedMatchStats"]/table/tr/th/text()').getall()
        statname=response.xpath('//*[@id="completedMatchStats"]/table/tr[@class="match-stats-row percent-on"]').getall()
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
                    print(statcatg[0].strip(),loser,winner,statnames)
                if (tr>7) and (tr<13):
                    print(statcatg[1].strip(),loser,winner,statnames)
                if (tr>12):
                    print(statcatg[2].strip(),loser,winner,statnames)
        
                    
                    
