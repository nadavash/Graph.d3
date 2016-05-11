$(function() {
    const CONTAINER = "#graph";

    var graph = Graph().container(CONTAINER)
        .width(1250)
        .height(1000)
        .shape("circle")
        .size(6)
        .charge(-100)
        .linkDistance(500)
        .color(d3.scale.category20());


    var data = {};
    data.nodes = [];
    data.links = [];

    var N = Math.floor(Math.random() * (200));
    var max = N;
    var min = 0;
    var groupMax = Math.floor(Math.random() * (10));
    var groupMin = 0;

    for(var i = 0; i < N; i++) {

        var node = {
            name: "a",
            group: Math.floor(Math.random() * (groupMax - groupMin)) + groupMin
        };

        var link = {
            source: Math.floor(Math.random() * (max - min)) + min,
            target: Math.floor(Math.random() * (max - min)) + min,
            value: 1
        };

        data.nodes.push(node);
        data.links.push(link);
    }

    console.log(data);

    var container = d3.select(CONTAINER).datum(data).call(graph);
});