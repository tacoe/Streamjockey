/**
 * {@link Ext.Audio} is a simple class which provides a container for the [HTML5 Audio element](http://www.w3schools.com/html5/tag_audio.asp).
 * 
 * ## Recommended File Types/Compression:
 * * Uncompressed WAV and AIF audio
 * * MP3 audio
 * * AAC-LC
 * * HE-AAC audio
 *
 * ## Notes
 * On Android devices, the audio tags controls do not show. You must use the {@link #play}, {@link #pause} and 
 * {@link #toggle} methods to control the audio (example below).
 * 
 * ## Examples
 * 
 * Here is an example of the {@link Ext.Audio} component in a fullscreen container:
 * 
 *     @example preview
 *     Ext.create('Ext.Container', {
 *         fullscreen: true,
 *         layout: {
 *             type : 'vbox',
 *             pack : 'center',
 *             align: 'stretch'
 *         },
 *         items: [
 *             {
 *                 xtype : 'toolbar',
 *                 docked: 'top',
 *                 title : 'Ext.Audio'
 *             },
 *             {
 *                 xtype: 'audio',
 *                 url  : 'touch/examples/audio/crash.mp3'
 *             }
 *         ]
 *     });
 * 
 * You can also set the {@link #hidden} configuration of the {@link Ext.Audio} component to true by default, and then control the audio by using the {@link #play}, {@link #pause} and {@link #toggle} methods:
 * 
 *     @example preview
 *     Ext.create('Ext.Container', {
 *         fullscreen: true,
 *         layout: {
 *             type: 'vbox',
 *             pack: 'center'
 *         },
 *         items: [
 *             {
 *                 xtype : 'toolbar',
 *                 docked: 'top',
 *                 title : 'Ext.Audio'
 *             },
 *             {
 *                 xtype: 'toolbar',
 *                 docked: 'bottom',
 *                 defaults: {
 *                     xtype: 'button',
 *                     handler: function() {
 *                         var container = this.getParent().getParent(),
 *                             // use ComponentQuery to get the audio component (using its xtype)
 *                             audio = container.down('audio');
 *                         
 *                         audio.toggle();
 *                         this.setText(audio.isPlaying() ? 'Pause' : 'Play');
 *                     }
 *                 },
 *                 items: [
 *                     { text: 'Play', flex: 1 }
 *                 ]
 *             },
 *             {
 *                 html: 'Hidden audio!',
 *                 styleHtmlContent: true
 *             },
 *             {
 *                 xtype : 'audio',
 *                 hidden: true,
 *                 url   : 'touch/examples/audio/crash.mp3'
 *             }
 *         ]
 *     });
 *
 */
Ext.define('Ext.Audio', {
    extend: 'Ext.Media',
    xtype : 'audio',

    config: {
        // @inherited
        cls: Ext.baseCSSPrefix + 'audio'

        /**
         * @cfg {String} url
         * The location of the audio to play.
         * 
         * ### Recommended file types are:
         * * Uncompressed WAV and AIF audio
         * * MP3 audio
         * * AAC-LC
         * * HE-AAC audio
         * @accessor
         * @markdown
         */
    },

    // @private
    onActivate: function() {
        var me = this;

        me.callParent();
        
        if (Ext.is.Phone) {
            me.element.show();
        }
    },

    // @private
    onDeactivate: function() {
        var me = this;

        me.callParent();

        if (Ext.is.Phone) {
            me.element.hide();
        }
    },

    getTemplate: function() {
        var clsPrefix = Ext.baseCSSPrefix;

        if (Ext.feature.has.Audio) {
            return [{
                reference: 'media',
                tag: 'audio',
                classList: [clsPrefix + 'component']
            }];
        } else {
            return [{
                reference: 'media',
                tag: 'audio',
                classList: [clsPrefix + 'component']
            }];

            // return {
            //     reference: 'element',
            //     classList: [clsPrefix + 'outer'],
            //     children: [{
            //         reference: 'element',
            //         tag: 'embed',
            //         type: 'audio/mpeg',
            //         target: 'myself',
            //         controls: 'true',
            //         classList: [clsPrefix + 'component']
            //     }]
            // };
        }
    }
});
