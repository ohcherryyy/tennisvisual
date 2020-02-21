#from urllib.parse import quote
# from weibo.customErrors import *
import time
import datetime
import time

class GetURLs():
    '''获取指定话题urls使用方法getURLs()
    start为开始时间
    end为结束时间
    '''
    def __init__(self,start=(datetime.datetime.now()+datetime.timedelta(days=-1)).strftime('%Y-%m-%d-%H'),end=(datetime.datetime.now()).strftime('%Y-%m-%d-%H'),keyWords="华为"):
        if (datetime.datetime.strptime(end,'%Y-%m-%d-%H')-datetime.datetime.strptime(start,'%Y-%m-%d-%H')).days < 1:
            # if (datetime.datetime.strptime(end,'%Y-%m-%d-%H')-datetime.datetime.strptime(start,'%Y-%m-%d-%H')).seconds/3600 < 1:
            #     raise EndError("开始时间与结束时间输入错误，请检查")
            # else:
            #     self.start=datetime.datetime.strptime(start,'%Y-%m-%d-%H')
            #     self.end=datetime.datetime.strptime(end,'%Y-%m-%d-%H')
            #     self.hour=int((self.end-self.start).seconds/3600)
            #     self.day=-1
            #     self.keyWords=keyWords
            else:
                self.start=datetime.datetime.strptime(start,'%Y-%m-%d-%H')
                self.end=datetime.datetime.strptime(end,'%Y-%m-%d-%H')
                self.day=(self.end-self.start).days
                self.hour=-1
                self.keyWords=keyWords
        
    def get(self):
        '''关键字转换，返回一个url列表'''
        #time.strftime("%Y-%m-%d-%H")
        #(datetime.datetime.now()+datetime.timedelta(hours=-100)).strftime("%Y-%m-%d-%H")
        urls=[]
        if self.day!=-1:
            dateRange=self.day*24
        elif self.hour!=-1:
            dateRange=self.hour
        # else:
            # raise EndError("开始时间与结束时间输入错误，请检查")
        for x in range(1,dateRange+1):
            timeParam="%s:%s" % ((self.end+datetime.timedelta(hours=-dateRange-1+x)).strftime("%Y-%m-%d-%H"),(self.end+datetime.timedelta(hours=-dateRange+x)).strftime("%Y-%m-%d-%H"))
            for y in range(1,51):
                url=("https://s.weibo.com/weibo"
                "?q=%s&typeall=1&suball=1"
                "&timescope=custom:%s&Refer=g&page=%d") % (self.keyWords,timeParam,y)
                urls.append(url)
        return urls


if __name__ == "__main__":
    x=GetURLs(start="2019-6-1-8",end="2019-6-1-9",keyWords="华为")
    for x in x.get():
        print(x)

#第一页
#https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D%23%E5%8D%8E%E4%B8%BA%23&page_type=searchall
#第二页
#https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D%23%E5%8D%8E%E4%B8%BA%23&page_type=searchall&page=2
#第三页
#https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D%23%E5%8D%8E%E4%B8%BA%23&page_type=searchall&page=3

#https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%23&page_type=searchall
#https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%23&page_type=searchall