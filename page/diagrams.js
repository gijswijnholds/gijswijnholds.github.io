var lineFunction = d3.svg.line()
.x(function(d) { return d.x; })
.y(function(d) { return d.y; })
.interpolate("basis");

function makeLineDataRightUp(point1, point2) {
  return makeLineData(point1, point2, right, down, yDiff2, fstX);
}

function makeLineDataRightDown(point1, point2) {
  return makeLineData(point1, point2, right, up, yDiff, fstX);
}

function makeLineData(point1, point2, f, g, h, k) {
  var point3 = f(point1);
  var point4 = {"x" : k(point1, point2) , "y" : h(point1, point2)};
  var point5 = g(point2);
  return [point3, point4, point5];
}

function xDiff(point1,point2) {
  return point2.x - point1.x;
}

function xDiff2(point1, point2) {
  return point1.x - point2.x;
}

function yDiff(point1,point2) {
  return point1.y + 0.35 * (point2.y - point1.y);
}

function yDiff2(point1, point2) {
  return point2.y - 0.35 * (point2.y - point1.y);
}

function id(point) {
  return point;
}

function fstX(point1, point2) {
  return point1.x;
}

function sndX(point1, point2) {
  return point2.x;
}

function fstY(point1, point2) {
  return point1.y;
}

function left(point) {
  return {"x" : point.x - 25, "y" : point.y};
}

function right(point) {
  return {"x" : point.x + 25, "y" : point.y};
}

function up(point) {
  return {"x" : point.x, "y" : point.y - 25};
}

function down(point) {
  return {"x" : point.x, "y" : point.y + 25};
}

function drawStraightLine(p1, p2, f, g) {
  var svg = d3.select("svg");
  var lineData = [f(p1), g(p2)];
  svg.append("path")
  .attr("d", lineFunction(lineData))
  .attr("stroke", "black")
  .attr("stroke-width", 2)
  .attr("fill", "none");
}

function drawLine(p1, p2, f, g, h, k) {
  var svg = d3.select("svg");
  var lineData = makeLineData(p1, p2, f, g, h, k);
  svg.append("path")
  .attr("d", lineFunction(lineData))
  .attr("stroke", "black")
  .attr("stroke-width", 2)
  .attr("fill", "none");
}

function layoutMonOtimesWhite(point) {
  layoutMonOtimes("white", point);
}

function layoutMonOtimesGray(point) {
  layoutMonOtimes(d3.rgb(205,201,201), point);
}

function turnRed() {
  toggleColor("red");
}

function turnBlack() {
  toggleColor("black");
}

function toggleColor(color) {
  var selection = d3.select("svg").selectAll("svg path");
  console.log(selection);
  selection.style("stroke", color);
}

function layoutMonOtimes(color, point) {
  var cx = point.x;
  var cy = point.y;
  var svg = d3.select("svg");
  var extend = 8.5;
  svg.append("circle").attr({
    cx: cx,
    cy: cy,
    r: 25,
    fill: color,
    "stroke-width": 2,
    stroke: "black"
  }).attr("class","node").on("mouseover", turnRed).on("mouseout", turnBlack);
  svg.append("circle").attr({
    cx: cx,
    cy: cy,
    r: 12,
    fill: color,
    "stroke-width": 1,
    stroke: "black"
  });
  svg.append("line").attr({
    x1: cx-extend,
    y1: cy-extend,
    x2: cx+extend,
    y2: cy+extend,
    stroke: "black"
  });
  svg.append("line").attr({
    x1: cx-extend,
    y1: cy+extend,
    x2: cx+extend,
    y2: cy-extend,
    stroke: "black"
  });
}
