// Layer

// ลุ่มน้ำประธาน 
$('#Basin22').change(function () {
    if (this.checked) {
        choose_active(['MBASIN_E','MBASIN_T'])
        ilayer = this.name;
        ilayerfile = './json/Basin/' + ilayer + '.json';
        ifont = '19px Sriracha,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 0.8)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.8)';
        itextstrokewidth = 4
        ifillcolor = 'rgba(255, 255, 255, 0)';
        istrokecolor = 'rgba(64, 64, 64, 1)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'MBASIN_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
        
    } else {
        del_active(['MBASIN_E','MBASIN_T'])
        removeLayer(layers[this.name],this.name)
    }
})

// ลุ่มน้ำ
$('#Basin').change(function () {
    if (this.checked) {
        choose_active(['Basin_Name_T'])
        ilayer = this.name;
        ilayerfile = './json/Basin/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(200, 0, 0, 1)';
        istrokewidth = 2;
        ilinedash = '';
        izIndex = 2;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex);
    } else {
        del_active(['Basin_Name_T'])
        removeLayer(layers[this.name],this.name)
        //removeLayer(layers['Basin2'])
    }
})

// ลุ่มน้ำสาขา
$('#SubBasin').change(function () {
    if (this.checked) {
        choose_active(['SubBasin_Name_T'])
        ilayer = this.name;
        ilayerfile = './json/Basin/' + ilayer + '.json';
        ifont = '14px Calibri,sans-serif';
        itextfillcolor = 'rgba(200, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.5)';
        itextstrokewidth = 3
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(180, 0, 0, 0.8)';
        istrokewidth = 2;
        ilinedash = '1, 0, 1';
        ilabel = 'SubBasin_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        del_active(['SubBasin_Name_T'])
        removeLayer(layers[this.name],this.name)
    }
})

// จังหวัด
$('#Province').change(function () {
    if (this.checked) {
        choose_active(['Province_Name_T'])
        ilayer = this.name;
        ilayerfile = './json/Admin/' + ilayer + '.json';
        ifont = 'Bold 18px Sriracha,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255)';
        itextstrokewidth = 4
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(0, 0, 0, 1)';
        istrokewidth = 3;
        ilinedash = '10, 0, 10';
        ilabel = 'Province_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        del_active(['Province_Name_T'])
        removeLayer(layers[this.name],this.name)
    }
})

// อำเภอ
$('#District').change(function () {
    if (this.checked) {
        choose_active(['District_Name_T','Province_Name_T'])
        ilayer = this.name;
        ilayerfile = './json/Admin/' + ilayer + '.json';
        ifont = '16px Kanit, sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(64, 64, 64, 1)';
        istrokewidth = 2;
        ilinedash = '10, 0, 10, 0, 10';
        ilabel = 'District_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        del_active(['District_Name_T','Province_Name_T'])
        removeLayer(layers[this.name],this.name)
    }
})

// ตำบล
$('#SubDistrict').change(function () {
    if (this.checked) {
        choose_active(['TAM_NAM_T','AMPHOE_T','PROV_NAM_T'])
        ilayer = this.name;
        ilayerfile = './json/Admin/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(128, 128, 128, 1)';
        istrokewidth = 1.5;
        ilinedash = '5, 1, 5, 1, 5, 1, 5';
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash);
        // $('#SubDistrict_Location').prop('checked', true)
        // $('#SubDistrict_Location').trigger("change")
        setTimeout(function(){
            const minZoom = 11;
            console.log("draw text")
            console.log(minZoom <= view.getZoom())
            if (minZoom <= view.getZoom()) {
                SubDistrict_Location()
                
            }else{
                removeLayer(layers['SubDistrict_Location'],'SubDistrict_Location')
                
            }
        },1000)

    } else {
        removeLayer(layers[this.name],this.name)
        removeLayer(layers['SubDistrict_Location'],'SubDistrict_Location')
        del_active(['TAM_NAM_T','AMPHOE_T','PROV_NAM_T'])
        

        // $('#SubDistrict_Location').prop('checked', false)
        // $('#SubDistrict_Location').trigger("change")
    }
})



// ชื่อตำบล (show label)
// $('#SubDistrict_Location').change(function () {
//     if (this.checked) {
function SubDistrict_Location() {
    //let ilayer = this.name;
    let ilayer = 'SubDistrict';

    // Circle
    var circle = new ol.style.Circle({
        radius: 3,
        fill: new ol.style.Fill({ color: 'rgba(90,90,90,1)' }),
        stroke: new ol.style.Stroke({
            color: 'white', width: 0.5
        })
    });

    var style = new ol.style.Style({
        //image: circle,
        text: new ol.style.Text({
            font: '14px "Calibri", "Arial Unicode MS", "sans-serif"',
            fill: new ol.style.Fill({ color: 'rgba(100,100,100,0.8)' }),
            stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,0.6)', width: 1 }),
            placement: 'point',
            offsetX: 0,
            offsetY: 0
        }),
    });

    var styleFunction = function (feature) {
        style.getText().setText(feature.get('TAM_NAM_T'));
        return style;
    }

    // layers[ilayer] = new ol.layer.Vector({
    layers[ilayer] = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: './json/Admin/' + ilayer + '.json',
            format: new ol.format.TopoJSON()
        }),
        style: styleFunction
    });

    map.addLayer(layers[ilayer])
    layers[ilayer].setZIndex(99);
}
//     } else {
//         removeLayer(layers[this.name],this.name)
//     }
// })

// เทศบาล
$('#Local_Admin').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Admin/' + ilayer + '.json';
        ifont = '13px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(64, 64, 64, 1)';
        istrokewidth = 2;
        ilinedash = '5, 1, 5, 1, 5, 1, 5';
        ilabel = 'Local_Admin_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// หมู่บ้าน
$("#Village").change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Admin/' + ilayer + '.geojson';
        iconfile = './img/village.png';
        // mapsize/imagesize
        iconscale = 17 / 55;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// ถนน
$('#Road').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Trans/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = '';
        istrokecolor = '';
        istrokewidth = undefined;
        izIndex = 2;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, 2);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// ทางรถไฟ
$('#Railway').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Trans/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = '';
        istrokecolor = '';
        istrokewidth = undefined;
        izIndex = 2;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, izIndex);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// สถานีคมนาคม
$('#Trans_Station').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Trans/' + ilayer + '.geojson';
        iconfile = './img/transtation.png';
        iconscale = 18 / 48;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Trans_Station");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Trans_Station') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.TFac_PT_Name_T;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                //map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                //map.getTargetElement().style.cursor = '';
            }
        })

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// for used
// if (ilayer == 'Contour') {

//     var value = feature.get('TP_ELEV');
//     console.log (value)
//     var color = value >= "1" ? 'rgb(95, 95, 95, 0.9)' :
//         value >= "100" ? 'rgb(90, 90, 90, 0.9)' :
//             value >= "200" ? 'rgb(80, 80, 80, 0.9)' :
//                 value >= "300" ? 'rgb(170, 70, 70, 0.9)' :
//                     value >= "400" ? 'rgb(60, 60, 60, 0.9)' :
//                         value >= "500" ? 'rgb(50, 50, 50, 0.9)' :
//                             value >= "600" ? 'rgb(240, 40, 40, 0.9)' :
//                                 value >= "700" ? 'rgb(250, 0, 0, 0.9)' :
//                                     value >= "800" ? 'rgb(250, 0, 20, 0.9)' :
//                                         value >= "900" ? 'rgb(250, 0, 10, 0.9)' :
//                                             value >= "1000" ? 'rgb(250, 0, 0, 0.9)' :
//                                                 'rgb(255, 0, 0, 1)';
//     linestyle.getStroke().setColor(color);
// }

