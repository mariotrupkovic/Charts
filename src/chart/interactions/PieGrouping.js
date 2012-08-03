/**
 * @class Ext.chart.interactions.PieGrouping
 * @extends Ext.chart.interactions.Abstract
 * 
 * The PieGrouping interaction allows the user to select a group of consecutive slices
 * in a {@link Ext.chart.series.Pie pie series} to get additional information about the
 * group. It provides an interactive user interface with handles that can be dragged
 * around the pie to add/remove slices in the selection group.
 *
 * You can attach this interaction to a chart by including an entry in the chart's
 * {@link Ext.chart.Chart#interactions interactions} config with the `piegrouping` type:
 *
 *     new Ext.chart.Chart({
 *         renderTo: Ext.getBody(),
 *         width: 800,
 *         height: 600,
 *         store: store1,
 *         series: [ ...pie series options... ],
 *         interactions: [{
 *             type: 'piegrouping'
 *         }]
 *     });
 *
 * @author Jason Johnston <jason@sencha.com>
 * @docauthor Jason Johnston <jason@sencha.com>
 */
Ext.chart.interactions.PieGrouping = Ext.extend(Ext.chart.interactions.Abstract, {

    type: 'piegrouping',

    /**
     * @cfg {String} gesture
     * Specifies the gesture that, when performed on a slice in the pie series, initializes the
     * selection UI on that slice. Defaults to `tap`.
     */
    gesture: 'tap',

    // TODO does it make sense to make this configurable? Are any other gestures relevant for this?
    resizeGesture: 'drag',

    /**
     * @cfg {Number} outset
     * Specifies how far beyond the pie circle radius the selection overlay extends.
     * Defaults to `6`.
     */
    outset: 6,

    /**
     * @cfg {Boolean} snapWhileDragging
     * If set to `true`, the selection overlay will snap to the nearest pie slice continuously
     * while the user is dragging the handles, firing the {@link #selectionchange} event each
     * time it snaps. Otherwise, the selection will only snap to the nearest slice when the user
     * releases the handle drag, firing the event once. Defaults to `false`.
     */

    /**
     * @cfg {Function} onSelectionChange
     * A handler function that can be implemented to handle selection changes, as an alternative
     * to adding a listener for the {@link #selectionchange} event. The function will be passed
     * the same parameters as are passed to selectionchange listeners.
     */
    onSelectionChange: Ext.emptyFn,


    constructor: function(config) {
        this.addEvents(
            /**
             * @event selectionchange
             * Fired when the set of selected pie slice items changes.
             * @param {Ext.chart.interactions.PieGrouping} interaction
             * @param {Array} selectedItems
             */
            'selectionchange'
        );

        Ext.chart.interactions.PieGrouping.superclass.constructor.call(this, config);

        this.handleStyle = new Ext.chart.interactions.PieGrouping.HandleStyle();
        this.sliceStyle = new Ext.chart.interactions.PieGrouping.SliceStyle();
    },

    initEvents: function() {
        Ext.chart.interactions.PieGrouping.superclass.initEvents.call(this, arguments);
        var me = this,
            resizeGesture = me.resizeGesture;
        me.addChartListener(resizeGesture + 'start', me.onResizeStart, me);
        me.addChartListener(resizeGesture, me.onResize, me);
        me.addChartListener(resizeGesture + 'end', me.onResizeEnd, me);
    },

    onGesture: function(e) {
        var me = this,
            outset = me.outset,
            item = me.getItemForEvent(e),
            handleStyle = me.handleStyle.style,
            sliceStyle = me.sliceStyle.style,
            surface, startAngle, endAngle, handleLine;

        // If already active, allow tap outside the pie to cancel selection, or tapping an item
        // not within the selection to start a new selection.
        if (me.active && (!item || me.getSelectedItems().indexOf(item) < 0)) {
            me.cancel();
        }

        // Start selection at the tapped item's boundaries
        if (!me.active && item) {
            surface = me.getSeries().getOverlaySurface();
            startAngle = item.startAngle;
            endAngle = item.endAngle;

            me.slice = {
                startAngle: startAngle,
                endAngle: endAngle,
                sprite: surface.add(Ext.applyIf({
                    type: 'path'
                }, sliceStyle))
            };

            handleLine = 'M' + Math.max(item.startRho - outset, 0) + ',0L' + (item.endRho + outset) + ',0';
            me.startHandle = {
                angle: startAngle,
                sprite: surface.add(Ext.applyIf({
                    type: 'path',
                    path: handleLine + 'l5,-8l-10,0l5,8',
                    fill: handleStyle.stroke
                }, handleStyle))
            };
            me.endHandle = {
                angle: endAngle,
                sprite: surface.add(Ext.applyIf({
                    type: 'path',
                    path: handleLine + 'l5,8l-10,0l5,-8',
                    fill: handleStyle.stroke
                }, handleStyle))
            };

            me.mon(me.getSeries(), 'draw', me.onSeriesDraw, me);

            me.active = true;
            me.updateSprites();
            me.fireSelectionChange();
        }
    },

    onResizeStart: function(e) {
        var me = this,
            abs = Math.abs,
            normalizeAngle = me.normalizeAngle,
            startHandle = me.startHandle,
            endHandle = me.endHandle,
            resizeGesture = me.resizeGesture,
            activeHandle, angle;
        if (me.active) {
            angle = normalizeAngle(me.getAngleForEvent(e));
            if (abs(angle - normalizeAngle(startHandle.angle)) < 10) {
                activeHandle = startHandle;
            }
            else if (abs(angle - normalizeAngle(endHandle.angle)) < 10) {
                activeHandle = endHandle;
            }

            if (activeHandle) {
                me.lockEvents(resizeGesture + 'start', resizeGesture, resizeGesture + 'end');
            }
            me.activeHandle = activeHandle;
        }
    },

    onResize: function(e) {
        var me = this,
            handle = me.activeHandle,
            snapWhileDragging = me.snapWhileDragging,
            slice = me.slice,
            sliceStartAngle, sliceEndAngle,
            sliceChanged = false,
            handleAngle;
        if (handle) {
            sliceStartAngle = slice.startAngle;
            sliceEndAngle = slice.endAngle;
            handleAngle = me.getAngleForEvent(e);
            handle.angle = handleAngle;

            if (handle === me.startHandle) {
                sliceStartAngle = snapWhileDragging ? me.snapToItemAngles(handleAngle, 0)[0] : handleAngle;
                while (sliceStartAngle > sliceEndAngle) {
                    sliceStartAngle -= 360;
                }
                while (sliceStartAngle <= sliceEndAngle) {
                    sliceStartAngle += 360;
                }
                if (slice.startAngle !== sliceStartAngle || !snapWhileDragging) {
                    sliceChanged = true;
                }
                slice.startAngle = sliceStartAngle;
            } else {
                sliceEndAngle = snapWhileDragging ? me.snapToItemAngles(0, handleAngle)[1] : handleAngle;
                while (sliceStartAngle > sliceEndAngle) {
                    sliceEndAngle += 360;
                }
                while (sliceStartAngle <= sliceEndAngle) {
                    sliceEndAngle -= 360;
                }
                if (slice.endAngle !== sliceEndAngle || !snapWhileDragging) {
                    sliceChanged = true;
                }
                slice.endAngle = sliceEndAngle;
            }

            me.updateSprites();
            if (sliceChanged && snapWhileDragging) {
                me.fireSelectionChange();
            }
        }
    },

    onResizeEnd: function(e) {
        var me = this,
            handle = me.activeHandle,
            startHandle = me.startHandle,
            endHandle = me.endHandle,
            slice = me.slice,
            closestAngle = me.closestAngle,
            resizeGesture = me.resizeGesture,
            snappedAngles, sliceStartAngle, sliceEndAngle;
        
        if (handle) {
            snappedAngles = me.snapToItemAngles(startHandle.angle, endHandle.angle);
            sliceStartAngle = slice.startAngle;
            sliceEndAngle = slice.endAngle;

            if (handle === startHandle) {
                startHandle.angle = closestAngle(snappedAngles[0], startHandle.angle, 1);
                sliceStartAngle = snappedAngles[0];
                while (sliceStartAngle > sliceEndAngle) {
                    sliceStartAngle -= 360;
                }
                while (sliceStartAngle <= sliceEndAngle) {
                    sliceStartAngle += 360;
                }
                slice.startAngle = sliceStartAngle;
            } else {
                endHandle.angle = closestAngle(snappedAngles[1], endHandle.angle, 0);
                sliceEndAngle = snappedAngles[1];
                while (sliceStartAngle > sliceEndAngle) {
                    sliceEndAngle += 360;
                }
                while (sliceStartAngle <= sliceEndAngle) {
                    sliceEndAngle -= 360;
                }
                slice.endAngle = sliceEndAngle;
            }

            me.updateSprites(true);
            if (!me.snapWhileDragging) {
                me.fireSelectionChange();
            }
            delete me.activeHandle;

            me.unlockEvents(resizeGesture + 'start', resizeGesture, resizeGesture + 'end');
        }
    },

    /**
     * @private tries to sync the selection overlay to the series when it is redrawn
     */
    onSeriesDraw: function() {
        var me = this,
            startHandle = me.startHandle,
            endHandle = me.endHandle,
            slice = me.slice,
            lastSelection = me.lastSelection,
            oldStartItem, oldEndItem,
            newStartItem, newEndItem;
        if (me.active && lastSelection) {
            oldStartItem = lastSelection[0];
            oldEndItem = lastSelection[lastSelection.length - 1];

            newStartItem = me.findItemByRecord(oldStartItem.storeItem);
            newEndItem = me.findItemByRecord(oldEndItem.storeItem);

            if (!newStartItem || !newEndItem) {
                me.cancel();
            } else {
                startHandle.angle = slice.startAngle = newStartItem.startAngle;
                endHandle.angle = slice.endAngle = newEndItem.endAngle;
                while (slice.startAngle > slice.endAngle) {
                    slice.startAngle -= 360;
                }
                while (slice.startAngle <= slice.endAngle) {
                    slice.startAngle += 360;
                }
                me.updateSprites();
                me.fireSelectionChange();
            }
        }
    },

    findItemByRecord: function(record) {
        var items = this.getSeries().items,
            i = items.length;
        while (i--) {
            if (items[i] && items[i].storeItem === record) {
                return items[i];
            }
        }
    },

    normalizeAngle: function(angle) {
        while (angle < 0) {
            angle += 360;
        }
        return angle % 360;
    },

    fireSelectionChange: function() {
        var me = this,
            items = me.getSelectedItems();
        me.onSelectionChange(me, items);
        me.fireEvent('selectionchange', me, items);
        me.lastSelection = items;
    },

    renderFrame: function() {
        this.getSeries().getOverlaySurface().renderFrame();
    },

    updateSprites: function(animate) {
        var me = this,
            series = me.getSeries(),
            startHandle = me.startHandle,
            endHandle = me.endHandle,
            angle1 = startHandle.angle,
            angle2 = endHandle.angle,
            centerX = series.centerX,
            centerY = series.centerY,
            slice = me.slice,
            outset = me.outset,
            item1, item2, attrs;

        if (me.active) {
            // Start handle
            attrs = {
                rotate: {
                    degrees: angle1,
                    x: 0,
                    y: 0
                },
                translate: {
                    x: centerX,
                    y: centerY
                }
            };
            if (animate) {
                startHandle.sprite.stopAnimation();
                startHandle.sprite.animate({to: attrs});
            } else {
                startHandle.sprite.setAttributes(attrs, true);
            }

            // End handle
            attrs = {
                rotate: {
                    degrees: angle2,
                    x: 0,
                    y: 0
                },
                translate: {
                    x: centerX,
                    y: centerY
                }
            };
            if (animate) {
                endHandle.sprite.stopAnimation();
                endHandle.sprite.animate({to: attrs});
            } else {
                endHandle.sprite.setAttributes(attrs, true);
            }

            // Slice
            item1 = series.getItemForAngle(angle1 - 1e-9);
            item2 = series.getItemForAngle(angle2 + 1e-9);
            attrs = {
                segment: {
                    startAngle: slice.startAngle,
                    endAngle: slice.endAngle,
                    startRho: Math.max(Math.min(item1.startRho, item2.startRho) - outset, 0),
                    endRho: Math.min(item1.endRho, item2.endRho) + outset
                }
            };
            if (animate) {
                slice.sprite.stopAnimation();
                slice.sprite.animate({to: attrs});
            } else {
                slice.sprite.setAttributes(attrs, true);
            }

            if (!animate) {
                me.renderFrame();
            }
        }
    },

    snapToItemAngles: function(startAngle, endAngle) {
        var me = this,
            series = me.getSeries(),
            item1 = series.getItemForAngle(startAngle - 1e-9),
            item2 = series.getItemForAngle(endAngle + 1e-9);
        return [item1.startAngle, item2.endAngle];
    },

    closestAngle: function(target, current, dir) {
        if (dir) {
            while (target > current) {
                target -= 360;
            }
            while (target < current) {
                target += 360;
            }
        } else {
            while (target < current) {
                target += 360;
            }
            while (target > current) {
                target -= 360;
            }
        }
        return target;
    },

    cancel: function() {
        var me = this,
            series;
        if (me.active) {
            series = me.getSeries();
            Ext.destroy(me.startHandle.sprite, me.endHandle.sprite, me.slice.sprite);
            me.active = false;
            me.startHandle = me.endHandle = me.slice = null;
            me.fireSelectionChange();
            me.renderFrame();
            me.mun(series, 'draw', me.onSeriesDraw, me);
        }
    },

    getSelectedItems: function() {
        var me = this,
            slice = me.slice,
            selectedItems,
            series = me.getSeries(),
            allItems, item1Index, item2Index;

        if (me.active) {
            allItems = me.getSeries().items;
            item1Index = allItems.indexOf(series.getItemForAngle(slice.startAngle - 1e-9));
            item2Index = allItems.indexOf(series.getItemForAngle(slice.endAngle + 1e-9));

            if (item1Index <= item2Index) {
                selectedItems = allItems.slice(item1Index, item2Index + 1);
            } else {
                selectedItems = allItems.slice(item1Index).concat(allItems.slice(0, item2Index + 1));
            }

            // prune undefined items
            selectedItems = selectedItems.filter(function(item, i, arr) {
                return i in arr;
            });
        }
        return selectedItems || [];
    },

    getAngleForEvent: function(e) {
        var me = this,
            series = me.getSeries(),
            seriesXY = series.getSurface().el.getXY();
        return Ext.draw.Draw.degrees(
            Math.atan2(e.pageY - series.centerY - seriesXY[1], e.pageX - series.centerX - seriesXY[0])
        );
    },

    getSeries: function() {
        var me = this,
            series = me._series;
        if (!series) {
            series = me._series = me.chart.series.findBy(function(series) {
                return series.type === 'pie';
            });
            series.getOverlaySurface().customAttributes.segment = function(opts) {
                return series.getSegment(opts);
            };
        }
        return series;
    },



    /* ---------------------------------
      Methods needed for ComponentQuery
     ----------------------------------*/

    getRefItems: function(deep) {
        return [this.handleStyle, this.sliceStyle];
    }

});

Ext.chart.interactions.Manager.registerType('piegrouping', Ext.chart.interactions.PieGrouping);


Ext.chart.interactions.PieGrouping.HandleStyle = Ext.extend(Ext.chart.theme.Style, {
    isXType: function(xtype) {
        return xtype === 'handle';
    }
});
Ext.chart.interactions.PieGrouping.SliceStyle = Ext.extend(Ext.chart.theme.Style, {
    isXType: function(xtype) {
        return xtype === 'slice';
    }
});

