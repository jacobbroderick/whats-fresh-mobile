Ext.data.JsonP.Siesta_Test_ExtJS_Observable({"tagname":"class","name":"Siesta.Test.ExtJS.Observable","autodetected":{},"files":[{"filename":"Observable.js","href":"Observable.html#Siesta-Test-ExtJS-Observable"}],"members":[{"name":"firesAtLeastNTimes","tagname":"method","owner":"Siesta.Test.ExtJS.Observable","id":"method-firesAtLeastNTimes","meta":{}},{"name":"firesOnce","tagname":"method","owner":"Siesta.Test.ExtJS.Observable","id":"method-firesOnce","meta":{}},{"name":"hasListener","tagname":"method","owner":"Siesta.Test.ExtJS.Observable","id":"method-hasListener","meta":{}},{"name":"isFiredWithSignature","tagname":"method","owner":"Siesta.Test.ExtJS.Observable","id":"method-isFiredWithSignature","meta":{}},{"name":"waitForEvent","tagname":"method","owner":"Siesta.Test.ExtJS.Observable","id":"method-waitForEvent","meta":{}},{"name":"wontFire","tagname":"method","owner":"Siesta.Test.ExtJS.Observable","id":"method-wontFire","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Siesta.Test.ExtJS.Observable","short_doc":"This is a mixin, with helper methods for testing functionality relating to Ext.util.Observable class. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":["Siesta.Test.ExtJS","Siesta.Test.SenchaTouch"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Siesta.Test.ExtJS' rel='Siesta.Test.ExtJS' class='docClass'>Siesta.Test.ExtJS</a></div><div class='dependency'><a href='#!/api/Siesta.Test.SenchaTouch' rel='Siesta.Test.SenchaTouch' class='docClass'>Siesta.Test.SenchaTouch</a></div><h4>Files</h4><div class='dependency'><a href='source/Observable.html#Siesta-Test-ExtJS-Observable' target='_blank'>Observable.js</a></div></pre><div class='doc-contents'><p>This is a mixin, with helper methods for testing functionality relating to Ext.util.Observable class. This mixin is being consumed by <a href=\"#!/api/Siesta.Test.ExtJS\" rel=\"Siesta.Test.ExtJS\" class=\"docClass\">Siesta.Test.ExtJS</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-firesAtLeastNTimes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Observable'>Siesta.Test.ExtJS.Observable</span><br/><a href='source/Observable.html#Siesta-Test-ExtJS-Observable-method-firesAtLeastNTimes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Observable-method-firesAtLeastNTimes' class='name expandable'>firesAtLeastNTimes</a>( <span class='pre'>observable, event, n, desc</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion passes if the observable fires the specified event at least n times after calling this method. ...</div><div class='long'><p>This assertion passes if the observable fires the specified event at least <code>n</code> times after calling this method.</p>\n\n<p>Its overriden in this role, so you can also provide Ext.util.Observable instances to it, otherwise its identical to parent method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observable</span> : Ext.util.Observable/Mixed<div class='sub-desc'><p>Ext.util.Observable instance or any browser observable, window object, element instances, CSS selector.</p>\n</div></li><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The name of event</p>\n</div></li><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The minimum number of events to be fired</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Siesta.Test.Browser-method-firesAtLeastNTimes\" rel=\"Siesta.Test.Browser-method-firesAtLeastNTimes\" class=\"docClass\">Siesta.Test.Browser.firesAtLeastNTimes</a></p></div></div></div><div id='method-firesOnce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Observable'>Siesta.Test.ExtJS.Observable</span><br/><a href='source/Observable.html#Siesta-Test-ExtJS-Observable-method-firesOnce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Observable-method-firesOnce' class='name expandable'>firesOnce</a>( <span class='pre'>observable, event, desc</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion passes if the observable fires the specified event exactly once after calling this method. ...</div><div class='long'><p>This assertion passes if the observable fires the specified event exactly once after calling this method.</p>\n\n<p>Its overriden in this role, so you can also provide Ext.util.Observable instances to it, otherwise its identical to parent method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observable</span> : Ext.util.Observable/Mixed<div class='sub-desc'><p>Ext.util.Observable instance or any browser observable, window object, element instances, CSS selector.</p>\n</div></li><li><span class='pre'>event</span> : String/Array[String]<div class='sub-desc'><p>The name of event or array of such</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Siesta.Test.Browser-method-firesOnce\" rel=\"Siesta.Test.Browser-method-firesOnce\" class=\"docClass\">Siesta.Test.Browser.firesOnce</a></p></div></div></div><div id='method-hasListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Observable'>Siesta.Test.ExtJS.Observable</span><br/><a href='source/Observable.html#Siesta-Test-ExtJS-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'>The, eventName, [description]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method passes if the provided observable has a listener for the eventName ...</div><div class='long'><p>This method passes if the provided <code>observable</code> has a listener for the <code>eventName</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : Ext.util.Observable<div class='sub-desc'><p>observable</p>\n</div></li><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>The name of the event</p>\n</div></li><li><span class='pre'>description</span> : String (optional)<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div><div id='method-isFiredWithSignature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Observable'>Siesta.Test.ExtJS.Observable</span><br/><a href='source/Observable.html#Siesta-Test-ExtJS-Observable-method-isFiredWithSignature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Observable-method-isFiredWithSignature' class='name expandable'>isFiredWithSignature</a>( <span class='pre'>observable, event, checkerFn, desc</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion will verify that the observable fires the specified event and supplies the correct parameters to the l...</div><div class='long'><p>This assertion will verify that the observable fires the specified event and supplies the correct parameters to the listener function.\nA checker method should be supplied that verifies the arguments passed to the listener function, and then returns true or false depending on the result.\nIf the event was never fired, this assertion fails. If the event is fired multiple times, all events will be checked, but\nonly one pass/fail message will be reported.</p>\n\n<p>For example:</p>\n\n<pre><code>t.isFiredWithSignature(store, 'add', function (store, records, index) {\n    return (store instanceof Ext.data.Store) &amp;&amp; (records instanceof Array) &amp;&amp; t.typeOf(index) == 'Number'\n})\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observable</span> : Ext.util.Observable<div class='sub-desc'><p>The observable instance</p>\n</div></li><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The name of event</p>\n</div></li><li><span class='pre'>checkerFn</span> : Function<div class='sub-desc'><p>A method that should verify each argument, and return true or false depending on the result.</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div><div id='method-waitForEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Observable'>Siesta.Test.ExtJS.Observable</span><br/><a href='source/Observable.html#Siesta-Test-ExtJS-Observable-method-waitForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Observable-method-waitForEvent' class='name expandable'>waitForEvent</a>( <span class='pre'>observable, event, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method will wait for the first event, fired by the provided Ext JS observable and will then call the provided ca...</div><div class='long'><p>This method will wait for the first <code>event</code>, fired by the provided Ext JS <code>observable</code> and will then call the provided callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observable</span> : Ext.util.Observable/String/Ext.Element<div class='sub-desc'><p>The observable to wait on, or a ComponentQuery matching a component</p>\n</div></li><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The name of the event to wait for</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Number<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Siesta.Test.Browser-method-waitForEvent\" rel=\"Siesta.Test.Browser-method-waitForEvent\" class=\"docClass\">Siesta.Test.Browser.waitForEvent</a></p></div></div></div><div id='method-wontFire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Observable'>Siesta.Test.ExtJS.Observable</span><br/><a href='source/Observable.html#Siesta-Test-ExtJS-Observable-method-wontFire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Observable-method-wontFire' class='name expandable'>wontFire</a>( <span class='pre'>observable, event, desc</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion passes if the observable does not fire the specified event(s) after calling this method. ...</div><div class='long'><p>This assertion passes if the observable does not fire the specified event(s) after calling this method.</p>\n\n<p>Its overriden in this role, so you can also provide Ext.util.Observable instances to it, otherwise its identical to parent method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observable</span> : Ext.util.Observable/Mixed<div class='sub-desc'><p>Ext.util.Observable instance or any browser observable, window object, element instances, CSS selector.</p>\n</div></li><li><span class='pre'>event</span> : String/Array[String]<div class='sub-desc'><p>The name of event or array of such</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Siesta.Test.Browser-method-wontFire\" rel=\"Siesta.Test.Browser-method-wontFire\" class=\"docClass\">Siesta.Test.Browser.wontFire</a></p></div></div></div></div></div></div></div>","meta":{}});