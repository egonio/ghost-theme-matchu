# Matchu 

### Free Personal Blog Theme for [Ghost](https://ghost.org/)
 
 Matchu is a free personal blog dark theme for Ghost.org blogging platform. It is simple and minimal. Great for personal and programming blogs.
 
 * Matchu uses Bootstrap 4 and Sass.
 * Supports 6 post in the index/tags page.
 * Supports Disqus or other Self Hosted comments.

*Note: Matchu doesn't support headline photos for each post.*

Check out the live version: [here](https://mattwelke.com/blog/)

## To add Disqus: 

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

## For Self Hoested Comments: 

In each post, there's an empty div in the bottom with id 'comments' where users can add their comments platform. You can target this with: 
```javascript
<script>
var commentDiv = document.getElementById('comments');
var paddingAmt = '10px';
commentDiv.style.paddingLeft = paddingAmt;
commentDiv.style.paddingRight = paddingAmt;
</script>
```


&nbsp;

