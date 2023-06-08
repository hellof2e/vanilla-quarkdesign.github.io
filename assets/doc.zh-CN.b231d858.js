import{d as a,c as t,a as n,o as l}from"./vue.3655129a.js";const e={class:"markdown-body"},p=n(`<h1>Marquee \u8DD1\u9A6C\u706F</h1><h3>\u4ECB\u7ECD</h3><p>\u6587\u5B57\u6EDA\u52A8\u6548\u679C</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/marquee&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
</code></pre><h3>\u4E0D\u540C\u901F\u5EA6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">speed</span>=<span class="hljs-string">&quot;25&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">speed</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
</code></pre><h3>\u63A7\u5236\u6682\u505C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isPaused = true&quot;</span>&gt;</span> \u6682\u505C <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isPaused = false&quot;</span>&gt;</span> \u7EE7\u7EED <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:paused</span>=<span class="hljs-string">&quot;isPaused&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
</code></pre><h3>\u60AC\u6D6E\u6682\u505C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span>
  <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>
  <span class="hljs-attr">:paused</span>=<span class="hljs-string">&quot;isPaused&quot;</span>
  @<span class="hljs-attr">mouseover</span>=<span class="hljs-string">&quot;isPaused = true&quot;</span>
  @<span class="hljs-attr">mouseleave</span>=<span class="hljs-string">&quot;isPaused = false&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
</code></pre><h3>\u70B9\u51FB\u6682\u505C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span>
  <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>
  <span class="hljs-attr">:paused</span>=<span class="hljs-string">&quot;isPaused&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isPaused = !isPaused&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
</code></pre><h3>\u53CD\u5411\u52A8\u753B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:reverse</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>speed</td><td>\u52A8\u753B\u901F\u5EA6</td><td><code class="">string</code></td><td><code class="">50</code></td></tr><tr><td>paused</td><td>\u662F\u5426\u6682\u505C\u52A8\u753B</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>reverse</td><td>\u662F\u5426\u53CD\u5411\u52A8\u753B</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table>`,20),u=[p],d={},j="",q=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),t("div",e,u))}});export{q as default,j as excerpt,d as frontmatter};
