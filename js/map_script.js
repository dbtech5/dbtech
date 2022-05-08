function initLayer(url, layer, options = undefined) {
    var params = {
        'LAYERS': layer,
        'TILED': true
    }
    if (options) {
        params = merge(params, options);
    }

    var newLayer = new ol.layer.Tile({
        name: layer,
        source: new ol.source.TileWMS({
            url: url,
            params: params,
            serverType: 'geoserver',
            transition: 200,
            transparent: true,
            name: layer
        })
    })
    return newLayer
}

function initWmtsLayer(url, layer, options = undefined) {
    var titeSize = [256, 256];
    var bboxExtent = [-180.0, -90.0, 180.0, 90.0];
    var gridsetName = 'EPSG:4326';
    var resolutions = [
        0.703125,
        0.3515625,
        0.17578125,
        0.087890625,
        0.0439453125,
        0.02197265625,
        0.010986328125,
        0.0054931640625,
        0.00274658203125,
        0.001373291015625,
        6.866455078125E-4,
        3.4332275390625E-4,
        1.71661376953125E-4,
        8.58306884765625E-5,
        4.291534423828125E-5,
        2.1457672119140625E-5,
        1.0728836059570312E-5,
        5.364418029785156E-6,
        2.682209014892578E-6,
        1.341104507446289E-6,
        6.705522537231445E-7,
        3.3527612686157227E-7
    ];

    var gridNames = [];

    for (var i = 0; i <= 21; i++) {
        gridNames[i] = gridsetName + ':' + i;
    }

    var projection = ol.proj.get('EPSG:4326');

    var matrixIds = new Array(22);

    for (var z = 0; z <= 21; ++z) {
        matrixIds[z] = gridsetName + ':' + z;
    }

    var params = {}

    if (options) {
        params = merge(params, options);
    }

    var newLayer = new ol.layer.Tile({
        source: new ol.source.WMTS({
            url: url,
            layer: layer,
            matrixSet: 'EPSG:4326',
            format: 'image/png',
            projection: projection,
            tileGrid: new ol.tilegrid.WMTS({
                resolutions: resolutions,
                matrixIds: matrixIds,
                tileSize: titeSize,
                extent: bboxExtent,
            }),
            params: params
        })
    })
    return newLayer
}