// สภาพภูมิประเทศ (เอาออก)
$("#Thai-Topo").change(function () {
    if (!layers['Thai-Topo']) {
        layers['Thai-Topo'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:thai-topo')
    }
    toggleLayerWithCheckbox(this.checked, layers['Thai-Topo'], 'Thai-Topo')
    toggleInfoWithCheckbox(this.checked, this)
})

// ลำน้ำ Stream
$('#Stream').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Hydrology/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(15, 79, 255, 0.5)';
        istrokewidth = 1.5;

        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// ความจุลำน้ำ Stream_Capacity
$('#Stream_Capacity').change(function () {
    if (this.checked) {
        var linestyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                width: 5
            }),
            text: new ol.style.Text({
                font: '15px calibri, sans-serif',
                placement: 'line',
                offsetX: 0,
                offsetY: -15,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)',
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255,255,255)',
                    width: 4
                })
            })
        });

        layers['Stream_Capacity'] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/Hydrology/Stream_Capacity.json',
                format: new ol.format.TopoJSON()
            }),
            style: function (feature) {
                linestyle.getText().setText("" + feature.get('River_Name'));
                var value = feature.get('River_Capa');
                var color = value >= 3000 ? 'rgb(98, 7, 7, 0.8)' :
                    value >= 2000 ? 'rgb(208, 17, 19, 0.8)' :
                        value >= 1500 ? 'rgb(203, 18, 156, 0.8)' :
                            value >= 1000 ? 'rgb(243, 143, 213, 0.8)' :
                                value >= 500 ? 'rgb(240, 151, 46, 0.8)' :
                                    value >= 200 ? 'rgb(253, 206, 157, 0.8)' :
                                        value >= 150 ? 'rgb(47, 109, 18, 0.8)' :
                                            value >= 100 ? 'rgb(106, 242, 43, 0.8)' :
                                                value >= 50 ? 'rgb(216, 254, 142, 0.8)' :
                                                    value >= 0 ? 'rgb(255, 255, 69, 0.8)' :
                                                        'rgb(255, 255, 255, 0.5)';
                linestyle.getStroke().setColor(color);
                return linestyle;
            }
        });
        addLayer(layers['Stream_Capacity'])
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

// กิโลเมตรลำน้ำ River_Distance (show label)
$('#River_Distance').change(function () {
    if (this.checked) {
        let ilayer = this.name;

        // Circle
        var circle = new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({ color: 'rgba(255,0,0,1)' }),
            stroke: new ol.style.Stroke({
                color: 'white', width: 1
            })
        });

        // apply shape to style
        var style = new ol.style.Style({
            // image: new ol.style.Icon({
            //     src: './img/transtation.png',
            //     anchor: [0, 0],
            //     scale: 0.3
            // }),
            image: circle,
            text: new ol.style.Text({
                font: '15px "Sriracha", "Arial Unicode MS", "sans-serif"',
                fill: new ol.style.Fill({ color: 'rgba(255,0,0,1)' }),
                stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,0.6)', width: 2 }),
                placement: 'point',
                offsetX: 0,
                offsetY: -15
            }),
        });

        var styleFunction = function (feature) {
            style.getText().setText('กม. ' + feature.get('River_Distance'));
            return style;
        }

        // layers[ilayer] = new ol.layer.Vector({
        layers[ilayer] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/Hydrology/' + ilayer + '.json',
                format: new ol.format.TopoJSON()
            }),
            style: styleFunction
        });

        map.addLayer(layers[ilayer])
        layers[ilayer].setZIndex(99);

    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// กิโลเมตรลำน้ำ River_Distance (point label)
$('#River_Distance-').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Hydrology/' + ilayer + '.geojson';
        iconfile = './img/river_distance.png';
        iconscale = 18 / 48;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-River_Distance");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'River_Distance') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Km;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                //map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                //map.getTargetElement().style.cursor = '';
            }
        })

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// แหล่งน้ำ
$('#Waterbody').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Hydrology/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(15, 79, 255, 0.1)';
        istrokecolor = 'rgba(15, 79, 255, 0.5)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// Forest พื้นที่ป่า
$('#Forest').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(163, 255, 155, 0.5)';
        istrokecolor = 'rgba(134, 206, 95, 1)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// Forest พื้นที่ป่าบุ่ง ป่าทาม
$('#FwSwamp').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 255, 197, 0.5)';
        istrokecolor = 'rgba(0, 204, 156, 1)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// ป่าพรุ Swamp
$('#Swamp').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 115, 76, 0.5)';
        istrokecolor = 'rgba(0, 115, 76, 1)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// ป่าชายเลน Mangrove Forest
$('#Mangrove').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(85, 255, 0 0.5)';
        istrokecolor = 'rgba(85, 255, 0, 1)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// NPRK - อุทยานแห่งชาติ
$('#NPRK').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ifont = '13px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(20, 136, 79, 0.5)';
        istrokecolor = 'rgba(20, 136, 79, 0.8)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'NPRK_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
// WLDS เขตรักษาพันธุ์สัตว์ป่า
$('#WLDS').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ifont = '14px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.5)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(153, 135, 196, 0.5)';
        istrokecolor = 'rgba(153, 135, 196, 0.8)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'WLDS_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
// NHTA เขตห้ามล่าสัตว์ป่า
$('#NHTA').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ifont = '14px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.5)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(147, 105, 86, 0.5)';
        istrokecolor = 'rgba(147, 105, 86, 0.8)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'NHTA_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
// NRF เขตป่าสงวนแห่งชาติ
$('#NRF').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ifont = '14px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.5)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(24, 124, 154, 0.5)';
        istrokecolor = 'rgba(24, 124, 154, 0.8)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'NRF_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
// PARK วนอุทยาน
$('#PARK').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ifont = '14px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.5)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(51, 102, 0, 0.5)';
        istrokecolor = 'rgba(51, 102, 0, 0.8)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'PARK_Name_T';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// Wetland พื้นที่ชุ่มน้ำ (ใช้ point แทน)
$('#Wetland-not_use').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.json';
        ifont = '13px Calibri,sans-serif';
        itextfillcolor = 'rgba(0, 0, 0, 1)';
        itextstrokecolor = 'rgba(255, 255, 255, 0.5)';
        itextstrokewidth = 2
        ifillcolor = 'rgba(0, 255, 197, 0.1)';
        istrokecolor = 'rgba(0, 224, 172, 1)';
        istrokewidth = 2;
        ilinedash = '';
        ilabel = 'Name';
        topojson_label(ilayer, ilayerfile, ifont, itextfillcolor, itextstrokecolor, itextstrokewidth, ifillcolor, istrokecolor, istrokewidth, ilinedash, ilabel);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// Wetland พื้นที่ชุ่มน้ำ (point)
