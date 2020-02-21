#from urllib.parse import quote
# from customErrors import *
import time
import datetime
import time

class GetURLs():
    '''获取指定话题urls使用方法getURLs()'''
    def __init__(self,keyWords="华为",day=1):
        # if day < 1:
        #     # raise EndError("结束页输入错误，请输入大于1得数字")
        # else:
            self.day=day
            self.keyWords=keyWords
        
    def get(self):
        '''关键字转换，返回一个url列表'''
        #time.strftime("%Y-%m-%d-%H")
        #(datetime.datetime.now()+datetime.timedelta(hours=-100)).strftime("%Y-%m-%d-%H")
        urls=[]
        dateRange=self.day*24
        for x in range(1,dateRange+1):
            timeParam="%s:%s" % ((datetime.datetime.now()+datetime.timedelta(hours=-dateRange-1+x)).strftime("%Y-%m-%d-%H"),(datetime.datetime.now()+datetime.timedelta(hours=-dateRange+x)).strftime("%Y-%m-%d-%H"))
            for y in range(1,51):
                url=("https://s.weibo.com/weibo"
                "?q=%s&typeall=1&suball=1"
                "&timescope=custom:%s&Refer=g&page=%d") % (self.keyWords,timeParam,y)
                urls.append(url)
        return urls


if __name__ == "__main__":
    x=GetURLs(keyWords="华为")
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