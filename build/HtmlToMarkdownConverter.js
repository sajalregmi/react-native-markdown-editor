var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNativeWebview=require("react-native-webview");var _this=this,_jsxFileName="/Users/sajalregmi/react-native-markdown-editor/src/HtmlToMarkdownConverter.tsx";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}var HtmlToMarkdownConverter=function HtmlToMarkdownConverter(_ref){var htmlContent=_ref.htmlContent,onConversionComplete=_ref.onConversionComplete;var webViewRef=(0,_react.useRef)(null);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),webviewLoaded=_useState2[0],setWebviewLoaded=_useState2[1];var converterHtml="\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charset=\"UTF-8\">\n      <title>HTML to Markdown Converter</title>\n      <script src=\"https://unpkg.com/turndown/dist/turndown.js\"></script>\n    </head>\n    <body>\n      <script>\n        (function() {\n          function convertHtmlToMarkdown(html) {\n            var turndownService = new TurndownService();\n            return turndownService.turndown(html);\n          }\n\n          window.addEventListener('message', function(event) {\n            var htmlContent = event.data;\n            var markdown = convertHtmlToMarkdown(htmlContent);\n            window.ReactNativeWebView.postMessage(markdown);\n          });\n        })();\n      </script>\n    </body>\n    </html>\n  ";(0,_react.useEffect)(function(){if(webviewLoaded&&webViewRef.current&&htmlContent){webViewRef.current.postMessage(htmlContent);}},[htmlContent,webviewLoaded]);var handleMessage=function handleMessage(event){var markdown=event.nativeEvent.data;onConversionComplete(markdown);};return _react.default.createElement(_reactNativeWebview.WebView,{ref:webViewRef,originWhitelist:['*'],source:{html:converterHtml},onMessage:handleMessage,javaScriptEnabled:true,onLoad:function onLoad(){return setWebviewLoaded(true);},style:{height:0,width:0},__self:_this,__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:5}});};var _default=exports.default=HtmlToMarkdownConverter;