$('#Wetland').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Forest/' + ilayer + '.geojson';
        iconfile = './img/wetland.png';
        iconscale = 16 / 100;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Wetland");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Wetland') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name_Full;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                //map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                //map.getTargetElement().style.cursor = '';
            }
        })

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})


// Flood_Tr
$('#Flood_Tr2').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(115, 255, 223, 0.3)';
        istrokecolor = 'rgba(115, 255, 223, 0.4)';
        istrokewidth = 0.5;
        ilinedash = '';
        izIndex = undefined;
        maxres = undefined;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex, maxres);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
$('#Flood_Tr5').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(115, 255, 223, 0.4)';
        istrokecolor = 'rgba(115, 255, 223, 0.5)';
        istrokewidth = 1;
        ilinedash = '';
        izIndex = undefined;
        maxres = undefined;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex, maxres);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
$('#Flood_Tr10').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(115, 255, 223, 0.4)';
        istrokecolor = 'rgba(115, 255, 223, 0.5)';
        istrokewidth = 1;
        ilinedash = '';
        izIndex = undefined;
        maxres = undefined;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex, maxres);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
$('#Flood_Tr25').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 169, 230, 0.4)';
        istrokecolor = 'rgba(0, 169, 230, 0.5)';
        istrokewidth = 1;
        ilinedash = '';
        izIndex = undefined;
        maxres = undefined;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex, maxres);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
$('#Flood_Tr50').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 143, 230, 0.4)';
        istrokecolor = 'rgba(0, 143, 230, 0.5)';
        istrokewidth = 1;
        ilinedash = '';
        izIndex = undefined;
        maxres = undefined;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex, maxres);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
$('#Flood_Tr100').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 38, 115, 0.4)';
        istrokecolor = 'rgba(0, 38, 115, 0.5)';
        istrokewidth = 1;
        ilinedash = '';
        izIndex = undefined;
        maxres = undefined;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, ilinedash, izIndex, maxres);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

// ตัวอย่างสำหรับ json file
$('#Flood_GISTDA2548-bak').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Flood/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 128, 255, 0.2)';
        istrokecolor = 'rgba(58, 160, 255, 0.5)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})

