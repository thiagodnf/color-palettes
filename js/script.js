var colorPalettes = [
    {
        version: "Highcharts 5.x",
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
    },
    {
        version: "Highcharts 3.x",
        colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']
    },
    {
        version: "Highcharts 2.x",
        colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']
    },
    {
        version: "Random",
        colors: ['#EAEFF2', '#EAEFF2', '#FF84AF', '#FFA700', '#0072C4', '#00A6E1', '#FF0000', '#73909E', '#73909E']
    }
]

function getColor(color){
    return "<div class='col-md-1 color' data-clipboard-text='"+color+"' style='background-color: "+color+"'>"+color+"</div>"
}

function getPaletteColors(colors){
    var html = "<div class='row'>";

    $.each(colors, function(index, color){
        html += getColor(color);
    });

    return html + "</div>"
}

function getPaletteName(str){
    return "<h3>"+str+"</h3>";
}

$(function(){

    var html = "";

    $.each(colorPalettes, function(index, pallete){
        html += getPaletteName(pallete.version);
        html += getPaletteColors(pallete.colors);
    });

    $("#palettes").html(html);

    var clipboard = new Clipboard('.color');

    clipboard.on('success', function(event) {
        event.clearSelection();

        event.trigger.textContent = 'Copied';

        window.setTimeout(function() {
            event.trigger.textContent = event.text;
        }, 1000);
    });
})