function setCenter(lat, lon, zoom = 8) {
    map.getView().animate({
        center: ol.proj.transform([parseFloat(lon), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857'),
        duration: 1000,
        zoom: zoom
    });
}

function addLayer(layer, layername = undefined, zIndex = undefined) {
    if (layer) {
        if (layername) {
            layer.set('layer_name', layername)
        }

        //layer.setOpacity(0.9)

        if (zIndex)
            layer.setZIndex(zIndex)

        map.addLayer(layer)
    }
}

function removeLayer(layer,name) {
    // viewLayers()
    // console.log('remove layer : ', layer)
    if (layer){
        console.log(layer)
        map.removeLayer(layer);
        delete layers[name]
        // พักก่อน
        console.log(layers)
    }
        

}

// function removeLayerWithName(layerName) {
//     map.getLayers().forEach(function (layer) {
//         if (layer.get('name') != undefined & layer.get('name') === layerName) {
//             map.removeLayer(layer);
//         }
//     });
// }

// function viewLayers() {
//     map.getLayers().forEach(function (layer) {
//         console.log('layer name : ' + layer.get('name'), layer)
//     });
// }

// function bindInputs(layerid, layer) {
//     var visibilityInput = $(layerid + ' input.visible');
//     visibilityInput.on('change', function () {
//         layer.setVisible(this.checked);
//     });
//     visibilityInput.prop('checked', layer.getVisible());

//     var opacityInput = $(layerid + ' input.opacity');
//     opacityInput.on('input change', function () {
//         layer.setOpacity(parseFloat(this.value));
//     });
//     opacityInput.val(String(layer.getOpacity()));
// }

function toggleLayerWithCheckbox(checked, layer, layerName = undefined) {
    if (checked && layer) {
        addLayer(layer, layerName);
    } else {
        removeLayer(layer,layerName);
    }
}

function toggleFeatureLayerWithCheckbox(checked, layerName) {
    if (checked) {
        addFeatureLayer(layerName)
    } else {
        removeFeatureLayer(layerName)
    }
}

function toggleInfoWithCheckbox(checked, checkbox) {
    var info = $(checkbox).parent().parent().find('.filter_info')
    if (checked) {
        info.show()
    } else {
        info.hide()
    }
}
var click_dialog = false
var corX = 0,corY = 0;
//-----------------------------
var layer_active = []

function choose_active(text){
    
    layer_active.push(text)
}

function del_active(text){
    let i = 0
    let copy_layer = []
    while(i<layer_active.length){
        let temp_lit = []
        let n = 0
        while(n<layer_active[i].length){
            if(layer_active[i][n] == text[n]){
                temp_lit.push(text[n])
            }
            n++
        }
        if(temp_lit.length == layer_active[i].length){

        }else{
            copy_layer.push(layer_active[i])
        }
        i++
    }
    layer_active = copy_layer
}
// ----------------------------
// show popup info

document.getElementsByClassName('dialog_temp_fa')[0].addEventListener('click',()=>{
    document.getElementById("dialog_temp").style.display = "none"
})
function displayFeatureInfo(pixel, coordinate) {
    var features = []
    //var container = document.getElementById('popup')
    map.forEachFeatureAtPixel(pixel, function (feature, layer) {
        features.push(feature)
    })
    
    //console.log('displayFeatureInfo', features)
    if (features.length > 0) {
        var info = []
        var not = false
        for (var i = 0, ii = features.length; i < ii; ++i) {
            //info.push(features[i].get('name'))
            if(not == false){
                var f = features[0]
                setTimeout(()=>{
                    click_dialog = true
                    if(document.getElementById("text-dialog").innerHTML != "กรุณาเลือกข้อมูลใหม่"){
                        document.getElementById("dialog_temp").style.display = "block"
                    }layer_active

                    
                    document.getElementById("dialog_temp").style.top = (corY-78)+"px"
                    document.getElementById("dialog_temp").style.left = (corX-26)+"px"
                },0)
                
                let tmp = "";
                console.log(layer_active)
                if(layer_active.length == 1){
                    if(f.values_[layer_active[layer_active.length-1][0]] == undefined){
                        tmp = "กรุณาเลือกข้อมูลใหม่"
                        console.log(tmp)
                        not = true
                    }else{
                        tmp = f.values_[layer_active[layer_active.length-1][0]]
                    }
                }else{
                    let check =false
                    layer_active[layer_active.length-1].forEach(data=>{
                        if(f.values_[data]== undefined){
                            check = true
                        }else{
                            tmp += f.values_[data]+"<br>"
                        }
                        
                        
                    })
                    if(check){
                        tmp = "กรุณาเลือกข้อมูลใหม่"
                    }
                }
                tmp = tmp.replace("undefined","")
                console.log(">>>",tmp)
                document.getElementById("text-dialog").innerHTML = tmp
                console.log(f.get('name'))
                console.log(f.values_)
                //var name = f.get('name')
                var name = f.get('name')
                //console.log(popups, name)
                //alert (name)
                var geometry = f.getGeometry();
                var coord = geometry.getCoordinates();
                //var content = '<p>'+f.get('name')+'</p>';
                // popup.show(coord, content);
                try{
                    popups[name].content.innerHTML = getTemplateForMarker(name, f.get('data'));
                    popups[name].popup.setPosition(coord);
                }catch(err){

                }
            }
        }
    }
}

document.addEventListener('mousemove',(e)=>{
    if(click_dialog == false){
        document.getElementById("dialog_temp").style.top = (e.clientY-63)+"px"
        document.getElementById("dialog_temp").style.left = (e.clientX+3)+"px"
    }
    corX = e.clientX
    corY = e.clientY
})

document.addEventListener('click',()=>{
    document.getElementById("dialog_temp").style.display = "none"
    click_dialog = false
})
function removefeatureInfo(markerName) {
    //popups[markerName].popup.hide()
    popups[markerName].popup.setPosition(undefined)
}

function getTemplateForMarker(markerType, data) {
    if (markerType == 'Village') {
        var str = data.properties.v_name_t + '<br />' +
            data.properties.tambon + '<br />' +
            data.properties.district + '<br />' +
            data.properties.province
        return str
    } else if (markerType == 'Trans_Station') {
        var str = data.properties.TFac_PT_Name_T
        return str
    } else if (markerType == 'River_Distance') {
        var str = 'กม.ที่ ' + data.properties.River_Distance + '<br />' +
            'แม่น้ำ ' + data.properties.River_Name
        return str
    } else if (markerType == 'Reservoir') {
        var str = data.properties.res_name + '<br />' +
            'จ.' + data.properties.province + '<br />' + 
            'ความจุ ' + data.properties.vol_mcm + ' ล้าน ลบ.ม.'
        return str
    } else if (markerType == 'Irr_Project') {
        var str = data.properties.Irr_Project_Name_T
        return str
    } else if (markerType == 'Irr_Pump') {
        var str = 'สถานี: ' + data.properties.IRR_Name_T + '<br />' +
            'รหัส: ' + data.properties.IRR_PUMP_ID + '<br />' +
            data.properties.Tambon_Name_T + '<br />' +
            data.properties.District_Name_T + '<br />' +
            data.properties.Province_Name_T
        return str
    } else if (markerType == 'Well') {
        var str = 'สถานที่เจาะ: ' + data.properties.Well_Site + '<br />' +
            'รหัส: ' + data.properties.Well_ID + '<br />' +
            'ตำบล: ' + data.properties.SubDistrict + '<br />' +
            'อำเภอ: ' + data.properties.District + '<br />' +
            'จังหวัด: ' + data.properties.Province
        return str
    } else if (markerType == 'Weather_Station') {
        var str = 'สถานี: ' + data.properties.station_th
        return str  
    } else if (markerType == 'Rain_Station') {
        var str = 'สถานีวัดน้ำฝน: ' + data.properties.Rain_Station_Code
        return str
    } else if (markerType == 'Level_Station') {
        var str = 'สถานีวัดน้ำท่า: ' + data.properties.Hydro_Station_Code
        return str
    } else if (markerType == 'Bridge') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Diversion_Dam') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Weir') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Regulator') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Levee') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Polder') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Culvert') {
        var str = data.properties.Name
        return str
    } else if (markerType == 'Factory') {
        var str = 'โรงงาน: ' + data.properties.Factory_Name
        return str
    } else if (markerType == 'Wetland') {
        var str = data.properties.Name_Full
        return str

    } else if (markerType == 'Cross_Section') {
        const imgPath = './survey/xs/';
        // var imgName1 = data.properties.Cross_Section;
        // var imgName2 = data.properties.Node_Descr;
        var imgName1 = data.properties.Xsection_No + "-1.jpg";
        var imgName2 = data.properties.Xsection_No + "-2.jpg";
        //var imgWidth = data.properties.Node_Km;
        
        // ใช้รูปตัวอย่าง
        // var imgName1 = 'XS-sample-1.jpg';
        // var imgName2 = 'XS-sample-2.jpg';
        var imgWidth = '40vw';
        
        // check file exists
        var checkfile = imgPath + imgName1
        var http = new XMLHttpRequest();
        http.open('HEAD', checkfile, false);
        http.send();
        // alert (http.status)

        if (http.status == 404) {
            return (imgName1 === "") ? undefined : imgNamexxx;
        }

        var str = '<h4> รูปตัดน้ำที่ ' + imgName1.replace(/\.[^/.]+$/, "") + '</h4>';
        str += '<div id="imgXSBox"><img src="' + imgPath + imgName1 + '" style="width:' + imgWidth + '" /></div>';
        str += '<text id="imgXSname" style="cursor: pointer;" onclick="InsertXSImg(\'' + imgPath + '\',\'' + imgName1 + '\',\'' + imgName2 + '\',\'' + imgWidth + '\')"> แสดงรูปที่ 2 ▷▶ </text>';
        console.log(str);
        return str;

    } else if (markerType == 'MapControl') {
        const imgPath = './survey/mapct/';
        var imgName1 = data.properties.mapct + "-1.jpg";
        var imgName2 = data.properties.mapct + "-2.jpg";
        
        // ใช้รูปตัวอย่าง
        // var imgName1 = 'GPS-sample-1.jpg';
        // var imgName2 = 'GPS-sample-2.jpg';
        // Portrait 25vw, Landscape 40vw
        var imgWidth = "25vw";      

        // check file exists
        var checkfile = imgPath + imgName1
        var http = new XMLHttpRequest();
        http.open('HEAD', checkfile, false);
        http.send();
        // alert (http.status)

        if (http.status == 404) {
            return (imgName1 === "") ? undefined : imgNamexxx;
        }

        var str = '<h4> หมุดหลักฐานที่ ' + imgName1.replace(/\.[^/.]+$/, "") + '</h4>';
        str += '<div id="imgMapControlBox"><img src="' + imgPath + imgName1 + '" style="width:' + imgWidth + '" /></div>';
        str += '<text id="imgMapControlname" style="cursor: pointer;" onclick="InsertMapControlImg(\'' + imgPath + '\',\'' + imgName1 + '\',\'' + imgName2 + '\',\'' + imgWidth + '\')"> แสดงรูปที่ 2 ▷▶ </text>';
        console.log(str);
        return str;

    } else if (markerType == 'Waterdepth') {
        const imgPath = './survey/waterdepth/';
        var imgName1 = data.properties.no + ".jpg";
        
        // ใช้รูปตัวอย่าง
        // var imgName1 = 'waterdepth-1.jpg';
        // Portrait 25vw, Landscape 40vw
        var imgWidth = "25vw";      

        // check file exists
        var checkfile = imgPath + imgName1
        var http = new XMLHttpRequest();
        http.open('HEAD', checkfile, false);
        http.send();
        // alert (http.status)

        if (http.status == 404) {
            return (imgName1 === "") ? undefined : imgNamexxx;
        }

        var str = '<div><img src="' + imgPath + imgName1 + '" style="width:' + imgWidth + '" /></div>';
        return str;

    } else if (markerType == 'Floodmark') {
        const imgPath = './survey/floodmark/';
        var imgName1 = data.properties.no + ".jpg";
        
        // ใช้รูปตัวอย่าง
        // var imgName1 = 'floodmark-1.jpg';
        // Portrait 25vw, Landscape 40vw
        var imgWidth = "25vw";      

        // check file exists
        var checkfile = imgPath + imgName1
        var http = new XMLHttpRequest();
        http.open('HEAD', checkfile, false);
        http.send();
        // alert (http.status)

        if (http.status == 404) {
            return (imgName1 === "") ? undefined : imgNamexxx;
        }

        var str = '<div><img src="' + imgPath + imgName1 + '" style="width:' + imgWidth + '" /></div>';
        return str;

    }   

}