$("#Flood_GISTDA2548").change(function () {
    if (!layers['Flood_GISTDA2548']) {
        layers['Flood_GISTDA2548'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2005_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2548'], 'Flood_GISTDA2548')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2549").change(function () {
    if (!layers['Flood_GISTDA2549']) {
        layers['Flood_GISTDA2549'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2006_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2549'], 'Flood_GISTDA2549')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2550").change(function () {
    if (!layers['Flood_GISTDA2550']) {
        layers['Flood_GISTDA2550'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2007_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2550'], 'Flood_GISTDA2550')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2551").change(function () {
    if (!layers['Flood_GISTDA2551']) {
        layers['Flood_GISTDA2551'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2008_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2551'], 'Flood_GISTDA2551')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2552").change(function () {
    if (!layers['Flood_GISTDA2552']) {
        layers['Flood_GISTDA2552'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2009_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2552'], 'Flood_GISTDA2552')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2553").change(function () {
    if (!layers['Flood_GISTDA2553']) {
        layers['Flood_GISTDA2553'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2010_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2553'], 'Flood_GISTDA2553')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2554").change(function () {
    if (!layers['Flood_GISTDA2554']) {
        layers['Flood_GISTDA2554'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2011_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2554'], 'Flood_GISTDA2554')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2555").change(function () {
    if (!layers['Flood_GISTDA2555']) {
        layers['Flood_GISTDA2555'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2012_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2555'], 'Flood_GISTDA2555')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2556").change(function () {
    if (!layers['Flood_GISTDA2556']) {
        layers['Flood_GISTDA2556'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2013_geo')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2556'], 'Flood_GISTDA2556')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2557").change(function () {
    if (!layers['Flood_GISTDA2557']) {
        layers['Flood_GISTDA2557'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2014')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2557'], 'Flood_GISTDA2557')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2558").change(function () {
    if (!layers['Flood_GISTDA2558']) {
        layers['Flood_GISTDA2558'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2015')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2558'], 'Flood_GISTDA2558')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2559").change(function () {
    if (!layers['Flood_GISTDA2559']) {
        layers['Flood_GISTDA2559'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2016')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2559'], 'Flood_GISTDA2559')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2560").change(function () {
    if (!layers['Flood_GISTDA2560']) {
        layers['Flood_GISTDA2560'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2017')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2560'], 'Flood_GISTDA2560')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2561").change(function () {
    if (!layers['Flood_GISTDA2561']) {
        layers['Flood_GISTDA2561'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2018')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2561'], 'Flood_GISTDA2561')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2562").change(function () {
    if (!layers['Flood_GISTDA2562']) {
        layers['Flood_GISTDA2562'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_2019')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2562'], 'Flood_GISTDA2562')
    toggleInfoWithCheckbox(this.checked, this)
})
$("#Flood_GISTDA2563").change(function () {
    if (!layers['Flood_GISTDA2563']) {
        layers['Flood_GISTDA2563'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:flood_y2020')
    }

    toggleLayerWithCheckbox(this.checked, layers['Flood_GISTDA2563'], 'Flood_GISTDA2563')
    toggleInfoWithCheckbox(this.checked, this)
})

// $("#FloodRepeat").change(function() {
//     if (!layers['FloodRepeat']) {
//         layers['FloodRepeat'] = initWmtsLayer('https://floodtiles.gistda.or.th/geoserver/gwc/service/wmts', 'FloodOnline:RepeatFloodRaster')
//         // layers['FloodRepeat'] = initWmtsLayer('https://floodtiles.gistda.or.th/geoserver/gwc/service/wmts', 'FloodOnline:201110Flood')

//         // เขตเกษตรกรรม ดูสัญลักษณ์ https://floodv2.gistda.or.th/
//         // layers['FloodRepeat'] = initWmtsLayer('https://floodtiles.gistda.or.th/geoserver/gwc/service/wmts', 'FloodOnline:AgricultureArea')
//     }

//     toggleLayerWithCheckbox(this.checked, layers['FloodRepeat'], 'FloodRepeat')
//     //toggleFeatureLayerWithCheckbox(this.checked, 'FloodRepeat')
//     toggleInfoWithCheckbox(this.checked, this)
// })


// $("#FloodRepeat").change(function () {
//     if (!layers['FloodRepeat']) {
//         // layers['FloodRepeat'] = initWmtsLayer('https://floodtiles.gistda.or.th/geoserver/gwc/service/wmts', 'FloodOnline:RepeatFloodRaster')
//         layers['FloodRepeat'] = initWmtsLayer('https://floodtiles.gistda.or.th/geoserver/gwc/service/wmts', 'flood:repeated_flooding')
//     }

//     toggleLayerWithCheckbox(this.checked, layers['FloodRepeat'], 'FloodRepeat')
//     //toggleFeatureLayerWithCheckbox(this.checked, 'FloodRepeat')
//     toggleInfoWithCheckbox(this.checked, this)
// })

$("#FloodRepeat").change(function () {
    if (!layers['FloodRepeat']) {
        layers['FloodRepeat'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:repeated_flooding')
    }

    toggleLayerWithCheckbox(this.checked, layers['FloodRepeat'], 'FloodRepeat')
    toggleInfoWithCheckbox(this.checked, this)
})

$("#RainPrediction").change(function () {
    if (this.checked) {
        layers['RainPrediction'] = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://realearth.ssec.wisc.edu/tiles/NESDIS-GHE-HourlyRainfall/{z}/{x}/{y}.png'
            })
        });
        addLayer(layers['RainPrediction']);
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

$("#Irr_Area2").change(function () {
    if (!layers['Irr_Area2']) {

        layers['Irr_Area2'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:L07_IrrigationArea_RID_xxk_yxxxx')

        // เขตเกษตรกรรม ดูสัญลักษณ์ https://floodv2.gistda.or.th/
        // layers['Irr_Area2'] = initLayer('https://tile.gistda.or.th/geoserver/flood/ows', 'flood:L07_IrrigationArea_RID_xxk_yxxxx')
    }

    toggleLayerWithCheckbox(this.checked, layers['Irr_Area2'], 'Irr_Area2')
    //toggleFeatureLayerWithCheckbox(this.checked, 'Irr_Area2')
    toggleInfoWithCheckbox(this.checked, this)
})

// FloodRisk
$('#FloodRisk').change(function () {
    if (this.checked) {
        //To format geojson features based on RFC 7946 Specification
        var replacer = function (key, value) {
            if (value.geometry) {
                var type;
                var rawType = value.type;
                var geometry = value.geometry;

                if (rawType === 1) {
                    type = 'MultiPoint';
                    if (geometry.length == 1) {
                        type = 'Point';
                        geometry = geometry[0];
                    }
                } else if (rawType === 2) {
                    type = 'MultiLineString';
                    if (geometry.length == 1) {
                        type = 'LineString';
                        geometry = geometry[0];
                    }
                } else if (rawType === 3) {
                    type = 'Polygon';
                    if (geometry.length > 1) {
                        type = 'MultiPolygon';
                        geometry = [geometry];
                    }
                }

                return {
                    'type': 'Feature',
                    'geometry': {
                        'type': type,
                        'coordinates': geometry
                    },
                    'properties': value.tags
                };
            } else {
                return value;
            }
        };

        //To project the geojson tiles to the screen
        var tilePixels = new ol.proj.Projection({
            code: 'TILE_PIXELS',
            units: 'tile-pixels'
        });

        //topojson data which is converted to geojson 
        var url = './json/Risk/FloodRisk.json';
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (json) {
            //conversion of topojson after promise is done
            // remove #1
            var geojson = topojson.feature(json, json.objects["FloodRisk"]);
            //converts geojson data into vector tiles on the fly
            // change #2 geojson -> json
            // var tileIndex = geojsonvt(geojson, {
            var tileIndex = geojsonvt(geojson, {
                maxZoom: 20,
                extent: 4096,
                debug: 1
            });

            //Process of combining openLayers and geojson-vt
            var vectorSource = new ol.source.VectorTile({
                format: new ol.format.GeoJSON(),
                // add #3 tileGrid & tilePixelRatio
                // tileGrid: ol.tilegrid.createXYZ(),
                // tilePixelRatio: 16,                
                tileLoadFunction: function (tile) {
                    //Preparation of tile data
                    var format = tile.getFormat();
                    var tileCoord = tile.getTileCoord();
                    // console.log(tileCoord)
                    var data = tileIndex.getTile(tileCoord[0], tileCoord[1], -tileCoord[2] - 1);

                    //Facilitates the slicing of Geojson data 
                    //Preparation of Geojson data
                    var features = format.readFeatures(
                        JSON.stringify({
                            type: 'FeatureCollection',
                            features: data ? data.features : []
                        }, replacer));
                    //Responsible for loading tiles based on prepped data
                    tile.setLoader(function () {
                        tile.setFeatures(features);
                        tile.setProjection(tilePixels);
                    });
                },
                // arbitrary url, we don't use it in the tileLoadFunction
                url: 'data:'
            });

            var style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(64, 64, 64, 0.5)',
                    width: 0.2
                }),
                fill: new ol.style.Fill()
            });

            //VectorTile Instance with geojson format and custom tileLoadFunction method
            layers['FloodRisk'] = new ol.layer.VectorTile({
                source: vectorSource,
                style: function (feature) {
                    var value = feature.get('Flood_Tr');
                    var color = value == "100" ? 'rgba(0, 38, 115, 1)' :
                        value == "25" ? 'rgba(0, 132, 168, 1)' :
                            value == "10" ? 'rgba(0, 255, 197, 1)' :
                                'rgba(255, 255, 255, 0)';
                    style.getFill().setColor(color);
                    return style;
                }
            });
            addLayer(layers['FloodRisk']);
        });
    } else {
        removeLayer(layers['FloodRisk'])
    }
    toggleInfoWithCheckbox(this.checked, this)
});

// Landslide
$('#Landslide').change(function () {
    if (this.checked) {

        var style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgb(64, 64, 64, 0.2)',
                width: 0.5
            }),
            fill: new ol.style.Fill()
        });

        layers['Landslide'] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/Risk/Landslide.json',
                format: new ol.format.TopoJSON()
            }),

            style: function (feature) {
                var value = feature.get('GRID_CODE');
                var color = value == "1" ? 'rgba(74, 217, 0, 0.5)' :
                    value == "2" ? 'rgba(242, 241, 0, 0.5)' :
                        value == "3" ? 'rgba(239, 0, 0, 0.5)' :
                            value == "4" ? 'rgba(19, 50, 221, 0.5)' :
                                'rgba(255, 255, 255, 0)';
                style.getFill().setColor(color);
                return style;
            },

        });
        addLayer(layers['Landslide'])
    } else {
        removeLayer(layers['Landslide'])
    }
    toggleInfoWithCheckbox(this.checked, this)
});

// Supply_Shortage เสี่ยงขาดแคลน้ำอุปโภค-บริโภค อุตสาหกรรม
$('#Supply_Shortage').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Risk/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(200, 0, 0, 1)';
        istrokewidth = 2;
        izIndex = 2;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, izIndex);
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

// Irr_Shortage เสี่ยงขาดแคลน้ำเพื่อการเกษตร
$('#Irr_Shortage').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Risk/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(0, 0, 0, 0)';
        istrokecolor = 'rgba(200, 0, 0, 1)';
        istrokewidth = 2;
        izIndex = 2;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, izIndex);
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

$("#Drought-geoserver").change(function () {
    if (!layers['Drought']) {
        layers['Drought'] = initLayer('http://127.0.0.1:8080/geoserver/MIS_Mun/ows', 'MIS_Mun:Drought')
    }

    toggleLayerWithCheckbox(this.checked, layers['Drought'], 'Drought')
    toggleInfoWithCheckbox(this.checked, this)
})

// ผังน้ำ
// พื้นที่ทางน้ำหลากบริเวณริมน้ำ (ลน.)
$('#Waterway').change(function () {
    document.getElementById('Waterway_ed').style.display = 'none'
    if (this.checked) {
        //document.getElementById('Waterway_ed').style.display = 'block'
        document.getElementsByClassName('opacity-controls')[0].style.display = 'block'
        document.getElementById('Waterway_ed').value = 2
        let opacity = document.getElementById('Waterway_ed').value
        let sets = [0.1,0.6,0.8]
        ilayer = this.name;
        ilayerfile = './json/WaterChart/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(85, 255, 0, '+(sets[opacity])+')';
        istrokecolor = 'rgba(56, 168, 0, '+(sets[opacity])+')';
        istrokewidth = 1.5;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

var last_opacity_Waterway = 0.8

function opacity_Waterway(){
    if(document.getElementById('Waterway').checked){
        let opacity = document.getElementById('Waterway_ed').value
        let sets = [0.1,0.6,0.8]
        console.log(last_opacity_Waterway == 0.8,sets[opacity] == 0.1)
        if(last_opacity_Waterway == 0.8 && sets[opacity] == 0.1){
            document.getElementById('Waterway_ed').value = 1
        }else if(last_opacity_Waterway == 0.1 && sets[opacity] == 0.8){
            document.getElementById('Waterway_ed').value = 1
        }
        last_opacity_Waterway = sets[opacity]
        opacity = document.getElementById('Waterway_ed').value
        removeLayer(layers[document.getElementById('Waterway').name])
        ilayer = document.getElementById('Waterway').name;
        ilayerfile = './json/WaterChart/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(85, 255, 0, '+(sets[opacity])+')';
        istrokecolor = 'rgba(56, 168, 0, '+(sets[opacity])+')';
        istrokewidth = 1.5;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    }
}

// พื้นที่ทางน้ำหลาก FloodWay
$('#Floodway').change(function () {
    document.getElementById('Floodway_ed').style.display = 'none'
    if (this.checked) {
        document.getElementById('Floodway_ed').style.display = 'block'
        document.getElementsByClassName('opacity-controls')[0].style.display = 'block'
        document.getElementById('Floodway_ed').value = 2
        let opacity = document.getElementById('Floodway_ed').value
        let sets = [0.1,0.6,0.8]
        
        removeLayer(layers[document.getElementById('Floodway').name])
        ilayer = document.getElementById('Floodway').name;
        ilayerfile = './json/WaterChart/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(163, 200, 255, '+(sets[opacity]).toFixed(2)+')';
        istrokecolor = 'rgba(0, 148, 255, '+(1)+')';
        istrokewidth = 1.5;
        console.log(sets[opacity],opacity)//' ',undefined,50,
        geojson_vt(sets[opacity],ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

var last_opacity_Floodway = 0.8

function opacity_Floodway(){
    if(document.getElementById('Floodway').checked){
        let opacity = document.getElementById('Floodway_ed').value
        let sets = [0.1,0.6,0.8]
        if(last_opacity_Floodway == 0.8 && sets[opacity] == 0.1){
            document.getElementById('Floodway_ed').value = 1
        }else if(last_opacity_Floodway == 0.1 && sets[opacity] == 0.8){
            document.getElementById('Floodway_ed').value = 1
        }
        last_opacity_Floodway = sets[opacity]
        opacity = document.getElementById('Floodway_ed').value
        removeLayer(layers[document.getElementById('Floodway').name])
        ilayer = document.getElementById('Floodway').name;
        ilayerfile = './json/WaterChart/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(163, 200, 255, '+(sets[opacity]).toFixed(2)+')';
        istrokecolor = 'rgba(0, 148, 255, '+(sets[opacity])+')';
        istrokewidth = 1.5;
        console.log(sets[opacity],opacity)//' ',undefined,50,
        geojson_vt(sets[opacity],ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    }
}
// พื้นที่น้ำนอง FloodArea
// ใช้ function geojson_vt ไม่ได้
// $('#FloodArea').change(function () {
//     if (this.checked) {
//         ilayer = this.name;
//         ilayerfile = './json/WaterChart/' + ilayer + '.json';
//         ilayerobject = ilayer;
//         ifillcolor = 'rgba(0, 38, 255, 0.5)';
//         istrokecolor = 'rgba(0, 148, 255, 0.5)';
//         istrokewidth = 1.5;
//         geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
//     }else{
//         removeLayer(layers[this.name],this.name)
//     }
// })

// พื้นที่น้ำนอง FloodArea
$('#FloodArea').change(function () {
    document.getElementById('FloodArea_ed').style.display = 'none'
    if (this.checked) {
        document.getElementById('FloodArea_ed').style.display = 'block'
        document.getElementsByClassName('opacity-controls')[0].style.display = 'block'
        document.getElementById('FloodArea_ed').value = 2
        let opacity = document.getElementById('FloodArea_ed').value
        let sets = [0.1,0.6,0.8]
        layers['FloodArea'] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/WaterChart/FloodArea.json',
                format: new ol.format.TopoJSON()
            }),
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(190, 255, 232, '+(sets[opacity])+')'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 38, 115, '+(sets[opacity])+')',
                    width: 1.5
                })
            })
        });
        addLayer(layers['FloodArea'])
    } else {
        removeLayer(layers['FloodArea'])
    }
    toggleInfoWithCheckbox(this.checked, this)
});

var last_opacity_FloodArea = 0.8

function opacity_FloodArea(){
    if(document.getElementById('FloodArea').checked){
        let opacity = document.getElementById('FloodArea_ed').value
        let sets = [0.1,0.6,0.8]
        if(last_opacity_FloodArea == 0.8 && sets[opacity] == 0.1){
            document.getElementById('FloodArea_ed').value = 1
        }else if(last_opacity_FloodArea == 0.1 && sets[opacity] == 0.8){
            document.getElementById('FloodArea_ed').value = 1
        }
        last_opacity_FloodArea = sets[opacity]
        opacity = document.getElementById('FloodArea_ed').value
        removeLayer(layers[document.getElementById('FloodArea').name])
        ilayer = document.getElementById('FloodArea').name;
        ilayerfile = './json/WaterChart/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(190, 255, 232, '+(sets[opacity]).toFixed(2)+')';
        istrokecolor = 'rgba(0, 38, 115, '+(sets[opacity])+')';
        istrokewidth = 1.5;
        console.log(sets[opacity])//' ',undefined,50,
        geojson_vt(sets[opacity],ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    }
}

// พื้นที่ลุ่มต่ำ Lowland
// ใช้ function geojson_vt ไม่ได้
// $('#Lowland').change(function () {
//     if (this.checked) {
//         ilayer = this.name;
//         ilayerfile = './json/WaterChart/' + ilayer + '.json';
//         ilayerobject = ilayer;
//         ifillcolor = 'rgba(255, 157, 135, 0.3)';
//         istrokecolor = 'rgba(255, 157, 135, 0.5)';
//         istrokewidth = 1.5;
//         geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
//     }else{
//         removeLayer(layers[this.name],this.name)
//     }
// })

// พื้นที่ลุ่มต่ำ Lowland
$('#Lowland').change(function () {
    document.getElementById('Lowland_ed').style.display = 'none'
    document.getElementsByClassName('opacity-controls')[0].style.display = 'none'
    if (this.checked) {
        document.getElementById('Lowland_ed').style.display = 'block'
        document.getElementsByClassName('opacity-controls')[0].style.display = 'block'
        document.getElementById('Lowland_ed').value = 2
        let opacity = document.getElementById('Lowland_ed').value
        let sets = [0.1,0.6,0.8]
        layers['Lowland'] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/WaterChart/Lowland.json',
                format: new ol.format.TopoJSON()
            }),
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(237, 182, 73, '+sets[opacity]+')'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(177, 127, 27, 1)',
                    width: 1.5
                })
            })
        });
        addLayer(layers['Lowland'])
    } else {
        removeLayer(layers['Lowland'])
    }
    toggleInfoWithCheckbox(this.checked, this)
});

