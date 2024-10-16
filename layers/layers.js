var wms_layers = [];

var format_sukabumiiiiii_0 = new ol.format.GeoJSON();
var features_sukabumiiiiii_0 = format_sukabumiiiiii_0.readFeatures(json_sukabumiiiiii_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sukabumiiiiii_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sukabumiiiiii_0.addFeatures(features_sukabumiiiiii_0);
var lyr_sukabumiiiiii_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sukabumiiiiii_0, 
                style: style_sukabumiiiiii_0,
                popuplayertitle: "sukabumiiiiii",
                interactive: true,
                title: '<img src="styles/legend/sukabumiiiiii_0.png" /> sukabumiiiiii'
            });
var format_titik_rs_1 = new ol.format.GeoJSON();
var features_titik_rs_1 = format_titik_rs_1.readFeatures(json_titik_rs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_rs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_rs_1.addFeatures(features_titik_rs_1);
var lyr_titik_rs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_rs_1, 
                style: style_titik_rs_1,
                popuplayertitle: "titik_rs",
                interactive: true,
                title: '<img src="styles/legend/titik_rs_1.png" /> titik_rs'
            });

lyr_sukabumiiiiii_0.setVisible(true);lyr_titik_rs_1.setVisible(true);
var layersList = [lyr_sukabumiiiiii_0,lyr_titik_rs_1];
lyr_sukabumiiiiii_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Angka_Kese': 'Angka_Kese', });
lyr_titik_rs_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_sukabumiiiiii_0.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Angka_Kese': 'TextEdit', });
lyr_titik_rs_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_sukabumiiiiii_0.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'inline label - visible with data', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'Angka_Kese': 'no label', });
lyr_titik_rs_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_titik_rs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});