// Insert XS Image
var imgInBox = "img1";
var imgXSname;
function InsertXSImg(imgPath, imgName1, imgName2, imgwidth) {
    imgName1file = imgPath + imgName1;
    imgName2file = imgPath + imgName2;
    if (imgInBox == "img1") {
        imgNo = "◀◁ แสดงรูปที่ 1";
        imgfile = imgName2file;
        imgInBox = "img2";
    } else {
        imgInBox = "img1";
        imgNo = "แสดงรูปที่ 2 ▷▶";
        imgfile = imgName1file;
    }
    document.getElementById("imgXSBox").innerHTML = '<img src="' + imgfile + '" style="width:' + imgwidth + '" />';
    document.getElementById("imgXSname").innerHTML = imgNo;
}

// Insert MapControl Image
var imgInBox = "img1";
var imgMapControlname;
function InsertMapControlImg(imgPath, imgName1, imgName2, imgwidth) {
    imgName1file = imgPath + imgName1;
    imgName2file = imgPath + imgName2;
    if (imgInBox == "img1") {
        imgNo = "◀◁ แสดงรูปที่ 1";
        imgfile = imgName2file;
        imgInBox = "img2";
    } else {
        imgInBox = "img1";
        imgNo = "แสดงรูปที่ 2 ▷▶";
        imgfile = imgName1file;
    }
    document.getElementById("imgMapControlBox").innerHTML = '<img src="' + imgfile + '" style="width:' + imgwidth + '" />';
    document.getElementById("imgMapControlname").innerHTML = imgNo;
}