var last_opacity_Lowland = 0.8

function opacity_Lowland(){
    if(document.getElementById('Lowland').checked){
        let opacity = document.getElementById('Lowland_ed').value
        let sets = [0.1,0.6,0.8]
        if(last_opacity_Lowland == 0.8 && sets[opacity] == 0.1){
            document.getElementById('Lowland_ed').value = 1
        }else if(last_opacity_Lowland == 0.1 && sets[opacity] == 0.8){
            document.getElementById('Lowland_ed').value = 1
        }
        last_opacity_Lowland = sets[opacity]
        opacity = document.getElementById('Lowland_ed').value
        removeLayer(layers[document.getElementById('Lowland').name])
        ilayer = document.getElementById('Lowland').name;
        ilayerfile = './json/WaterChart/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(237, 182, 73, '+(opacity-0.2).toFixed(2)+')';
        istrokecolor = 'rgba(177, 127, 27, '+(1)+')';
        istrokewidth = 1.5;
        console.log(sets[opacity])//' ',undefined,50,
        geojson_vt(sets[opacity],ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    }
}
// อ่างเก็บน้ำ Reservoir
// $('#Reservoir').change(function () {
//     if (this.checked) {
//         markerName = $(this).attr('marker-id')
//         ilayer = this.name;
//         ilayerfile = './json/Support/' + ilayer + '.geojson';
//         iconfile = './img/reservoir_l.png';
//         iconscale = 40 / 100;
//         point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

//         // display popup on hover
//         var element = document.getElementById("hover-Reservoir");

//         var popup = new ol.Overlay({
//             element: element,
//             positioning: "bottom-center",
//             stopEvent: false,
//             offset: [0, -20]
//         });
//         map.addOverlay(popup);

//         map.on("pointermove", function (evt) {
//             var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

//                 if (feature.get('name') == 'Reservoir') {
//                     return feature;
//                 };
//             });

//             let featureContent;
//             if (feature) {
//                 var coordinates = feature.getGeometry().getCoordinates();
//                 popup.setPosition(coordinates);

//                 featureContent = feature.get('data').properties.res_name;

//                 $(element).popover({
//                     placement: "top",
//                     html: true,
//                     content: featureContent
//                 });
//                 // change mouse cursor when over marker
//                 map.getTargetElement().style.cursor = 'pointer';
//                 $(element).popover("show");
//             } else {
//                 $(element).popover("dispose");
//                 map.getTargetElement().style.cursor = '';
//             }
//         })

//     } else {
//         removeLayer(layers[this.name],this.name)
//         if (markerName)
//             removefeatureInfo(this.name)
//     }
// })

// อ่างเก็บน้ำ Reservoir
$('#Reservoir').change(function () {
    if (this.checked) {
        var type = $(this).attr('name')
        var markerName = $(this).attr('marker-id')
    
        $.ajax({
            type: "GET",
            url: './json/Support/Reservoir.geojson',
            cache: false,
            dataType: "json",
            success: function (result) {
                //console.log('Reservoir :', result.features)

                var iconFeatures = []
                $.each(result.features, function (i, data) {
                    //console.log(data, reservoir_icon(data.properties.size))
                    var latLong = data.geometry.coordinates
                    var iconGeometry = ol.proj.fromLonLat([parseFloat(latLong[0]), parseFloat(latLong[1])])
                    var iconFeature = new ol.Feature({
                        geometry: new ol.geom.Point(iconGeometry),
                        iconGeometry,
                        name: markerName,
                        data: data
                    });

                    var iconStyle = new ol.style.Style({
                        image: new ol.style.Icon(({
                            anchor: [0.5, 1],
                            opacity: 0.8,
                            src: reservoir_icon(data.properties.size),
                            scale: 36 / 100
                        }))
                    });

                    iconFeature.setStyle(iconStyle)
                    iconFeatures.push(iconFeature)

                    //console.log(iconFeatures)
                })

                var vectorSource = new ol.source.Vector({
                    features: iconFeatures
                })

                layers['Reservoir'] = new ol.layer.Vector({
                    source: vectorSource
                })
                //console.log('adding', iconFeatures)
                addLayer(layers['Reservoir'])
            }
        });

        // display popup on hover
        var element = document.getElementById("hover-Reservoir");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Reservoir') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.res_name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })

    } else {
        removeLayer(layers['Reservoir'],'Reservoir')
        if (markerName)
            removefeatureInfo(this.name)
    }
})

function reservoir_icon(size) {
    var icon = './img/reservoir_l.png';
    if (size == 'm')
        icon = './img/reservoir_m.png';
    return icon;
}

// โครงการชลประทาน Irr_Project
$('#Irr_Project').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/Irr_Project.png';
        iconscale = 16 / 18;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Irr_Project");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Irr_Project') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Irr_Project_Name_T;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// พื้นที่ชลประทาน Irr_Area
$('#Irr_Area').change(function () {
    if (this.checked) {
        var labelStyle = new ol.style.Style({
            text: new ol.style.Text({
                font: '13px Calibri,sans-serif',
                overflow: true,
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        });

        var Irr_AreaStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 59, 0, 0.4)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(255, 59, 0, 0.4)',
                width: 0.5
            })
        });
        var style = [Irr_AreaStyle, labelStyle];

        layers['Irr_Area'] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/Support/Irr_Area.json',
                format: new ol.format.TopoJSON()
            }),
            style: function (feature) {

                var geometry = feature.getGeometry();
                if (geometry.getType() == 'MultiPolygon') {
                    // Only render label for the widest polygon of a multipolygon
                    var polygons = geometry.getPolygons();
                    var widest = 0;
                    for (var i = 0, ii = polygons.length; i < ii; ++i) {
                        var polygon = polygons[i];
                        var width = ol.extent.getWidth(polygon.getExtent());
                        if (width > widest) {
                            widest = width;
                            geometry = polygon;
                        }
                    }
                }
                // Check if default label position fits in the view and move it inside if necessary
                geometry = geometry.getInteriorPoint();
                var size = map.getSize();
                var extent = map.getView().calculateExtent([size[0] - 12, size[1] - 12]);
                var textAlign = 'center';
                var coordinates = geometry.getCoordinates();
                if (!geometry.intersectsExtent(extent)) {
                    geometry = new ol.geom.Point(ol.geom.Polygon.fromExtent(extent).getClosestPoint(coordinates));
                    // Align text if at either side
                    var x = geometry.getCoordinates()[0];
                    if (x > coordinates[0]) {
                        textAlign = 'left';
                    }
                    if (x < coordinates[0]) {
                        textAlign = 'right';
                    }
                }

                labelStyle.setGeometry(geometry);
                labelStyle.getText().setText(feature.get('PROJNAME'));
                labelStyle.getText().setTextAlign(textAlign);
                return style;
            },
            declutter: true,
            renderBuffer: 1  // If left at default value labels will appear when countries not visible
        });
        addLayer(layers['Irr_Area'])
    } else {
        removeLayer(layers['Irr_Area'],'Irr_Area')
    }
});

