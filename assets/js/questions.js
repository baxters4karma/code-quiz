//CREATE A QUESTION CLASS
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  //property
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// creating an array and passing the questions, options, and answers
const questions = [
  new Question(
    "What does HTML stand for?",
    [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "What does CSS stand for?",
    [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    "Cascading Style Sheet"
  ),
  new Question(
    "What does PHP stand for?",
    [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
    "Hypertext Preprocessor"
  ),
  new Question(
    "What does SQL stand for?",
    [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
    "Structured Query Language"
  ),
  new Question(
    "What does XML stand for?",
    [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
    "eXtensible Markup Language"
  ),

  new Question(
    "What are JavaScript Data Types?",
    [
      "number, string, boolean, function, object, undefined, lists",
      "number, string, boolean, function, tuple, undefined",
      "number, string, boolean, function, object, undefined",
      "number, string, boolean, function, object, float",
    ],
    "number, string, boolean, function, object, undefined"
  ),

  new Question(
    "Select the strict equality operator.",
    [
      "equals",
      "=",
      "==",
      "==="
    ],
    "==="
  ),

  new Question(
    "What would be the result of 3+2+'7'?",
    [
      "12",
      "57",
      "327",
      "5+7"
    ],
    "57"
  ),

  new Question(
    "Select item below that is NOT a JavaScript error type",
    [
      "Load time errors",
      "Run time errors",
      "Syntax errors",
      "Logical errors"
    ],
    "Syntax errors"
  ),

  new Question(
    "What does NaN stand for?",
    [
      "Not a number",
      "Not applicable now",
      "Non-ASCII Notation",
      "Not a negative",
    ],
    "Not a number"
  ),

  new Question(
    "Why do JavaScript and Java have a similar name?",
    [
      "JavaScript is a stripped‐down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above",
    ],
    "JavaScript's syntax is loosely based on Java's"
  ),
  new Question(
    "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    [
      "The User's machine running a Web browser",
      "The Web server",
      "A central machine deep within Netscape's corporate offices",
      "None of the above",
    ],
    "The User's machine running a Web browser"
  ),
  new Question(
    "______ JavaScript is also called client‐side JavaScript.",
    [
      "Microsoft",
      "Navigator",
      "LiveWire",
      "Native"
    ],
    "Navigator"
  ),
  new Question(
    "__________ JavaScript is also called server‐side JavaScript.",
    [
      "Microsoft",
      "Navigator",
      "LiveWire",
      "Native"
    ],
    "LiveWire"
  ),
  new Question(
    "What are variables used for in JavaScript Programs?",
    [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high‐school algebra flashbacks",
      "None of the above",
    ],
    "Storing numbers, dates, or other values"
  ),
  new Question(
    "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse clicks, form input, and page navigation.",
    [
      "Client‐side",
      "Server‐side",
      "Local",
      "Native"
    ],
    "Client‐side"
  ),
  new Question(
    "What should appear at the very end of your JavaScript?",
    [
      "The /&lt;/script/&gt;",
      "The /&lt;script/&gt;",
      "The END statement",
      "None of the above"
    ],
    "The &lt;/script&gt;"
  ),
  new Question(
    "Which of the following can't be done with client‐side JavaScript?",
    [
      "Validating a form",
      "Sending a form's contents by email",
      "Storing the form's contents to a database file on the server",
      "None of the above",
    ],
    "Storing the form's contents to a database file on the server"
  ),
  new Question(
    "Which of the following are capabilities of functions in JavaScript?",
    [
      "Return a value",
      "Accept parameters and Return a value",
      "Accept parameters",
      "None of the above",
    ],
    "Accept parameters"
  ),
  new Question(
    "Which of the following is not a valid JavaScript variable name?",
    ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
    "2names"
  ),
  new Question(
    "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    ["&lt;SCRIPT&gt;", "&lt;BODY&gt;", "&lt;HEAD&gt;", "&lt;TITLE&gt;"],
    "&lt;SCRIPT&gt;"
  ),
  new Question(
    "How does JavaScript store dates in a date object?",
    [
      "The number of milliseconds since January 1st, 1970",
      "The number of days since January 1st, 1900",
      "The number of seconds since Netscape's public stock offering.",
      "None of the above",
    ],
    "The number of milliseconds since January 1st, 1970"
  ),
  new Question(
    "Which of the following attribute can hold the JavaScript version?",
    ["LANGUAGE", "SCRIPT", "VERSION", "None of the above"],
    "LANGUAGE"
  ),
  new Question(
    "What is the correct JavaScript syntax to write 'Hello World'?",
    [
      "System.out.println('Hello World')",
      "println ('Hello World')",
      "document.write('Hello World')",
      "response.write('Hello World')",
    ],
    "document.write('Hello World')"
  ),
  new Question(
    "Which of the following ways can be used to indicate the LANGUAGE attribute?",
    [
      "&lt;LANGUAGE='JavaScriptVersion'&gt;",
      "&lt;SCRIPT LANGUAGE='JavaScriptVersion'&gt;",
      "&lt;SCRIPT LANGUAGE='JavaScriptVersion'&gt; JavaScript statements…&lt;/SCRIPT&gt;",
      "&lt;SCRIPT LANGUAGE='JavaScriptVersion'!&gt; JavaScript statements…&lt;/SCRIPT&gt;",
    ],
    "&lt;SCRIPT LANGUAGE='JavaScriptVersion'&gt; JavaScript statements…&lt;/SCRIPT&gt;"
  ),
  new Question(
    "Inside which HTML element do we put the JavaScript?",
    ["&lt;js&gt;", "&lt;scripting&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
    "&lt;script&gt;"
  ),
  new Question(
    "What is the correct syntax for referring to an external script called 'abc.js'?",
    [
      "&lt;script href='abc.js'&gt;",
      "&lt;script name='abc.js'&gt;",
      "&lt;script src='abc.js'&gt;",
      "None of the above",
    ],
    "&lt;script src='abc.js'&gt;"
  ),
  new Question(
    "Which types of image maps can be used with JavaScript?",
    [
      "Server‐side image maps",
      "Client‐side image maps",
      "Server‐side image maps and Client‐side image maps",
      "None of the above",
    ],
    "Client‐side image maps"
  ),
  new Question(
    "Which of the following navigator object properties is the same in both Netscape and IE?",
    [
      "navigator.appCodeName",
      "navigator.appName",
      "navigator.appVersion",
      "None of the above",
    ],
    "navigator.appCodeName"
  ),
  new Question(
    "Which is the correct way to write a JavaScript array?",
    [
      "var txt = new Array(1:'tim',2:'kim',3:'jim')",
      "var txt = new Array:1=('tim')2=('ki')3'('jim')",
      "var txt = new Array('tim','kim','jim')", 
      "var txt = new Array='tim','kim',jim'",
    ],
  ),
  new Question(
     "What does the &lt;noscript&gt; tag do?",   
    [
      "Enclose tex to be displayed by non‐JavaScript browsers.",
      "Prevents scripts on the page from executing.",
      "Describes certain low‐budget movies.",
      "None of the above",
    ],
    "Enclose text to be displayed by non‐JavaScript browsers."
  ),
  new Question(
    "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    [
      "New Text?",
      "para1.value='New Text'",
      "para1.firstChild.nodeValue= 'New Text'",
      "para1.nodeValue='New Text'",
    ],
    "para1.value='New Text'"
  ),
  new Question(
    "JavaScript entities start with _______ and end with _________.",
    [
      "Semicolon, colon",
      "Semicolon, Ampersand",
      "Ampersand, colon",
      "Ampersand, semicolon",
    ],
    "Ampersand, semicolon"
  ),
  new Question(
    "Which of the following best describes JavaScript?",
    [
      "a low‐level programming language.",
      "a scripting language precompiled in the browser.",
      "a compiled scripting language.",
      "an object‐oriented scripting language.",
    ],
    "an object‐oriented scripting language."
  ),
  new Question(
    "Choose the server‐side JavaScript object?",
    ["FileUpLoad", "Function", "File", "Date"],
    "File"
  ),
  new Question(
    "Choose the client‐side JavaScript object?",
    ["Database", "Cursor", "Client", "FileUpLoad"],
    "FileUpLoad"
  ),
  new Question(
    "Which of the following is not considered a JavaScript operator?",
    ["new", "this", "delete", "typeof"],
    "this"
  ),
  new Question(
    "______method evaluates a string of JavaScript code in the context of the specified object.",
    ["Eval", "ParseInt", "ParseFloat", "Efloat"],
    "Eval"
  ),
  new Question(
    "Which of the following event fires when the form element loses the focus: &lt;button&gt;, &lt;input&gt;, &lt;label&gt;, &lt;select&gt;, &lt;textarea&gt;?",
    ["onfocus", "onblur", "onclick", "ondblclick"],
    "onblur"
  ),
  new Question(
    "The syntax of Eval is ________________",
    [
      "[objectName.]eval(numeriC.",
      "[objectName.]eval(string)",
      "[EvalName.]eval(string)",
      "[EvalName.]eval(numeriC.",
    ],
    "[objectName.]eval(string)"
  ),
  new Question(
    "JavaScript is interpreted by _________",
    ["Client", "Server", "Object", "None of the above"],
    "Client"
  ),
  new Question(
    "Using _______ statement is how you test for a specific condition.",
    ["Select", "if", "Switch", "For"],
    "if"
  ),
  new Question(
    "Which of the following is the structure of an if statement?",
    [
      "if (conditional expression is true) then execute this code end if",
      "if (conditional expression is true)execute this code end if",
      "if (conditional expression is true) {then execute this code&gt;‐&gt;}",
      "if (conditional expression is true) then {execute this code}",
    ],
    "if (conditional expression is true) {then execute this code&gt;‐&gt;}"
  ),
  new Question(
    "How to create a Date object in JavaScript?",
    [
      "dateObjectName = new Date([parameters])",
      "dateObjectName.new Date([parameters])",
      "dateObjectName := new Date([parameters])",
      "dateObjectName Date([parameters])",
    ],
    "dateObjectName = new Date([parameters])"
  ),
  new Question(
    "The _______ method of an Array object adds and/or removes elements from an array.",
    ["Reverse", "Shift", "Slice", "Splice"],
    "Splice"
  ),
  new Question(
    "To set up the window to capture all Click events, we use which of the following statements?",
    [
      "window.captureEvents(Event.CLICK);",
      "window.handleEvents (Event.CLICK);",
      "window.routeEvents(Event.CLICK );",
      "window.raiseEvents(Event.CLICK );",
    ],
    "window.captureEvents(Event.CLICK);"
  ),
  new Question(
    "Which tag(s) can handle mouse events in Netscape?",
    [
      "&lt;IMG&gt;", "&lt;A&gt;", "&lt;BR&gt;", "None of the above"
    ],
    "&lt;A&gt;"
  ),
  new Question(
    "____________ is the tainted property of a window object.",
    ["Pathname", "Protocol", "Defaultstatus", "Host"],
    "Defaultstatus"
  ),
  new Question(
    "To enable data tainting, the end user sets the _________ environment variable.",
    ["ENABLE_TAINT", "MS_ENABLE_TAINT", "NS_ENABLE_TAINT", "ENABLE_TAINT_NS"],
    "NS_ENABLE_TAINT"
  ),
  new Question(
    "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    ["a wrapper", "a link", "a cursor", "a form"],
    "a wrapper"
  ),
  new Question(
    "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________",
    ["ScriptObject", "JSObject", "JavaObject", "Jobject"],
    "JSObject"
  ),
  new Question(
    "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.",
    ["ScriptObject", "JSObject", "JavaObject", "Jobject"],
    "JSObject"
  ),
  new Question(
    "_________ is a wrapped Java array, accessed from within JavaScript code.",
    ["JavaArray", "JavaClass", "JavaObject", "JavaPackage"],
    "JavaArray"
  ),
  new Question(
    "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript.",
    ["JavaArray", "JavaClass", "JavaObject", "JavaPackage"],
    "JavaClass"
  ),
  new Question(
    "The JavaScript exception is available to the Java code as an instance of __________",
    [
      "netscape.javascript.JSObject",
      "netscape.javascript.JSException",
      "netscape.plugin.JSException",
      "None of the above",
    ],
    "netscape.javascript.JSException"
  ),
  new Question(
    "To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?",
    [
      "user_pref('javascript.console.open_on_error', false);",
      "user_pref('javascript.console.open_error ', true);",
      "user_pref('javascript.console.open_error ', false);",
      "user_pref('javascript.console.open_on_error', true);",
    ],
    "user_pref('javascript.console.open_on_error', true);"
  ),
  new Question(
    "To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
    [
      "user_pref('javascript.classic.error_alerts', true);",
      "user_pref('javascript.classic.error_alerts ', false);",
      "user_pref('javascript.console.open_on_error ', true);",
      "user_pref('javascript.console.open_on_error ', false);",
    ],
    "user_pref('javascript.classic.error_alerts', true);"
  ),
  new Question(
    "The syntax of a blur method in a button object is ______________",
    ["Blur()", "Blur(contrast)", "Blur(value)", "Blur(depth)"],
    "Blur()"
  ),
  new Question(
    "The syntax of capture events method for document object is ______________",
    [
      "captureEvents()",
      "captureEvents(args eventType)",
      "captureEvents(eventType)",
      "captureEvents(eventVal)",
    ],
    "captureEvents(eventType)"
  ),
  new Question(
    "The syntax of close method for document object is ______________",
    ["Close(doC.", "Close(object)", "Close(val)", "Close()"],
    "Close()"
  ),
  new Question(
    "&lt;script type='text/javascript'&gt;\nx=4+'4';\ndocument.write(x);\n&lt;/script&gt;\nOutput‐‐‐‐‐‐?",
    ["44", "8", "4", "Error output"],
    "44"
  ),
  new Question(
    "Is it possible to nest functions in JavaScript?",
    ["Yes", "No", "It depends", "Definitely"],
    "Yes"
  ),
  new Question(
    "&lt;script&gt;\ndocument.write(navigator.appCodeName);\n&lt;/script&gt;",
    [
      "get code name of the browser of a visitor",
      "set code name of the browser of a visitor",
      "None of the above",
      "",
    ],
    "get code name of the browser of a visitor"
  ),
  new Question(
    "Scripting languages are",
    [
      "High Level Programming language",
      "Assembly Level programming language",
      "Machine level programming language",
      "Low Level programming language",
    ],
    "High Level Programming language"
  ),
  new Question(
    "Which best explains getSelection()?",
    [
      "Returns the VALUE of a selected OPTION.",
      "Returns document.URL of the window in focus.",
      "Returns the value of cursor‐selected text",
      "Returns the VALUE of a checked radio input.",
    ],
    "Returns the value of cursor‐selected text"
  ),
  new Question(
    "Choose the client‐side JavaScript object:",
    ["Database", "Cursor", "Client", "FileUpLoad"],
    "FileUpLoad"
  ),
  new Question(
    "What is meant by 'this' keyword in javascript?",
    [
      "It refers to current object",
      "It refers to previous object",
      "It is a variable which contains value",
      "None of the above",
    ],
    "It refers to current object"
  ),
  new Question(
    "In JavaScript, Window.prompt() method returns true or false value?",
    ["Yes", "No", "It depends", "Definitely"],    
    "No"
  ),
  new Question(
    "&lt;script language='javascript'&gt;\nfunction x()\n{\ndocument.write(2+5+'8')/n}/n&lt;/script&gt;",
    [
      "258",
      "Error",
      "7",
      "78"
    ],
    "78"
  ),
  new Question(
    "&lt;script&gt;\nvar s = '9123456 or 80000?';\nvar pattern = /\d{4}/;\nvar output = s.match(pattern);\ndocument.write(output);\n&lt;/script&gt;",
    [
      "9123",
      "91234",
      "80000",
      "None of the above"
    ],
    "9123"
  ),
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numberId value serialize like 1,2,3,5,6,7,8,9.....

  //   new Question(
  //   "Your Question is Here",
  //   [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ],
  //   "Correct answer of the question is here",
  // ),
];
