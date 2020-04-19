function getOption(nodes,links,categoriesname){

    var nodee=[];
    var linkk=[];

    for(var i=0;i<nodes.length;i++){
        var nod=[];
        for(var j=0;j<nodes[i].length;j++){
        var node={};
        node['name']=nodes[i][j].name;
        node['category']=Number(nodes[i][j].category);
        node['symbolSize']=nodes[i][j].symbolSize;
        node['symbol']=nodes[i][j].symbol;
        node['draggable']=true;
        node['value']=Number(nodes[i][j].value);
        if(nodes[i][j].category==0)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[0].name+':{b}';
        }
        if(nodes[i][j].category==1)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[1].name+':{b}';
        }
        if(nodes[i][j].category==2)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[2].name+':{b}';
        }
        if(nodes[i][j].category==3)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[3].name+':{b}';
        }
        if(nodes[i][j].category==4)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[4].name+':{b}';
        }
        if(nodes[i][j].category==5)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[5].name+':{b}';
        }
        if(nodes[i][j].category==6)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[6].name+':{b}';
        }
        if(nodes[i][j].category==7)
        {
            node['emphasis']={};
            node['emphasis']['label']={};
            node['emphasis']['label']['show']=true;
            node['emphasis']['label']['formatter']=categoriesname[7].name+':{b}';
        }
        nod.push(node);
    }
    nodee.push(nod);
    };


   
    for(var i=0;i<links.length;i++){
        var lin=[];
        for(var j=0;j<links[i].length;j++){
        var link={};
        link['source']=links[i][j].source;
        link['target']=links[i][j].target;
        link['value']=links[i][j].value;
        link['id']=links[i][j].id;
        link['emphasis']={}
        link['emphasis']['label']={};
        link['emphasis']['label']['show']=true;
        link['emphasis']['label']['formatter']='{@value}';
        lin.push(link);
        }
        linkk.push(lin);
    }


    option = {
        baseOption:{
            timeline:{
                axisType:'category',
                autoPlay:false,
                playInterval:2000,
                data:['2020','2019','2018','2017','2016','2015','2014','2013','2012','2011'],
                controlStyle:{
                    showPlayBtn:false
                },
            },
            title:{
                top:'5px',
                textStyle:{
                    fontSize:20
                }
            },
        legend:{
            show:true,
            left:'5px',
            top:'50px',
            data:categoriesname.map(function (b){
                return b.name;
            }),
            selected:{
                '64强':false,
                '128强':false
            },
            orient:'vertical',
            borderColor:'#ccc',
            borderWidth:1
            
        },
        series : [
            {
                type:'graph',
                layout:"force",
                force:{
                    repulsion:500,
                    gravity:0.07,
                    edgeLength:[20,400],
                    layoutAnimation:true
                },
                lineStyle: {
                    width:1,
                    curveness:0.2,
                    color:'source'
                        },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                itemStyle: { 
                    emphasis: {
                        label: {
                            show: true,
                            position:'bottom',
                            formatter:'{b}',
                        },
                        lineStyle : {
                            width:5,
                            
                        }
                    }
                },
                focusNodeAdjacency: true,
                roam: true,
                categories:categoriesname,
                nodes: nodee,
                links : linkk,                
            }
        ],
        },
            options:[
                {//2020
                    title:{
                        text:'2020澳大利亚网球公开赛（男单）',
                    },
                    series:[
                        {
                            nodes:nodee[0],
                            links:linkk[0]
                        }
                    ]
                },
                {//2019
                    title:{
                        text:'2019澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[1],
                            links:linkk[1]
                        }
                    ]
                },
                {//2018
                    title:{
                        text:'2018澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[2],
                            links:linkk[2]
                        }
                    ]
                },
                {//2017
                    title:{
                        text:'2017澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[3],
                            links:linkk[3]
                        }
                    ]
                },
                {//2016
                    title:{
                        text:'2016澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[4],
                            links:linkk[4]
                        }
                    ]
                },
                {//2015
                    title:{
                        text:'2015澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[5],
                            links:linkk[5]
                        }
                    ]
                },
                {//2014
                    title:{
                        text:'2014澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[6],
                            links:linkk[6]
                        }
                    ]
                },
                {//2013
                    title:{
                        text:'2013澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[7],
                            links:linkk[7]
                        }
                    ]
                },
                {//2012
                    title:{
                        text:'2012澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[8],
                            links:linkk[8]
                        }
                    ]
                },
                {//2011
                    title:{
                        text:'2011澳大利亚网球公开赛（男单）',
                        fontSize:20
                    },
                    series:[
                        {
                            nodes:nodee[9],
                            links:linkk[9]
                        }
                    ]
                },
            ]
        
    };
    return option;    
}

function drawGraph(mychart,jsondata){
    option=getOption(jsondata);
    mychart.setOption(option);
}
