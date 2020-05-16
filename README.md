# ENGrid for WordPress: Seamless Engaging Networks iFramed Pages in Wordpress
<img align="right" width="250" height="250" src="https://engagingnetworks.academy/wp-content/uploads/2019/09/D-D-Partner.png">

Designed and Developed by [4Site Studios](http://4sitestudios.com/en?ms=github) while working with:
- Ocean Conservancy
- Oxfam Canada
- People for the Ethical Treatment of Animals

# Example Shortcode
```[en url="https://netdonor.net/page/12345/donate/1?in_type=lightbox&in_name=giving_tuesday_2020"]```

# Engaging Networks Page Template
The ENGRid WordPress Plugin was built to compliment our [ENGrid Page Template](https://github.com/4site-interactive-studios/engrid) and does not change the layout of the Engagign Networks page being embedded. If your Engaging Networks page template does not support an "embedded" state which strips the page of styling outside of the body copy and form, please update your template to do so or use the [ENGrid Page Template](https://github.com/4site-interactive-studios/engrid) which has this functionality built in.

# Passing of URL Arguments to iFramed page
The URL used for the WordPress Shortcode can include URL arguments. In addition, any URL arguments present on the parent page will be appended to the iFrame URL. In the below example, a visitor comes from a Gogle Adwords ad and see's a Giving Tuesday Lightbox with an iFrame Embed of an Engaging Networks Doantion page. 
1) Shortcode URL: [en url="https://netdonor.net/page/12345/donate/1?promo_type=lightbox"]
2) Parent Page URL: https://website.org?utm_source=adwords
3) Rendered iFrame URL: https://netdonor.net/page/12345/donate/1?promo_type=lightbox&utm_source=adwords

# Conditionally Firing Analytics and Other Scripts when Embedded
Because the iFrame pages are loaded with the parent page, any analytics on the child page(s) will fire as well; for example, recording two page views. To prevent this you can wrap your analytics on the Engagign Networks page in the following code. This will make it so that when the Engaging Networks page appears in an iFrame, the analytics wrapped in the code are only fired when the iFrame is interacted with. Otherwise, when the page is visited not in an iFrame, the analytics will fire normally.

```
<script>
function isIframe() {
	try {
		return window.self !== window.top
	} catch (e) {
		return true
	}
};

function load_scripts() {
	/* START: Your Analytics Scripts */
	
	
	/* END: Your Analytics Scripts */
	console.log("Scripts Loaded")
}
if (isIframe()) {
	var loaded_once;
	window.onfocus = function() {
		if (!loaded_once) {
			load_scripts();
			loaded_once = true
		}
	}
} else {
	load_scripts()
}
</script>
```

# Lazyloading the iFrame
The iFrame includes loading="lazy" which is a new feature within browsers to lazy laod images and iFrames. It's exact functionality varies from browser to browser but in general this should help reduce any impact on page load times for the parent page.

# Known Limitations
Currently the en-iframe plugin has only been QA'ed and tested to load a single embedded iFrame per page. If you are interested in sponsoring further development, please reach out today.

# Support for Drupal, Joomla, Expression Engine, etc..
This plugin was developed for WordPress but can be quickly adapated as a plugin or a standalone pure Javascript solution. If you are interested in sponsoring further development, please reach out today.

## Engaging Networks Resources
- [Engaging Networks Supportal](https://engagingnetworks.support/)
- [Engaging Networks Acadmey](https://engagingnetworks.academy/)
- [Engaging Networks Maintained Example Code Blocks](https://github.com/EngagingNetworks/page-builder-code-blocks)
- [Engaging Networks Maintained Example Page Styles](https://github.com/EngagingNetworks/page-builder-css-styles)

# Interested in a project or have questions?
We would love to hear from you.

Bryan Casler  
Director of Digital Strategy  
4Site Interactive Studios  
Cell: (315) 877-3420  
Email: bryan@4sitestudios.com
