webpackJsonp([0x85fe64c917f2],{512:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Matthew Brown's JS Blog",author:"Matthew Brown"}},markdownRemark:{id:"/Users/travis/build/mbrown333/mbrown333.github.io/src/pages/20180409-javascripts-call-bind-and-apply-a-quick-explanation/index.md absPath of file >>> MarkdownRemark",html:'<p>If you don’t use JavaScript’s call, bind, and apply regularly you might not be aware of what they do and how to use these native functions. I can remember for the longest time being aware they existed, but not really understanding what they were exactly. Having a good grasp on how these work will give you a deeper understanding of the JavaScript language. And if nothing else these functions tend to be a popular subject of JavaScript interview questions so being aware of how they work can still help you out even if you don’t use them regularly. </p>\n<p>Bind, call, and apply are all part of the prototype object for all JavaScript functions. The reason these calls can come in handy is JavaScript’s <code class="language-text">this</code>. Let’s take a look at some code. When you’re calling an object’s function and the object is the left of the dot as below then that object will be <code class="language-text">this</code> when the <code class="language-text">printPerson</code> function is called. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">(function() { \n  const person = { \n    age: 21, \n    name: &#39;Bob&#39;, \n    printPerson() { \n      console.log(`${this.name} is ${this.age}`); \n      } \n    }; \n\n    person.printPerson(); // Bob is 21 \n})(); </code></pre>\n      </div>\n<p>This works fine if you’re working with objects in an object oriented fashion where data and functionality are grouped together in the object. If you’re using a functional approach then this changes things. If we move the <code class="language-text">printPerson</code> function out of the <code class="language-text">person</code> object and declare it as a function elsewhere then we’ve lost the ability to use <code class="language-text">this</code> in the function. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">(function() { \n  const person = { \n    age: 21, \n    name: &#39;Bob&#39;, \n  }; \n  \n  function printPerson() { \n    console.log(`${this.name} is ${this.age}`); \n  } \n  \n  printPerson(); // FAILS! \n})();</code></pre>\n      </div>\n<p>We could change the function to pass in person as a parameter or we can use <code class="language-text">call</code> to specify to the function what the <code class="language-text">this</code> context should be. </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n  <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> age<span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'Bob\'</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> \n  \n  <span class="token keyword">function</span> <span class="token function">printPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n  <span class="token punctuation">}</span> \n  \n  printPerson<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Bob is 21 </span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>And voila, we passed in the <code class="language-text">person</code> object and our <code class="language-text">printPerson</code> function now knows to use this object as the <code class="language-text">this</code> context. You can also pass parameters in addition to the context with call as below. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">(function() { \n  const person = { \n    age: 21, \n    name: &#39;Bob&#39;, \n  };\n\n  function printPerson(city, state) { \n    console.log(`${this.name} is ${this.age} from ${city}, ${state}`); \n  }\n\n  printPerson.call(person, &#39;Chicago&#39;, &#39;IL&#39;); // Bob is 21 from Chicago, IL \n})();</code></pre>\n      </div>\n<p>This is the same thing as before just demonstrating that any number of parameters can be passed in after the context. The context is always the first parameter and then all others follow after.</p>\n<p>That’s the basic idea with call, now what about bind?</p>\n<p>Bind is actually pretty much the same as call except the function won’t be invoked immediately. It’s just a way to defer execution until later. If you’ve used React this will look familiar to you as bind is often used to bind functions to React Components.</p>\n<p>Let’s update our code example to use bind this time. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">(function() { \n  const person = { \n    age: 21, \n    name: &#39;Bob&#39;, \n  }; \n  const printPersonDeferred = printPerson.bind(person); \n  \n  function printPerson() { \n    console.log(`${this.name} is ${this.age}`); \n  } \n  \n  printPersonDeferred(); // Bob is 21 \n})();</code></pre>\n      </div>\n<p>And then expand on this to demonstrate parameters. This time we pass the parameters in when we make the deferred execution call rather than at the time bind is called. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">(function() { \n  const person = { age: 21, name: &#39;Bob&#39;, }; \n  \n  const printPersonDeferred = printPerson.bind(person); \n  \n  function printPerson(city, state) { \n    console.log(`${this.name} is ${this.age} from ${city}, ${state}`); \n  } \n  \n  printPersonDeferred(&#39;Chicago&#39;, &#39;IL&#39;); // Bob is 21 from Chicago, IL \n})();</code></pre>\n      </div>\n<p>All right we have bind and call down. Let’s move on to apply. Apply is practically the same as call except apply requires you to pass in your parameters after the this context as an array. This is how we would need to modify our code to use apply below. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">(function() { \n  const person = { age: 21, name: &#39;Bob&#39;, }; \n  \n  function printPerson(city, state) { \n    console.log(`${this.name} is ${this.age} from ${city}, ${state}`); \n  } \n  \n  printPerson.apply(person, [&#39;Chicago&#39;, &#39;IL&#39;]); // Bob is 21 from Chicago, IL \n})();</code></pre>\n      </div>\n<p>So you see when you use apply JavaScript unpacks your arguments array into the parameter variables of the function you are calling with apply.</p>',frontmatter:{title:"JavaScript's call, bind, and apply - A Quick Explanation",date:"April 09, 2018"}}},pathContext:{slug:"/20180409-javascripts-call-bind-and-apply-a-quick-explanation/",previous:null,next:{fields:{slug:"/20180409-functional-stateless-components-in-react/"},frontmatter:{title:"Functional Stateless Components in React"}}}}}});
//# sourceMappingURL=path---20180409-javascripts-call-bind-and-apply-a-quick-explanation-c8482fe836d6eff8f183.js.map