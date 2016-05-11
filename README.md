# Graph.d3

## Overview
This is a wrapper object around D3js, which allows developers to instantiate multiple instances of the visualization and facilitate reusability.

## Data Format
The following JSON is an example of the require format consumable by the Graph object.

````json
{
    "nodes":[
        {"name":"A","group":1},
        {"name":"B","group":1},
        {"name":"C","group":1},
        {"name":"D","group":1},
        {"name":"E","group":1},
        {"name":"F","group":1},
        {"name":"G","group":1}
    ],
    "links": [
        {"source":1,"target":0,"value":1},
        {"source":2,"target":1,"value":8},
        {"source":3,"target":0,"value":10},
        {"source":3,"target":2,"value":6},
        {"source":4,"target":0,"value":1},
        {"source":5,"target":0,"value":1},    
    ]
}
````

## Get Started
The following code is the minimum requirement to get started

````javascript
 var graph = Graph();
 
 var data = { "nodes":[ ... ], "links":[ ... ] }
 
 var container = d3.select("#vis").datum(data).call(graph);
````

## Manipulable Attributes
The following are manipulable attributes of the Graph object

### graph.width
Changes the width of the container

### graph.height;
Changes the height of the container

### graph.color;
Changes the color scale for D3
* d3.scale.category10()
* d3.scale.category20()
* d3.scale.category20b()
* d3.scale.category20c()

### graph.container;
Identifier of the container div where SVG will be appended

### graph.charge;
How close the nodes will be to each other

### graph.linkDistance;
Changes length of links

### graph.shape;
Shape of the node
* rect
* circle

### graph.size;
Size of the node

### graph.linkClass;
CSS class of the links

### graph.nodeClass;
CSS class of the nodes
