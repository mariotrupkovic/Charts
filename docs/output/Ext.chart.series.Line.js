Ext.data.JsonP.Ext_chart_series_Line({
  "mixedInto": [

  ],
  "alias": null,
  "doc": "<p>Creates a Line Chart. A Line Chart is a useful visualization technique to display quantitative information for different\ncategories or other real values (as opposed to the bar chart), that can show some progression (or regression) in the dataset.\nAs with all other series, the Line Series must be appended in the <em>series</em> Chart array configuration. See the Chart\ndocumentation for more information. A typical configuration object for the line series could be:</p>\n\n<p><p><img src=\"doc-resources/Ext.chart.series.Line/Ext.chart.series.Line.png\" alt=\"Ext.chart.series.Line chart series\"></p></p>\n\n<pre><code>var store = new Ext.data.JsonStore({\n    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n    data: [\n        {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},\n        {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},\n        {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},\n        {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},\n        {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}\n    ]\n});\n\nnew Ext.chart.Chart({\n    renderTo: Ext.getBody(),\n    width: 500,\n    height: 300,\n    animate: true,\n    store: store,\n    axes: [{\n        type: 'Numeric',\n        position: 'bottom',\n        fields: ['data1'],\n        label: {\n            renderer: Ext.util.Format.numberRenderer('0,0')\n        },\n        title: 'Sample Values',\n        grid: true,\n        minimum: 0\n    }, {\n        type: 'Category',\n        position: 'left',\n        fields: ['name'],\n        title: 'Sample Metrics'\n    }],\n    series: [{\n        type: 'line',\n        highlight: {\n            size: 7,\n            radius: 7\n        },\n        axis: 'left',\n        xField: 'name',\n        yField: 'data1',\n        markerCfg: {\n            type: 'cross',\n            size: 4,\n            radius: 4,\n            'stroke-width': 0\n        }\n    }, {\n        type: 'line',\n        highlight: {\n            size: 7,\n            radius: 7\n        },\n        axis: 'left',\n        fill: true,\n        xField: 'name',\n        yField: 'data3',\n        markerCfg: {\n            type: 'circle',\n            size: 4,\n            radius: 4,\n            'stroke-width': 0\n        }\n    }]\n});\n</code></pre>\n\n<p>In this configuration we're adding two series (or lines), one bound to the <code>data1</code>\nproperty of the store and the other to <code>data3</code>. The type for both configurations is\n<code>line</code>. The <code>xField</code> for both series is the same, the name propert of the store.\nBoth line series share the same axis, the left axis. You can set particular marker\nconfiguration by adding properties onto the markerConfig object. Both series have\nan object as highlight so that markers animate smoothly to the properties in highlight\nwhen hovered. The second series has <code>fill=true</code> which means that the line will also\nhave an area below it of the same color.</p>\n\n<p><strong>Note:</strong> In the series definition remember to explicitly set the axis to bind the\nvalues of the line series to. This can be done by using the <code>axis</code> configuration property.</p>\n",
  "allMixins": [

  ],
  "mixins": [

  ],
  "html_filename": "Line.html",
  "inheritable": false,
  "author": null,
  "code_type": "assignment",
  "href": "Line.html#Ext-chart-series-Line",
  "subclasses": [

  ],
  "superclasses": [
    "Ext.chart.series.Series",
    "Ext.chart.series.Cartesian"
  ],
  "linenr": 1,
  "alternateClassNames": [

  ],
  "protected": false,
  "static": false,
  "extends": "Ext.chart.series.Cartesian",
  "docauthor": null,
  "members": {
    "property": [
      {
        "alias": null,
        "type": "Object",
        "doc": "<p>{String} type\nThe type of series. Set in subclasses.</p>\n",
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-property-type",
        "linenr": 52,
        "protected": true,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "{String} type\nThe type of series. ...",
        "name": "type",
        "tagname": "property",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      },
      {
        "alias": null,
        "type": "String",
        "doc": "<p>The field used to access the x axis value from the items from the data\nsource.</p>\n",
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-xField",
        "linenr": 11,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "name": "xField",
        "tagname": "property",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js"
      },
      {
        "alias": null,
        "type": "String",
        "doc": "<p>The field used to access the y-axis value from the items from the data\nsource.</p>\n",
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-property-yField",
        "linenr": 20,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "name": "yField",
        "tagname": "property",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "method": [
      {
        "alias": null,
        "doc": "\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-method-constructor",
        "linenr": 1,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": " ...",
        "name": "constructor",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js",
        "return": {
          "doc": "\n",
          "type": "Object"
        }
      },
      {
        "alias": null,
        "doc": "<p>Split any series items that were combined via <a href=\"#/api/Ext.chart.series.Line-method-combine\" rel=\"Ext.chart.series.Line-method-combine\" class=\"docClass\">combine</a> into their original items.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-clearCombinations",
        "linenr": 516,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Split any series items that were combined via combine into their original items. ...",
        "name": "clearCombinations",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Combine two of this series's indexed items into one. This is done via drag-drop on the\nlegend for series that render more than one legend item. The data store is not modified,\nbut the series uses the cumulative list of combinations in its rendering.</p>\n",
        "params": [
          {
            "doc": "<p>Index of the first item</p>\n",
            "type": "Number",
            "name": "index1",
            "optional": false
          },
          {
            "doc": "<p>Index of the second item</p>\n",
            "type": "Number",
            "name": "index2",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-combine",
        "linenr": 426,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Combine two of this series's indexed items into one. ...",
        "name": "combine",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Draws the series for the current chart.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-method-drawSeries",
        "linenr": 224,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Draws the series for the current chart. ...",
        "name": "drawSeries",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Iterate over each of the records for this series. The default implementation simply iterates\nthrough the entire data store, but individual series implementations can override this to\nprovide custom handling, e.g. adding/removing records.</p>\n",
        "params": [
          {
            "doc": "<p>The function to execute for each record.</p>\n",
            "type": "Function",
            "name": "fn",
            "optional": false
          },
          {
            "doc": "<p>Scope for the fn.</p>\n",
            "type": "Object",
            "name": "scope",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-eachRecord",
        "linenr": 395,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Iterate over each of the records for this series. ...",
        "name": "eachRecord",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Iterates over a given record's values for each of this series's yFields,\nexecuting a given function for each value. Any yFields that have been combined\nvia legend drag-drop will be treated as a single value.</p>\n",
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.Model",
            "name": "record",
            "optional": false
          },
          {
            "doc": "\n",
            "type": "Function",
            "name": "fn",
            "optional": false
          },
          {
            "doc": "\n",
            "type": "Object",
            "name": "scope",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-method-eachYValue",
        "linenr": 61,
        "protected": true,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Iterates over a given record's values for each of this series's yFields,\nexecuting a given function for each value. ...",
        "name": "eachYValue",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any.</p>\n",
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "name": "x",
            "optional": false
          },
          {
            "doc": "\n",
            "type": "Number",
            "name": "y",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-getItemForPoint",
        "linenr": 205,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any. ...",
        "name": "getItemForPoint",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "<p>An object describing the item, or null if there is no matching item. The exact contents of</p>\n\n<pre><code>             this object will vary by series type, but should always contain at least the following:\n             &lt;ul&gt;\n               &lt;li&gt;{Ext.chart.series.Series} series - the Series object to which the item belongs&lt;/li&gt;\n               &lt;li&gt;{Object} value - the value(s) of the item's data point&lt;/li&gt;\n               &lt;li&gt;{Array} point - the x/y coordinates relative to the chart box of a single point\n                   for this data item, which can be used as e.g. a tooltip anchor point.&lt;/li&gt;\n               &lt;li&gt;{Ext.draw.Sprite} sprite - the item's rendering Sprite.\n             &lt;/ul&gt;\n</code></pre>\n",
          "type": "Object"
        }
      },
      {
        "alias": null,
        "doc": "<p>Returns a string with the color to be used for the series legend item.</p>\n",
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "name": "index",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-getLegendColor",
        "linenr": 317,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Returns a string with the color to be used for the series legend item. ...",
        "name": "getLegendColor",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Returns an array of labels to be displayed as items in the legend. Only relevant if\n<a href=\"#/api/Ext.chart.series.Line-cfg-showInLegend\" rel=\"Ext.chart.series.Line-cfg-showInLegend\" class=\"docClass\">showInLegend</a> is true.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-getLegendLabels",
        "linenr": 300,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Returns an array of labels to be displayed as items in the legend. ...",
        "name": "getLegendLabels",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Calculate the min and max values for this series's xField.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-method-getMinMaxXValues",
        "linenr": 126,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Calculate the min and max values for this series's xField. ...",
        "name": "getMinMaxXValues",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js",
        "return": {
          "doc": "<p>[min, max]</p>\n",
          "type": "Array"
        }
      },
      {
        "alias": null,
        "doc": "<p>Calculate the min and max values for this series's yField(s). Takes into account yField\ncombinations, exclusions, and stacking.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-method-getMinMaxYValues",
        "linenr": 153,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Calculate the min and max values for this series's yField(s). ...",
        "name": "getMinMaxYValues",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js",
        "return": {
          "doc": "<p>[min, max]</p>\n",
          "type": "Array"
        }
      },
      {
        "alias": null,
        "doc": "<p>Return the number of records being displayed in this series. Defaults to the number of\nrecords in the store; individual series implementations can override to provide custom handling.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-getRecordCount",
        "linenr": 407,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Return the number of records being displayed in this series. ...",
        "name": "getRecordCount",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Returns an array of functions, each of which returns the value of the yField\ncorresponding to function's index in the array, for a given record (each function takes the\nrecord as its only argument.) If yFields have been combined by the user via legend drag-drop,\nthis list of accessors will be kept in sync with those combinations.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-method-getYValueAccessors",
        "linenr": 105,
        "protected": true,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Returns an array of functions, each of which returns the value of the yField\ncorresponding to function's index in the...",
        "name": "getYValueAccessors",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js",
        "return": {
          "doc": "<p>array of accessor functions</p>\n",
          "type": "Array"
        }
      },
      {
        "alias": null,
        "doc": "<p>Returns the number of yField values, taking into account fields combined\nvia legend drag-drop.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Cartesian",
        "html_filename": "Cartesian.html",
        "inheritable": false,
        "href": "Cartesian.html#Ext-chart-series-Cartesian-method-getYValueCount",
        "linenr": 75,
        "protected": true,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Returns the number of yField values, taking into account fields combined\nvia legend drag-drop. ...",
        "name": "getYValueCount",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Cartesian.js",
        "return": {
          "doc": "\n",
          "type": "Number"
        }
      },
      {
        "alias": null,
        "doc": "<p>Hides all the elements in the series.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-hideAll",
        "linenr": 246,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Hides all the elements in the series. ...",
        "name": "hideAll",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Determines whether the item at the given index is the result of item combination.</p>\n",
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "name": "index",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-isCombinedItem",
        "linenr": 443,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Determines whether the item at the given index is the result of item combination. ...",
        "name": "isCombinedItem",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "Boolean"
        }
      },
      {
        "alias": null,
        "doc": "<p>Determines whether the series item at the given index has been excluded, i.e. toggled off in the legend.</p>\n",
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "name": "index",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-isExcluded",
        "linenr": 417,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Determines whether the series item at the given index has been excluded, i.e. ...",
        "name": "isExcluded",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Reset the series to its original state, before any user interaction.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-reset",
        "linenr": 523,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Reset the series to its original state, before any user interaction. ...",
        "name": "reset",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Changes the value of the <a href=\"#/api/Ext.chart.series.Line-cfg-title\" rel=\"Ext.chart.series.Line-cfg-title\" class=\"docClass\">title</a> for the series.\nArguments can take two forms:</p>\n\n<ul>\n<li>A single String value: this will be used as the new single title for the series (applies\nto series with only one yField)</li>\n<li>A numeric index and a String value: this will set the title for a single indexed yField.</li>\n</ul>\n\n",
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "name": "index",
            "optional": false
          },
          {
            "doc": "\n",
            "type": "String",
            "name": "title",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-setTitle",
        "linenr": 344,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Changes the value of the title for the series. ...",
        "name": "setTitle",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      },
      {
        "alias": null,
        "doc": "<p>Shows all the elements in the series.</p>\n",
        "params": [

        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-method-showAll",
        "linenr": 280,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Shows all the elements in the series. ...",
        "name": "showAll",
        "tagname": "method",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js",
        "return": {
          "doc": "\n",
          "type": "undefined"
        }
      }
    ],
    "cfg": [
      {
        "alias": null,
        "type": "String",
        "doc": "<p>The position of the axis to bind the values to. Possible values are 'left', 'bottom', 'top' and 'right'.\nYou must explicitly set this value to bind the values of the line series to the ones in the axis, otherwise a\nrelative scale will be used.</p>\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-axis",
        "linenr": 95,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "The position of the axis to bind the values to. ...",
        "name": "axis",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Boolean",
        "doc": "<p>If true, the area below the line will be filled using either the styles defined with sass or\nstyle.eefill and style.opacity config properties from style. Defaults to false.</p>\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-fill",
        "linenr": 156,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "If true, the area below the line will be filled using either the styles defined with sass or\nstyle.eefill and style.o...",
        "name": "fill",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Object",
        "doc": "<p>The display style for the markers. Only used if <a href=\"#/api/Ext.chart.series.Line-cfg-showMarkers\" rel=\"Ext.chart.series.Line-cfg-showMarkers\" class=\"docClass\">showMarkers</a> is true.\nThe markerConfig is a configuration object containing the same set of properties defined in\nthe Sprite class. For example, if we were to set red circles as markers to the line series we could\npass the object:</p>\n\n<pre><code>        markerConfig: {\n            type: 'circle',\n            radius: 4,\n            'fill': '#f00'\n        }\n     </code></pre>\n\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-markerConfig",
        "linenr": 115,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "The display style for the markers. ...",
        "name": "markerConfig",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Function",
        "doc": "<p>A function that can be overridden to set custom styling properties to each rendered element.\nPasses in (sprite, record, attributes, index, store) to the function.</p>\n",
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-cfg-renderer",
        "linenr": 70,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "A function that can be overridden to set custom styling properties to each rendered element. ...",
        "name": "renderer",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      },
      {
        "alias": null,
        "type": "Number",
        "doc": "<p>The offset distance from the cursor position to the line series to trigger events (then used for highlighting series, etc).</p>\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-selectionTolerance",
        "linenr": 102,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "The offset distance from the cursor position to the line series to trigger events (then used for highlighting series,...",
        "name": "selectionTolerance",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Array",
        "doc": "<p>An array with shadow attributes</p>\n",
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-cfg-shadowAttributes",
        "linenr": 79,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "name": "shadowAttributes",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      },
      {
        "alias": null,
        "type": "Boolean",
        "doc": "<p>Whether to show this series in the legend.</p>\n",
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-cfg-showInLegend",
        "linenr": 64,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "name": "showInLegend",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      },
      {
        "alias": null,
        "type": "Boolean",
        "doc": "<p>Whether markers should be displayed at the data points along the line. If true,\nthen the <a href=\"#/api/Ext.chart.series.Line-cfg-markerConfig\" rel=\"Ext.chart.series.Line-cfg-markerConfig\" class=\"docClass\">markerConfig</a> config item will determine the markers' styling.</p>\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-showMarkers",
        "linenr": 108,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Whether markers should be displayed at the data points along the line. ...",
        "name": "showMarkers",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Boolean/Number",
        "doc": "<p>If set to <code>true</code> or a non-zero number, the line will be smoothed/rounded around its points; otherwise\nstraight line segments will be drawn.</p>\n\n<p>A numeric value is interpreted as a divisor of the horizontal distance between consecutive points in\nthe line; larger numbers result in sharper curves while smaller numbers result in smoother curves.</p>\n\n<p>If set to <code>true</code> then a default numeric value of 3 will be used. Defaults to <code>false</code>.</p>\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-smooth",
        "linenr": 139,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "If set to true or a non-zero number, the line will be smoothed/rounded around its points; otherwise\nstraight line seg...",
        "name": "smooth",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Object",
        "doc": "<p>An object containing styles for the visualization lines. These styles will override the theme styles.\nSome options contained within the style object will are described next.</p>\n",
        "owner": "Ext.chart.series.Line",
        "html_filename": "Line.html",
        "inheritable": false,
        "href": "Line.html#Ext-chart-series-Line-cfg-style",
        "linenr": 133,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "An object containing styles for the visualization lines. ...",
        "name": "style",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
      },
      {
        "alias": null,
        "type": "Object",
        "doc": "<p>Add tooltips to the visualization's markers. The options for the tips are the\nsame configuration used with Ext.tip.ToolTip. For example:</p>\n\n<pre><code>tips: {\n  trackMouse: true,\n  width: 140,\n  height: 28,\n  renderer: function(storeItem, item) {\n    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');\n  }\n},\n</code></pre>\n",
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-cfg-tips",
        "linenr": 37,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Add tooltips to the visualization's markers. ...",
        "name": "tips",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      },
      {
        "alias": null,
        "type": "String",
        "doc": "<p>The human-readable name of the series.</p>\n",
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-cfg-title",
        "linenr": 58,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "name": "title",
        "tagname": "cfg",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      }
    ],
    "event": [
      {
        "alias": null,
        "doc": "<p>Fires when the series title is changed via <a href=\"#/api/Ext.chart.series.Line-method-setTitle\" rel=\"Ext.chart.series.Line-method-setTitle\" class=\"docClass\">setTitle</a>.</p>\n",
        "params": [
          {
            "doc": "<p>The new title value</p>\n",
            "type": "String",
            "name": "title",
            "optional": false
          },
          {
            "doc": "<p>The index in the collection of titles</p>\n",
            "type": "Number",
            "name": "index",
            "optional": false
          }
        ],
        "owner": "Ext.chart.series.Series",
        "html_filename": "Series.html",
        "inheritable": false,
        "href": "Series.html#Ext-chart-series-Series-event-titlechange",
        "linenr": 114,
        "protected": false,
        "static": false,
        "private": false,
        "deprecated": null,
        "shortDoc": "Fires when the series title is changed via setTitle. ...",
        "name": "titlechange",
        "tagname": "event",
        "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Series.js"
      }
    ]
  },
  "xtypes": [

  ],
  "statics": {
    "property": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "method": [

    ],
    "cfg": [

    ],
    "event": [

    ]
  },
  "private": false,
  "deprecated": null,
  "name": "Ext.chart.series.Line",
  "component": false,
  "tagname": "class",
  "singleton": false,
  "filename": "/Users/jamieavins/git/SDK/charts/src/chart/series/Line.js"
});