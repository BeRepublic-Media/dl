<script>
var dynamic_title={};
dynamic_title['marca_particulares'] = 'Seguro M' + String.fromCharCode(233) + 'dico Sanitas para particulares';
dynamic_title['marca_familia'] = 'El seguro de salud familiar m' + String.fromCharCode(225) + 's completo con Sanitas';
dynamic_title['marca_familias-ninos'] = '';
dynamic_title['marca_estudiantes'] = '';
dynamic_title['marca_dental'] = '';
dynamic_title['marca_extranjeros'] = '';
dynamic_title['marca_precios'] = '';
dynamic_title['marca_contacto'] = '';	
dynamic_title['marca_poliza'] = '';
dynamic_title['marca_mayores'] = '';	
dynamic_title['generica_particulares'] = 'Seguro M' + String.fromCharCode(233) + 'dico para Particulares';	
dynamic_title['generica_online'] = '';
dynamic_title['generica_embarazada']  = ''; 
dynamic_title['generica_familia']  = 'Seguro M' + String.fromCharCode(233) + 'dico Familiar';
dynamic_title['generica_estudiantes']  = '';	
dynamic_title['generica_extranjeros'] = '';
dynamic_title['generica_oferta']  = '';
dynamic_title['generica_mayores'] = '';
dynamic_title['poblacion_particulares'] = '';

var dynamic_subtitle={};
dynamic_subtitle['marca_particulares'] = 'Descubre las coberturas del seguro m' + String.fromCharCode(233) + 'dico de Sanitas.';
dynamic_subtitle['marca_familia'] = 'Descubre las coberturas del seguro m' + String.fromCharCode(233) + 'dico Sanitas para familias.';
dynamic_subtitle['marca_familias-ninos'] = '';
dynamic_subtitle['marca_estudiantes'] = '';
dynamic_subtitle['marca_dental'] = '';
dynamic_subtitle['marca_extranjeros'] = '';;
dynamic_subtitle['marca_precios'] = '';
dynamic_subtitle['marca_contacto'] = '';	
dynamic_subtitle['marca_poliza'] = '';
dynamic_subtitle['marca_mayores'] = '';	
dynamic_subtitle['generica_particulares'] = 'Descubre las coberturas y nuestra amplia gama de seguros m' + String.fromCharCode(233) + 'dicos para particulares.';	
dynamic_subtitle['generica_online'] = '';
dynamic_subtitle['generica_embarazada']  = ''; 
dynamic_subtitle['generica_familia']  = 'Descubre las coberturas en un seguro pensado para cuidar de todos los miembros de tu familia.';
dynamic_subtitle['generica_estudiantes']  = '';	
dynamic_subtitle['generica_extranjeros'] = '';
dynamic_subtitle['generica_oferta']  = '';
dynamic_subtitle['generica_mayores'] = '';
dynamic_subtitle['poblacion_particulares'] = '';
  
var dynamic_amount={};
dynamic_amount['marca_particulares'] = '19,95';
dynamic_amount['marca_familia'] = '31,90';
dynamic_amount['marca_familias-ninos'] = '';
dynamic_amount['marca_estudiantes'] = '';
dynamic_amount['marca_dental'] = '';
dynamic_amount['marca_extranjeros'] = '';;
dynamic_amount['marca_precios'] = '';
dynamic_amount['marca_contacto'] = '';	
dynamic_amount['marca_poliza'] = '';
dynamic_amount['marca_mayores'] = '';	
dynamic_amount['generica_particulares'] = '19,95';	
dynamic_amount['generica_online'] = '';
dynamic_amount['generica_embarazada']  = ''; 
dynamic_amount['generica_familia']  = '31,90';
dynamic_amount['generica_estudiantes']  = '';	
dynamic_amount['generica_extranjeros'] = '';
dynamic_amount['generica_oferta']  = '';
dynamic_amount['generica_mayores'] = '';
dynamic_amount['poblacion_particulares'] = '';  


var dynamic_features={};
dynamic_features['marca_particulares'] = {
  'A': 'Incluye: '
  , 'B': 'An'
  , 'C': 'Red de '
  , 'D': 'Acceso '
};
dynamic_features['marca_familia'] = {
  'A': 'Incluye: pediatr' + String.fromCharCode(237) + 'a, servicios de enfermer' + String.fromCharCode(237) + 'a, logopedia...'
  , 'B': 'An' + String.fromCharCode(233) + 'lisis, radiograf' + String.fromCharCode(237) + 'as, endoscopias, ecograf' + String.fromCharCode(237) + 'as, resonancias...'
  , 'C': 'Red de Hospitales propios con el mejor equipo personalizado y avanzada tecnolog' + String.fromCharCode(237) + 'a.'
  , 'D': 'Acceso a todos los centros y odont' + String.fromCharCode(243) + 'logos de nuestra red dental (Milenium Sanitas)'
};
dynamic_features['marca_familias-ninos'] = '';
dynamic_features['marca_estudiantes'] = '';
dynamic_features['marca_dental'] = '';
dynamic_features['marca_extranjeros'] = '';;
dynamic_features['marca_precios'] = '';
dynamic_features['marca_contacto'] = '';	
dynamic_features['marca_poliza'] = '';
dynamic_features['marca_mayores'] = '';	
dynamic_features['generica_particulares'] = dynamic_features['marca_particulares'] = {
  'A': 'Incluye: '
  , 'B': 'An'
  , 'C': 'Red de '
  , 'D': 'Acceso '
};	
dynamic_features['generica_online'] = '';
dynamic_features['generica_embarazada']  = ''; 
dynamic_features['generica_familia'] = {
  'A': 'Incluye: pediatr' + String.fromCharCode(237) + 'a, servicios de enfermer' + String.fromCharCode(237) + 'a, logopedia...'
  , 'B': 'An' + String.fromCharCode(233) + 'lisis, radiograf' + String.fromCharCode(237) + 'as, endoscopias, ecograf' + String.fromCharCode(237) + 'as, resonancias...'
  , 'C': 'Red de Hospitales propios con el mejor equipo personalizado y avanzada tecnolog' + String.fromCharCode(237) + 'a.'
  , 'D': 'Acceso a todos los centros y odont' + String.fromCharCode(243) + 'logos de nuestra red dental (Milenium Sanitas)'
};

dynamic_features['generica_estudiantes']  = '';	
dynamic_features['generica_extranjeros'] = '';
dynamic_features['generica_oferta']  = '';
dynamic_features['generica_mayores'] = '';
dynamic_features['poblacion_particulares'] = '';  
  
  
document.querySelector('title').textContent = dynamic_title[version];
document.querySelector('[name=description]').setAttribute('content', dynamic_title[version] + " " + dynamic_subtitle[version]);
</script>
