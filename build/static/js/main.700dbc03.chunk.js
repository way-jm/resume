(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,,,,,,function(n,e,t){n.exports=t(32)},,,,,function(n,e,t){},,,,function(n,e,t){},function(n,e,t){var r={"./styles0.css":22,"./styles1.css":23,"./styles2.css":24};function a(n){var e=s(n);return t(e)}function s(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=s,n.exports=a,a.id=21},function(n,e){n.exports="/**\n *\n * \u4f60\u597d\u554a, \u6211\u662f\u536b\u6b63\u660e\uff08Way\uff09\u3002\n *\n * \u6211\u559c\u6b22\u6363\u9f13\u4e00\u4e9b\u6709\u8da3\u7684\u73a9\u610f\u513f\u3002\n *\n * \u8981\u4e0d\u6765\u4e00\u573a\u76f4\u64ad\u5199\u4ee3\u7801\uff1f\n */\n\n/**\n * \u90a3\u4e48\u5f00\u59cb\u5427\uff0c\u9996\u5148\u8ba9\u4e00\u5207\u90fd\u52a8\u8d77\u6765~\n */\n\n* {\n  -webkit-transition: all 1s;\n}\n\n/**\n * \u8fd9\u770b\u4f3c\u6ca1\u7528\u5440\uff0c\u522b\u6025\uff0c\u4e00\u4f1a\u513f\u4f60\u5c31\u4f1a\u770b\u5230\u6548\u679c\u4e86\u3002\n *\n * \u9ed1\u767d\u914d\u8272\u592a\u65e0\u804a\u4e86\uff0c\u8ba9\u6211\u6765\u505a\u4e00\u4e9b\u53d8\u5316\u3002\n */\n\nhtml {\n  background: rgb(63, 82, 99);\n}\n\n/***\n * \u7b49\u7b49\u3002\n */\n\npre, a {\n  color: white;\n  box-sizing: border-box;\n\n}\n\n/**\n * \u770b\u4e0a\u53bb\u597d\u591a\u4e86\u3002\u4f46\u662f\u6709\u70b9\u523a\u773c\u4e86\u3002\n *\n * \u800c\u4e14\u5728\u6574\u4e2a\u5c4f\u5e55\u4e0a\u5199\u4ee3\u7801\u6709\u70b9\u6d6a\u8d39\u7a7a\u95f4\u4e86\u3002\n *\n * \u4e0d\u8981\u7740\u6025\u54e6\uff0c\u8ba9\u6211\u6765\u505a\u4e00\u4e9b\u4f18\u5316\u3002\n */\n\npre:not(:empty) {\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  border: 1px solid #ccc;\n  max-height: 44.6%;\n  width: 49%;\n  font-size: 14px;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n  white-space: pre-wrap;\n  outline: 0;\n  position: absolute;\n}\n\n/**\n * \u63a5\u4e0b\u6765\u6211\u4eec\u5728\u628a\u5b83\u79fb\u5230\u5c4f\u5e55\u53f3\u4fa7\u3002\n */\n\n#style-text {\n  -webkit-transform: translateX(95%);\n  position: absolute;\n}\n\n/**\n * \u770b\u4e0a\u53bb\u8fd8\u4e0d\u9519\u5594, \u4f46\u662f\u6240\u6709\u7684\u5b57\u4f53\u989c\u8272\u662f\u767d\u8272\u7684\uff01\n *\n * \u90a3\u4e48\uff0c\u6211\u4eec\u6765\u628a\u4ee3\u7801\u53d8\u7684\u66f4\u52a0\u53ef\u8bfb\u5427~\n */\n\n.comment       { color: #857F6B; font-style: italic; }\n.selector      { color: #E69F0F; }\n.selector .key { color: #64D5EA; }\n.key           { color: #64D5EA; }\n.value         { color: #BE84F2; }\n.value.px      { color: #F92772; }\n\n/**\n * \u73b0\u5728\u6211\u4eec\u6709\u4e86\u4e00\u4e9b\u8fdb\u5c55\u3002\n *\n * \u518d\u628a\u5b83\u53d8\u5f97\u66f4\u7acb\u4f53&\u9971\u6ee1\u4e00\u4e9b\u3002\n */\n\nbody {\n  -webkit-perspective: 1000px;\n}\n\n#style-text {\n  -webkit-transform: translateX(98.5%) rotateY(-10deg);\n  -webkit-transform-origin: right;\n  max-height: 94.5%;\n}\n\n/**\n * \u597d\u5427\u5dee\u4e0d\u591a\u4e86\uff0c\u63a5\u4e0b\u6765\u5c31\u804a\u804a\u6211\u81ea\u5df1\u5427\u3002\n *\n * \u6211\u76f8\u4fe1\u4f60\u5e94\u8be5\u4e0d\u662f\u6765\u770b\u6211\u70ab\u6280\u7684\u5427\uff1f\n */\n\npre:not(#style-text) {\n  -webkit-transform: rotateY(10deg);\n  -webkit-transform-origin: left;\n}\n/**/\n\n"},function(n,e){n.exports="/**\n * \u5de6\u4fa7\u7684 markdown \u770b\u8d77\u6765\u5e76\u4e0d\u7f8e\u89c2\u3002\n *\n * \u6211\u4eec\u7a0d\u4f5c\u4fee\u9970\u3002\n */\n#work-text {\n  max-height: 94.5%;\n}\n\n#work-text.flipped {\n  -webkit-transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);\n}\n\n#work-text .md {\n  -webkit-transform: rotateY(190deg) rotateZ(180deg);\n  margin-top: 1200px;\n}\n\n/**\n * \u4e0b\u9762\u5c31\u662f\u89c1\u8bc1\u5947\u8ff9\u7684\u65f6\u523b\uff1a\n *\n * 3\u3002\n * 2\u3002\n * 1\u3002\n *\n * \u3002\n * \u9a97\u4f60\u5566\uff0c\u5565\u4e5f\u6ca1\u6709~\n *\n * \u597d\u5427\uff0c\u5176\u5b9e\u662f\u6709\u7684\uff0c\u6765\u4e86\u3002\n *\n */\n"},function(n,e){n.exports='\n/**\n * \u6587\u672c\u53ef\u4ee5\u505a\u4e00\u4e9b\u9002\u5f53\u8c03\u6574\u3002\n */\n\n.md {\n  font-family: "Helvetica Neue", Helvetica, sans-serif;\n}\n\n.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {\n  display: inline-block;\n  color: #ddd;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n\n.md li {\n  margin: 5px 0;\n  line-height: 1.5;\n}\n\n.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {\n  margin: 0;\n}\n\n\n/**\n * \u8fd8\u5dee\u6700\u540e\u4e00\u70b9\u5c31\u7ed3\u675f\u4e86\u3002\n */\n\npre:hover{\n  box-shadow: 0 0 40px 5px rgba(255,255,255,0.4);\n}\n\n/**\n * \u5e0c\u671b\u4f60\u80fd\u559c\u6b22\uff0c\u8fd9\u4e2a\u521b\u610f\u662f\u53c2\u8003\u56fd\u5916\u4e00\u4e2a\u725b\u4eba\u7684\uff0c\n * \u7136\u540e\u770b\u5230\u6ef4\u6ef4\u67d0\u5927\u795e\u7528Vue\u91cd\u6784\u4e86\u4e00\u4e0b\uff0c\n * \u6211\u89c9\u5f97\u5f88\u6709\u8da3\uff0c\u4e5f\u7528React+Hooks+TS\u91cd\u6784\u4e86\u4e00\u4e0b\u3002\n * \u5982\u679c\u60a8\u89c9\u5f97\u6211\u8fd8\u4e0d\u9519\uff0c\u53ef\u4ee5\u4e0e\u6211\u8054\u7cfb~\uff0c\u10e6( \xb4\uff65\u1d17\uff65` )\u6bd4\u5fc3\n */\n\n\n'},,,,,,,function(n,e){n.exports='\n\u57fa\u672c\u8d44\u6599\n=========\n\n* \u59d3\u540d\uff1a\u536b\u6b63\u660e \u3002\n* Email\uff1a 1904628089@qq.com \u3002\n* GitHub\uff1ahttps://github.com/way-jm \u3002\n* PHONE: 18221924339\n* BD\uff1a 1992.06.27\n\n\u4e2a\u4eba\u6982\u51b5\n-------\n\n* \u89c4\u89c4\u77e9\u77e9\u7684\u524d\u7aef\u513f\uff0c\u4e0d\u9760\u8c31\u7684Noder & Pythoner \uff0c\u6df1\u5ea6\u5b66\u4e60\u7231\u597d\u8005\u3002\n* \u559c\u6b22\u52a9\u4eba\u4e3a\u4e50\u7684\u5f00\u6e90\u5f00\u53d1\u8005(xr-storage\uff0cWant\uff0cwayswipe) \u3002\n* \u4e30\u5bcc\u7684\u524d\u7aef\u5de5\u4f5c\u7ecf\u9a8c\u548c\u4e00\u4e9b\u540e\u7aef(Base PHP & Node)\u5f00\u53d1\u7ecf\u9a8c\u3002\n* \u719f\u6089Vue\uff0cReact\u7b49MVVM\u6846\u67b6\uff0c\u5305\u62ecVuex\uff0cRedux\uff0cHooks\uff0c\u57fa\u4e8eUmi\u548cant design\u7684\u5f00\u53d1\u7ecf\u9a8c\u3002\n* \u4e30\u5bcc\u7684TypeScript\u4f7f\u7528\u7ecf\u9a8c\uff0cNode,Koa2\u540e\u7aef\u5f00\u53d1\u7ecf\u9a8c\n* Serverless,AWS Lambda \u4f7f\u7528\u7ecf\u9a8c\n* \u81ea\u6784\u5fae\u524d\u7aef\u6846\u67b6\uff0c\u4ee5\u53ca\u5f00\u6e90\u5fae\u524d\u7aef\u6846\u67b6qiankun\uff0cwujie\u7684\u4f7f\u7528\u548c\u6539\u9020\u8001\u9879\u76ee\u7ecf\u9a8c\n* \u5353\u8d8a\u7684CSS\u80fd\u529b\uff0c\u719f\u6089sass\uff0cless\uff0cstylus\u3002\n* webVR \u5f00\u53d1\u7ecf\u9a8c\u3002\n* \u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f & \u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1 & \u5c0f\u7a0b\u5e8f\u4e91\u6258\u7ba1\n* \u719f\u6089webpack\u914d\u7f6e\uff0c\u4e86\u89e3\u5404\u79cdloader\uff0cplugin\u7684\u4f7f\u7528\u548c\u81ea\u5b9a\u4e49\u3002\n* \u5f88\u5f3a\u7684\u5b66\u4e60\u80fd\u529b\u3002\n* \u56fd\u9645\u65e5\u672c\u8bed\u80fd\u529b\u6d4b\u8bd5\u4e00\u7ea7\uff08\u6700\u9ad8\u7ea7\u522b\uff09\u3002\n\n\n\u6559\u80b2\u80cc\u666f\n-------\n* 2010.9-2014.6  \u672c\u79d1\uff1a\u4e2d\u5357\u6797\u4e1a\u79d1\u6280\u5927\u5b66\n* 2014.9 \u3002\u3002\u3002\u3002\u6ca1\u6709\u66f4\u9ad8\u5b66\u5386\u4e86\uff0c\u6211\u4e00\u76f4\u8ba4\u4e3a\u6211\u662f\u5357\u5927\u672a\u8fc7\u95e8\u7684\u5b66\u751f\u3002\n\n\u5de5\u4f5c\u7ecf\u5386\n------\n* 2022.4 -\u81f3\u4eca  HLI\u4e2d\u56fd\u533a(Human longevity Inc)\n   -AI \u533b\u7597\u5e73\u53f0Physician Terminal(US Site\u548cCN Site\u540c\u7801\u5f02\u6784)\u7684\u524d\u7aef\u4e3b\u5bfc\u5f00\u53d1\n   -\u7528\u6237\u7aefReact-native \u7684\u5f00\u53d1\n   -BFF Node Serverless \u7684\u7ef4\u62a4\u548c\u5347\u7ea7\n   -\u4e3b\u6301\u4f01\u4e1a\u7ea7\u4e1a\u52a1\u7ec4\u4ef6\u5e93\u7684\u521b\u5efa\u548c\u7ef4\u62a4\n   -\u524d\u7aef\u67b6\u6784\u7684\u4f18\u5316\uff0c\u62c6\u5206\u548c\u5347\u7ea7\u5de5\u4f5c\n   -\u548c\u7f8e\u56fd\u524d\u7aef\u56e2\u961f\u534f\u540c\u5f00\u53d1\uff0c\u5171\u540c\u7ef4\u62a4\u5408\u4fdd\u969c\u591a\u4e2a\u9879\u76ee\u7684\u8fed\u4ee3\u8fd0\u884c\n* 2021.8~2022.4  \u5c0f\u7c73\u5357\u4eac\u7814\u53d1\u4e2d\u5fc3\u524d\u7aef\n   -\u524d\u7aef\u7ec4\u4ef6\u5e93\n   -\u9879\u76ee\u6784\u67b6\u4ee3\u7801\u7684\u5347\u7ea7\u4f18\u5316\n   -\u4ea4\u4ed8\u591a\u4e2a\u6709\u54c1\u7535\u5546\u5546\u5bb6\u7aef\u7684\u4e1a\u52a1\u524d\u7aef\u9879\u76ee\u3002\n   \uff08\u968f\u774022\u5e744\u6708\u5357\u4eac\u7814\u53d1\u4e2d\u5fc3\u64a4\u9500\uff0c\u88ab\u88c1\u5458\uff09\n\n* 2019.5\u20142021.7  \u5b89\u5fbd\u9621\u964c\u7f51\u7edc\u79d1\u6280\uff08\u829c\u6e56\uff09 \u524d\u7aef\u5de5\u7a0b\u5e08\n  -\u53c2\u4e0e\u591a\u4e2aGIS\u9879\u76ee\u7684\u524d\u7aef\u90e8\u5206\uff0c\u5305\u62ec\u6e56\u5357\u519c\u4e1a\u4fdd\u9669\uff0c\u829c\u6e56\u6c34\u6e05\u5cb8\u7eff\u9879\u76ee\uff0c\u53c2\u4e0ePC\u7aef\u5c55\u793a\u9875\u9762\uff0c\u540e\u53f0\u7ba1\u7406\u9875\u9762\uff0c\u79fb\u52a8\u7aef\uff0c\u548c\u5ba2\u6237\u7aef\u6df7\u5408\u5f00\u53d1\u7b49\u7b49\u3002\n\n  -\u901a\u7528\u811a\u624b\u67b6\uff0c\u9274\u4e8e\u9879\u76ee\u4e2d\u5f88\u591a\u540c\u8d28\u5316\u7684\u6a21\u5757\u53ef\u4ee5\u5171\u7528\uff0c\u57fa\u4e8e"\u7ea6\u5b9a\u751f\u914d\u7f6e\uff0c\u914d\u7f6e\u751f\u4e07\u7269"\u7684\u539f\u5219\uff0c\u57fa\u4e8eReact+Redux+redux-thunk+Hooks+ant design+TypeScript\u642d\u5efa\u4e86\n  \u516c\u53f8\u9879\u76ee\u540e\u53f0\u7ba1\u7406\u7684\u901a\u7528\u811a\u624b\u67b6Want(way&ant),\u5927\u5927\u51cf\u8f7b\u4e86\u524d\u7aef\u5f00\u53d1\u6a21\u5757\u7684\u5de5\u4f5c\u91cf\uff0c\u5b9a\u4e49\u4e86\u5f00\u53d1\u6d41\u7a0b\u548c\u89c4\u8303\uff0c\u4e3a\u66f4\u9ad8\u7a0b\u5ea6\u654f\u6377\u5f00\u53d1\u63d0\u4f9b\u53ef\u80fd\u3002\u811a\u624b\u67b6\u4e5f\u5f00\u6e90\u4e86\uff08https://github.com/way-jm/want\uff09\uff0c\u5e76\u4e14\n  \u4e0a\u4f20\u5230\u4e86Ant design\u5b98\u65b9\u811a\u624b\u67b6\u5e02\u573a(https://scaffold.ant.design/#/scaffolds/want)\u3002\n\n  -xr-storage\u5f00\u6e90\u5e93\u7684\u5f00\u53d1\u3002\u6839\u636e\u4e1a\u52a1\u4e2d\u7ecf\u5e38\u4f7f\u7528\u7684\u5bf9\u4e8estorage\u7684\u64cd\u4f5c\uff0c\u4f7f\u7528Typescript\u5f00\u53d1\u4e86xr-storage\u5e93\uff0c\u4f7f\u7528\u539f\u751fTypescript\u5f00\u53d1\uff0c\u5929\u7136\u652f\u6301TS\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55\n  \u7b2c\u4e09\u65b9\u6a21\u5757\u3002\u66f4\u52a0\u4fbf\u5229\uff0c\u5f00\u7bb1\u5373\u7528\uff08https://way-jm.github.io/xr-storage/start/start.html\uff09\u3002\u51e0\u4e4e\u5728\u516c\u53f8\u7684\u5168\u7cfb\u5217\u4ea7\u54c1\u4e2d\u90fd\u6709\u4f7f\u7528\u3002\n\n  -\u7814\u7a76\u6df1\u5ea6\u5b66\u4e60\u5728\u516c\u53f8\u9065\u611f\u9879\u76ee\u4e0a\u7684\u843d\u5730\uff0c\u6700\u7ec8\u6ca1\u6709\u7814\u7a76\u6210\u529f\uff0c\u4f46\u662f\u5bf9\u4e8e\u666e\u9002\u6027\u7684\u4eba\u8138\u8bc6\u522b\u548c\u7269\u4f53\u5206\u7c7b\u6709\u9636\u6bb5\u6027\u6210\u679c\u3002\n\n* 2016.8-2019.5 \u4e0a\u6d77\u539a\u6b65\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8 \u524d\u7aef\u5de5\u7a0b\u5e08\n  -\u53c2\u4e0e\u516c\u53f8\u79ef\u5206\u5899\u9879\u76ee\uff0c\u91d1\u878d\u4ea7\u54c1\u9879\u76ee\u7684\u524d\u7aef\u5de5\u4f5c\uff0c\u5df2\u7ecf\u90e8\u5206PHP\u5f00\u53d1\u5de5\u4f5c\u3002\u8fd9\u671f\u95f4\u4e3b\u8981\u662f\u4f7f\u7528Vue\u5468\u8fb9\u6280\u672f\u3002\n  -\u5b8c\u6210\u516c\u53f8\u524d\u7aef\u6846\u67b6\u4ecejquery\u5230MVVM\u7684\u8de8\u57df\u3002\n\n  -\u5f00\u6e90\u7ec4\u4ef6\u5e93 wayswipe\u7684\u5f00\u53d1,\u53c2\u8003(https://github.com/way-jm/wayswipe);\n\n  -\u53c2\u4e0e\u4e86\u4e00\u4e9bPHP\u7684\u793e\u533a\u5de5\u4f5c\uff0c\u5982\u53c2\u4e0ePHP\u5f00\u6e90\u6846\u67b6Laravel\u7684\u7ffb\u8bd1\u5de5\u4f5c,\u53c2\u8003(https://learnku.com/users/22754/translations)\n\n* 2014.6-2016.8 \u65e5\u672c\u6e0a\u672c\u91cd\u5de5\u4e0a\u6d77\u5de5\u5382  \u6280\u672f\u987e\u95ee\u52a9\u7406&\u65e5\u8bed\u7ffb\u8bd1\n\n* 2020.9 -2021.1 \u9999\u6e2f\u68a6\u7337\u79d1\u6280\u7b7e\u7ea6\u7ffb\u8bd1\n* 2020.10~ \u65e5\u672cCCLesson\u5728\u7ebf\u4e2d\u6587\u8bb2\u4e60\u8001\u5e08(\u516c\u76ca)\n'},function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),s=t(8),o=t.n(s),c=(t(16),t(1)),i=t.n(c),u=t(2),l=t(3),p=t.n(l),d=(t(20),t(4)),f=!1,m=/(\/\*(?:[^](?!\/\*))*\*)$/,x=/([a-zA-Z- ^\n]*)$/,b=/([^:]*)$/,h=/(.*)$/,w=/\dp/,y=/p$/,g=function(n,e){return f&&"/"!==e?n+=e:"/"!==e||f?"/"===e&&"*"===n.slice(-1)&&f?(f=!1,n=n.replace(m,'<span class="comment">$1/</span>')):":"===e?n=n.replace(x,'<span class="key">$1</span>:'):""===e?n=n.replace(b,'<span class="value">$1</span>'):"{"===e?n=n.replace(h,'<span class="selector">$1</span>{'):"x"===e&&w.test(n.slice(-2))?n=n.replace(y,'<span class="value px">px</span>'):n+=e:(f=!0,n+=e),n},k=/[\uff1f\uff01\u3002~\uff1a]$/,v=/\D[\uff0c\uff1b\u3001]$/,j=/[^/]\n\n$/,O=function(n){var e=Object(r.useReducer)((function(n,e){return g(n,e)}),""),s=Object(d.a)(e,2),o=s[0],c=s[1],l=n.innerRef,f="",m=Object(r.useRef)(null),x=[0,1,2].map((function(n){return t(21)("./styles"+n+".css")})),b=function(){var e=Object(u.a)(i.a.mark((function e(t,r,a,s,o){var c,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.animationSkipped){e.next=2;break}throw new Error("SKIP IT");case 2:if(c=r.slice(a,a+o),a+=o,t.scrollTop=t.scrollHeight,h(c),!(a<r.length)){e.next=17;break}u=s,l=r.slice(a-2,a),v.test(l)&&(u=30*s),k.test(l)&&(u=70*s),l=r.slice(a-2,a+1),j.test(l)&&(u=50*s);case 13:return e.next=15,p.a.delay(u);case 15:if(n.paused){e.next=13;break}case 16:return e.abrupt("return",b(t,r,a,s,o));case 17:case"end":return e.stop()}}),e)})));return function(n,t,r,a,s){return e.apply(this,arguments)}}(),h=function(e){c(e),f+=e,";"!==e&&"}"!==e||(n.styleAppend(f),f="")};return Object(r.useImperativeHandle)(l,(function(){return{write:function(){var n=Object(u.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(m.current,x[e],0,16,1);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),writeToEnd:function(){for(var e=x.join("\n"),t="",r=0;r<e.length;r++)t=g(t,e[r]);c(t),n.styleOverwrite("#work-text * {transition: none; }"+e)}}})),a.a.createElement("pre",{id:"style-text",contentEditable:!0,dangerouslySetInnerHTML:{__html:o},ref:m})},E=t(9),T=t.n(E),H=t(10),S=t.n(H).a.markdown.toHTML,R=/[\uff1f\uff01\u3002~\uff1a]$/,I=/\D[\uff0c\uff1b\u3001]$/,$=/[^/]\n\n$/,P=function(n){var e=n.workRef;var s=Object(r.useRef)(null),o=function(){var e=Object(u.a)(i.a.mark((function e(t,r,a,s,u){var l,d,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=r.slice(a,a+u),a+=u,t.scrollTop=t.scrollHeight,c(l),!(a<r.length)){e.next=15;break}d=s,f=r.slice(a-2,a),I.test(f)&&(d=30*s),R.test(f)&&(d=70*s),f=r.slice(a-2,a+1),$.test(f)&&(d=50*s);case 11:return e.next=13,p.a.delay(d);case 13:if(n.paused){e.next=11;break}case 14:return e.abrupt("return",o(t,r,a,s,u));case 15:case"end":return e.stop()}}),e)})));return function(n,t,r,a,s){return e.apply(this,arguments)}}(),c=function(n){x(n)},l=Object(r.useReducer)((function(n,e){return g(n,e)}),""),f=Object(d.a)(l,2),m=f[0],x=f[1],b=t(31),h=S(b),w=Object(r.useState)(!1),y=Object(d.a)(w,2),k=y[0],v=y[1],j=Object(r.useState)(!1),O=Object(d.a)(j,2),E=O[0],H=O[1],P=Object(r.useState)(!0),N=Object(d.a)(P,2),L=N[0],M=N[1];return Object(r.useImperativeHandle)(e,(function(){return{write:function(){var n=Object(u.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return H(!0),n.next=3,o(s.current,b,0,16,1);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),showWorkBox:function(){H(!0),M(!1),v(!0),setTimeout((function(){s.current.scrollTop=9999;var n=!1;T()(s.current,function(){var e=Object(u.a)(i.a.mark((function e(t,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:if(a=(s.current.scrollHeight-s.current.clientHeight)/2,!(k?s.current.scrollTop<a:s.current.scrollTop>a)){e.next=11;break}return v(!k),n=!0,e.next=9,p.a.delay(500);case 9:s.current.scrollTop=k?9999:0,n=!1;case 11:s.scrollTop+=r*(k?-1:1);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),!0)}),200)}}})),a.a.createElement(a.a.Fragment,null,E?a.a.createElement("pre",{id:"work-text",ref:s,className:k?"flipped":""},L?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}):a.a.createElement("div",null,a.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:b}}),a.a.createElement("div",{className:"md",dangerouslySetInnerHTML:{__html:h}}))):null)},N=function(){var n=Object(r.useRef)(),e=Object(r.useRef)(),t=document.getElementById("style-tag"),s=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.current.write(0);case 3:return t.next=5,e.current.write();case 5:return t.next=7,n.current.write(1);case 7:return e.current.showWorkBox(),t.next=10,p.a.delay(2e3);case 10:return t.next=12,n.current.write(2);case 12:t.next=21;break;case 14:if(t.prev=14,t.t0=t.catch(0),"SKIP IT"!==t.t0.message){t.next=20;break}o(),t.next=21;break;case 20:throw t.t0;case 21:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),o=function(){n.current.writeToEnd()};return Object(r.useEffect)((function(){s().then()}),[]),a.a.createElement("div",{id:"App"},a.a.createElement(O,{animationSkipped:!1,paused:!1,styleOverwrite:function(n){t.textContent=n},styleAppend:function(n){t.textContent+=n},innerRef:n}),a.a.createElement(P,{paused:!1,workRef:e}))};o.a.render(a.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.700dbc03.chunk.js.map