import time
import datetime

class GetURLs():

    def __init__(self,start=(datetime.datetime.now()+datetime.timedelta(days=-1)).strftime('%Y/%m/%d'),end=(datetime.datetime.now()).strftime('%Y/%m/%d'),year=2020):
        self.start=datetime.datetime.strptime(start,'%m/%d/%Y')
        self.end=datetime.datetime.strptime(end,'%m/%d/%Y')
        self.day=(self.end-self.start).days 
        self.year=year
    
    def get(self):
        urls=[]
        for x in range(0,self.day+1):
            date=(self.start+datetime.timedelta(days=x)).strftime("%m/%d/%Y")
            url=("https://www.atptour.com/en/scores/archive/australian-open/580/%s/results?matchdate=%s")%(self.year,date)
            urls.append(url)
        return urls


if __name__ == "__main__":
    x=GetURLs(start="1/20/2020",end="2/3/2020",year=2020)
    for x in x.get():
        print(x)