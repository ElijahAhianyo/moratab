/* http://prismjs.com/download.html?themes=prism&languages=markup */
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l[o]=i[o]}return r[e]=l},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var l,o,s=a;s&&!e.test(s.className);)s=s.parentNode;if(s&&(l=(s.className.match(e)||[,""])[1],o=t.languages[l]),o){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,s=a.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var c=a.textContent;if(c){var g={element:a,language:l,grammar:o,code:c};if(t.hooks.run("before-highlight",g),r&&self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},u.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var l in i)n[l]=i[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var o=n[l];o="Array"===t.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var c=o[s],g=c.inside,u=!!c.lookbehind,f=0,h=c.alias;c=c.pattern||c;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){c.lastIndex=0;var m=c.exec(d);if(m){u&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),N=[p,1];b&&N.push(b);var O=new a(l,g?t.tokenize(m,g):m,h);N.push(O),w&&N.push(w),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}t.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=s+'="'+(i.attributes[s]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+o+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});;


Prism.languages.latex = {
	// A tex command e.g. \foo
	'keyword': /\\(?:[^a-zA-Z]|[a-zA-Z]+)/g,
	// Curly and square braces
	'lparen': /[[({]/g,
	'rparen': /[\])}]/g,
	// A comment. Tex comments start with % and go to the end of the line
	'comment': /%.*/g,
};