// เก็บไว้ดูตัวอย่าง

// function getBallImg(aqi, type) {
//     //console.log(aqi)
//     var img = undefined
//     if (type == 'aqi') {
//         if (aqi >= 0 && aqi <= 25) {
//             img = '0'
//         } else if (aqi > 25 && aqi <= 50) {
//             img = '1'
//         } else if (aqi > 50 && aqi <= 100) {
//             img = '2'
//         } else if (aqi > 100 && aqi <= 200) {
//             img = '3'
//         } else if (aqi > 200) {
//             img = '4'
//         }
//     } else if (type == 'pm25') {
//         if (aqi >= 0 && aqi <= 25) {
//             img = '0'
//         } else if (aqi > 25 && aqi <= 37) {
//             img = '1'
//         } else if (aqi > 37 && aqi <= 50) {
//             img = '2'
//         } else if (aqi > 50 && aqi <= 90) {
//             img = '3'
//         } else if (aqi > 90) {
//             img = '4'
//         }
//     } else if (type == 'pm10') {
//         if (aqi >= 0 && aqi <= 50) {
//             img = '0'
//         } else if (aqi > 50 && aqi <= 80) {
//             img = '1'
//         } else if (aqi > 80 && aqi <= 120) {
//             img = '2'
//         } else if (aqi > 120 && aqi <= 180) {
//             img = '3'
//         } else if (aqi > 180) {
//             img = '4'
//         }
//     }
//     return img
// }

