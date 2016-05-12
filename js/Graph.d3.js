function Graph() {
    var width = 960;
    var height = 500;
    var color = d3.scale.category20();
    var container = "#graph";
    var charge = -120;
    var linkDistance = 30;
    var linkClass = "link";
    var nodeClass = "node";
    var shape = "circle";
    var size_coefficient = 5;

    function graph(selection) {
        selection.each(function(graph) {
            var force = d3.layout.force()
                .charge(charge)
                .linkDistance(linkDistance)
                .size([width, height]);

            var svg = d3.select(this).append("svg")
                .attr("width", width)
                .attr("height", height);

            force
                .nodes(graph.nodes)
                .links(graph.links)
                .start();

            var link = svg.selectAll("." + linkClass)
                .data(graph.links)
                .enter().append("line")
                .attr("class", linkClass)
                .style("stroke-width", function(d) { return Math.sqrt(d.value); });

            var node = svg.selectAll(nodeClass)
                .data(graph.nodes);


            switch(shape) {
                case "circle":
                    node.enter()
                        .append(shape)
                        .attr("class", nodeClass)
                        .attr("r", size_coefficient)
                        .style("fill", function(d) { return color(d.group); })
                        .call(force.drag);
                    break;
                case "rect":
                    var size_side = (size_coefficient / Math.sqrt(2)) * 2.5;
                    node.enter()
                        .append(shape)
                        .attr("class", nodeClass)
                        .attr("width", size_side)
                        .attr("height", size_side)
                        .style("fill", function(d) { return color(d.group); })
                        .call(force.drag);
                    break;
                default:
                    node.enter()
                        .append(shape)
                        .attr("class", nodeClass)
                        .attr("r", size_coefficient)
                        .style("fill", function(d) { return color(d.group); })
                        .call(force.drag);
                    break;
            }

            node.append("title")
                .text(function(d) { return d.name; });

            force.on("tick", function() {
                link.attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

            switch(shape) {
                case "circle":
                    node.attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; });
                    break;
                case "rect":
                    node.attr("x", function(d) { return d.x; })
                        .attr("y", function(d) { return d.y; });
                    break;
                default:
                    node.attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; });
                    break;
            }

            });
        });

    }

    graph.width = function(value) {
        if(!arguments.length) return width;
        width = value;
        return graph;
    };

    graph.height = function(value) {
        if(!arguments.length) return height;
        height = value;
        return graph;
    };

    graph.color = function(value) {
        if(!arguments.length) return color;
        color = value;
        return graph;
    };

    graph.container = function(value) {
        if(!arguments.length) return container;
        container = value;
        return graph;
    };

    graph.charge = function(value) {
        if(!arguments.length) return charge;
        charge = value;
        return graph;
    };

    graph.linkDistance = function(value) {
        if(!arguments.length) return linkDistance;
        linkDistance = value;
        return graph;
    };

    graph.linkClass = function(value) {
        if(!arguments.length) return linkClass;
        linkClass = value;
        return graph;
    };

    graph.nodeClass = function(value) {
        if(!arguments.length) return nodeClass;
        nodeClass = value;
        return graph;
    };

    graph.shape = function(value) {
        if(!arguments.length) return shape;
        shape = value;
        return graph;
    };

    graph.size = function(value) {
        if(!arguments.length) return size_coefficient;
        size_coefficient = value;
        return graph;
    };

    return graph;
}