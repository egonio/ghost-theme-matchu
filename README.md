# Matchu 

### Free Personal Blog Theme for [Ghost](https://ghost.org/)

## Table of Contents
1. [Introduction](#introduction)
2. [Adding Disqus](#disqus)
3. [Self Hosted Comment](#selfcomments)
4. [Changing Theme Colors](#themecolors)
5. [About Support](#about)
6. [Changing 404 Icon](#404icon)
7. [Screenshots](#screenshots)
 
 ## Introduction <a name="introduction"></a>
 
 Matchu is a free personal blog dark theme for Ghost.org blogging platform. It is simple and minimal. Great for personal and programming blogs.
 
 * Matchu uses Bootstrap 4 and Sass.
 * Supports 6 post in the index/tags page.
 * Supports Disqus or other Self Hosted comments.

*Note: Matchu doesn't support headline photos for each post.*

Check out the live version: [here](https://mattwelke.com/blog/)

## To add Disqus <a name="disqus"></a>
*Note: Thanks for [Matt Welke](https://github.com/welkie) for creating this disqus example*
You can add this in the footer settings in your ghost admin.
Make sure to change the s.src link to your disqus url.
*Note: I added some padding for styling purposes.*
```javascript
<script>
var commentDiv = document.getElementById('comments');
var paddingAmt = '10px';
commentDiv.style.paddingLeft = paddingAmt;
commentDiv.style.paddingRight = paddingAmt;

/   creates the div with id= 'disqus_thread'
var disqusDiv = document.createElement('div');
disqusDiv.innerHTML = '<div id="disqus_thread"></div>';
commentDiv.appendChild(disqusDiv);

// disqus config
var disqus_config = function () {
var completeUrlArr = window.location.href.split('/');
this.page.url = window.location.href;
this.page.identifier = completeUrlArr[completeUrlArr.length - 1];
};
    
// disqus client code
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
//make sure to change the src to your disqus settings
s.src = 'https://YOUR_DISQUS.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
```

## For self hosted comments <a name="selfcomments"></a>

In each post, there's an empty div in the bottom with id 'comments' where users can add their comments platform. You can target this with: 
```javascript
<script>
var commentDiv = document.getElementById('comments');
var paddingAmt = '10px';
commentDiv.style.paddingLeft = paddingAmt;
commentDiv.style.paddingRight = paddingAmt;
</script>
```

## Changing the theme colors <a name="themecolors"></a>

If you're not a fan of the colors, you're in luck! Matchu uses Sass, so changing the color of the blog theme is easy.
Just go to assest/scss/homestyle.scss and change these variables.

![variables](https://github.com/egonio/ghost-theme-matchu/blob/master/screenshots/Screen%20Shot%202018-03-12%20at%204.02.57%20PM.png)

* "$main-bg" - main background color
* "$post-bg" - post body background color
* "header-text - header text color
* "header-dark-bg" - header background color
* "link-color" - color for links & <a> tags
* "light-text" - color for header text
* "medium-text" - color for tags & date 
* "dark-text"  - color for body text 
* "link-color-hover" - color for links & <a> on hover
 
 ## About support <a name="about"></a>
 
 Matchu supports an "about" page. Just create a page '/about' and it will take the contents of that page into the speical template. The desktop view looks the same as regular page template. But the mobile view will show the main photo and the website description.
 
 Desktop:
 ![about Desktop](https://github.com/egonio/ghost-theme-matchu/blob/master/screenshots/about_desktop.png)
 
 Mobile
 ![about mobile](https://github.com/egonio/ghost-theme-matchu/blob/master/screenshots/mobile.png)
 
  ## Changing 404 icon <a name="404icon"></a>
 
 ![screenshots](https://github.com/egonio/ghost-theme-matchu/blob/master/screenshots/404.png)
 
 If you're not a fan of Fogsland 404 icon. You can change it at assest/404.png
 *Note: make sure to name it 404 and the file extension is .png*
 
 
 
 # Screenshots <a name="screenshots"></a>
 Desktop Index
 ![screenhots](https://github.com/egonio/ghost-theme-matchu/blob/master/screenshots/index.png)
 
 Mobile Index
 ![screenhots](https://github.com/egonio/ghost-theme-matchu/blob/master/screenshots/index-mobile.png)

 
 
 
 Released under the MIT license


&nbsp;