// function showWildFireWithRange() {
//     var startDate = moment($('#wildfire_daterange_start').val(), "DD-MM-YYYY").format('YYYYMMDD')
//     var endDate = moment($('#wildfire_daterange_end').val(), "DD-MM-YYYY").format('YYYYMMDD')
//     var modis = $('#wildfire_sat_modis').prop('checked')
//     var viirs = $('#wildfire_sat_viirs').prop('checked')
//     var layerFilters = []

//     removeLayer(layers['wildfire_range'])
//     //console.log('showWildFireWithRange', startDate, endDate, moment($('#wildfire_daterange_start').val(), "MM-DD-YYYY") , $('#wildfire_daterange_start').val())
//     if (modis) {
//         // sats.push('Aqua')
//         // sats.push('Terra')
//         layerFilters.push('wildfire:modis')
//     }

//     if (viirs) {
//         //sats.push('Terra')
//         layerFilters.push('wildfire:viirs')
//     }

//     if (layerFilters.length == 0) {
//         return
//     }

//     layers['wildfire_range'] = initLayer(geoserverURL, layerFilters.join(','), {
//         CQL_FILTER: " th_date >= '" + startDate + "' AND th_date <= '" + endDate + "'; th_date >= '" + startDate + "' AND th_date <= '" + endDate + "'  "
//     }) // AND satellite IN ('" + sats.join("','") + "') 
//     addLayer(layers['wildfire_range'], 'wildfire_range')
// }

// function addFeatureLayer(layer) {
//     if (showFeatureLayers.indexOf(layer) < 0) {
//         showFeatureLayers.push(layer)
//     }
// }

// function removeFeatureLayer(layer) {
//     var index = showFeatureLayers.indexOf(layer)
//     if (index > -1) {
//         showFeatureLayers.splice(index, 1)
//     }
// }