// สถานีสูบน้ำ Irr_Pump
$('#Irr_Pump').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/Pump.png';
        iconscale = 24 / 24;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Irr_Pump");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Irr_Pump') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = "สถานี: " + feature.get('data').properties.IRR_Name_T;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// บ่อบาดาล Well
$('#Well').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/Well1.png';
        iconscale = 12 / 12;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// Landuse
$('#lu_province').select2({ width: '100%' }).on("select2:select", function (e) {
    removeLayer(layers['Landuse'],'Landuse');

    var lu_objects = $('#lu_province').val();
    var lu_filename = lu_objects + '.json';

    if (lu_objects !== '') {

        //To format geojson features based on RFC 7946 Specification
        var replacer = function (key, value) {
            if (value.geometry) {
                var type;
                var rawType = value.type;
                var geometry = value.geometry;

                if (rawType === 1) {
                    type = 'MultiPoint';
                    if (geometry.length == 1) {
                        type = 'Point';
                        geometry = geometry[0];
                    }
                } else if (rawType === 2) {
                    type = 'MultiLineString';
                    if (geometry.length == 1) {
                        type = 'LineString';
                        geometry = geometry[0];
                    }
                } else if (rawType === 3) {
                    type = 'Polygon';
                    if (geometry.length > 1) {
                        type = 'MultiPolygon';
                        geometry = [geometry];
                    }
                }

                return {
                    'type': 'Feature',
                    'geometry': {
                        'type': type,
                        'coordinates': geometry
                    },
                    'properties': value.tags
                };
            } else {
                return value;
            }
        };

        //To project the geojson tiles to the screen
        var tilePixels = new ol.proj.Projection({
            code: 'TILE_PIXELS',
            units: 'tile-pixels'
        });

        //topojson data which is converted to geojson
        var url = './json/Landuse/' + lu_filename;
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (json) {
            //conversion of topojson after promise is done
            var geojson = topojson.feature(json, json.objects[lu_objects]);
            //converts geojson data into vector tiles on the fly
            var tileIndex = geojsonvt(geojson, {
                maxZoom: 20,
                extent: 4096,
                debug: 1 //look at console.log
            });

            //Process of combining openLayers and geojson-vt
            var vectorSource = new ol.source.VectorTile({
                format: new ol.format.GeoJSON(),
                tileLoadFunction: function (tile) {
                    //Preparation of tile data
                    var format = tile.getFormat();
                    var tileCoord = tile.getTileCoord();
                    // console.log(tileCoord)
                    var data = tileIndex.getTile(tileCoord[0], tileCoord[1], -tileCoord[2] - 1);

                    //Facilitates the slicing of Geojson data 
                    //Preparation of Geojson data
                    var features = format.readFeatures(
                        JSON.stringify({
                            type: 'FeatureCollection',
                            features: data ? data.features : []
                        }, replacer));
                    //Responsible for loading tiles based on prepped data
                    tile.setLoader(function () {
                        tile.setFeatures(features);
                        tile.setProjection(tilePixels);
                    });
                },
                // arbitrary url, we don't use it in the tileLoadFunction
                url: 'data:'
            });

            var style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(64, 64, 64, 0.2)',
                    width: 0.5
                }),
                fill: new ol.style.Fill()
            });

            //VectorTile Instance with geojson format and custom tileLoadFunction method
            layers['Landuse'] = new ol.layer.VectorTile({
                source: vectorSource,
                style: function (feature) {
                    var value = feature.get('LUL1_CODE');
                    var color = value == "U" ? 'rgba(242, 0, 0, 0.5)' :
                        value == "A" ? 'rgba(197, 165, 142, 0.5)' :
                            value == "F" ? 'rgba(1, 122, 0, 0.5)' :
                                value == "W" ? 'rgba(0, 0, 214, 0.5)' :
                                    value == "M" ? 'rgba(114, 114, 114, 0.5)' :
                                        'rgba(255, 255, 255, 0.5)';
                    style.getFill().setColor(color);
                    return style;
                }
            });
            addLayer(layers['Landuse']);
        });
    } else {
        removeLayer(layers['Landuse'],'Landuse');
        $('#lu_province').val('');
    }
})

