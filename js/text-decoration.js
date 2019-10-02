{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red213\green192\blue107;\red255\green255\blue255;\red109\green136\blue175;
\red193\green193\blue193;\red136\green109\blue133;\red196\green100\blue32;\red133\green166\blue119;\red83\green83\blue83;
}
{\*\expandedcolortbl;;\cssrgb\c86667\c79216\c49412;\cssrgb\c100000\c100000\c100000;\cssrgb\c50196\c60784\c74118;
\cssrgb\c80000\c80000\c80000;\cssrgb\c60392\c50980\c59216;\cssrgb\c81569\c47059\c16471;\cssrgb\c58824\c70196\c54118;\cssrgb\c40000\c40000\c40000;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww28300\viewh17700\viewkind0
\deftab720
\pard\pardeftab720\sl340\partightenfactor0

\f0\fs26 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 TxtType\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 function\cf3 \strokec3 (\cf4 \strokec4 el\cf3 \strokec3 , \cf4 \strokec4 toRotate\cf3 \strokec3 , \cf4 \strokec4 period\cf3 \strokec3 ) \{\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 toRotate\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf4 \strokec4 toRotate\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 el\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf4 \strokec4 el\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 loopNum\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf7 \strokec7 0\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 period\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 parseInt\cf3 \strokec3 (\cf4 \strokec4 period\cf3 \strokec3 , \cf7 \strokec7 10\cf3 \strokec3 ) \cf5 \strokec5 ||\cf3 \strokec3  \cf7 \strokec7 2000\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf8 \strokec8 ''\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 tick\cf3 \strokec3 ();\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 false\cf3 \strokec3 ;\
    \};\
\
    \cf2 \strokec2 TxtType\cf3 \strokec3 .\cf6 \strokec6 prototype\cf3 \strokec3 .\cf6 \strokec6 tick\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 function\cf3 \strokec3 () \{\
        \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 i\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 loopNum\cf3 \strokec3  \cf5 \strokec5 %\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 toRotate\cf3 \strokec3 .\cf6 \strokec6 length\cf3 \strokec3 ;\
        \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 fullTxt\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 toRotate\cf3 \strokec3 [\cf4 \strokec4 i\cf3 \strokec3 ];\
\
        \cf2 \strokec2 if\cf3 \strokec3  (\cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3 ) \{\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf4 \strokec4 fullTxt\cf3 \strokec3 .\cf6 \strokec6 substring\cf3 \strokec3 (\cf7 \strokec7 0\cf3 \strokec3 , \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3 .\cf6 \strokec6 length\cf3 \strokec3  \cf5 \strokec5 -\cf3 \strokec3  \cf7 \strokec7 1\cf3 \strokec3 );\
        \} \cf2 \strokec2 else\cf3 \strokec3  \{\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf4 \strokec4 fullTxt\cf3 \strokec3 .\cf6 \strokec6 substring\cf3 \strokec3 (\cf7 \strokec7 0\cf3 \strokec3 , \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3 .\cf6 \strokec6 length\cf3 \strokec3  \cf5 \strokec5 +\cf3 \strokec3  \cf7 \strokec7 1\cf3 \strokec3 );\
        \}\
\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 el\cf3 \strokec3 .\cf6 \strokec6 innerHTML\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf8 \strokec8 '<span class="wrap">'\cf5 \strokec5 +\cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf5 \strokec5 +\cf8 \strokec8 '</span>'\cf3 \strokec3 ;\
\
        \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 that\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 ;\
        \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 delta\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf7 \strokec7 200\cf3 \strokec3  \cf5 \strokec5 -\cf3 \strokec3  \cf2 \strokec2 Math\cf3 \strokec3 .\cf6 \strokec6 random\cf3 \strokec3 () \cf5 \strokec5 *\cf3 \strokec3  \cf7 \strokec7 100\cf3 \strokec3 ;\
\
        \cf2 \strokec2 if\cf3 \strokec3  (\cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3 ) \{ \cf4 \strokec4 delta\cf3 \strokec3  \cf5 \strokec5 /=\cf3 \strokec3  \cf7 \strokec7 2\cf3 \strokec3 ; \}\
\
        \cf2 \strokec2 if\cf3 \strokec3  (\cf5 \strokec5 !\cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3  \cf5 \strokec5 &&\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3  \cf5 \strokec5 ===\cf3 \strokec3  \cf4 \strokec4 fullTxt\cf3 \strokec3 ) \{\
        \cf4 \strokec4 delta\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 period\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 true\cf3 \strokec3 ;\
        \} \cf2 \strokec2 else\cf3 \strokec3  \cf2 \strokec2 if\cf3 \strokec3  (\cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3  \cf5 \strokec5 &&\cf3 \strokec3  \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 txt\cf3 \strokec3  \cf5 \strokec5 ===\cf3 \strokec3  \cf8 \strokec8 ''\cf3 \strokec3 ) \{\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 isDeleting\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 false\cf3 \strokec3 ;\
        \cf2 \strokec2 this\cf3 \strokec3 .\cf6 \strokec6 loopNum\cf5 \strokec5 ++\cf3 \strokec3 ;\
        \cf4 \strokec4 delta\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf7 \strokec7 500\cf3 \strokec3 ;\
        \}\
\
        \cf2 \strokec2 setTimeout\cf3 \strokec3 (\cf2 \strokec2 function\cf3 \strokec3 () \{\
        \cf4 \strokec4 that\cf3 \strokec3 .\cf6 \strokec6 tick\cf3 \strokec3 ();\
        \}, \cf4 \strokec4 delta\cf3 \strokec3 );\
    \};\
\
    \cf2 \strokec2 window\cf3 \strokec3 .\cf6 \strokec6 onload\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 function\cf3 \strokec3 () \{\
        \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 elements\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 document\cf3 \strokec3 .\cf6 \strokec6 getElementsByClassName\cf3 \strokec3 (\cf8 \strokec8 'typewrite'\cf3 \strokec3 );\
        \cf2 \strokec2 for\cf3 \strokec3  (\cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 i\cf5 \strokec5 =\cf7 \strokec7 0\cf3 \strokec3 ; \cf4 \strokec4 i\cf5 \strokec5 <\cf4 \strokec4 elements\cf3 \strokec3 .\cf6 \strokec6 length\cf3 \strokec3 ; \cf4 \strokec4 i\cf5 \strokec5 ++\cf3 \strokec3 ) \{\
            \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 toRotate\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf4 \strokec4 elements\cf3 \strokec3 [\cf4 \strokec4 i\cf3 \strokec3 ].\cf6 \strokec6 getAttribute\cf3 \strokec3 (\cf8 \strokec8 'data-type'\cf3 \strokec3 );\
            \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 period\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf4 \strokec4 elements\cf3 \strokec3 [\cf4 \strokec4 i\cf3 \strokec3 ].\cf6 \strokec6 getAttribute\cf3 \strokec3 (\cf8 \strokec8 'data-period'\cf3 \strokec3 );\
            \cf2 \strokec2 if\cf3 \strokec3  (\cf4 \strokec4 toRotate\cf3 \strokec3 ) \{\
              \cf2 \strokec2 new\cf3 \strokec3  \cf2 \strokec2 TxtType\cf3 \strokec3 (\cf4 \strokec4 elements\cf3 \strokec3 [\cf4 \strokec4 i\cf3 \strokec3 ], \cf2 \strokec2 JSON\cf3 \strokec3 .\cf6 \strokec6 parse\cf3 \strokec3 (\cf4 \strokec4 toRotate\cf3 \strokec3 ), \cf4 \strokec4 period\cf3 \strokec3 );\
            \}\
        \}\
        \cf9 \strokec9 // INJECT CSS\cf3 \strokec3 \
        \cf2 \strokec2 var\cf3 \strokec3  \cf4 \strokec4 css\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf2 \strokec2 document\cf3 \strokec3 .\cf6 \strokec6 createElement\cf3 \strokec3 (\cf8 \strokec8 "style"\cf3 \strokec3 );\
        \cf4 \strokec4 css\cf3 \strokec3 .\cf6 \strokec6 type\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf8 \strokec8 "text/css"\cf3 \strokec3 ;\
        \cf4 \strokec4 css\cf3 \strokec3 .\cf6 \strokec6 innerHTML\cf3 \strokec3  \cf5 \strokec5 =\cf3 \strokec3  \cf8 \strokec8 ".typewrite > .wrap \{ border-right: 0.08em solid #fff\}"\cf3 \strokec3 ;\
        \cf2 \strokec2 document\cf3 \strokec3 .\cf6 \strokec6 body\cf3 \strokec3 .\cf6 \strokec6 appendChild\cf3 \strokec3 (\cf4 \strokec4 css\cf3 \strokec3 );\
    \};\
}