Prism.languages.md = (function() {

	var charInsideUrl = "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]", charEndingUrl = "[-A-Z0-9+&@#/%=~_|[\\])]";
	var urlPattern = new RegExp("(https?|ftp)(://" + charInsideUrl + "*" + charEndingUrl + ")(?=$|\\W)", "gi");
	var emailPattern = /(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)/gi;

	var latex = Prism.languages.latex;

	var lf = /\n/gm;

	var md = {};
	md['pre gfm'] = {
		pattern: /^`{3}.*\n(?:[\s\S]*?)\n`{3} *$/gm,
		inside: {
			"md md-pre": /`{3}/,
			lf: lf
		}
	};
	md['h1 alt'] = {
		pattern: /^(.+)[ \t]*\n=+[ \t]*$/gm,
		inside: {
		}
	};
	md['h2 alt'] = {
		pattern: /^(.+)[ \t]*\n-+[ \t]*$/gm,
		inside: {
		}
	};
	for(var i = 6; i >= 1; i--) {
		md["h" + i] = {
			pattern: new RegExp("^#{" + i + "}.+$", "gm"),
			inside: {
				"md md-hash": new RegExp("^#{" + i + "}")
			}
		};
	}
	md.li = {
		pattern: /^[ \t]*([*+\-]|\d+\.)[ \t].+(?:\n|[ \t].*\n)*/gm,
		inside: {
			"md md-li": /^[ \t]*([*+\-]|\d+\.)[ \t]/m,
			'pre gfm': {
				pattern: /^((?: {4}|\t)+)`{3}.*\n(?:[\s\S]*?)\n\1`{3} *$/gm,
				inside: {
					"md md-pre": /`{3}/,
					lf: lf
				}
			},
			lf: lf
		}
	};
	md.pre = {
		pattern: /(^|(?:^|(?:^|\n)(?![ \t]*([*+\-]|\d+\.)[ \t]).*\n)\s*?\n)(\s*(?: {4}|\t).*(?:\n|$))+/g,
		lookbehind: true,
		inside: {
			lf: lf
		}
	};
	md.table = {
		pattern: new RegExp(
			[
				'^'                         ,
				'[ ]{0,3}'                  , // Allowed whitespace
				'[|]'                       , // Initial pipe
				'(.+)\\n'                   , // $1: Header Row

				'[ ]{0,3}'                  , // Allowed whitespace
				'[|]([ ]*[-:]+[-| :]*)\\n'  , // $2: Separator

				'('                         , // $3: Table Body
				'(?:[ ]*[|].*\\n?)*'      , // Table rows
				')',
				'(?:\\n|$)'                   // Stop at final newline
			].join(''),
			'gm'
		),
		inside: {
			lf: lf
		}
	};
	md['table alt'] = {
		pattern: new RegExp(
			[
				'^'                         ,
				'[ ]{0,3}'                  , // Allowed whitespace
				'(\\S.*[|].*)\\n'           , // $1: Header Row

				'[ ]{0,3}'                  , // Allowed whitespace
				'([-:]+[ ]*[|][-| :]*)\\n'  , // $2: Separator

				'('                         , // $3: Table Body
				'(?:.*[|].*\\n?)*'        , // Table rows
				')'                         ,
				'(?:\\n|$)'                   // Stop at final newline
			].join(''),
			'gm'
		),
		inside: {
			lf: lf
		}
	};

	md.hr = {
		pattern: /^([*\-_] *){3,}$/gm
	};
	md.blockquote = {
		pattern: /^ {0,3}> *[^\n]+$/gm,
		inside: {
			"md md-gt": /^ {0,3}> */,
			"li": md.li
		}
	};
	md['math block'] = {
		pattern: /(\$\$|\\\\\[|\\\\\\\\\()[\s\S]*?(\$\$|\\\\\]|\\\\\\\\\))/g,
		inside: {
			"md md-bracket-start": /^(\$\$|\\\\\[|\\\\\\\\\()/,
			"md md-bracket-end": /(\$\$|\\\\\]|\\\\\\\\\))/,
			lf: lf,
			rest: latex
		}
	};
	md['latex block'] = {
		pattern: /\\?\\begin\{[a-z]*\*?\}[\s\S]*?\\?\\end\{[a-z]*\*?\}/g,
		inside: {
			"keyword": /\\?\\(begin|end)/,
			lf: lf,
			rest: latex
		}
	};
	md.fndef = {
		pattern: /^ {0,3}\[\^.*?\]:[ \t]+.*$/gm,
		inside: {
			"ref-id": {
				pattern: /\[\^.*?\]/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-bracket-end": /\]/
				}
			}
		}
	};
	md.linkdef = {
		pattern: /^ {0,3}\[.*?\]:[ \t]+.*$/gm,
		inside: {
			"link-id": {
				pattern: /\[.*?\]/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-bracket-end": /\]/
				}
			},
			url: urlPattern,
			linktitle: /['\"\(][^\'\"\)]*['\"\)]/
		}
	};
	md.p = {
		pattern: /.+/g,
		inside: {
			'md md-toc': /^\s*\[(toc|TOC)\]\s*$/g
		}
	};
	md.lf = /^\n$/gm;
	md.img = {
		pattern: /!\[[^\]]*\]\([^\)]+\)/g,
		inside: {
			"md md-bang": /^!/,
			"md md-bracket-start": /\[/,
			"md md-alt": /[^\[]+(?=\])/,
			"md md-bracket-end": /\](?=\()/,
			"md img-parens": {
				pattern: /\([^\)]+\)/,
				inside: {
					"md md-paren-start": /^\(/,
					"md md-title": /(['‘][^'’]*['’]|["“][^"”]*["”])(?=\)$)/,
					"md md-src": /[^\('" \t]+(?=[\)'" \t])/,
					"md md-paren-end": /\)$/
				}
			}
		}
	};
	md.link = {
		pattern: /\[(?:(\\.)|[^\[\]])*\]\([^\(\)\s]+(\(\S*?\))??[^\(\)\s]*?(\s(['‘][^'’]*['’]|["“][^"”]*["”]))?\)/gm,
		inside: {
			"md md-bracket-start": {
				pattern: /(^|[^\\])\[/,
				lookbehind: true
			},
			"md md-underlined-text": {
				pattern: /(?:(\\.)|[^\[\]])+(?=\])/
			},
			"md md-bracket-end": /\]\s?\(/,
			"md md-paren-end": /\)$/,
			"md md-href": /.*/
		}
	};
	md.fn = {
		pattern: /\[\^(.*?)\]/g,
		inside: {
			"ref": {
				pattern: /^\[[^\[\]]+\] ?/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-ref": /^[^\[\]]+/,
					"md md-bracket-end": /\]/
				}
			}
		}
	};
	md.imgref = {
		pattern: /!\[(.*?)\] ?\[(.*?)\]/g,
		inside: {
			"md md-bang": /^!/,
			"ref-end": {
				pattern: /\[[^\[\]]+\]$/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-href": /[^\[\]]+(?=]$)/,
					"md md-bracket-end": /\]/
				}
			},
			"ref-start": {
				pattern: /^\[[^\[\]]+\] ?/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-alt": /^[^\[\]]+/,
					"md md-bracket-end": /\]/
				}
			}
		}
	};
	md.linkref = {
		pattern: /\[(.*?)\] ?\[(.*?)\]/g,
		inside: {
			"ref-end": {
				pattern: /\[[^\[\]]+\]$/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-href": /[^\[\]]+(?=]$)/,
					"md md-bracket-end": /\]/
				}
			},
			"ref-start": {
				pattern: /^\[[^\[\]]+\] ?/,
				inside: {
					"md md-bracket-start": /\[/,
					"md md-underlined-text": /^[^\[\]]+/,
					"md md-bracket-end": /\]/
				}
			}
		}
	};
	md.code = {
		pattern: /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/g,
		lookbehind: true,
		inside: {
			"md md-code": /`/
		}
	};
	md.math = {
		pattern: /\$.*?\$/g,
		inside: {
			"md md-bracket-start": /^\$/,
			"md md-bracket-end": /\$$/,
			rest: latex
		}
	};
	md.strong = {
		pattern: /([_\*])\1((?!\1{2}).)*\1{2}/g,
		inside: {
			"md md-strong": /([_\*])\1/g
		}
	};
	md.em = {
		pattern: /(^|[^\\])(\*|_)(\S[^\2]*?)??[^\s\\]+?\2/g,
		lookbehind: true,
		inside: {
			"md md-em md-start": /^(\*|_)/,
			"md md-em md-close": /(\*|_)$/
		}
	};
	md.strike = {
		pattern: /(^|\n|\W)(~~)(?=\S)([^\r]*?\S)\2/gm,
		lookbehind: true,
		inside: {
			"md md-s": /(~~)/,
			"md-strike-text": /[^~]+/
		}
	};
	var rest = {
		code: md.code,
		math: md.math,
		fn: md.fn,
		img: md.img,
		link: md.link,
		imgref: md.imgref,
		linkref: md.linkref,
		url: urlPattern,
		email: emailPattern,
		strong: md.strong,
		em: md.em,
		strike: md.strike,
		conflict: /⧸⧸/g,
		comment: Prism.languages.markup.comment,
		tag: Prism.languages.markup.tag,
		entity: Prism.languages.markup.entity
	};

	for(var c = 6; c >= 1; c--) {
		md["h" + c].inside.rest = rest;
	}
	md["h1 alt"].inside.rest = rest;
	md["h2 alt"].inside.rest = rest;
	md.table.inside.rest = rest;
	md["table alt"].inside.rest = rest;
	md.p.inside.rest = rest;
	md.blockquote.inside.rest = rest;
	md.li.inside.rest = rest;
	md.fndef.inside.rest = rest;

	rest = {
		code: md.code,
		fn: md.fn,
		link: md.link,
		linkref: md.linkref,
		conflict: /⧸⧸/g,
	};
	md.strong.inside.rest = rest;
	md.em.inside.rest = rest;
	md.strike.inside.rest = rest;

	var inside = {
		code: md.code,
		strong: md.strong,
		em: md.em,
		strike: md.strike,
		conflict: /⧸⧸/g,
		comment: Prism.languages.markup.comment,
		tag: Prism.languages.markup.tag,
		entity: Prism.languages.markup.entity
	};
	md.link.inside["md md-underlined-text"].inside = inside;
	md.linkref.inside["ref-start"].inside["md md-underlined-text"].inside = inside;

	return md;
})();