// สถานีตรวจอากาศ Weather_Station
$('#Weather_Station').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/Weather_Station.png';
        iconscale = 14 / 24;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Weather_Station");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Weather_Station') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = "สถานี: " + feature.get('data').properties.station_th;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// สถานีวัดน้ำฝน Rain_Station
$('#Rain_Station').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/Rain_Station.png';
        iconscale = 12 / 12;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Rain_Station");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Rain_Station') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = "สถานีวัดน้ำฝน: " + feature.get('data').properties.Rain_Station_Code;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// สถานีวัดน้ำท่า Level_Station
$('#Level_Station').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/Level_Station.png';
        iconscale = 13 / 12;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Level_Station");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Level_Station') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = "สถานีวัดน้ำท่า: " + feature.get('data').properties.Hydro_Station_Code;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// Isohyet
$('#Isohyet').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = '';
        istrokecolor = '';
        istrokewidth = undefined;
        izIndex = 2;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, izIndex);
    } else {
        removeLayer(layers[this.name],this.name)
    }
})


// สะพาน Bridge
$('#Bridge').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/bridge.png';
        iconscale = 16 / 50;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Bridge");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Bridge') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName) {
            removefeatureInfo(this.name)
        }
    }
})

// เขื่อนทดน้ำ Diversion_Dam
$('#Diversion_Dam').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/diversion_dam.png';
        iconscale = 20 / 85;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Diversion_Dam");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Diversion_Dam') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// ฝาย Weir
$('#Weir').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/weir.png';
        iconscale = 16 / 35;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);


        // display popup on hover
        var element = document.getElementById("hover-Weir");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Weir') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// ประตูระบายน้ำ Regulator
$('#Regulator').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/regulator.png';
        iconscale = 20 / 41;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);


        // display popup on hover
        var element = document.getElementById("hover-Regulator");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Regulator') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// คันป้องกันน้ำท่วม Polder
$('#Polder').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/polder.png';
        iconscale = 16 / 40;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);


        // display popup on hover
        var element = document.getElementById("hover-Polder");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Polder') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// เขื่อนป้องกันตลิ่ง Levee
$('#Levee').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/levee.png';
        iconscale = 18 / 41;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);


        // display popup on hover
        var element = document.getElementById("hover-Levee");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Levee') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// ทรบ. ท่อลอด Culvert
$('#Culvert').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/culvert.png';
        iconscale = 16 / 56;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);


        // display popup on hover
        var element = document.getElementById("hover-Culvert");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {

                if (feature.get('name') == 'Culvert') {
                    return feature;
                };
            });

            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        })
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// แสดงสิ่งกีดขวางทั้งหมด Obstruction_all
$('#Obstruction_all').change(function () {
    if (this.checked) {

        // first makername undefine
        try {
            $('.obstruction_checkbox').prop('checked', false)
            $('.obstruction_checkbox').trigger("change")
        } catch (e) {
            var makername;
        }

        $('.obstruction_checkbox').prop('checked', true)
        $('.obstruction_checkbox').trigger("change")
    } else {
        $('.obstruction_checkbox').prop('checked', false)
        $('.obstruction_checkbox').trigger("change")
    }
})

