Search.setIndex({docnames:["api_reference/descriptor-runner/index","api_reference/graph_transpiler/axis","api_reference/graph_transpiler/backend/index","api_reference/graph_transpiler/constant_variable","api_reference/graph_transpiler/environment_variable","api_reference/graph_transpiler/frontend/chainer","api_reference/graph_transpiler/frontend/converter","api_reference/graph_transpiler/frontend/index","api_reference/graph_transpiler/frontend/keras","api_reference/graph_transpiler/frontend/onnx","api_reference/graph_transpiler/frontend/pytorch","api_reference/graph_transpiler/frontend/tensorflow","api_reference/graph_transpiler/graph","api_reference/graph_transpiler/index","api_reference/graph_transpiler/operator","api_reference/graph_transpiler/operators","api_reference/graph_transpiler/optimize_rule","api_reference/graph_transpiler/order","api_reference/graph_transpiler/placeholder","api_reference/graph_transpiler/variable","contributing/index","index","tips/build_js","tips/enable_webgpu_ios","tips/enable_webgpu_ios_ja","tips/enable_webgpu_macos","tips/enable_webgpu_macos_ja","tips/es5","tips/index","tips/lstm","tips/safari_webcam","tutorial/caffe","tutorial/chainer","tutorial/custom_operator/index","tutorial/custom_operator/section0","tutorial/custom_operator/section1","tutorial/custom_operator/section2","tutorial/custom_operator/section3","tutorial/index","tutorial/introduction","tutorial/keras","tutorial/pytorch","tutorial/setup","tutorial/setup_windows","tutorial/tensorflow"],envversion:51,filenames:["api_reference/descriptor-runner/index.md","api_reference/graph_transpiler/axis.rst","api_reference/graph_transpiler/backend/index.rst","api_reference/graph_transpiler/constant_variable.rst","api_reference/graph_transpiler/environment_variable.rst","api_reference/graph_transpiler/frontend/chainer.rst","api_reference/graph_transpiler/frontend/converter.rst","api_reference/graph_transpiler/frontend/index.rst","api_reference/graph_transpiler/frontend/keras.rst","api_reference/graph_transpiler/frontend/onnx.rst","api_reference/graph_transpiler/frontend/pytorch.rst","api_reference/graph_transpiler/frontend/tensorflow.rst","api_reference/graph_transpiler/graph.rst","api_reference/graph_transpiler/index.rst","api_reference/graph_transpiler/operator.rst","api_reference/graph_transpiler/operators.rst","api_reference/graph_transpiler/optimize_rule.rst","api_reference/graph_transpiler/order.rst","api_reference/graph_transpiler/placeholder.rst","api_reference/graph_transpiler/variable.rst","contributing/index.rst","index.rst","tips/build_js.md","tips/enable_webgpu_ios.rst","tips/enable_webgpu_ios_ja.rst","tips/enable_webgpu_macos.rst","tips/enable_webgpu_macos_ja.rst","tips/es5.md","tips/index.rst","tips/lstm.md","tips/safari_webcam.md","tutorial/caffe.md","tutorial/chainer.rst","tutorial/custom_operator/index.rst","tutorial/custom_operator/section0.rst","tutorial/custom_operator/section1.rst","tutorial/custom_operator/section2.rst","tutorial/custom_operator/section3.rst","tutorial/index.rst","tutorial/introduction.rst","tutorial/keras.rst","tutorial/pytorch.rst","tutorial/setup.md","tutorial/setup_windows.md","tutorial/tensorflow.rst"],objects:{"":{DEBUG:[4,5,1,"-"],OPTIMIZE:[4,5,1,"-"]},"webdnn.ConstantVariable":{change_order:[3,2,1,""],combine_axes:[3,2,1,""],expand_dims:[3,2,1,""],input_to:[3,0,1,""],name:[3,0,1,""],ndim:[3,0,1,""],order:[3,0,1,""],output_from:[3,0,1,""],reinterpret_axes:[3,2,1,""],replace:[3,2,1,""],reshape:[3,2,1,""],reshape_like:[3,2,1,""],shape:[3,0,1,""],shape_dict:[3,0,1,""],size:[3,0,1,""],squeeze:[3,2,1,""],stride:[3,0,1,""],stride_dict:[3,0,1,""],transpose:[3,2,1,""],transpose_like:[3,2,1,""]},"webdnn.Operator":{append_input:[14,2,1,""],append_output:[14,2,1,""],copy:[14,2,1,""],inputs:[14,0,1,""],outputs:[14,0,1,""],remove_all:[14,2,1,""],remove_input:[14,2,1,""],remove_output:[14,2,1,""],replace:[14,2,1,""],replace_input:[14,2,1,""],replace_output:[14,2,1,""]},"webdnn.OptimizeRule":{flags:[16,2,1,""],optimize:[16,2,1,""]},"webdnn.Order":{check_same_axes:[17,2,1,""],get_all_axes:[17,2,1,""],get_common_axes:[17,2,1,""]},"webdnn.Placeholder":{check_resolved:[18,3,1,""],force_int:[18,3,1,""],generate_js_function:[18,2,1,""],get_depend_placeholders:[18,2,1,""],to_int:[18,3,1,""],value:[18,0,1,""]},"webdnn.Variable":{change_order:[19,2,1,""],combine_axes:[19,2,1,""],expand_dims:[19,2,1,""],input_to:[19,0,1,""],name:[19,0,1,""],ndim:[19,0,1,""],order:[19,0,1,""],output_from:[19,0,1,""],reinterpret_axes:[19,2,1,""],replace:[19,2,1,""],reshape:[19,2,1,""],reshape_like:[19,2,1,""],shape:[19,0,1,""],shape_dict:[19,0,1,""],size:[19,0,1,""],squeeze:[19,2,1,""],stride:[19,0,1,""],stride_dict:[19,0,1,""],transpose:[19,2,1,""],transpose_like:[19,2,1,""]},"webdnn.backend":{generate_descriptor:[2,2,1,""]},"webdnn.backend.interface.graph_descriptor":{IGraphExecutionData:[2,1,1,""]},"webdnn.backend.interface.graph_descriptor.IGraphExecutionData":{save:[2,2,1,""]},"webdnn.frontend.chainer":{ChainerConverter:[5,1,1,""]},"webdnn.frontend.chainer.ChainerConverter":{convert:[5,2,1,""],convert_from_inout_vars:[5,2,1,""]},"webdnn.frontend.converter":{Converter:[6,1,1,""]},"webdnn.frontend.converter.Converter":{convert:[6,2,1,""],get_variable:[6,2,1,""],has_variable:[6,2,1,""],register_handler:[6,4,1,""],serialize_operator_type:[6,2,1,""],set_variable:[6,2,1,""]},"webdnn.frontend.keras":{KerasConverter:[8,1,1,""]},"webdnn.frontend.keras.KerasConverter":{convert:[8,2,1,""],convert_to_constant_variable:[8,2,1,""],get_input_tensor:[8,2,1,""],get_output_tensor:[8,2,1,""]},"webdnn.frontend.onnx":{ONNXConverter:[9,1,1,""]},"webdnn.frontend.onnx.ONNXConverter":{convert:[9,2,1,""]},"webdnn.frontend.pytorch":{PyTorchConverter:[10,1,1,""]},"webdnn.frontend.pytorch.PyTorchConverter":{convert:[10,2,1,""]},"webdnn.frontend.tensorflow":{TensorFlowConverter:[11,1,1,""]},"webdnn.frontend.tensorflow.TensorFlowConverter":{convert:[11,2,1,""],convert_to_constant_variable:[11,2,1,""]},"webdnn.graph.operators.abs":{Abs:[15,1,1,""]},"webdnn.graph.operators.acos":{Acos:[15,1,1,""]},"webdnn.graph.operators.acosh":{Acosh:[15,1,1,""]},"webdnn.graph.operators.asin":{Asin:[15,1,1,""]},"webdnn.graph.operators.asinh":{Asinh:[15,1,1,""]},"webdnn.graph.operators.atan":{Atan:[15,1,1,""]},"webdnn.graph.operators.atanh":{Atanh:[15,1,1,""]},"webdnn.graph.operators.average_pooling_2d":{AveragePooling2D:[15,1,1,""]},"webdnn.graph.operators.axiswise_bias":{AxiswiseBias:[15,1,1,""]},"webdnn.graph.operators.axiswise_scale":{AxiswiseScale:[15,1,1,""]},"webdnn.graph.operators.broadcast":{Broadcast:[15,1,1,""]},"webdnn.graph.operators.clipped_relu":{ClippedRelu:[15,1,1,""]},"webdnn.graph.operators.col2im":{Col2Im:[15,1,1,""]},"webdnn.graph.operators.concat":{Concat:[15,1,1,""]},"webdnn.graph.operators.convolution2d":{Convolution2D:[15,1,1,""]},"webdnn.graph.operators.cos":{Cos:[15,1,1,""]},"webdnn.graph.operators.cosh":{Cosh:[15,1,1,""]},"webdnn.graph.operators.deconvolution2d":{Deconvolution2D:[15,1,1,""]},"webdnn.graph.operators.depth2space":{Depth2Space:[15,1,1,""]},"webdnn.graph.operators.elementwise":{Elementwise:[15,1,1,""]},"webdnn.graph.operators.elementwise_add":{ElementwiseAdd:[15,1,1,""]},"webdnn.graph.operators.elementwise_div":{ElementwiseDiv:[15,1,1,""]},"webdnn.graph.operators.elementwise_mul":{ElementwiseMul:[15,1,1,""]},"webdnn.graph.operators.elementwise_pow":{ElementwisePow:[15,1,1,""]},"webdnn.graph.operators.elementwise_sum":{ElementwiseSum:[15,1,1,""]},"webdnn.graph.operators.elu":{Elu:[15,1,1,""]},"webdnn.graph.operators.embedding":{Embedding:[15,1,1,""]},"webdnn.graph.operators.exp":{Exp:[15,1,1,""]},"webdnn.graph.operators.greater":{Greater:[15,1,1,""]},"webdnn.graph.operators.greater_equal":{GreaterEqual:[15,1,1,""]},"webdnn.graph.operators.hard_sigmoid":{HardSigmoid:[15,1,1,""]},"webdnn.graph.operators.im2col":{Im2Col:[15,1,1,""]},"webdnn.graph.operators.im2col.Im2Col":{WH:[15,0,1,""],WW:[15,0,1,""]},"webdnn.graph.operators.leaky_relu":{LeakyRelu:[15,1,1,""]},"webdnn.graph.operators.linear":{Linear:[15,1,1,""]},"webdnn.graph.operators.local_response_normalization":{LocalResponseNormalization:[15,1,1,""]},"webdnn.graph.operators.log":{Log:[15,1,1,""]},"webdnn.graph.operators.lstm":{LSTM:[15,1,1,""]},"webdnn.graph.operators.lstm.LSTM":{__call__:[15,2,1,""]},"webdnn.graph.operators.max":{Max:[15,1,1,""]},"webdnn.graph.operators.max_pooling_2d":{MaxPooling2D:[15,1,1,""]},"webdnn.graph.operators.pooling_2d":{Pooling2D:[15,1,1,""]},"webdnn.graph.operators.prod":{Prod:[15,1,1,""]},"webdnn.graph.operators.reduce":{Reduce:[15,1,1,""]},"webdnn.graph.operators.reinterpret_axis":{ReinterpretAxis:[15,1,1,""]},"webdnn.graph.operators.relu":{Relu:[15,1,1,""]},"webdnn.graph.operators.reshape":{Reshape:[15,1,1,""]},"webdnn.graph.operators.rsqrt":{Rsqrt:[15,1,1,""]},"webdnn.graph.operators.scalar_add":{ScalarAdd:[15,1,1,""]},"webdnn.graph.operators.scalar_affine":{ScalarAffine:[15,1,1,""]},"webdnn.graph.operators.scalar_mul":{ScalarMul:[15,1,1,""]},"webdnn.graph.operators.scalar_pow":{ScalarPow:[15,1,1,""]},"webdnn.graph.operators.select":{Select:[15,1,1,""]},"webdnn.graph.operators.sigmoid":{Sigmoid:[15,1,1,""]},"webdnn.graph.operators.sin":{Sin:[15,1,1,""]},"webdnn.graph.operators.sinh":{Sinh:[15,1,1,""]},"webdnn.graph.operators.slice":{Slice:[15,1,1,""]},"webdnn.graph.operators.softmax":{Softmax:[15,1,1,""]},"webdnn.graph.operators.softplus":{Softplus:[15,1,1,""]},"webdnn.graph.operators.softsign":{Softsign:[15,1,1,""]},"webdnn.graph.operators.space2depth":{Space2Depth:[15,1,1,""]},"webdnn.graph.operators.tan":{Tan:[15,1,1,""]},"webdnn.graph.operators.tanh":{Tanh:[15,1,1,""]},"webdnn.graph.operators.tensordot":{Tensordot:[15,1,1,""]},"webdnn.graph.operators.threshold_relu":{ThresholdRelu:[15,1,1,""]},"webdnn.graph.operators.tile":{Tile:[15,1,1,""]},"webdnn.graph.operators.transpose":{Transpose:[15,1,1,""]},"webdnn.graph.operators.unpooling_2d":{Unpooling2D:[15,1,1,""]},"webdnn.graph.operators.zero_padding_1d":{ZeroPadding1D:[15,1,1,""]},"webdnn.graph.operators.zero_padding_2d":{ZeroPadding2D:[15,1,1,""]},Placeholder:{label:[18,0,1,""]},webdnn:{Axis:[1,1,1,""],ConstantVariable:[3,1,1,""],Graph:[12,1,1,""],Operator:[14,1,1,""],OptimizeRule:[16,1,1,""],Order:[17,1,1,""],Placeholder:[18,1,1,""],Variable:[19,1,1,""]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","classmethod","Python class method"],"5":["std","envvar","environment variable"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:classmethod","5":"std:envvar"},terms:{"11\u306b\u642d\u8f09\u306eweb\u30d6\u30e9\u30a6\u30b6safari\u306b\u306f":24,"3_64bit":43,"64bit":[42,43],"67e894c6cd8f":42,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f":[24,26],"\u3053\u308c\u306b\u3088\u308a":[24,26],"\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b":26,"\u3092\u9078\u629e":26,"\u30d6\u30e9\u30a6\u30b6\u306e\u52d5\u4f5c\u3092\u4e0d\u5b89\u5b9a\u306b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059":[24,26],"\u30db\u30fc\u30e0\u30dc\u30bf\u30f3\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af":24,"\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a":26,"\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089":26,"\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u306b":26,"\u4e00\u65e6\u7d42\u4e86\u3059\u308b":24,"\u521d\u671f\u8a2d\u5b9a\u3067\u306fwebgpu\u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u305f\u3081":[24,26],"\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd":26,"\u5b9f\u9a13\u7684\u6a5f\u80fd\u3068\u3057\u3066webgpu\u304c\u642d\u8f09\u3055\u308c\u3066\u3044\u307e\u3059":[24,26],"\u65e5\u672c\u8a9e\u7248":[23,25],"\u74b0\u5883\u8a2d\u5b9a":26,"\u8a2d\u5b9a\u3092\u958b\u304d":24,"\u8a73\u7d30\u3092\u30bf\u30c3\u30d7":24,"\u958b\u767a":26,"boolean":16,"case":[15,27,29,30,33,34,35,37],"char":29,"class":[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,35,36,37],"default":[3,4,6,8,11,19,23,25,27],"enum":1,"export":[10,42],"features\u3092\u30bf\u30c3\u30d7":24,"final":[15,35],"float":15,"function":[2,14,15,29,34,35,36,37,40],"import":[8,9,10,11,32,35,36,37,39,40,41,44],"int":[3,8,15,18,19,43],"ios\u306e\u5834\u5408":26,"long":[15,29],"macos\u306e\u5834\u5408":24,"new":[3,14,17,18,19,21,29,35],"public":20,"return":[2,3,5,6,8,9,10,11,15,16,17,18,19,31,35,36,37,43],"safari\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u5834\u5408":24,"safari\u3067webgpu\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059":[24,26],"safari\u306e\u753b\u9762\u3092\u4e0a\u306b\u30b9\u30ef\u30a4\u30d7":24,"safari\u3092\u30bf\u30c3\u30d7":24,"safari\u3092\u518d\u8d77\u52d5\u3059\u308b":26,"safari\u3092\u8d77\u52d5\u3057":26,"short":15,"sierra\u306b\u642d\u8f09\u306eweb\u30d6\u30e9\u30a6\u30b6safari\u306b\u306f":26,"static":18,"super":36,"switch":29,"true":[3,6,8,10,14,15,18,19,29,40,41],"try":[8,42,43],"var":14,"webdnn\u306e\u52d5\u4f5c\u306f\u5927\u5e45\u306b\u9ad8\u901f\u5316\u3055\u308c\u307e\u3059":[24,26],"webgpu\u306b\u3088\u308a":[24,26],"webgpu\u306f\u5b9f\u9a13\u7684\u6a5f\u80fd\u3067\u3042\u308a":[24,26],"webgpu\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u4ee5\u5916\u306f\u7121\u52b9\u5316\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059":[24,26],"webgpu\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059":[24,26],"webgpu\u3092on\u306b\u3059\u308b":24,Axes:[3,19],But:29,Doing:15,For:[0,15,17,20,23,25,34,36,37,42],Its:15,NOT:15,Not:3,One:[29,39],That:[31,35,40],The:[0,18,20,29,35,36,37,39,43],Then:[8,20,29,31,40,43],There:[20,30,34,39],These:39,Use:[5,6,8,15,21,38],Using:[21,28],__call__:15,__init__:36,_forwardref:15,about:[15,31,34,35,36,37],abov:[20,29],abs:[15,19],absolut:15,acceler:[23,25,39],accept:[15,20,29],access:[20,30],accompilsh:43,accord:29,accuraci:29,achiev:39,act:15,activ:[15,29,34,42],actual:15,add:[15,18,29,40,43],add_weight:37,added:[20,43],adding:43,addit:39,adob:30,advanc:[23,41],affect:29,affin:15,after:15,aggress:39,agre:20,ajax:27,alex:41,alexnet:[10,41],alia:[3,19],alias:13,align:17,all:[3,4,14,15,18,19,20,31,34,35,36,40],allow:[20,30],almost:[15,36],along:[15,37,42],alpha:15,alreadi:[6,8,11,17,18,23,34,35,37,39],also:[3,8,11,13,15,16,18,20,27,29,32,34,35,37,40,41,42,43,44],ambigu:15,anaconda3:43,anaconda:43,analysi:[16,29],ani:[15,34,39],annot:11,anoth:[15,39],anyth:15,api:[21,39],api_doc:15,api_refer:40,append:[14,18],append_input:14,append_output:14,appl:42,appli:[4,16,39],applic:[8,29,31,35,36,37,39,40,43],appropri:20,architectur:[33,35],archiv:43,arg:[6,15],argmax:[31,40],argument:[6,35,36],arrai:[3,15,40],articl:29,arxiv:15,ask:20,asm:42,assert:15,assum:15,async:[35,36,37],attent:39,attract:39,attribut:[3,15,35],autograd:[10,41],automat:[14,27,29,31,35,40,42],avail:[32,40,41,43,44],averag:[15,34],average_pooling_2d:15,average_pooling_2d_test:20,averagepooling2d:20,await:[18,27,29,31,35,36,37,40],axes:[3,15,17,19,37],axi:[3,13,15,17,19],axiskeydict:15,axiswise_bia:15,axiswise_scal:15,babel:27,backend:[4,8,13,15,20,31,32,35,36,37,40,41,42,43,44],backendnam:[31,40],bar:25,base:[7,15,18,20,29,31,35,37,40,43],basic:[13,18,19],bat:43,batch:[8,17,18,37],batch_siz:[8,11,35,36,37,40],becaus:[3,15,19,35,37],befor:43,behavior:[4,6,22],being:15,berkeleyvis:15,best:[20,31,40],beta:15,between:[8,11,35],bia:[15,34],biaslay:37,bin:[4,40],binari:[19,39],binaryen:42,bind:35,bitbucket:42,bool:[3,6,8,14,15,16,18,19],both:[10,15,17,18,34],branch:20,bring:39,browser:[0,20,23,25,27,30,32,39,41,42,43,44],bug:20,build:[5,20,21,28,35,37],bus:40,button:[20,23,30,35,36,37],bz2:42,caff:[15,39,42,43],caffemodel:[21,38],caffenet:31,calcul:[15,34,35,36],call:[15,29,34,35,36,37],callabl:15,camera:[21,28],can:[4,6,15,17,18,20,27,29,31,33,34,35,36,37,39,40,42,43],cannot:[18,39],cap:15,capac:39,caption:29,care:36,caus:18,cdn:27,cdnj:27,cell:15,certain:15,certif:20,certifi:20,chain:34,chainer:[5,7,21,29,34,38,39,42,43],chainerconvert:[7,32],chang:[3,6,15,16,19,20,30],change_ord:[3,19],change_order_stat:[3,19],channel:[15,17],channel_last:8,charact:29,check:[3,6,8,11,14,17,18,19,20,31,40],check_resolv:18,check_same_ax:17,child:6,choic:34,classif:[29,32,40,41],classifi:[31,40],classmethod:6,cli:27,click:[20,23,30],clip:15,clipped_relu:15,clone:[42,43],close:23,cloud:39,cloudflar:27,cnn:29,code:[3,18,19,20,22,31,34,35,36,37,39,40],coeffici:15,colus:27,com:[27,29,30,42,43],combin:[3,19],combine_ax:[3,19],comma:35,command:[20,22,42,43],comment:20,common:29,compar:[18,29],compat:27,compil:[18,27,31,40,42,43],complet:[31,35,36,37,39,40],complex:29,compliant:27,compon:[2,13,35],comput:[5,6,9,10,12,14,15,16,31,32,34,35,37,39,41,44],computation:39,concaten:[15,29],concret:[18,29,43],condit:15,confer:[32,40],configur:[30,43],conflict:43,congratul:[31,40],connect:[3,14,15,19,34],consid:[15,17,35,37],consider:[23,25],consist:[20,34,39],consol:[20,31,35,36,37,40],constant:[3,8,11],constant_vari:3,constantvari:[8,11,13],construct:[5,32,34,41,44],constructor:35,consum:15,contain:[2,3,6,7,13,15,16,19,20,36],content:[20,43],continuum:43,contribut:21,contributor:20,control:4,conv2d_handl:34,convers:[3,8,10,19,29,31,34],convert:[5,7,8,9,10,11,13,15,18,20,29,32,39,41,42,43,44],convert_caff:31,convert_from_inout_var:5,convert_kera:[4,40],convert_to_constant_vari:[8,11,37],convolut:[15,34,41],copi:[14,20],copyright:20,correspond:[6,15,20,34,35],cos:15,cost:39,cout:43,cover:20,cover_al:15,cplus_include_path:[42,43],cpp:43,cpu:39,creat:[2,3,19,20,36,43],cross:15,current:[5,15,29,42,43],custom:[6,8,11,15,21,34,37,38],custom_oper:[35,36,37],cvpr:[32,40],d4700:20,data:[3,8,9,11,15,17,19,31,32,34,37,39,40],data_format:8,datum:2,debug:[4,20],decompress:43,deconvolut:15,decor:[6,35],decreas:[3,19],deep:[20,32,39,40,41],def:[35,36,37],defin:[6,15,17,32,33],definit:29,dens:[15,29,43],dense_handl:34,depend:[18,43],deprec:15,depth:15,describ:[15,20,23,25,27,29,30,31,34,39],descriptor:[2,13,17,18,29,31,34,35,36,37,39,40,43],descriptor_runn:[22,27,40],descriptorgener:[2,34],descriptorrunn:[0,31,40],design:[37,39],destin:2,detail:15,determin:[18,37],develop:[20,25,39,42,43],devic:39,dialog:30,dictionari:[3,15,19,36],differ:[15,20,30,36,37,39],difficulti:39,dilat:15,dilation_r:15,dimens:[1,3,15,19,37],direct:15,directli:20,directori:[2,20,22,27,39,40,43],dirnam:2,disabl:[23,25],disconnect:[3,14,19],displai:39,dist:[22,27,35,36,37],distribut:20,div:18,divid:15,dnn:[0,6,7,12,13,14,20,29,34,39],dnndescriptorrunn:40,doc:[32,43],documant:20,document:[15,20,21,27,29,30,40,43],doe:[15,27,29,30,42,43],doesn:34,don:[15,35,42],done:[15,20],dot:15,doubl:23,downscal:15,drive:20,dropout:29,dsth:40,dstw:40,dtype:[5,32],dummi:[5,32,41],dummy_input:[10,41],each:[1,3,6,13,15,19,34,35,36,37,39,43],easi:[30,35],easili:[33,39],ecmascript5:[21,28],edit:39,either:[17,18],element:[3,8,15,19,29],elementwis:[33,34,37],elementwise_add:15,elementwise_div:15,elementwise_mul:15,elementwise_pow:15,elementwise_sum:15,elementwiseab:19,elementwiseadd:[19,37],elementwisesum:34,els:[3,19],emb:15,embed:[18,29],emcc:43,empti:[5,32],emsdk:[42,43],emsdk_env:42,enabl:[21,28,30,42,43],encount:39,end:39,endl:43,english:[24,26],env:27,environ:[13,20,39],equal:15,equat:18,error:[15,18],es2015:27,es5:22,es6:40,essenc:40,etc:[18,34,35],even:8,everi:20,everyon:20,exampl:[17,20,31,34,39,40],except:15,exchang:[7,9],exe:43,exec_info:[32,40,41,44],execut:[20,29,32,34,39,40,41,43,44],exist:[6,43],expand:[3,19],expand_dim:[3,19],expens:39,experiment:[23,24,25],explicitli:15,exponenti:[15,37],extend:[33,35],extract:[29,35],factor:15,fail:8,fallback:[16,32,35,36,37,40,41,44],fallbackdescriptorgener:[35,36,37],fals:[6,15,16,18],familiar:39,fastest:42,fc6:[5,32],featur:[15,20,23,25,27,29,36,37,39],feed:29,feel:20,fetch:27,few:39,field:[14,39],figur:34,file:[2,20,27,31,39,40,43],fill:43,final_c:15,find:39,finish:40,first:[8,18,20,29,30,31,35,36,37,40],fix:20,flag:[16,27],flag_semicolon:18,float32:[5,11,32,44],float32arrai:[31,40],floor:18,focus:39,follow:[3,4,14,15,17,18,19,20,22,27,29,34,35,36,37,39,43],foo:27,force_int:18,forget:35,fork:20,format:[6,9,10,29,32,39,41,44],forward:5,found:[20,34,35,40],foundat:20,framework:[6,7,13,20,21,34,38,42,43],francisco:20,free:20,from:[3,5,8,9,10,11,19,20,22,29,30,32,34,35,36,37,39,40,41,42,43,44],frontend:[5,6,8,9,10,11,13,15,32,35,36,37,40,41,44],full:[39,43],fulli:15,futur:5,game:39,gate:27,gener:[2,6,13,14,15,18,20,22,31,32,37,39,41,42,43,44],generat:2,generate_descriptor:[32,40,41,44],generate_js_funct:18,geoffrei:41,get:[6,31,35,37,40,42,43],get_all_ax:17,get_common_ax:17,get_default_sess:11,get_depend_placehold:18,get_input_tensor:[8,35,36,37],get_output_tensor:[8,35,36,37],get_vari:[6,35,36,37],getimagearrai:40,git:[42,43],github:[9,21,29,42,43],give:[20,42],given:[16,29,34],good:30,gpu:[20,39],graph:[2,3,4,5,6,8,9,10,11,13,14,15,16,17,18,19,20,32,33,35,36,37,39,41,44],graph_descriptor:2,graphic:39,greater_equ:15,guid:[21,38],handl:8,handler:[6,8,11,15],har:39,hard:15,hard_sigmoid:15,hardwar:39,has:[3,15,19,23,25,36,37],has_vari:6,have:[15,17,20,27,29,30,31,34,35,37,39,40,42,43],height:[15,37],hello:43,help:[11,15,39,42],helpx:30,her:20,here:[35,40,43],herein:20,hidden:15,high:[21,28],higher:29,highest:29,highli:39,hinton:41,his:20,hit:20,hold:20,holder:8,home:23,hot:29,how:[21,23,25,27,30,31,33,35,36,37,39],howev:[30,33,37,39],html:[15,20,27,30,31,32,35,36,37,39,40,43],http:[15,27,29,30,32,40,41,42,43,44],hyper:[35,36],hyperbol:15,iOS:[21,24,25,28],ie11:27,ieee:[32,40],illustr:[29,40],ilya:41,imag:[29,31,32,37,39,40],imagenet:[8,31,40,41],implement:[6,8,11,13,15,20,29,34,35,36,37,39],implicit:15,improv:20,in_ord:[3,15,19],includ:[17,20,35,36,37,42,43],include_top:[8,40],incom:42,increas:[3,19],incur:39,indefinit:20,index:[3,15,19,35,36,37,43],indic:[15,20],inflat:27,inform:[8,11,20,32,41,44],inherit:15,initi:[15,31,37,40],initial_c:15,initial_h:15,inner:15,inplac:35,input:[3,5,8,11,12,14,15,19,31,34,35,36,37,39,40,41],input_ord:[8,11],input_sequ:29,input_shap:[29,37,40],input_to:[3,19],insert:[3,15,19,27],instal:[9,22,27,30],instanc:[6,15,17,36],instead:[15,20,27],instruct:30,integ:18,interfac:[2,40],intermedi:34,intern:29,interpret:[15,20,39],intortupl:15,introduct:[21,38],invers:15,involv:20,iostream:43,ipynb:31,issu:21,its:[3,15,19,20,29,39],itself:[8,18,29,34,35],japanes:[23,25],javascript:[18,21,27,29,35,36,37,39,40],jpg:40,juj:42,jump:42,jupyt:31,just:[15,16],jxf:42,k_op:8,kei:[6,35,36,39],kera:[7,8,15,21,29,32,34,35,36,37,38,39,41,44],keras_i:[35,36,37],keras_lay:[35,36,37],keras_x:[35,36,37],kerasconvert:[7,35,36,37,40],kerasmodel:8,kernel:[15,34,35,36],keyerror:6,kind:[20,29],knowledg:20,kripken:43,krizhevski:41,ksize:15,kwarg:[2,6,15,36],label:[18,31,40],labelid:[31,40],lambda:36,languag:[29,39],laptop:39,last:[3,15,19,29,35],latest:[32,43],lauguag:29,launch:25,layer:[5,8,14,15,20,29,32,33,34,35,36],leaki:15,leaky_relu:15,learn:[20,31,32,35,36,37,40],least:[20,32,40],left:[15,34],len:29,length:[15,18,37],let:[29,31,35,36,37,40],letterman:20,level:[15,27],lib:27,librari:[0,6,27,30,39,42,43],licens:21,like:[15,18,20,27,34,35,36,37],limit:8,line:37,link:[5,32],linux:[20,21,38,43],list:[3,5,8,11,12,15,16,17,18,19,35],load:[0,9,18,27,31,32,35,36,37,40,41,43],loadimagedata:31,local:15,local_response_norm:15,log:[4,31,35,36,37,40],logarithm:15,logic:35,look:[31,40],lot:39,lrn:15,lstm:[21,28],lucki:30,luckili:[35,37],mac:[20,21,30,38],maco:[21,23,26,28,42],mai:[15,20,23,25,42],main:[35,36,37,43],maintain:20,major:[17,39],make:[20,23,25,30],mandatori:20,mani:[20,33,34],manual:29,map:[8,11],master:[20,42,43],match:15,math:[31,36,40],matmul:[11,44],max_featur:29,max_pooling_2d:15,maximum:15,maxlen:29,mean:[15,17],memori:15,mention:29,menu:25,merg:15,metal:36,method:[5,6,8,11],mic:30,microphon:30,mil:[20,42,43],milhidaka:29,min:27,minor:17,minut:20,misc:13,mit:20,mnist:43,mod:18,mode:15,model:[5,7,8,9,10,11,12,13,21,28,31,34,35,36,37,38,39,42,43],modern:[30,39,40,42],modif:[20,29],modifi:[3,20,22],modul:[2,7,9,13,15,34,39,40],more:[15,16,20],most:[0,29,30,42],move:43,mul:18,multipl:[15,29],multipli:15,must:[3,15,19],my_keras_model:4,my_model:18,name:[1,2,3,6,8,14,15,19,20,34,35,36,37,43],nativ:39,natual:29,natur:[29,39],ndim:[3,19],need:[0,9,15,20,27,30,32,35,37,39,40,42,43],network:[7,9,39,41],neural:[7,9,39,41],new_ax:[3,19],new_vari:[3,19],newer:27,next:[29,31,34,35,36,39,40],next_char:29,nhwc:15,node:[34,35],none:[1,3,8,11,14,15,18,19,35,36,44],nonetyp:15,normal:[15,37],nose:20,nosetest:20,note:[3,19],notebook:31,noth:15,now:[23,25,29,40],npm:[22,27],ntc:15,nthwc:15,num_sampl:37,number:[3,15,19,34,37,39],numpi:[15,32,37],obj:15,object:[6,27,37],off:20,offici:30,offlin:[31,39,43],older:27,onc:[23,31,32,40],onclick:[35,36,37],one:[3,8,15,19,20,29],ones:37,onli:[0,3,8,11,15,16,18,20,29,30,31,34,35,37,39,40,42,43],onlin:39,onnx:[7,9,10],onnxconvert:[7,10],op_new:14,open:[7,9,21,23,25,30],oper:[3,6,8,13,18,19,21,34,37,38],operand:18,operatorclass:[35,36],operators_test:20,optim:[4,11,15,16,34],optimizerul:13,option:[3,15,19,36,43],order:[3,8,11,13,14,15,19],order_hint:11,orderc:37,ordercn:[15,19,37],orderhcnw:17,ordernc:[15,19,37],ordernchw:15,ordernhwc:[3,15,17,19],ordernt:15,orderntc:15,ordernwc:[3,19],ordernwhc:[3,19],ordertn:15,ordinari:15,org:[15,32,41,42,43,44],organ:20,origin:[3,15,19,20],other:[3,6,7,14,17,19,20,34,35,36,37],otherwis:[4,15,18,20,34],our:[20,32],out:[4,27,39,40],out_ord:[3,15,19],out_shap:[3,15,19],out_vec:29,output:[2,3,4,5,8,11,12,14,15,19,20,31,32,34,35,36,37,39,40,41,43,44],output_from:[3,19],outsiz:15,overrid:6,overwrit:6,own:22,packag:[10,43],pad:15,page:[23,25,30,31,39,43],pair:[3,19],param:18,paramet:[2,3,5,6,8,9,11,12,14,15,16,17,18,19,33,34,37],part:20,pass:[8,35],path:43,pattern:[32,40],perform:[20,39,42],permiss:30,permit:20,person:20,phase:[34,35],php:43,pip:42,pipelin:39,pixel:15,place:8,placehold:[8,11,13,15,44],pleas:[8,15,20,32,36,41,44],plugin:27,pool:15,pooling_2d:15,popular:[17,43],posit:[3,15,19],possibl:[18,39],pow:35,power:[15,36],powf:36,powlay:36,powoper:36,practic:39,pre:[5,8,10,17,33,35,37],predict:[29,31,40],prediction_vector:29,prefer:[25,30],prepar:41,preset:[27,34],pretrain:[10,32,41],prev:[35,36,37],preview:[23,42],previou:[20,35,37],print:[3,4,18,19],probabl:29,problem:39,procedur:[15,20,29],process:[39,41],product:[15,39],program:[39,43],programdata:43,prohibit:15,project:20,promis:27,prompt:43,propag:5,propos:20,proto:9,provid:[8,11,20,36,39],pull:21,purpos:39,pwd:42,pyenv:42,python2:42,python3:[42,43],python:[9,10,15,20,21,39,40],pytorch:[7,10,21,38],pytorchconvert:[7,41],question:20,rais:[6,15,18],randn:[10,41],randomli:29,rate:15,receiv:[36,37],recent:39,reciproc:15,recognit:[32,39,40],recommend:20,record:20,rectifi:15,recurr:15,recurrent_activ:15,recurrent_dropout:29,recurs:20,redistribut:20,reduct:15,refer:[21,29,31,32,34,40,41,43,44],referenc:[34,37],regener:27,regist:[6,8,11,15,34,35],register_elementwise_kernel:[35,36],register_elementwise_kernel_fallback:[35,36],register_elementwise_kernel_webassembl:[35,36],register_elementwise_kernel_webgpu:[35,36],register_handl:[6,35,36,37],reinterpret:[3,19],reinterpret_ax:[3,19],reinterpret_axi:15,reinterpretax:[3,19],relat:[2,13,34,35],releas:20,remov:[3,5,14,15,19],remove_al:14,remove_input:14,remove_output:14,ren:[32,40],repeat:15,replac:[3,14,19,43],replace_input:14,replace_output:14,report:20,repositori:[9,20],repres:[1,17,18,34,35,37],represent:34,request:21,requir:[10,20,29,34,39,42,43],reshap:[3,19],reshape_lik:[3,19],residu:[32,40],resnet50:[8,32,40],resnet50lay:[5,32],resnet:[5,8,32],resolv:18,respect:34,respons:15,restart:25,restrict:20,result:[20,35,36,37],retri:8,return_sequ:[15,29],revis:20,rgb:40,right:[15,20,34],root:15,rtype:16,rule:[4,16,20],run:[0,20,22,23,29,32,35,36,37,39,41,42,44],runner:[18,29,31,35,36,37,39,40],runtim:[18,35],safari:[21,23,25,28,42],same:[3,14,15,17,19,20,29,36,39],sampl:[29,35,36,37],sample_next_char:29,san:20,save:[2,32,35,36,37,40,41,44],scalar:[15,29],scalar_add:15,scalar_affin:15,scalar_mul:15,scalar_pow:15,scalaraffin:34,scale:15,school:40,school_bu:40,script:[27,30,35,36,37,40],sdk:[42,43],second:[35,37],section1:35,section2:36,section3:37,section:[15,31,34,35,36,37,42,43],see:[6,8,9,15,31,32,41,42,44],seem:43,select:[25,29,31,40],self:[3,19,35,36,37],semant:[1,15,17,37],semicolon:18,send:21,sentenc:29,sentence_se:29,sentence_to_arrai:29,sentiment:29,sequenc:[3,15,19],sequenti:29,seri:[15,18,37],serial:6,serialize_operator_typ:6,server:[31,40],session:11,set:[18,23,29,31,35,36,37,39,40],set_valu:37,set_vari:[6,35,36,37],setplaceholdervalu:18,setup:[0,21,38,39],sever:39,shape:[3,8,11,14,15,19,37,40],shape_dict:[3,15,19],sheepdog:31,shell:42,shetland:31,shift:15,should:[17,23,25,43],show:[25,31,40],side:29,sierra:[21,28],sigmoid:29,sign:20,signatur:15,similar:[35,36,42],similarli:[15,34],simpl:29,simplest:29,simpli:[17,20,35],simplifi:18,sinc:15,singl:15,site:[30,43],size:[3,8,15,17,18,19,34,37],skip:[42,43],slope:15,smartphon:39,softmax:[11,29,37,44],solut:39,some:[3,13,15,19,20,22,27,29],sometim:[30,33],sourc:[1,2,3,5,6,8,9,10,11,12,14,15,16,17,18,19,20,22,34,35,42,43],space:15,spatial:15,special:30,specifi:[2,3,8,11,15,18,19,20,36,37,40],speed:34,speedi:39,speedier:39,spread:15,squar:[15,36],square_converter_handl:[35,36,37],squarelay:[35,36],squareoper:35,squeez:[3,19],src:[22,27,35,36,37],stack:29,standard:[27,39],start:[42,43],state:15,stateless:34,statement:27,std:43,step:[35,39],sterategi:39,still:43,store:[6,9,35,37],str:[2,6,14,15,18],stride:[3,15,19],stride_dict:[3,19],string:6,structur:[21,35,38],sub:[15,18,40],submit:20,suffix:20,suit:20,suitabl:39,sun:[32,40],suppli:[27,39],support:[5,8,15,16,18,19,21,28,29,30,34,39,42,43],suppos:15,sutskev:41,swap:15,swipe:23,symbol:18,symbolicfloat32arrai:[31,40],syntax:27,system:[30,41,43],tab:30,tap:23,tar:42,target:[2,15,20,30],techniqu:29,technolog:42,tensor:[8,11,15,35,37],tensor_dot:15,tensorflow:[7,8,11,15,21,38],tensorflowconvert:[7,8,44],term:[15,20],test:[21,42,43],test_fallback:20,test_kernel:20,test_webassembl:20,test_webgl:20,test_webgpu:20,text_gener:29,tf_var:[8,11],than:[15,16,20],thei:[15,18,39],them:[20,39,43],therefor:[10,15,20,32,34,35,37,39],thi:[2,3,5,6,8,9,11,14,15,16,18,19,20,21,23,25,27,29,30,31,32,33,34,35,36,37,39,40,41,42,43,44],third:36,three:34,threshold:15,threshold_relu:15,through:20,time:[15,18],tip:21,titl:43,to_int:18,toactual:[29,31,35,36,37,40],tokyo:[20,42,43],too:37,top:[15,43],torch:[10,41],torchvis:[10,41],tradit:40,train:[5,8,10,34,39,40],train_mnist_chain:43,trainabl:37,transform:[15,16,27,34],transpil:[4,13,20,33,35,39],transpos:[3,19],transpose_lik:[3,19],transposit:15,travers:[20,34,35],tri:8,tsc:27,tsconfig:27,tupl:[3,15,16,19,35],turn:23,tutori:[15,21,32,40,41,44],tuxfamili:43,two:[17,29,34,39],type:[3,5,6,8,9,10,11,15,16,18,19,31,34,35,36,37,40,42,43],typenam:35,typic:37,unari:19,under:20,understand:[15,20],undetermin:8,uniform:37,union:[3,15,19],unit:15,unknown:18,unless:[20,23,25],unpooling_2d:15,unresolv:18,unstabl:[23,25],updat:29,upon:20,upscal:15,usag:29,use:[9,15,17,22,23,25,27,29,30,33,35,39],use_bia:15,use_initial_c:15,use_initial_h:15,use_tensorflow_convert:8,used:[11,14,15,16,29,36,37,39,42,43],user:[0,15,21,39,42],uses:[20,27,39],using:[29,39,40],usual:39,util:[2,35],v_new:14,v_old:14,valid:[8,11],valu:[6,8,15,16,18,29,36,37],valueerror:18,variabl:[1,3,5,6,8,10,11,12,13,14,15,31,32,34,35,37,40,41,44],variou:[13,37,39],vector:[29,31,40],verbatim:20,veri:[35,39],version:[5,15,20,39,40,43],via:40,video:39,view:31,vision:[5,32,40],visit:30,vocabulari:15,w_hidden:15,w_input:15,want:[6,8,15,20,22,23,25,27,30,33,42,43],wasm:43,web:[0,20,21,23,25,28,32,39,41,44],webassembl:[20,32,35,36,37,39,40,41,42,43,44],webassemblydescriptorgener:[35,36,37],webcamj:30,webdnn:[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,25,28,29,31,32,33,35,36,37,38,40,41,42,43,44],webdnn_b:37,webdnn_i:[35,36,37],webdnn_oper:[35,36],webdnn_test:20,webdnn_x:[35,36,37],webgl:[32,39,40,41,44],webgpu:[2,4,20,21,26,28,32,35,36,37,39,40,41,43,44],webgpudescriptorgener:[35,36,37],webrtc:30,websit:30,weight:[8,15,33,36,39,40],welcom:20,well:[31,40,43],wget:42,when:[3,6,15,18,19,30,34,35,43],where:[15,43],whether:[3,6,14,16,18,19,20],which:[3,11,14,15,17,18,19,27,29,30,34,35,36,37,39,42,43],who:20,whole:[20,29],whose:[3,15,19,20],wide:29,width:[15,37],window:[15,21,27,38,42],with_assert:[3,14,19],without:[15,33,34,36,39],withs:35,word:[15,29],work:[20,30,31,40,43],workaround:30,worker:43,world:43,wrap:[8,30],written:[35,36],www:[15,43,44],y_typed_arrai:[31,40],you:[4,6,8,9,15,17,20,22,23,25,27,29,30,31,33,34,35,36,37,39,40,42,43],your:[6,8,15,20,21,22,30,31,34,38,40],zero:[11,15,16,44],zero_padding_1d:15,zero_padding_2d:15,zhang:[32,40],zip:43},titles:["JavaScript API","Axis","backend","ConstantVariable","Environment Variables","ChainerConverter","Converter","frontend","KerasConverter","ONNXConverter","PyTorchConverter","TensorFlowConverter","Graph","Python API","Operator","operators","OptimizeRule","Order","Placeholder","Variable","How to Contribute","MIL WebDNN","Building webdnn.js","Enabling WebGPU on iOS 11","WebGPU\u3092iOS 11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5","Enabling WebGPU on macOS 10.13 High Sierra","WebGPU\u3092macOS 10.13 High Sierra\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5","EcmaScript5 support","Tips","Using LSTM model","Using web camera in Safari","Use with Caffemodel","Use with Chainer model","Use your custom operator","0. Architecture of Graph Transpiler and How to Extend","1. Elementwise Operator without Parameters","2. Elementwise Operator with Parameters","3. Layer with Weights","Tutorial","Introduction to WebDNN","Use with Keras model","Use with PyTorch model","Setup guide (for Mac / Linux)","Setup guide (for Windows)","Use with TensorFlow model"],titleterms:{"11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5":24,"export":40,"final":29,"new":20,"sierra\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5":26,"webgpu\u3092io":24,"webgpu\u3092maco":26,Abs:15,Cos:15,Use:[27,31,32,33,40,41,44],Using:[29,30],aco:15,acosh:15,advanc:29,api:[0,13],architectur:34,asin:15,asinh:15,atan:15,atanh:15,averagepooling2d:15,axi:[1,37],axiswisebia:15,axiswisescal:15,backend:2,background:30,bia:37,broadcast:15,browser:[31,40],build:22,caffemodel:31,camera:30,chainer:32,chainerconvert:5,clippedrelu:15,code:[27,42,43],col2im:15,compil:20,comput:40,concat:15,constantvari:3,content:21,contribut:20,convert:[6,27,31,34,35,36,37,40],convolution2d:15,cosh:15,custom:[33,35,36],deconvolution2d:15,defin:[35,36,37],depth2spac:15,download:[42,43],ecmascript5:27,eigen:[42,43],elementwis:[15,35,36],elementwiseadd:15,elementwisediv:15,elementwisemul:15,elementwisepow:15,elementwisesum:15,elu:15,embed:15,emscripten:[42,43],enabl:[23,25],environ:[4,42,43],es5:27,exampl:[2,5,8,9,10,11,29,35,36,37,43],exp:15,extend:34,flash:30,format:40,framework:39,free:39,frontend:7,gener:[29,34,35,36],generate_descriptor:2,graph:[12,34,40,43],graphdescriptor:31,greater:15,greaterequ:15,guid:[42,43],handler:[34,35,36,37],hardsigmoid:15,high:[25,26],how:[20,34],iOS:23,igraphexecutiondata:2,im2col:15,infer:39,input:29,instal:[39,42,43],interfac:39,introduct:39,issu:20,iter:29,javascript:0,kera:40,kerasconvert:8,layer:37,leakyrelu:15,licens:20,linear:15,linux:42,localresponsenorm:15,log:15,lstm:[15,29],mac:42,maco:25,max:15,maxpooling2d:15,mil:21,model:[29,32,40,41,44],more:29,non:39,note:42,onnxconvert:9,open:20,oper:[14,15,33,35,36],optim:39,optimizerul:16,order:[17,37],our:40,output:29,overhead:39,overview:34,own:27,packag:42,paramet:[35,36],phase:39,placehold:18,player:30,polyfil:27,pooling2d:15,pow:36,pretrain:40,prod:15,proper:43,pull:20,python:[13,42,43],pytorch:41,pytorchconvert:10,reduc:15,reinterpretaxi:15,relu:15,request:20,reshap:15,rsqrt:15,run:[31,40,43],runtim:20,safari:30,scalaradd:15,scalaraffin:15,scalarmul:15,scalarpow:15,secur:30,select:15,send:20,sequenc:29,set:[30,43],setup:[42,43],sierra:25,sigmoid:15,sin:15,sinh:15,slice:15,softmax:15,softplu:15,softsign:15,space2depth:15,special:39,squar:35,state:29,structur:39,support:27,tan:15,tanh:15,tensordot:15,tensorflow:44,tensorflowconvert:11,test:[20,35,36,37],thresholdrelu:15,tile:15,time:20,tip:28,transpil:[34,43],transpos:15,tutori:38,unpooling2d:15,using:43,variabl:[4,19],verif:43,web:[30,31,40],webdnn:[21,22,27,34,39],webgpu:[23,25,42],weight:37,window:43,without:35,your:[27,33],zeropadding1d:15,zeropadding2d:15}})