// function updateFeatureInfo(data, layerName) {
//     if (Array.isArray(data.features) && data.features.length > 0) {
//         for (var i = 0; i < data.features.length; i++) {
//             $('#' + layerName + '-info').append('<li>' + formatFeatureInfo(data.features[i].properties, layerName, data) + '</li>')
//         }
//     }
// }

// function forestInfoFormat(data) {
//     var res = []
//     if (data.NPRK_NAME) {
//         res.push('อุทยานแห่งชาติ ' + data.NPRK_NAME)
//     }

//     if (data.FP_NAME) {
//         res.push('วนอุทยาน ' + data.FP_NAME)
//     }

//     if (data.WLDS_NAME) {
//         res.push('เขตรักษาพันธ์ุสัตว์ป่า ' + data.WLDS_NAME)
//     }

//     if (data.NHA_NAME) {
//         res.push('เขตห้ามล่าสัตว์ ' + data.NHA_NAME)
//     }

//     if (data.NRF_NAME) {
//         res.push('ป่าสงวนแห่งชาติ ' + data.NRF_NAME)
//     }

//     if (data.MGF) {
//         res.push('ป่าชายเลน ' + data.MGF)
//     }

//     return res.join(',')
// }

// function formatFeatureInfo(data, layerName, featureObject) {
//     //console.log(layerName, layerName.search(/drought/g))
//     if (layerName == 'maize' || layerName == 'rice' || layerName == 'sugarcane' || layerName == 'cassava') {
//         return 'ต.' + data.t_name + ' อ.' + data.a_name + ' จ.' + data.p_name + '<br> วันที่ปลูก ' + data.start_name + '<br>  วันที่เก็บเกี่ยว ' + data.harv_name + '<br> พื้นที่ ' + numeral(data.area_rai).format('0,2') + 'ไร่ <br> ผลผลิต ' + numeral(data.yield_ton).format('0,2') + ' ตัน '
//     } else if (layerName == 'palm' || layerName == 'rubber') {
//         return data.genus_th + ' , ประเภท ' + data.lulc_th
//     } else if (layerName == 'flood_01') {
//         return 'ต.' + data.TB_TN + ' อ.' + data.AP_TN + ' จ.' + data.PV_TN + '<br>' + 'พื้นที่น้ำท่วม ' + numeral(data.flood_area).format('0,2') + ' ไร่'
//     } else if (layerName == 'forest') {
//         var html = 'วันที่ตรวจพบ : ' + data.UPDATE + '<br>'
//         html += 'พื้นที่ : ' + data.TB_TN + data.AP_TN + data.PV_TN + '<br>'
//         html += 'เขตป่าตามกฏหมาย :' + forestInfoFormat(data)
//         return html
//     } else if (layerName == 'wildfire_range') {
//         var str = 'ดาวเทียม :' + data.satellite + ' <br>  lat ' + data.latitude + ', long ' + data.longitude + '<br>'
//         str += 'วันที่ ' + data.th_date.replace('Z', '') + '<br>'
//         str += 'ต.' + data.tb_tn + ' อ.' + data.ap_tn + ' จ.' + data.pv_tn + '<br>';
//         str += data.lu_name
//         return str
//     } else if (layerName == 'wildfire_01') {
//         //console.log('wildfire_01', data)
//         var str = data.TB_TN + ' ' + data.AP_TN + ' ' + data.PV_TN;
//         if (data.rai && data.LU_NAME) str += '<br> ' + data.LU_NAME + ', พื้นที่ ' + numeral(data.rai).format('0,2') + ' ไร่'

//         return str
//     } else if (layerName.search(/drought/g) == 0) {
//         if (layerName.search(/ndvi/g) >= 0) {

