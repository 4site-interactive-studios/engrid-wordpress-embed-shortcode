# ENGrid for WordPress: Seamless Engaging Networks iFramed Pages in Wordpress
<img align="right" width="250" height="250" src="https://engagingnetworks.academy/wp-content/uploads/2019/09/D-D-Partner.png">

Designed and Developed by [4Site Studios](http://4sitestudios.com/en?ms=github) while working with:
- Ocean Conservancy
- Oxfam Canada
- People for the Ethical Treatment of Animals

# Example Shortcode
```[en url="https://netdonor.net/page/12345/donate/1?in_type=lightbox&in_name=giving_tuesday_2020" title="Iframe Title"]```

# Engaging Networks Page Template
The ENGrid WordPress Plugin was built to compliment our [ENGrid Page Template](https://github.com/4site-interactive-studios/engrid) and does not change the layout of the Engagign Networks page being embedded. If your Engaging Networks page template does not support an "embedded" state which strips the page of styling outside of the body copy and form, please update your template to do so or use the [ENGrid Page Template](https://github.com/4site-interactive-studios/engrid) which has this functionality built in.

# Passing of URL Arguments to iFramed page
The URL used for the WordPress Shortcode can include URL arguments. In addition, any URL arguments present on the parent page will be appended to the iFrame URL. In the below example, a visitor comes from a Gogle Adwords ad and see's a Giving Tuesday Lightbox with an iFrame Embed of an Engaging Networks Doantion page. 
1) Shortcode URL: [en url="https://netdonor.net/page/12345/donate/1?inpromo_type=lightbox"]
2) Parent Page URL: https://website.org?utm_source=adwords
3) Rendered iFrame URL: https://netdonor.net/page/12345/donate/1?inpromo_type=lightbox&utm_source=adwords

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
if (isIframe() && window.hasOwnProperty("pageJson") && pageJson.pageNumber == 1) {
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

# Features
1.  WordPress Plugin Shortcodes
    -   e.g [en url="[https://support.example.org/page/1234/donate/1](https://support.example.org/page/1234/donate/1)"]
2.  Seamless iFrame
    -   The iFrame is visually seamless to the end user. They will never know they're interacting with an iFrame as it always resizes to fit exactly.
3.  (In Progress) Supports multiple shortcodes on the same page
    -   This could come up if someone wants to embed multiple shortcodes on the same page (e.g. Action and a Donation page).
4.  On the parent page, scroll to the top of the iframe after form submission and the resulting page loads (e.g. Thank You page).
5.  On the parent page, scroll to the top of the iframe if form submission results in a server side error.
6.  On the parent page, scroll to the first inline error in the iFrame if on form submission there is a client side error.
7.  Do not fire analytics scripts in the embedded Page Template until the iFrame is interacted with by gaining focus, or if that iFramed page is on any other Engaging Networks pages (pageJson.pageNumber) besides the first page (e.g. Conversion Tracking).
8.  Set an "embedded" class on the embedded page when loaded in an iFrame. This enabled conditional styling to be used. As a result ANY page using any page template can be embedded without the need for a purpose built page template that is only used for form embeds.
    -   e.g. Hide the background image when embedded.
    -   e.g. Hide page "chrome" like header, footer, padding, etc...

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