// Areabased
$('#Areabased').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(163, 200, 255, 0.3)';
        istrokecolor = 'rgba(0, 148, 255, 0.5)';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);
    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

// รูปตัดทางน้ำ Cross_Section
$('#Cross_Section').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        //ilayerfile = './json/xsfile.geojson';
        iconfile = './img/xs.png';
        iconscale = 13 / 13;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Cross_Section");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                if (feature.get('name') == 'Cross_Section') {
                    return feature;
                };
            });
            var featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = 'id = ' + feature.get('data').properties.NO;
                featureContent += '<br />รูปตัดลำน้ำที่ ' + feature.get('data').properties.Xsection_No;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                this.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                this.getTargetElement().style.cursor = '';
            }
        });
    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// หมุดหลักฐาน MapControl
$('#MapControl').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        // ilayerfile = './json/Support/' + ilayer + '.geojson';
        ilayerfile = './json/Support/MapControl.geojson';
        iconfile = './img/mapcontrol.png';
        iconscale = 17 / 24;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-MapControl");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                if (feature.get('name') == 'MapControl') {
                    return feature;
                };
            });
            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = 'หมุดหลักฐานที่ <br />' + feature.get('data').properties.mapct;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        });

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// ความลึกแหล่งน้ำ Waterdepth
$('#Waterdepth').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/waterdepth.png';
        iconscale = 17 / 52;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Waterdepth");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                if (feature.get('name') == 'Waterdepth') {
                    return feature;
                };
            });
            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = 'แหล่งน้ำ <br />' + feature.get('data').properties.name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        });

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// ระดับน้ำท่วมที่เคยเกิดขึ้น Floodmark
$('#Floodmark').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/floodmark.png';
        iconscale = 17 / 100;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);

        // display popup on hover
        var element = document.getElementById("hover-Floodmark");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                if (feature.get('name') == 'Floodmark') {
                    return feature;
                };
            });
            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = 'ตำแหน่งสำรวจ: <br />' + feature.get('data').properties.location;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        });

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})

// นิคมอุตสาหกรรม Industrial
$('#Industrial').change(function () {
    if (this.checked) {
        var labelStyle = new ol.style.Style({
            text: new ol.style.Text({
                font: '14px Calibri,sans-serif',
                overflow: true,
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        });

        var IndustrialStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 73, 76, 0.4)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(181, 52, 54, 0.8)',
                width: 2
            })
        });
        var style = [IndustrialStyle, labelStyle];

        layers['Industrial'] = new ol.layer.Vector({
            source: new ol.source.Vector({
                url: './json/Support/Industrial.json',
                format: new ol.format.TopoJSON()
            }),
            style: function (feature) {

                var geometry = feature.getGeometry();
                if (geometry.getType() == 'MultiPolygon') {
                    // Only render label for the widest polygon of a multipolygon
                    var polygons = geometry.getPolygons();
                    var widest = 0;
                    for (var i = 0, ii = polygons.length; i < ii; ++i) {
                        var polygon = polygons[i];
                        var width = ol.extent.getWidth(polygon.getExtent());
                        if (width > widest) {
                            widest = width;
                            geometry = polygon;
                        }
                    }
                }
                // Check if default label position fits in the view and move it inside if necessary
                geometry = geometry.getInteriorPoint();
                var size = map.getSize();
                var extent = map.getView().calculateExtent([size[0] - 12, size[1] - 12]);
                var textAlign = 'center';
                var coordinates = geometry.getCoordinates();
                if (!geometry.intersectsExtent(extent)) {
                    geometry = new ol.geom.Point(ol.geom.Polygon.fromExtent(extent).getClosestPoint(coordinates));
                    // Align text if at either side
                    var x = geometry.getCoordinates()[0];
                    if (x > coordinates[0]) {
                        textAlign = 'left';
                    }
                    if (x < coordinates[0]) {
                        textAlign = 'right';
                    }
                }

                labelStyle.setGeometry(geometry);
                labelStyle.getText().setText(feature.get('Industrial_Name'));
                labelStyle.getText().setTextAlign(textAlign);
                return style;
            },
            declutter: true,
            renderBuffer: 1  // If left at default value labels will appear when countries not visible
        });
        addLayer(layers['Industrial'])
    } else {
        removeLayer(layers['Industrial'],'Industrial')
    }
});

// โรงงาน Factory
$('#Factory').change(function () {
    if (this.checked) {
        markerName = $(this).attr('marker-id')
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.geojson';
        iconfile = './img/factory.png';
        iconscale = 20 / 22;
        point_label(ilayer, ilayerfile, iconfile, markerName, iconscale);
        // display popup on hover
        var element = document.getElementById("hover-Factory");

        var popup = new ol.Overlay({
            element: element,
            positioning: "bottom-center",
            stopEvent: false,
            offset: [0, -20]
        });
        map.addOverlay(popup);

        map.on("pointermove", function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                if (feature.get('name') == 'Factory') {
                    return feature;
                };
            });
            let featureContent;
            if (feature) {
                var coordinates = feature.getGeometry().getCoordinates();
                popup.setPosition(coordinates);

                featureContent = feature.get('data').properties.Factory_Name;

                $(element).popover({
                    placement: "top",
                    html: true,
                    content: featureContent
                });
                // change mouse cursor when over marker
                map.getTargetElement().style.cursor = 'pointer';
                $(element).popover("show");
            } else {
                $(element).popover("dispose");
                map.getTargetElement().style.cursor = '';
            }
        });

    } else {
        removeLayer(layers[this.name],this.name)
        if (markerName)
            removefeatureInfo(this.name)
    }
})


// Contour
$('#Contour').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Topo/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = '';
        istrokecolor = '';
        istrokewidth = 1;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth);

        layerzoom = 10;
        var actualZoom = map.getView().getZoom();
        if (actualZoom < layerzoom) {
            map.getView().animate({
                //center: ol.proj.fromLonLat([103, 15.0500]),
                duration: 3500,
                zoom: layerzoom
            });
        }


    } else {
        removeLayer(layers[this.name],this.name)
    }
    toggleInfoWithCheckbox(this.checked, this)
})

// แปลงที่ดิน Parcel
$('#Parcel').change(function () {
    if (this.checked) {
        ilayer = this.name;
        ilayerfile = './json/Support/' + ilayer + '.json';
        ilayerobject = ilayer;
        ifillcolor = 'rgba(163, 200, 255, 0)';
        istrokecolor = 'rgba(255, 0, 0, 0.8)';
        istrokewidth = 1;
        izIndex = undefined;
        maxres = 50;
        geojson_vt(ilayer, ilayerfile, ilayerobject, ifillcolor, istrokecolor, istrokewidth, izIndex, maxres);

        layerzoom = 15;
        var actualZoom = map.getView().getZoom();
        if (actualZoom < layerzoom) {
            map.getView().animate({
                //center: ol.proj.fromLonLat([103, 15.0500]),
                duration: 2500,
                zoom: layerzoom
            });
        }
    } else {
        removeLayer(layers[this.name],this.name)
    }
})