//             var str = data.TB_TN + ' ' + data.AP_TN + ' ' + data.PV_TN;
//             var str = '<br>NDVI :' + numeral(data.MEAN).format('0.00') + ' <br>';
//             if (data.MEAN > -1 && data.MEAN <= 1) {
//                 if (data.MEAN < 0) {
//                     str += 'พืชพรรณไม่ค่อยมีความสมบูรณ์'
//                 } else if (data.MEAN >= 0 && data.MEAN <= 0.25) {
//                     str += 'พืชพรรณมีความสมบูรณ์น้อย'
//                 } else if (data.MEAN >= 0.25 && data.MEAN <= 0.5) {
//                     str += 'พืชพรรณมีความสมบูรณ์ปานกลาง'
//                 } else if (data.MEAN > 0.5) {
//                     str += 'พืชพรรณมีความสมบูรณ์มาก'
//                 }

//             }

//             return str
//         } else if (layerName.search(/lst/g) >= 0) {
//             var str = ''
//             if (data.LST > 0)
//                 str += 'อุณหภูมิ ' + numeral(data.LST).format('0.00') + ' องศาเซลเซียส';

//             str += '<br>' + data.TB_TN + ' ' + data.AP_TN + ' ' + data.PV_TN;
//             return str

//         } else if (layerName.search(/dri/g) >= 0) {

//             var str = numeral(data.MEAN).format('0.00') + ' %   <br>'
//             if (data.MEAN >= 0 && data.MEAN <= 25) {
//                 str += 'พื้นที่ไม่มีความเสี่ยงต่อภาวะความแห้งแล้ง'
//             } else if (data.MEAN >= 26 && data.MEAN <= 50) {
//                 str += 'พื้นที่มีความเสี่ยงต่อภาวะความแห้งแล้งน้อย'
//             } else if (data.MEAN >= 51 && data.MEAN <= 75) {
//                 str += 'พื้นที่มีความเสี่ยงต่อภาวะความแห้งแล้งปานกลาง'
//             } else if (data.MEAN >= 76) {
//                 str += 'พื้นที่มีความเสี่ยงต่อภาวะความแห้งแล้งมาก'
//             }

//             str += '<br>' + data.TB_TN + ' ' + data.AP_TN + ' ' + data.PV_TN;
//             return str
//         }
//     } else if (layerName.search(/sea/g) == 0) {
//         return numeral(data.GRAY_INDEX).format('0.00')
//     } else if (layerName == 'shoreline') {
//         return data.TAM_NAME + ' ' + data.AMP_NAME + ' ' + data.PRV_NAME + '<br>';
//     } else if (layerName == 'erosion') {
//         var type = "พื้นที่กัดเซาะ"
//         if (featureObject.features[0].id.search(/Accretion/g) == 0) {
//             type = "พื้นที่ทับถม"
//         }
//         return type + ', ' + data.TAM_NAME + ' ' + data.AMP_NAME + ' ' + data.PRV_NAME + ' พื้นที่ ' + numeral(data.Area_rai).format('0,2') + ' ไร่';
//     } else if (layerName == 'speed_direction') {
//         return 'ความเร็ว ' + data.velocity + ' , ทิศทาง ' + data.direction

//     }
// }

// function getFeatureGroup(layername) {
//     if (layername == 'rice' || layername == 'maize' || layername == 'cassava' || layername == 'sugarcane' || layername == 'palm' || layername == 'rubber') {
//         return 'ecoplant'
//     } else if (layername == 'flood_01') {
//         return 'flood'
//     } else if (layername == 'forest') {
//         return 'forest'
//     } else if (layername == 'wildfire_01' || layername == 'wildfire_range') {
//         return 'wildfire'
//     } else if (layername.search("drought") == 0) {
//         return 'drought'
//     } else if (layername.search("sea") == 0 || layername.search("shoreline") >= 0 || layername.search("erosion") == 0 || layername == 'speed_direction') {
//         return 'sea'
//     }
//     return undefined
// }

// function loadLatestLineData(site, section) {
//     var url = wmsUrl['map.sea']['linedata'] + '/' + site + '/' + section;

//     $.getJSON(url, function(list) {
//         if (section == 'wind') {
//             plotLineWindChart(site, 'chartline', list)
//         } else {
//             plotLineWaveChart(site, 'chartline', list)
//         }

//         $('#chartline-content').show()
//         $('#chartrose-content').hide()
//     })
// }