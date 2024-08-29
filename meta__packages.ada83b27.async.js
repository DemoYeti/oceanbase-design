"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56],{52271:function(c,a,n){n.r(a);var m=[{language:"bash",text:"Bash",code:`#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \\\\/" > text.txt

`},{language:"cpp",text:"Cpp",code:`#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\\\\\"; // this is an error

  return -2e3 + 12l;
}`},{language:"css",text:"Css",code:`@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`},{language:"dockerfile",text:"Dockerfile",code:`# Example instructions from https://docs.docker.com/reference/builder/
FROM ubuntu:14.04

MAINTAINER example@example.com

ENV foo /bar
WORKDIR \${foo}   # WORKDIR /bar
ADD . $foo       # ADD . /bar
COPY \\$foo /quux # COPY $foo /quux
ARG   VAR=FOO

RUN apt-get update && apt-get install -y software-properties-common\\
    zsh curl wget git htop\\
    unzip vim telnet
RUN ["/bin/bash", "-c", "echo hello \${USER}"]

CMD ["executable","param1","param2"]
CMD command param1 param2

EXPOSE 1337

ENV myName="John Doe" myDog=Rex\\ The\\ Dog \\
    myCat=fluffy

ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy`},{language:"go",text:"Go",code:`package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\\\`)
    go println(len("hello world!"))
    return
}`},{language:"groovy",text:"Groovy",code:`@CompileStatic
class Distribution implements Distributable {
    double number = 1234.234 / 567
    def otherNumber = 3 / 4
    boolean archivable = condition ?: true
    def ternary = a ? b : c
    String name = "Guillaume"
    Closure description = null
    List<DownloadPackage> packages = []
    String regex = ~/.*foo.*/
    String multi = '''
        multi line string
    ''' + """
        now with double quotes and \${gstring}
    """ + $/
        even with dollar slashy strings
    /$
}`},{language:"http",text:"Http",code:`POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}`},{language:"java",text:"Java",code:`/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`},{language:"javascript",text:"Javascript",code:`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`},{language:"json",text:"Json",code:`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`},{language:"jsx",text:"Jsx",code:`import React from 'react';
import { Button, Tag, Space } from '@oceanbase/design';
import { ProList } from '@oceanbase/ui';

const dataSource = [
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Database',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Oceanbase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">OceanBase Design</Tag>
              <Tag color="#5BD8A6">Oceanbase Design</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"markdown",text:"Markdown",code:`# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`},{language:"nginx",text:"Nginx",code:`user  www www;
worker_processes  2;
pid /var/run/nginx.pid;
error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

events {
    connections   2000;
    use kqueue | rtsig | epoll | /dev/poll | select | poll;
}

http {
    log_format main      '$remote_addr - $remote_user [$time_local] '
                         '"$request" $status $bytes_sent '
                         '"$http_referer" "$http_user_agent" '
                         '"$gzip_ratio"';

    send_timeout 3m;
    client_header_buffer_size 1k;

    gzip on;
    gzip_min_length 1100;

    #lingering_time 30;

    server {
        server_name   one.example.com  www.one.example.com;
        access_log   /var/log/nginx.access_log  main;

        rewrite (.*) /index.php?page=$1 break;

        location / {
            proxy_pass         http://127.0.0.1/;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            charset            koi8-r;
        }

        location /api/ {
            fastcgi_pass 127.0.0.1:9000;
        }

        location ~* \\.(jpg|jpeg|gif)$ {
            root         /spool/www;
        }
    }
}`},{language:"python",text:"Python",code:`@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`},{language:"ruby",text:"Ruby",code:`# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute`},{language:"solidity",text:"Solidity",code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Primitives {
    bool public boo = true;

    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123; // uint is an alias for uint256

    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int is same as int256

    // minimum and maximum of int
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]

    // Default values
    // Unassigned variables have a default value
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}`},{language:"sql",text:"Sql",code:`CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`},{language:"tsx",text:"Tsx",code:`import React from 'react';
import { Button, Tag, Space } from '@oceanbase/design';
import { ProList } from '@oceanbase/ui';

const dataSource = [
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Database',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Cloud',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Oceanbase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList<any>
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record: any) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">OceanBase Design</Tag>
              <Tag color="#5BD8A6">Oceanbase Design</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"typescript",text:"Typescript",code:`class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`},{language:"xml",text:"Xml",code:`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
<\/script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`},{language:"yaml",text:"Yaml",code:`---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`}];a.default=m},39803:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(81373),I={"area-demo-basic":{component:s.memo(s.lazy(function(){return n.e(3513).then(n.bind(n,31355))})),asset:{type:"BLOCK",id:"area-demo-basic",refAtomIds:["Area"],dependencies:{"index.tsx":{type:"FILE",value:n(70955).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u7840\u9762\u79EF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"area-demo-stack":{component:s.memo(s.lazy(function(){return n.e(3513).then(n.bind(n,15324))})),asset:{type:"BLOCK",id:"area-demo-stack",refAtomIds:["Area"],dependencies:{"index.tsx":{type:"FILE",value:n(99728).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5806\u53E0\u9762\u79EF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"area-demo-percent":{component:s.memo(s.lazy(function(){return n.e(3513).then(n.bind(n,54796))})),asset:{type:"BLOCK",id:"area-demo-percent",refAtomIds:["Area"],dependencies:{"index.tsx":{type:"FILE",value:n(84541).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u767E\u5206\u6BD4\u9762\u79EF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"area-demo-tooltip-scrollable":{component:s.memo(s.lazy(function(){return n.e(3513).then(n.bind(n,9912))})),asset:{type:"BLOCK",id:"area-demo-tooltip-scrollable",refAtomIds:["Area"],dependencies:{"index.tsx":{type:"FILE",value:n(76076).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"Tooltip \u53EF\u6EDA\u52A8",description:"\u9002\u7528\u4E8E Tooltip \u9879\u8F83\u591A\u3001\u8D85\u51FA\u56FE\u8868\u7684\u573A\u666F\uFF0C\u53EF\u901A\u8FC7 tooltip.scrollable: true \u914D\u7F6E\u8FDB\u884C\u5F00\u542F\u3002"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},84504:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(33609),I={"bar-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4020).then(n.bind(n,4965))})),asset:{type:"BLOCK",id:"bar-demo-basic",refAtomIds:["Bar"],dependencies:{"index.tsx":{type:"FILE",value:n(31823).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u7840\u6761\u5F62\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"bar-demo-stack":{component:s.memo(s.lazy(function(){return n.e(4020).then(n.bind(n,58994))})),asset:{type:"BLOCK",id:"bar-demo-stack",refAtomIds:["Bar"],dependencies:{"index.tsx":{type:"FILE",value:n(35930).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5806\u53E0\u6761\u5F62\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"bar-demo-group":{component:s.memo(s.lazy(function(){return n.e(4020).then(n.bind(n,16718))})),asset:{type:"BLOCK",id:"bar-demo-group",refAtomIds:["Bar"],dependencies:{"index.tsx":{type:"FILE",value:n(17189).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5206\u7EC4\u6761\u5F62\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"bar-demo-percent":{component:s.memo(s.lazy(function(){return n.e(4020).then(n.bind(n,46957))})),asset:{type:"BLOCK",id:"bar-demo-percent",refAtomIds:["Bar"],dependencies:{"index.tsx":{type:"FILE",value:n(44605).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u767E\u5206\u6BD4\u6761\u5F62\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"bar-demo-progress":{component:s.memo(s.lazy(function(){return n.e(4020).then(n.bind(n,89833))})),asset:{type:"BLOCK",id:"bar-demo-progress",refAtomIds:["Bar"],dependencies:{"index.tsx":{type:"FILE",value:n(55135).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8FDB\u5EA6\u6761\u5F62\u56FE",description:"\u5C55\u793A\u767E\u5206\u6BD4\uFF0C\u652F\u6301\u8BBE\u7F6E\u8B66\u544A\u6C34\u4F4D\u7EBF\u3001\u5371\u9669\u6C34\u4F4D\u7EBF"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"bar-demo-range":{component:s.memo(s.lazy(function(){return n.e(4020).then(n.bind(n,29149))})),asset:{type:"BLOCK",id:"bar-demo-range",refAtomIds:["Bar"],dependencies:{"index.tsx":{type:"FILE",value:n(1948).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u533A\u95F4\u6761\u5F62\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},16597:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(97974),I={"column-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4380).then(n.bind(n,57489))})),asset:{type:"BLOCK",id:"column-demo-basic",refAtomIds:["Column"],dependencies:{"index.tsx":{type:"FILE",value:n(15383).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u7840\u67F1\u72B6\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"column-demo-stack":{component:s.memo(s.lazy(function(){return n.e(4380).then(n.bind(n,16078))})),asset:{type:"BLOCK",id:"column-demo-stack",refAtomIds:["Column"],dependencies:{"index.tsx":{type:"FILE",value:n(79037).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5806\u53E0\u67F1\u72B6\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"column-demo-group":{component:s.memo(s.lazy(function(){return n.e(4380).then(n.bind(n,62949))})),asset:{type:"BLOCK",id:"column-demo-group",refAtomIds:["Column"],dependencies:{"index.tsx":{type:"FILE",value:n(33650).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5206\u7EC4\u67F1\u72B6\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"column-demo-percent":{component:s.memo(s.lazy(function(){return n.e(4380).then(n.bind(n,47459))})),asset:{type:"BLOCK",id:"column-demo-percent",refAtomIds:["Column"],dependencies:{"index.tsx":{type:"FILE",value:n(32949).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u767E\u5206\u6BD4\u67F1\u72B6\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"column-demo-range":{component:s.memo(s.lazy(function(){return n.e(4380).then(n.bind(n,26201))})),asset:{type:"BLOCK",id:"column-demo-range",refAtomIds:["Column"],dependencies:{"index.tsx":{type:"FILE",value:n(63098).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u533A\u95F4\u67F1\u72B6\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},49879:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(84337),I={"dualaxes-demo-dual-line":{component:s.memo(s.lazy(function(){return n.e(3764).then(n.bind(n,74810))})),asset:{type:"BLOCK",id:"dualaxes-demo-dual-line",refAtomIds:["DualAxes"],dependencies:{"index.tsx":{type:"FILE",value:n(84065).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u53CC\u6298\u7EBF\u53CC\u8F74\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"dualaxes-demo-multi-line":{component:s.memo(s.lazy(function(){return n.e(3764).then(n.bind(n,28551))})),asset:{type:"BLOCK",id:"dualaxes-demo-multi-line",refAtomIds:["DualAxes"],dependencies:{"index.tsx":{type:"FILE",value:n(61706).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u591A\u6298\u7EBF\u53CC\u8F74\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"dualaxes-demo-column-line":{component:s.memo(s.lazy(function(){return n.e(3764).then(n.bind(n,98746))})),asset:{type:"BLOCK",id:"dualaxes-demo-column-line",refAtomIds:["DualAxes"],dependencies:{"index.tsx":{type:"FILE",value:n(8485).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u67F1\u7EBF\u6DF7\u5408\u53CC\u8F74\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"dualaxes-demo-column-multi-line":{component:s.memo(s.lazy(function(){return n.e(3764).then(n.bind(n,47393))})),asset:{type:"BLOCK",id:"dualaxes-demo-column-multi-line",refAtomIds:["DualAxes"],dependencies:{"index.tsx":{type:"FILE",value:n(70273).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u67F1\u7EBF\u6DF7\u5408\u53CC\u8F74\u56FE-\u591A\u6298\u7EBF"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"dualaxes-demo-tooltip-scrollable":{component:s.memo(s.lazy(function(){return n.e(3764).then(n.bind(n,72959))})),asset:{type:"BLOCK",id:"dualaxes-demo-tooltip-scrollable",refAtomIds:["DualAxes"],dependencies:{"index.tsx":{type:"FILE",value:n(28145).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"Tooltip \u53EF\u6EDA\u52A8",description:"\u9002\u7528\u4E8E Tooltip \u9879\u8F83\u591A\u3001\u8D85\u51FA\u56FE\u8868\u7684\u573A\u666F\uFF0C\u53EF\u901A\u8FC7 tooltip.scrollable: true \u914D\u7F6E\u8FDB\u884C\u5F00\u542F\u3002"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},55008:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(19460),I={"gauge-demo-basic":{component:s.memo(s.lazy(function(){return n.e(6730).then(n.bind(n,42305))})),asset:{type:"BLOCK",id:"gauge-demo-basic",refAtomIds:["Gauge"],dependencies:{"index.tsx":{type:"FILE",value:n(64665).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u7840\u4EEA\u8868\u76D8"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"gauge-demo-custom-color":{component:s.memo(s.lazy(function(){return n.e(6730).then(n.bind(n,73741))})),asset:{type:"BLOCK",id:"gauge-demo-custom-color",refAtomIds:["Gauge"],dependencies:{"index.tsx":{type:"FILE",value:n(14784).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u591A\u8272\u4EEA\u8868\u76D8"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"gauge-demo-meter":{component:s.memo(s.lazy(function(){return n.e(6730).then(n.bind(n,56243))})),asset:{type:"BLOCK",id:"gauge-demo-meter",refAtomIds:["Gauge"],dependencies:{"index.tsx":{type:"FILE",value:n(26613).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u7C73\u8F68\u4EEA\u8868\u76D8"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"gauge-demo-without-indicator":{component:s.memo(s.lazy(function(){return n.e(6730).then(n.bind(n,27821))})),asset:{type:"BLOCK",id:"gauge-demo-without-indicator",refAtomIds:["Gauge"],dependencies:{"index.tsx":{type:"FILE",value:n(41965).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u65E0\u6307\u9488\u548C\u523B\u5EA6\u4EEA\u8868\u76D8"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},86205:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(50580),I={"histogram-demo-basic":{component:s.memo(s.lazy(function(){return n.e(5898).then(n.bind(n,35134))})),asset:{type:"BLOCK",id:"histogram-demo-basic",refAtomIds:["Histogram"],dependencies:{"index.tsx":{type:"FILE",value:n(20784).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u7840\u76F4\u65B9\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"histogram-demo-stack":{component:s.memo(s.lazy(function(){return n.e(5898).then(n.bind(n,65995))})),asset:{type:"BLOCK",id:"histogram-demo-stack",refAtomIds:["Histogram"],dependencies:{"index.tsx":{type:"FILE",value:n(97891).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5806\u53E0\u76F4\u65B9\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},46168:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(98858),I={"line-demo-basic":{component:s.memo(s.lazy(function(){return n.e(9737).then(n.bind(n,62678))})),asset:{type:"BLOCK",id:"line-demo-basic",refAtomIds:["Line"],dependencies:{"index.tsx":{type:"FILE",value:n(81197).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u7840\u6298\u7EBF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"line-demo-step":{component:s.memo(s.lazy(function(){return n.e(9737).then(n.bind(n,45998))})),asset:{type:"BLOCK",id:"line-demo-step",refAtomIds:["Line"],dependencies:{"index.tsx":{type:"FILE",value:n(76747).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u9636\u68AF\u6298\u7EBF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"line-demo-multiple":{component:s.memo(s.lazy(function(){return n.e(9737).then(n.bind(n,33741))})),asset:{type:"BLOCK",id:"line-demo-multiple",refAtomIds:["Line"],dependencies:{"index.tsx":{type:"FILE",value:n(45579).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u591A\u6298\u7EBF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"line-demo-auto-fit":{component:s.memo(s.lazy(function(){return n.e(9737).then(n.bind(n,84031))})),asset:{type:"BLOCK",id:"line-demo-auto-fit",refAtomIds:["Line"],dependencies:{"index.tsx":{type:"FILE",value:n(8464).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u81EA\u9002\u5E94\u5BB9\u5668\u9AD8\u5EA6",description:"\u8C03\u6574\u6D4F\u89C8\u5668\u7A97\u53E3\u9AD8\u5EA6\u5373\u53EF\u9A8C\u8BC1"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"line-demo-tooltip-scrollable":{component:s.memo(s.lazy(function(){return n.e(9737).then(n.bind(n,44217))})),asset:{type:"BLOCK",id:"line-demo-tooltip-scrollable",refAtomIds:["Line"],dependencies:{"index.tsx":{type:"FILE",value:n(94672).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"Tooltip \u53EF\u6EDA\u52A8",description:"\u9002\u7528\u4E8E Tooltip \u9879\u8F83\u591A\u3001\u8D85\u51FA\u56FE\u8868\u7684\u573A\u666F\uFF0C\u53EF\u901A\u8FC7 tooltip.scrollable: true \u914D\u7F6E\u8FDB\u884C\u5F00\u542F\u3002"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},20374:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(14800),I={"liquid-demo-circle":{component:s.memo(s.lazy(function(){return n.e(8051).then(n.bind(n,5749))})),asset:{type:"BLOCK",id:"liquid-demo-circle",refAtomIds:["Liquid"],dependencies:{"index.tsx":{type:"FILE",value:n(30022).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5706\u5F62\u6C34\u6CE2\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"liquid-demo-rect":{component:s.memo(s.lazy(function(){return n.e(8051).then(n.bind(n,19807))})),asset:{type:"BLOCK",id:"liquid-demo-rect",refAtomIds:["Liquid"],dependencies:{"index.tsx":{type:"FILE",value:n(30783).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u77E9\u5F62\u6C34\u6CE2\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"liquid-demo-horizontal":{component:s.memo(s.lazy(function(){return n.e(8051).then(n.bind(n,91317))})),asset:{type:"BLOCK",id:"liquid-demo-horizontal",refAtomIds:["Liquid"],dependencies:{"index.tsx":{type:"FILE",value:n(81386).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6C34\u5E73\u5E03\u5C40\u7684\u6C34\u6CE2\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"liquid-demo-decimal":{component:s.memo(s.lazy(function(){return n.e(8051).then(n.bind(n,13800))})),asset:{type:"BLOCK",id:"liquid-demo-decimal",refAtomIds:["Liquid"],dependencies:{"index.tsx":{type:"FILE",value:n(84679).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6570\u636E\u7CBE\u5EA6",description:"\u9ED8\u8BA4\u6700\u591A\u4FDD\u7559\u4E24\u4F4D\u6709\u6548\u5C0F\u6570\uFF0C\u53EF\u901A\u8FC7 decimal \u8FDB\u884C\u8BBE\u7F6E\u3002"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},49844:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(92302),I={"pie-demo-pie":{component:s.memo(s.lazy(function(){return n.e(2333).then(n.bind(n,91675))})),asset:{type:"BLOCK",id:"pie-demo-pie",refAtomIds:["Pie"],dependencies:{"index.tsx":{type:"FILE",value:n(31791).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u7840\u997C\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pie-demo-donut":{component:s.memo(s.lazy(function(){return n.e(2333).then(n.bind(n,21519))})),asset:{type:"BLOCK",id:"pie-demo-donut",refAtomIds:["Pie"],dependencies:{"index.tsx":{type:"FILE",value:n(38508).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u7840\u73AF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pie-demo-donut-floor":{component:s.memo(s.lazy(function(){return n.e(2333).then(n.bind(n,22237))})),asset:{type:"BLOCK",id:"pie-demo-donut-floor",refAtomIds:["Pie"],dependencies:{"index.tsx":{type:"FILE",value:n(626).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u73AF\u56FE-\u6D6E\u70B9\u6570\u7CBE\u5EA6"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pie-demo-half-donut":{component:s.memo(s.lazy(function(){return n.e(2333).then(n.bind(n,10114))})),asset:{type:"BLOCK",id:"pie-demo-half-donut",refAtomIds:["Pie"],dependencies:{"index.tsx":{type:"FILE",value:n(25588).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u534A\u5706\u73AF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pie-demo-state-change":{component:s.memo(s.lazy(function(){return n.e(2333).then(n.bind(n,70872))})),asset:{type:"BLOCK",id:"pie-demo-state-change",refAtomIds:["Pie"],dependencies:{"index.tsx":{type:"FILE",value:n(67550).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"useMemo-\u72B6\u6001\u6539\u53D8"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},88152:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(90743),I={"score-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4177).then(n.bind(n,96655))})),asset:{type:"BLOCK",id:"score-demo-basic",refAtomIds:["Score"],dependencies:{"index.tsx":{type:"FILE",value:n(28256).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"score-demo-customcolor":{component:s.memo(s.lazy(function(){return n.e(4177).then(n.bind(n,60346))})),asset:{type:"BLOCK",id:"score-demo-customcolor",refAtomIds:["Score"],dependencies:{"index.tsx":{type:"FILE",value:n(3151).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5355\u4F4D"},context:{react:n(75271),"@oceanbase/charts":n(25082)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"score-demo-customthreshold":{component:s.memo(s.lazy(function(){return n.e(4177).then(n.bind(n,31237))})),asset:{type:"BLOCK",id:"score-demo-customthreshold",refAtomIds:["Score"],dependencies:{"index.tsx":{type:"FILE",value:n(69256).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u9608\u503C"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503),lodash:n(32699)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},14245:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(48306),I={"stat-demo-basic":{component:s.memo(s.lazy(function(){return n.e(1853).then(n.bind(n,92542))})),asset:{type:"BLOCK",id:"stat-demo-basic",refAtomIds:["Stat"],dependencies:{"index.tsx":{type:"FILE",value:n(74433).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx",title:"\u57FA\u7840\u6570\u5B57\u7EDF\u8BA1"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503),lodash:n(32699)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},62838:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(64173),I={"packages-charts-src-tiny-demo-line":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,80121))})),asset:{type:"BLOCK",id:"packages-charts-src-tiny-demo-line",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(27363).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8FF7\u4F60\u6298\u7EBF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-charts-src-tiny-demo-area":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,56761))})),asset:{type:"BLOCK",id:"packages-charts-src-tiny-demo-area",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(20441).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8FF7\u4F60\u9762\u79EF\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-charts-src-tiny-demo-column":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,45582))})),asset:{type:"BLOCK",id:"packages-charts-src-tiny-demo-column",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(39115).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8FF7\u4F60\u67F1\u72B6\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-charts-src-tiny-demo-progress":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,96248))})),asset:{type:"BLOCK",id:"packages-charts-src-tiny-demo-progress",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(73891).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/charts":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8FDB\u5EA6\u6761\u56FE"},context:{react:n(75271),"@oceanbase/charts":n(25082),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},47451:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(95227),I={"alert-demo-style":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,52160))})),asset:{type:"BLOCK",id:"alert-demo-style",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(75611).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u56DB\u79CD\u6837\u5F0F",description:"\u5171\u6709\u56DB\u79CD\u6837\u5F0F success\u3001info\u3001warning\u3001error\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-closable":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,34938))})),asset:{type:"BLOCK",id:"alert-demo-closable",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(23502).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A",description:"\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\u8B66\u544A\u63D0\u793A\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-action":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,63468))})),asset:{type:"BLOCK",id:"alert-demo-action",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(4165).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u64CD\u4F5C",description:"\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u81EA\u5B9A\u4E49\u64CD\u4F5C\u9879\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-over-length":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,8572))})),asset:{type:"BLOCK",id:"alert-demo-over-length",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(95720).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8D85\u957F\u5185\u5BB9"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-ghost-and-colored":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,65344))})),asset:{type:"BLOCK",id:"alert-demo-ghost-and-colored",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(55861).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u900F\u660E\u80CC\u666F\u548C\u5168\u5C40\u7740\u8272"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-banner":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,39082))})),asset:{type:"BLOCK",id:"alert-demo-banner",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(5669).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u9876\u90E8\u516C\u544A",description:"\u9875\u9762\u9876\u90E8\u901A\u544A\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u6709\u56FE\u6807\u4E14 type \u4E3A 'warning'\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-loop-banner":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,67335))})),asset:{type:"BLOCK",id:"alert-demo-loop-banner",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(40113).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"},"react-fast-marquee":{type:"NPM",value:"1.6.5"}},entry:"index.tsx",title:"\u8F6E\u64AD\u7684\u516C\u544A",description:"\u914D\u5408 react-text-loop-next [https://npmjs.com/package/react-text-loop-next] \u6216 react-fast-marquee [https://npmjs.com/package/react-fast-marquee] \u5B9E\u73B0\u6D88\u606F\u8F6E\u64AD\u901A\u77E5\u680F\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271),"react-fast-marquee":n(82672)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"alert-demo-error-boundary":{component:s.memo(s.lazy(function(){return n.e(4819).then(n.bind(n,34776))})),asset:{type:"BLOCK",id:"alert-demo-error-boundary",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:n(70684).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"React \u9519\u8BEF\u5904\u7406",description:"\u53CB\u597D\u7684 React \u9519\u8BEF\u5904\u7406 [https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html] \u5305\u88F9\u7EC4\u4EF6\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},87074:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(80369),I={"badge-demo-count":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,84567))})),asset:{type:"BLOCK",id:"badge-demo-count",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(1724).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u6570\u5B57\u5FBD\u6807"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-count-independent":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,44233))})),asset:{type:"BLOCK",id:"badge-demo-count-independent",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(61845).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u72EC\u7ACB\u4F7F\u7528\u7684\u6570\u5B57\u5FBD\u6807",description:"\u4E0D\u5305\u88F9\u4EFB\u4F55\u5143\u7D20"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-dot":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,96885))})),asset:{type:"BLOCK",id:"badge-demo-dot",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(83073).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@ant-design/icons":{type:"NPM",value:"5.4.0"}},entry:"index.tsx",title:"\u5FBD\u6807\u70B9"},context:{react:n(75271),"@oceanbase/design":n(43503),"@ant-design/icons":n(57301)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-status":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,33762))})),asset:{type:"BLOCK",id:"badge-demo-status",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(40002).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u72B6\u6001\u70B9",description:"\u7528\u4E8E\u8868\u793A\u72B6\u6001\u7684\u5C0F\u5706\u70B9"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-status-icon":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,83063))})),asset:{type:"BLOCK",id:"badge-demo-status-icon",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(69466).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u72B6\u6001\u56FE\u6807",description:"\u4F7F\u7528\u56FE\u6807\u6807\u8BC6\u72B6\u6001\uFF0C\u589E\u5F3A\u611F\u77E5"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-status-custom-icon":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,20293))})),asset:{type:"BLOCK",id:"badge-demo-status-custom-icon",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(97776).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u72B6\u6001\u56FE\u6807"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-status-inner":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,21511))})),asset:{type:"BLOCK",id:"badge-demo-status-inner",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(3262).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u72B6\u6001\u70B9\u548C\u72B6\u6001\u56FE\u6807\u548C\u5176\u4ED6\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"badge-demo-ribbon":{component:s.memo(s.lazy(function(){return n.e(954).then(n.bind(n,16029))})),asset:{type:"BLOCK",id:"badge-demo-ribbon",refAtomIds:["badge"],dependencies:{"index.tsx":{type:"FILE",value:n(44207).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7F0E\u5E26\u5FBD\u6807"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},49093:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(99517),I={"packages-design-src-breadcrumb-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,93314))})),asset:{type:"BLOCK",id:"packages-design-src-breadcrumb-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(48118).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-breadcrumb-demo-icon":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,32506))})),asset:{type:"BLOCK",id:"packages-design-src-breadcrumb-demo-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(46123).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5E26\u56FE\u6807"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-breadcrumb-demo-menu":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,2493))})),asset:{type:"BLOCK",id:"packages-design-src-breadcrumb-demo-menu",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(29326).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5E26\u4E0B\u62C9\u83DC\u5355"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},52681:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(15664),I={"button-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4219).then(n.bind(n,20201))})),asset:{type:"BLOCK",id:"button-demo-basic",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:n(30043).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u6309\u94AE\u7C7B\u578B",description:"\u6309\u94AE\u6709\u4E94\u79CD\u7C7B\u578B\uFF1A\u4E3B\u6309\u94AE\u3001\u6B21\u6309\u94AE\u3001\u865A\u7EBF\u6309\u94AE\u3001\u6587\u672C\u6309\u94AE\u548C\u94FE\u63A5\u6309\u94AE\u3002\u4E3B\u6309\u94AE\u5728\u540C\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u6700\u591A\u51FA\u73B0\u4E00\u6B21\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"button-demo-loading":{component:s.memo(s.lazy(function(){return n.e(4219).then(n.bind(n,2400))})),asset:{type:"BLOCK",id:"button-demo-loading",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:n(68102).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u52A0\u8F7D\u4E2D",description:"\u901A\u8FC7 loading \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u7684\u52A0\u8F7D\u72B6\u6001\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"button-demo-disabled":{component:s.memo(s.lazy(function(){return n.e(4219).then(n.bind(n,38349))})),asset:{type:"BLOCK",id:"button-demo-disabled",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:n(71156).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u7981\u7528",description:"\u6DFB\u52A0 disabled \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u540C\u65F6\u6309\u94AE\u6837\u5F0F\u4E5F\u4F1A\u6539\u53D8\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"button-demo-danger":{component:s.memo(s.lazy(function(){return n.e(4219).then(n.bind(n,54738))})),asset:{type:"BLOCK",id:"button-demo-danger",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:n(97118).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5371\u9669\u6309\u94AE",description:"\u901A\u8FC7 danger \u5C5E\u6027\u63A7\u5236\u800C\u4E0D\u662F\u6309\u94AE\u7C7B\u578B\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"button-demo-icon":{component:s.memo(s.lazy(function(){return n.e(4219).then(n.bind(n,25898))})),asset:{type:"BLOCK",id:"button-demo-icon",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:n(63654).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u56FE\u6807\u6309\u94AE",description:"\u901A\u8FC7 iconPosition \u5C5E\u6027\u63A7\u5236\u56FE\u6807\u4F4D\u7F6E\u3002"},context:{react:n(75271),"@oceanbase/icons":n(50010),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"button-demo-dropdown":{component:s.memo(s.lazy(function(){return n.e(4219).then(n.bind(n,74068))})),asset:{type:"BLOCK",id:"button-demo-dropdown",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:n(27170).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE",description:"\u66F4\u591A\u7684\u4E0B\u62C9\u6846\u6309\u94AE\u793A\u4F8B\u53EF\u53C2\u8003 Dropdown.Button [/components/dropdown#dropdown-demo-dropdown-button]\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},73263:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(77792),I={"card-demo-basic":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,62343))})),asset:{type:"BLOCK",id:"card-demo-basic",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(55385).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5178\u578B\u5361\u7247",description:"\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-border-less":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,64387))})),asset:{type:"BLOCK",id:"card-demo-border-less",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(19464).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u65E0\u8FB9\u6846",description:"\u5E26\u6709\u9634\u5F71\uFF0C\u901A\u5E38\u4F4D\u4E8E\u7070\u8272\u80CC\u666F\u4E4B\u4E0A\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-no-divider":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,96396))})),asset:{type:"BLOCK",id:"card-demo-no-divider",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(38336).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u65E0\u5206\u5272\u7EBF",description:"\u53BB\u6389\u5361\u7247\u5934\u90E8\u548C\u5185\u5BB9\u533A\u7684\u5206\u5272\u7EBF\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-inner":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,5379))})),asset:{type:"BLOCK",id:"card-demo-inner",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(68119).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5D4C\u5957\u5361\u7247",description:"\u591A\u5C42\u7EA7\u5C55\u793A\uFF0C\u652F\u6301\u591A\u79CD\u5185\u90E8\u5361\u7247\u6837\u5F0F\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-grid":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,58223))})),asset:{type:"BLOCK",id:"card-demo-grid",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(43792).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7F51\u683C\u578B\u5185\u5D4C\u5361\u7247"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-tabs":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,56618))})),asset:{type:"BLOCK",id:"card-demo-tabs",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(38965).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5E26\u9875\u7B7E\u7684\u5361\u7247",description:"\u9875\u7B7E\u53EF\u8BBE\u7F6E\u9009\u9879\u5361\u540E\u9762\u7684\u6807\u7B7E\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-config-provider":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,19909))})),asset:{type:"BLOCK",id:"card-demo-config-provider",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(97893).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"ConfigProvider",description:"\u7528\u4E8E\u8C03\u8BD5\u5185\u90E8\u7684 ConfigProvider \u662F\u5426\u8868\u73B0\u6B63\u5E38\uFF0C\u9700\u8981\u8FDE\u7EED\u89E6\u53D1 2 \u6B21\u53CA\u4EE5\u4E0A\uFF0C\u89C2\u5BDF\u7B2C\u4E8C\u4E2A\u5F39\u7A97\u662F\u5426\u6B63\u5E38\u5C55\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"card-demo-card-table":{component:s.memo(s.lazy(function(){return n.e(6943).then(n.bind(n,13096))})),asset:{type:"BLOCK",id:"card-demo-card-table",refAtomIds:["card"],dependencies:{"index.tsx":{type:"FILE",value:n(28803).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u548C Table \u7EC4\u5408\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},91507:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(47846),I={"packages-design-src-cascader-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,89333))})),asset:{type:"BLOCK",id:"packages-design-src-cascader-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(29027).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-cascader-demo-multiple":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,53107))})),asset:{type:"BLOCK",id:"packages-design-src-cascader-demo-multiple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(56042).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u591A\u9009"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},79034:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(17539),I={"config-provider-demo-basic":{component:s.memo(s.lazy(function(){return n.e(2317).then(n.bind(n,32233))})),asset:{type:"BLOCK",id:"config-provider-demo-basic",refAtomIds:["config-provider"],dependencies:{"index.tsx":{type:"FILE",value:n(39441).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},dayjs:{type:"NPM",value:"1.11.12"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u56FD\u9645\u5316"},context:{"@oceanbase/design":n(43503),"@oceanbase/design/locale/en-US":n(79829),"@oceanbase/design/locale/zh-CN":n(12821),dayjs:n(28026),"dayjs/locale/zh-cn":n(28035),"dayjs/plugin/weekday":n(46645),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"config-provider-demo-size":{component:s.memo(s.lazy(function(){return n.e(2317).then(n.bind(n,92402))})),asset:{type:"BLOCK",id:"config-provider-demo-size",refAtomIds:["config-provider"],dependencies:{"index.tsx":{type:"FILE",value:n(85976).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5C3A\u5BF8"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"config-provider-demo-theme":{component:s.memo(s.lazy(function(){return n.e(2317).then(n.bind(n,63471))})),asset:{type:"BLOCK",id:"config-provider-demo-theme",refAtomIds:["config-provider"],dependencies:{"index.tsx":{type:"FILE",value:n(32748).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"},"react-color":{type:"NPM",value:"2.19.3"}},entry:"index.tsx",title:"\u4E3B\u9898"},context:{"@oceanbase/design":n(43503),react:n(75271),"react-color":n(84649)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"config-provider-demo-spin":{component:s.memo(s.lazy(function(){return n.e(2317).then(n.bind(n,32125))})),asset:{type:"BLOCK",id:"config-provider-demo-spin",refAtomIds:["config-provider"],dependencies:{"index.tsx":{type:"FILE",value:n(59235).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"Spin"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"config-provider-demo-config-provider":{component:s.memo(s.lazy(function(){return n.e(2317).then(n.bind(n,24557))})),asset:{type:"BLOCK",id:"config-provider-demo-config-provider",refAtomIds:["config-provider"],dependencies:{"index.tsx":{type:"FILE",value:n(37272).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7A7A\u72B6\u6001"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},69298:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(26052),I={"descriptions-demo-basic":{component:s.memo(s.lazy(function(){return n.e(6992).then(n.bind(n,42405))})),asset:{type:"BLOCK",id:"descriptions-demo-basic",refAtomIds:["descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(74908).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u7B80\u5355\u5C55\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"descriptions-demo-content":{component:s.memo(s.lazy(function(){return n.e(6992).then(n.bind(n,69327))})),asset:{type:"BLOCK",id:"descriptions-demo-content",refAtomIds:["descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(87081).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5185\u5BB9\u5C55\u793A",description:"\u5185\u5BB9\u8D85\u957F\u81EA\u52A8\u7701\u7565\uFF0C\u5E76\u5C55\u793A Tooltip\u3002\u540C\u65F6\u901A\u8FC7 contentProps \u53EF\u8BBE\u7F6E\u7701\u7565\u3001\u7F16\u8F91\u3001\u590D\u5236\u7B49\u5185\u5BB9\u5C5E\u6027\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"descriptions-demo-vertical":{component:s.memo(s.lazy(function(){return n.e(6992).then(n.bind(n,96868))})),asset:{type:"BLOCK",id:"descriptions-demo-vertical",refAtomIds:["descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(35920).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5782\u76F4\u5217\u8868",description:"\u9ED8\u8BA4\u53BB\u6389\u5192\u53F7"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"descriptions-demo-bordered":{component:s.memo(s.lazy(function(){return n.e(6992).then(n.bind(n,40559))})),asset:{type:"BLOCK",id:"descriptions-demo-bordered",refAtomIds:["descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(98402).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5E26\u8FB9\u6846"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"descriptions-demo-size":{component:s.memo(s.lazy(function(){return n.e(6992).then(n.bind(n,78944))})),asset:{type:"BLOCK",id:"descriptions-demo-size",refAtomIds:["descriptions"],dependencies:{"index.tsx":{type:"FILE",value:n(32598).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u4E0D\u540C\u5C3A\u5BF8"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},45059:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(72029),I={"drawer-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,3175))})),asset:{type:"BLOCK",id:"drawer-demo-basic",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(21100).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u7840\u62BD\u5C49",description:"\u9ED8\u8BA4\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-footer":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,40323))})),asset:{type:"BLOCK",id:"drawer-demo-footer",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(51871).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5F00\u542F\u9875\u811A",description:"\u5185\u5BB9\u8F83\u77ED\u65F6\uFF0C\u9875\u811A\u8DDF\u968F\u5185\u5BB9\u5C55\u793A\uFF1B\u53EF\u901A\u8FC7 onOk \u6216 footer \u5F00\u542F\u9875\u811A\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-footerextra":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,46164))})),asset:{type:"BLOCK",id:"drawer-demo-footerextra",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(52247).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8BBE\u7F6E\u9ED8\u8BA4\u9875\u811A\u7684\u989D\u5916\u5185\u5BB9",description:"\u901A\u8FC7 footerExtra \u8BBE\u7F6E\uFF0C\u4EC5\u9ED8\u8BA4\u9875\u811A\u751F\u6548"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-custom-footer":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,54912))})),asset:{type:"BLOCK",id:"drawer-demo-custom-footer",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(93742).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u9875\u811A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-confirmloading":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,46761))})),asset:{type:"BLOCK",id:"drawer-demo-confirmloading",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(263).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u786E\u5B9A\u6309\u94AE loading"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-form-drawer":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,75952))})),asset:{type:"BLOCK",id:"drawer-demo-form-drawer",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(17140).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7528\u4E8E Form \u8868\u5355",description:"\u4E0E Form \u8868\u5355\u5408\u7528\uFF0C\u7528\u4E8E\u6536\u96C6\u6570\u636E\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-descriptions":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,75335))})),asset:{type:"BLOCK",id:"drawer-demo-descriptions",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(28825).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7528\u4E8E\u8BE6\u60C5\u5C55\u793A",description:"\u4E0E Descriptions \u5408\u7528\uFF0C\u7528\u4E8E\u8BE6\u60C5\u5C55\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"drawer-demo-over-height":{component:s.memo(s.lazy(function(){return n.e(4649).then(n.bind(n,86006))})),asset:{type:"BLOCK",id:"drawer-demo-over-height",refAtomIds:["drawer"],dependencies:{"index.tsx":{type:"FILE",value:n(52215).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},lodash:{type:"NPM",value:"4.17.21"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5185\u5BB9\u8D85\u51FA",description:"\u652F\u6301\u6EDA\u52A8\uFF1B\u5185\u5BB9\u8F83\u957F\u65F6\u9875\u811A\u7F6E\u5E95\u5C55\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503),lodash:n(32699),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},34781:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(95567),I={"empty-demo-basic":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,57362))})),asset:{type:"BLOCK",id:"empty-demo-basic",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(16497).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u9ED8\u8BA4",description:"\u7B80\u5355\u5C55\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-complete":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,70737))})),asset:{type:"BLOCK",id:"empty-demo-complete",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(9531).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5B8C\u6574\u4F7F\u7528",description:"\u56FE\u7247\u4E3A Empty.PRESENTED_IMAGE_COLORED\uFF0C\u5305\u542B\u6807\u9898\u3001\u63CF\u8FF0\u548C\u64CD\u4F5C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-complete-debug":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,86049))})),asset:{type:"BLOCK",id:"empty-demo-complete-debug",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(55191).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5B8C\u6574\u4F7F\u7528 debug",description:"\u56FE\u7247\u4E3A Empty.PRESENTED_IMAGE_COLORED\uFF0C\u5305\u542B\u6807\u9898\u3001\u63CF\u8FF0\u548C\u64CD\u4F5C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-database":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,94355))})),asset:{type:"BLOCK",id:"empty-demo-database",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(18319).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6570\u636E\u5E93\u5B9E\u4F8B\u63D2\u56FE",description:"\u56FE\u7247\u4E3A Empty.PRESENTED_IMAGE_DATABASE"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-image":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,42383))})),asset:{type:"BLOCK",id:"empty-demo-image",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(76512).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u56FE\u7247",description:"\u53EF\u8BBE\u7F6E\u56FE\u7247\u94FE\u63A5\u6216 ReactNode"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-steps":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,33203))})),asset:{type:"BLOCK",id:"empty-demo-steps",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(39519).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6B65\u9AA4\u63D0\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-horizontal":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,9889))})),asset:{type:"BLOCK",id:"empty-demo-horizontal",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(91689).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6A2A\u5411\u5E03\u5C40",description:"\u56FE\u7247\u4E3A PRESENTED_IMAGE_GUIDE\uFF0C\u5E38\u7528\u4E8E\u529F\u80FD\u5F00\u901A\u7B49\u5F15\u5BFC\u7C7B\u573A\u666F"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-with-page-container":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,49901))})),asset:{type:"BLOCK",id:"empty-demo-with-page-container",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(50127).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u548C\u9875\u5BB9\u5668\u642D\u914D\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"empty-demo-config-provider":{component:s.memo(s.lazy(function(){return n.e(2367).then(n.bind(n,24557))})),asset:{type:"BLOCK",id:"empty-demo-config-provider",refAtomIds:["empty"],dependencies:{"index.tsx":{type:"FILE",value:n(37272).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5168\u5C40\u7EC4\u4EF6\u7684 Empty \u6837\u5F0F"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},16240:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(34862),I={"form-demo-basic":{component:s.memo(s.lazy(function(){return n.e(6294).then(n.bind(n,38273))})),asset:{type:"BLOCK",id:"form-demo-basic",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:n(12832).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u9ED8\u8BA4\u4E3A\u53EF\u9009\u6837\u5F0F"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"form-demo-requiredmark-same-with-antd":{component:s.memo(s.lazy(function(){return n.e(6294).then(n.bind(n,69946))})),asset:{type:"BLOCK",id:"form-demo-requiredmark-same-with-antd",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:n(99676).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u8BBE\u7F6E\u4E3A\u5FC5\u9009\u6837\u5F0F",description:"\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u6216\u5C40\u90E8\u8BBE\u7F6E requiredMark\uFF0C\u8BA9\u5FC5\u9009\u6837\u5F0F\u548C antd \u4FDD\u6301\u4E00\u81F4"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"form-demo-hiderequiredmark":{component:s.memo(s.lazy(function(){return n.e(6294).then(n.bind(n,22029))})),asset:{type:"BLOCK",id:"form-demo-hiderequiredmark",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:n(11174).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"hideRequiredMark"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"form-demo-pro-form":{component:s.memo(s.lazy(function(){return n.e(6294).then(n.bind(n,50364))})),asset:{type:"BLOCK",id:"form-demo-pro-form",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:n(29944).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"ProForm"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"form-demo-form-item-tooltip":{component:s.memo(s.lazy(function(){return n.e(6294).then(n.bind(n,71623))})),asset:{type:"BLOCK",id:"form-demo-form-item-tooltip",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:n(30585).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u914D\u7F6E\u63D0\u793A\u4FE1\u606F"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},33754:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(8361),I={"packages-design-src-grid-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,82060))})),asset:{type:"BLOCK",id:"packages-design-src-grid-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(35418).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u7840\u6805\u683C",description:"\u4F7F\u7528\u5355\u4E00\u7684\u4E00\u7EC4 Row \u548C Col \u6805\u683C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u6240\u6709\u5217\uFF08Col\uFF09\u5FC5\u987B\u653E\u5728 Row \u5185\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-grid-demo-gutter":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,32717))})),asset:{type:"BLOCK",id:"packages-design-src-grid-demo-gutter",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(78602).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u533A\u5757\u6805\u683C",description:"\u6805\u683C\u5E38\u5E38\u9700\u8981\u548C\u95F4\u9694\u8FDB\u884C\u914D\u5408\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 Row \u7684 gutter \u5C5E\u6027\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 (16+8n)px \u4F5C\u4E3A\u6805\u683C\u95F4\u9694(n \u662F\u81EA\u7136\u6570)\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-grid-demo-offset":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,96569))})),asset:{type:"BLOCK",id:"packages-design-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(53927).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5DE6\u53F3\u504F\u79FB",description:"\u4F7F\u7528 offset \u53EF\u4EE5\u5C06\u5217\u5411\u53F3\u4FA7\u504F\u3002\u4F8B\u5982\uFF0Coffset={4} \u5C06\u5143\u7D20\u5411\u53F3\u4FA7\u504F\u79FB\u4E86 4 \u4E2A\u5217\uFF08column\uFF09\u7684\u5BBD\u5EA6\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-grid-demo-flex":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,83758))})),asset:{type:"BLOCK",id:"packages-design-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(19440).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6392\u7248",description:"\u5B50\u5143\u7D20\u6839\u636E\u4E0D\u540C\u7684\u503C start\u3001center\u3001end\u3001space-between\u3001space-around \u548C space-evenly\uFF0C\u5206\u522B\u5B9A\u4E49\u5176\u5728\u7236\u8282\u70B9\u91CC\u9762\u7684\u6392\u7248\u65B9\u5F0F\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},66021:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(87533),I={"packages-design-src-icon-demo-new":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,60142))})),asset:{type:"BLOCK",id:"packages-design-src-icon-demo-new",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(18876).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u65B0\u589E\u56FE\u6807"},context:{react:n(75271),"@oceanbase/icons":n(50010),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},91071:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(25702),I={"input-number-demo-basic":{component:s.memo(s.lazy(function(){return n.e(2815).then(n.bind(n,1637))})),asset:{type:"BLOCK",id:"input-number-demo-basic",refAtomIds:["input-number"],dependencies:{"index.tsx":{type:"FILE",value:n(26958).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u6570\u5B57\u8F93\u5165\u6846"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-number-demo-addon":{component:s.memo(s.lazy(function(){return n.e(2815).then(n.bind(n,67997))})),asset:{type:"BLOCK",id:"input-number-demo-addon",refAtomIds:["input-number"],dependencies:{"index.tsx":{type:"FILE",value:n(94984).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u524D\u7F6E/\u540E\u7F6E\u6807\u7B7E",description:"\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-number-demo-formatter":{component:s.memo(s.lazy(function(){return n.e(2815).then(n.bind(n,62990))})),asset:{type:"BLOCK",id:"input-number-demo-formatter",refAtomIds:["input-number"],dependencies:{"index.tsx":{type:"FILE",value:n(2477).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u683C\u5F0F\u5316\u5C55\u793A",description:"\u901A\u8FC7 formatter \u683C\u5F0F\u5316\u6570\u5B57\uFF0C\u4EE5\u5C55\u793A\u5177\u6709\u5177\u4F53\u542B\u4E49\u7684\u6570\u636E\uFF0C\u5F80\u5F80\u9700\u8981\u914D\u5408 parser \u4E00\u8D77\u4F7F\u7528\u3002\u8FD9\u91CC\u6709\u4E00\u4E2A\u66F4\u590D\u6742\u7684\u8D27\u5E01\u683C\u5F0F\u5316\u8F93\u5165\u6846\uFF1Ahttps://codesandbox.io/s/currency-wrapper-antd-input-3ynzo [https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo]"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-number-demo-status":{component:s.memo(s.lazy(function(){return n.e(2815).then(n.bind(n,55687))})),asset:{type:"BLOCK",id:"input-number-demo-status",refAtomIds:["input-number"],dependencies:{"index.tsx":{type:"FILE",value:n(81379).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u72B6\u6001",description:"\u4F7F\u7528 status \u4E3A InputNumber \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 error \u6216\u8005 warning\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},83890:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(62541),I={"input-demo-basic":{component:s.memo(s.lazy(function(){return n.e(2295).then(n.bind(n,47138))})),asset:{type:"BLOCK",id:"input-demo-basic",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:n(11616).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528",description:"\u9ED8\u8BA4\u586B\u5145 placeholder"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-demo-search":{component:s.memo(s.lazy(function(){return n.e(2295).then(n.bind(n,12725))})),asset:{type:"BLOCK",id:"input-demo-search",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:n(73885).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u641C\u7D22\u6846"},context:{react:n(75271),"@oceanbase/icons":n(50010),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-demo-password":{component:s.memo(s.lazy(function(){return n.e(2295).then(n.bind(n,39445))})),asset:{type:"BLOCK",id:"input-demo-password",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:n(48707).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.0"}},entry:"index.tsx",title:"\u5BC6\u7801\u8F93\u5165\u6846",description:'\u8BBE\u7F6E autoComplete="new-password" \u53EF\u907F\u514D\u81EA\u52A8\u586B\u5145\u5BC6\u7801\uFF0C\u8BE6\u89C1 MDN \u6587\u6863 [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/autocomplete]\u3002'},context:{react:n(75271),antd:n(38506)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-demo-showcount":{component:s.memo(s.lazy(function(){return n.e(2295).then(n.bind(n,77018))})),asset:{type:"BLOCK",id:"input-demo-showcount",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:n(55789).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5B57\u6570\u63D0\u793A",description:"\u8D85\u51FA\u5B57\u6570\u957F\u5EA6\u540E\u65E0\u6CD5\u8F93\u5165"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"input-demo-allowclear":{component:s.memo(s.lazy(function(){return n.e(2295).then(n.bind(n,41981))})),asset:{type:"BLOCK",id:"input-demo-allowclear",refAtomIds:["input"],dependencies:{"index.tsx":{type:"FILE",value:n(7631).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6E05\u9664\u56FE\u6807",description:"\u7528\u4E8E\u4E00\u952E\u6E05\u9664\u8F93\u5165\u5185\u5BB9"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},51063:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(71608),I={"list-demo-simple":{component:s.memo(s.lazy(function(){return n.e(3717).then(n.bind(n,74268))})),asset:{type:"BLOCK",id:"list-demo-simple",refAtomIds:["list"],dependencies:{"index.tsx":{type:"FILE",value:n(62816).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7B80\u5355\u5217\u8868"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"list-demo-basic":{component:s.memo(s.lazy(function(){return n.e(3717).then(n.bind(n,83930))})),asset:{type:"BLOCK",id:"list-demo-basic",refAtomIds:["list"],dependencies:{"index.tsx":{type:"FILE",value:n(27109).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u7840\u5217\u8868"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},62951:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(91910),I={"packages-design-src-message-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,67032))})),asset:{type:"BLOCK",id:"packages-design-src-message-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(63146).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},53396:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(63562),I={"packages-design-src-modal-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,84706))})),asset:{type:"BLOCK",id:"packages-design-src-modal-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(81563).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-modal-demo-max-height":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,16076))})),asset:{type:"BLOCK",id:"packages-design-src-modal-demo-max-height",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(84560).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u9AD8\u5EA6\u9650\u5236",description:"\u8D85\u51FA\u6307\u5B9A\u9AD8\u5EA6\u53EF\u8BBE\u7F6E\u6EDA\u52A8"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-modal-demo-progress":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,7527))})),asset:{type:"BLOCK",id:"packages-design-src-modal-demo-progress",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(42995).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},ahooks:{type:"NPM",value:"2.10.14"}},entry:"index.tsx",title:"\u5E26\u767E\u5206\u6BD4\u7684\u8FDB\u5EA6\u5BF9\u8BDD\u6846",description:"\u53EF\u7528\u4E8E\u5F02\u6B65\u4EFB\u52A1\u6216\u8017\u65F6\u8F83\u957F\u7684\u573A\u666F"},context:{react:n(75271),"@oceanbase/design":n(43503),ahooks:n(9159)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-modal-demo-progress-with-loading":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,51006))})),asset:{type:"BLOCK",id:"packages-design-src-modal-demo-progress-with-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(48525).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},ahooks:{type:"NPM",value:"2.10.14"}},entry:"index.tsx",title:"\u4E0D\u5E26\u767E\u5206\u6BD4\u7684\u8FDB\u5EA6\u5BF9\u8BDD\u6846",description:"\u65E0\u6CD5\u83B7\u53D6\u5177\u4F53\u8FDB\u5EA6\u65F6\uFF0C\u4F1A\u5C55\u793A loading \u6001"},context:{react:n(75271),"@oceanbase/design":n(43503),ahooks:n(9159)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-modal-demo-static-function":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,5377))})),asset:{type:"BLOCK",id:"packages-design-src-modal-demo-static-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(71911).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u9759\u6001\u65B9\u6CD5",description:"\u652F\u6301\u6D88\u8D39 ConfigProvider \u5168\u5C40\u914D\u7F6E"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},29508:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(43753),I={"packages-design-src-notification-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,59103))})),asset:{type:"BLOCK",id:"packages-design-src-notification-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(42362).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},41140:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(9044),I={"packages-design-src-radio-demo-radio":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,46069))})),asset:{type:"BLOCK",id:"packages-design-src-radio-demo-radio",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(82302).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5355\u9009"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-radio-demo-radio-button":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,78758))})),asset:{type:"BLOCK",id:"packages-design-src-radio-demo-radio-button",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(39602).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5355\u9009\u6309\u94AE"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},81730:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(48561),I={"result-demo-success":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,66797))})),asset:{type:"BLOCK",id:"result-demo-success",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(73844).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6210\u529F"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-error":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,15321))})),asset:{type:"BLOCK",id:"result-demo-error",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(64484).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5931\u8D25"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-warning":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,96402))})),asset:{type:"BLOCK",id:"result-demo-warning",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(10778).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8B66\u544A"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-processing":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,89554))})),asset:{type:"BLOCK",id:"result-demo-processing",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(61153).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8FDB\u884C\u4E2D"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-403":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,28610))})),asset:{type:"BLOCK",id:"result-demo-403",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(83692).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"403",description:"\u65E0\u8BBF\u95EE\u6743\u9650"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-404":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,28321))})),asset:{type:"BLOCK",id:"result-demo-404",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(91229).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"404",description:"\u9875\u9762\u672A\u627E\u5230"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-500":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,12649))})),asset:{type:"BLOCK",id:"result-demo-500",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(37016).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"500",description:"\u670D\u52A1\u5668\u53D1\u751F\u4E86\u9519\u8BEF"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-icon":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,68556))})),asset:{type:"BLOCK",id:"result-demo-icon",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(20520).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49 icon"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"result-demo-with-page-container":{component:s.memo(s.lazy(function(){return n.e(597).then(n.bind(n,36976))})),asset:{type:"BLOCK",id:"result-demo-with-page-container",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:n(65940).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u548C\u9875\u5BB9\u5668\u642D\u914D\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},56299:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(98023),I={"segmented-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4806).then(n.bind(n,13106))})),asset:{type:"BLOCK",id:"segmented-demo-basic",refAtomIds:["segmented"],dependencies:{"index.tsx":{type:"FILE",value:n(54081).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"segmented-demo-disabled":{component:s.memo(s.lazy(function(){return n.e(4806).then(n.bind(n,64761))})),asset:{type:"BLOCK",id:"segmented-demo-disabled",refAtomIds:["segmented"],dependencies:{"index.tsx":{type:"FILE",value:n(22595).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u4E0D\u53EF\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"segmented-demo-size":{component:s.memo(s.lazy(function(){return n.e(4806).then(n.bind(n,1618))})),asset:{type:"BLOCK",id:"segmented-demo-size",refAtomIds:["segmented"],dependencies:{"index.tsx":{type:"FILE",value:n(5070).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u4E09\u79CD\u5927\u5C0F"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"segmented-demo-block":{component:s.memo(s.lazy(function(){return n.e(4806).then(n.bind(n,22178))})),asset:{type:"BLOCK",id:"segmented-demo-block",refAtomIds:["segmented"],dependencies:{"index.tsx":{type:"FILE",value:n(28698).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"block",description:"block \u5C5E\u6027\u4F7F\u5176\u6491\u6EE1\u7236\u5143\u7D20\u5BBD\u5EA6"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"segmented-demo-ellipsis":{component:s.memo(s.lazy(function(){return n.e(4806).then(n.bind(n,27903))})),asset:{type:"BLOCK",id:"segmented-demo-ellipsis",refAtomIds:["segmented"],dependencies:{"index.tsx":{type:"FILE",value:n(11077).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7701\u7565",description:"\u9700\u8981\u540C\u65F6\u914D\u7F6E\u5206\u6BB5\u5668\u7684 block \u548C\u9009\u9879\u7684 ellipsis \u5C5E\u6027"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},1624:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(97078),I={"select-demo-basic":{component:s.memo(s.lazy(function(){return n.e(6714).then(n.bind(n,45314))})),asset:{type:"BLOCK",id:"select-demo-basic",refAtomIds:["select"],dependencies:{"index.tsx":{type:"FILE",value:n(836).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"select-demo-multiple":{component:s.memo(s.lazy(function(){return n.e(6714).then(n.bind(n,48571))})),asset:{type:"BLOCK",id:"select-demo-multiple",refAtomIds:["select"],dependencies:{"index.tsx":{type:"FILE",value:n(52401).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u591A\u9009"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"select-demo-tags":{component:s.memo(s.lazy(function(){return n.e(6714).then(n.bind(n,59159))})),asset:{type:"BLOCK",id:"select-demo-tags",refAtomIds:["select"],dependencies:{"index.tsx":{type:"FILE",value:n(21220).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u6807\u7B7E",description:"\u6807\u7B7E\u5F0F\u9009\u62E9\uFF0C\u652F\u6301\u8F93\u5165\u4EFB\u610F\u5185\u5BB9"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"select-demo-variant":{component:s.memo(s.lazy(function(){return n.e(6714).then(n.bind(n,39026))})),asset:{type:"BLOCK",id:"select-demo-variant",refAtomIds:["select"],dependencies:{"index.tsx":{type:"FILE",value:n(66068).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u591A\u79CD\u5C55\u793A\u5F62\u5F0F",description:"\u652F\u6301 outlined\u3001filled \u548C borderless \u4E09\u79CD\u5F62\u6001\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"select-demo-custom-tag-render":{component:s.memo(s.lazy(function(){return n.e(6714).then(n.bind(n,33822))})),asset:{type:"BLOCK",id:"select-demo-custom-tag-render",refAtomIds:["select"],dependencies:{"index.tsx":{type:"FILE",value:n(50449).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F",description:"\u5141\u8BB8\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E\u7684\u6837\u5F0F"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},43162:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(12294),I={"space-demo-basic":{component:s.memo(s.lazy(function(){return n.e(958).then(n.bind(n,25476))})),asset:{type:"BLOCK",id:"space-demo-basic",refAtomIds:["space"],dependencies:{"index.tsx":{type:"FILE",value:n(2537).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C\u7528\u6CD5"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"space-demo-vertical":{component:s.memo(s.lazy(function(){return n.e(958).then(n.bind(n,80120))})),asset:{type:"BLOCK",id:"space-demo-vertical",refAtomIds:["space"],dependencies:{"index.tsx":{type:"FILE",value:n(28511).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u76F8\u90BB\u7EC4\u4EF6\u5782\u76F4\u95F4\u8DDD"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"space-demo-wrap":{component:s.memo(s.lazy(function(){return n.e(958).then(n.bind(n,69155))})),asset:{type:"BLOCK",id:"space-demo-wrap",refAtomIds:["space"],dependencies:{"index.tsx":{type:"FILE",value:n(74032).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u81EA\u52A8\u6362\u884C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},44548:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(52658),I={"spin-demo-basic":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,84917))})),asset:{type:"BLOCK",id:"spin-demo-basic",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(27465).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C\u7528\u6CD5",description:"\u4E00\u4E2A\u7B80\u5355\u7684 loading \u72B6\u6001"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"spin-demo-size":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,895))})),asset:{type:"BLOCK",id:"spin-demo-size",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(77749).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5404\u79CD\u5927\u5C0F",description:"\u5C0F\u7684\u7528\u4E8E\u6587\u672C\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u7528\u4E8E\u5361\u7247\u5BB9\u5668\u7EA7\u52A0\u8F7D\uFF0C\u5927\u7684\u7528\u4E8E\u9875\u9762\u7EA7\u52A0\u8F7D"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"spin-demo-colored":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,12356))})),asset:{type:"BLOCK",id:"spin-demo-colored",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(32829).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5F69\u8272\u7684\u52A0\u8F7D\u6307\u793A\u7B26"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"spin-demo-inside":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,60237))})),asset:{type:"BLOCK",id:"spin-demo-inside",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(95047).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u653E\u5165\u4E00\u4E2A\u5BB9\u5668\u4E2D"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"spin-demo-nested":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,50196))})),asset:{type:"BLOCK",id:"spin-demo-nested",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(17173).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5361\u7247\u52A0\u8F7D\u4E2D",description:"\u53EF\u4EE5\u76F4\u63A5\u628A\u5185\u5BB9\u5185\u5D4C\u5230 Spin \u4E2D\uFF0C\u5C06\u73B0\u6709\u5BB9\u5668\u53D8\u4E3A\u52A0\u8F7D\u72B6\u6001"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"spin-demo-tip":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,59473))})),asset:{type:"BLOCK",id:"spin-demo-tip",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(66897).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"spin-demo-custom-indicator":{component:s.memo(s.lazy(function(){return n.e(6522).then(n.bind(n,15926))})),asset:{type:"BLOCK",id:"spin-demo-custom-indicator",refAtomIds:["spin"],dependencies:{"index.tsx":{type:"FILE",value:n(12551).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u6307\u793A\u7B26",description:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u793A\u7B26"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},67916:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(36496),I={"packages-design-src-switch-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,25717))})),asset:{type:"BLOCK",id:"packages-design-src-switch-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(4052).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-switch-demo-size":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,61144))})),asset:{type:"BLOCK",id:"packages-design-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(22773).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5927\u5C0F"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-switch-demo-disabled":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,46354))})),asset:{type:"BLOCK",id:"packages-design-src-switch-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(53879).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7981\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-switch-demo-loading":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,89404))})),asset:{type:"BLOCK",id:"packages-design-src-switch-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(4717).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u52A0\u8F7D\u4E2D"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},70927:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(99831),I={"table-demo-basic":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,7817))})),asset:{type:"BLOCK",id:"table-demo-basic",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(95749).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-bordered":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,52988))})),asset:{type:"BLOCK",id:"table-demo-bordered",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(36695).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5E26\u8FB9\u6846",description:"\u6DFB\u52A0\u8868\u683C\u8FB9\u6846\u7EBF"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-fixed-columns-header-tables":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,71305))})),asset:{type:"BLOCK",id:"table-demo-fixed-columns-header-tables",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(83693).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u56FA\u5B9A\u5934\u548C\u5217"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-row-selection":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,23219))})),asset:{type:"BLOCK",id:"table-demo-row-selection",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(99789).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u9009\u62E9\u548C\u64CD\u4F5C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-nesting-tables":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,58559))})),asset:{type:"BLOCK",id:"table-demo-nesting-tables",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(65317).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5D4C\u5957\u5B50\u8868\u683C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-multiple-nesting-tables":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,82271))})),asset:{type:"BLOCK",id:"table-demo-multiple-nesting-tables",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(54995).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u53EF\u9009\u62E9\u7684\u5D4C\u5957\u5B50\u8868\u683C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-ellipsis":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,86617))})),asset:{type:"BLOCK",id:"table-demo-ellipsis",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(32044).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5355\u5143\u683C\u81EA\u52A8\u7701\u7565",description:"\u8BBE\u7F6E column.ellipsis \u53EF\u4EE5\u8BA9\u5355\u5143\u683C\u5185\u5BB9\u6839\u636E\u5BBD\u5EA6\u81EA\u52A8\u7701\u7565\uFF0C\u5E76\u4F7F\u7528 Tooltip \u5C55\u793A\u5168\u90E8\u5185\u5BB9\u3002\u8BF4\u660E: \u5217\u5934\u7F29\u7565\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-tree-table":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,62203))})),asset:{type:"BLOCK",id:"table-demo-tree-table",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(30665).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6811\u5F62\u8868\u683C",description:"\u5F53\u6570\u636E\u4E2D\u6709 children \u5B57\u6BB5\u65F6\u4F1A\u81EA\u52A8\u5C55\u793A\u4E3A\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u6216\u914D\u7F6E\u4E3A\u5176\u4ED6\u5B57\u6BB5\u53EF\u4EE5\u7528 childrenColumnName \u8FDB\u884C\u914D\u7F6E\u3002\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E indentSize \u4EE5\u63A7\u5236\u6BCF\u4E00\u5C42\u7684\u7F29\u8FDB\u5BBD\u5EA6\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-grouping-columns":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,66379))})),asset:{type:"BLOCK",id:"table-demo-grouping-columns",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(15874).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8868\u5934\u5206\u7EC4",description:"columns \u53EF\u4EE5\u901A\u8FC7\u5D4C\u5957 children\uFF0C\u5B9E\u73B0\u8868\u5934\u5206\u7EC4\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-rowspan":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,3618))})),asset:{type:"BLOCK",id:"table-demo-rowspan",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(90542).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u884C\u5408\u5E76",description:"\u901A\u8FC7 onCell \u8BBE\u7F6E\u5355\u5143\u683C\u5C5E\u6027 rowSpan\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u884C\u5408\u5E76\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-colspan-rowspan":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,78436))})),asset:{type:"BLOCK",id:"table-demo-colspan-rowspan",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(50338).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u884C\u5217\u5408\u5E76",description:"\u8868\u5934\u53EA\u652F\u6301\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 column \u91CC\u7684 colSpan \u8FDB\u884C\u8BBE\u7F6E\u3002\\n\u8868\u683C\u652F\u6301\u884C/\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 render \u91CC\u7684\u5355\u5143\u683C\u5C5E\u6027 colSpan \u6216\u8005 rowSpan \u8BBE\u503C\u4E3A 0 \u65F6\uFF0C\u8BBE\u7F6E\u7684\u8868\u683C\u4E0D\u4F1A\u6E32\u67D3\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-edit-row":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,18189))})),asset:{type:"BLOCK",id:"table-demo-edit-row",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(4867).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u53EF\u7F16\u8F91\u884C",description:"\u5E26\u884C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-virtual":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,80965))})),asset:{type:"BLOCK",id:"table-demo-virtual",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(4126).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u865A\u62DF\u6EDA\u52A8",description:"\u901A\u8FC7 virtual \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\uFF0C\u8981\u6C42\u8BBE\u7F6E scroll.x \u548C scroll.y \u4E14\u5FC5\u987B\u4E3A number \u7C7B\u578B\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-dynamic-settings":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,68964))})),asset:{type:"BLOCK",id:"table-demo-dynamic-settings",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(419).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u52A8\u6001\u63A7\u5236\u8868\u683C\u5C5E\u6027",description:"\u9009\u62E9\u4E0D\u540C\u914D\u7F6E\u7EC4\u5408\u67E5\u770B\u6548\u679C\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"table-demo-card-table":{component:s.memo(s.lazy(function(){return n.e(1031).then(n.bind(n,13096))})),asset:{type:"BLOCK",id:"table-demo-card-table",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(28803).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u548C Card \u7EC4\u5408\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},85588:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(66952),I={"tabs-demo-basic":{component:s.memo(s.lazy(function(){return n.e(9183).then(n.bind(n,16810))})),asset:{type:"BLOCK",id:"tabs-demo-basic",refAtomIds:["tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(73325).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tabs-demo-size":{component:s.memo(s.lazy(function(){return n.e(9183).then(n.bind(n,70253))})),asset:{type:"BLOCK",id:"tabs-demo-size",refAtomIds:["tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(50329).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5927\u5C0F"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tabs-demo-position":{component:s.memo(s.lazy(function(){return n.e(9183).then(n.bind(n,57534))})),asset:{type:"BLOCK",id:"tabs-demo-position",refAtomIds:["tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(82362).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u4F4D\u7F6E"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tabs-demo-tag":{component:s.memo(s.lazy(function(){return n.e(9183).then(n.bind(n,41938))})),asset:{type:"BLOCK",id:"tabs-demo-tag",refAtomIds:["tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(96180).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6807\u7B7E",description:"\u53EF\u8BBE\u7F6E\u9009\u9879\u5361\u540E\u9762\u7684\u6807\u7B7E"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tabs-demo-tab-pane":{component:s.memo(s.lazy(function(){return n.e(9183).then(n.bind(n,92221))})),asset:{type:"BLOCK",id:"tabs-demo-tab-pane",refAtomIds:["tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(98845).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"TabPane \u8BED\u6CD5\u7CD6\uFF08\u4E0D\u63A8\u8350\u4F7F\u7528\uFF09",description:"\u5373\u5C06\u5E9F\u5F03\u7684 API\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BE6\u89C1 antd \u6587\u6863 [https://4x.ant.design/components/tabs-cn/#4.23.0-%E7%94%A8%E6%B3%95%E5%8D%87%E7%BA%A7]"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},41072:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(17948),I={"tag-demo-basic":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,6777))})),asset:{type:"BLOCK",id:"tag-demo-basic",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(53314).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tag-demo-ellipsis":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,57945))})),asset:{type:"BLOCK",id:"tag-demo-ellipsis",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(30685).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5185\u5BB9\u8D85\u957F\u81EA\u52A8\u7701\u7565"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tag-demo-color":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,63429))})),asset:{type:"BLOCK",id:"tag-demo-color",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(98648).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5F69\u8272\u6807\u7B7E",description:"\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6807\u7B7E\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u8272\u503C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tag-demo-status":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,5130))})),asset:{type:"BLOCK",id:"tag-demo-status",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(78121).Z},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u9884\u8BBE\u72B6\u6001\u7684\u6807\u7B7E",description:"\u9884\u8BBE\u4E94\u79CD\u72B6\u6001\u989C\u8272"},context:{"@oceanbase/icons":n(50010),"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tag-demo-checkable":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,22116))})),asset:{type:"BLOCK",id:"tag-demo-checkable",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(20234).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u53EF\u9009\u62E9\u6807\u7B7E"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tag-demo-icon":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,98041))})),asset:{type:"BLOCK",id:"tag-demo-icon",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(63006).Z},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u56FE\u6807\u6309\u94AE"},context:{"@oceanbase/icons":n(50010),"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tag-demo-borderless":{component:s.memo(s.lazy(function(){return n.e(8582).then(n.bind(n,92922))})),asset:{type:"BLOCK",id:"tag-demo-borderless",refAtomIds:["tag"],dependencies:{"index.tsx":{type:"FILE",value:n(85026).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u65E0\u8FB9\u6846\u6A21\u5F0F"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},70610:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(76447),I={"packages-design-src-theme-demo-previewer":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,80116))})),asset:{type:"BLOCK",id:"packages-design-src-theme-demo-previewer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(34419).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"antd-token-previewer":{type:"NPM",value:"2.0.8"},"./previewer.less":{type:"FILE",value:n(65699).Z}},entry:"index.tsx"},context:{react:n(75271),"@oceanbase/design":n(43503),"antd-token-previewer":n(60763),"./previewer.less":n(43096)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},6586:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(93019),I={"tooltip-demo-basic":{component:s.memo(s.lazy(function(){return n.e(5683).then(n.bind(n,39874))})),asset:{type:"BLOCK",id:"tooltip-demo-basic",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:n(37129).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tooltip-demo-close-icon":{component:s.memo(s.lazy(function(){return n.e(5683).then(n.bind(n,25621))})),asset:{type:"BLOCK",id:"tooltip-demo-close-icon",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:n(2549).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5173\u95ED\u6309\u94AE",description:"Tooltip \u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E closeIcon \u53D8\u4E3A\u53EF\u5173\u95ED Tooltip, \u5E76\u652F\u6301\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\uFF0C\u8BBE\u7F6E\u4E3A true \u65F6\u5C06\u4F7F\u7528\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE\u3002\u53EF\u5173\u95ED Tooltip \u5177\u6709 onClose \u4E8B\u4EF6"},context:{"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tooltip-demo-type":{component:s.memo(s.lazy(function(){return n.e(5683).then(n.bind(n,21334))})),asset:{type:"BLOCK",id:"tooltip-demo-type",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:n(57820).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Tooltip \u7C7B\u578B",description:"Tooltip \u6709\u4E94\u79CD\u7C7B\u578B\uFF1Adefault\u3001light\u3001info\u3001success\u3001warning \u548C error\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u7684\u63D0\u793A\u9700\u6C42\u3002"},context:{"@oceanbase/design":n(43503),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tooltip-demo-mouse-follow":{component:s.memo(s.lazy(function(){return n.e(5683).then(n.bind(n,3988))})),asset:{type:"BLOCK",id:"tooltip-demo-mouse-follow",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:n(35272).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u9F20\u6807\u8DDF\u968F",description:"\u8BBE\u7F6E mouseFollow: true \u53EF\u5F00\u542F\u9F20\u6807\u8DDF\u968F\uFF0C\u6B64\u65F6\u4F1A\u53BB\u6389\u7BAD\u5934\uFF0C\u5E76\u4E14 placement\u3001open \u548C trigger \u7B49\u5C5E\u6027\u4E5F\u5C06\u5931\u6548\u3002"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},91196:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(35008),I={"tree-select-demo-basic":{component:s.memo(s.lazy(function(){return n.e(9433).then(n.bind(n,34360))})),asset:{type:"BLOCK",id:"tree-select-demo-basic",refAtomIds:["tree-select"],dependencies:{"index.tsx":{type:"FILE",value:n(32661).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tree-select-demo-multiple":{component:s.memo(s.lazy(function(){return n.e(9433).then(n.bind(n,27638))})),asset:{type:"BLOCK",id:"tree-select-demo-multiple",refAtomIds:["tree-select"],dependencies:{"index.tsx":{type:"FILE",value:n(53184).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u591A\u9009"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},70906:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(95276),I={"packages-design-src-typography-demo-text":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,81987))})),asset:{type:"BLOCK",id:"packages-design-src-typography-demo-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99294).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6587\u672C\u4E0E\u8D85\u94FE\u63A5"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-design-src-typography-demo-inner":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,88363))})),asset:{type:"BLOCK",id:"packages-design-src-typography-demo-inner",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(3512).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u548C\u5176\u4ED6\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},50531:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(64422),I={"packages-ui-src-action-demo-link":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,29247))})),asset:{type:"BLOCK",id:"packages-ui-src-action-demo-link",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(43019).Z},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"Action.Link"},context:{"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-action-demo-button":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,42899))})),asset:{type:"BLOCK",id:"packages-ui-src-action-demo-button",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(70759).Z},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"Action.Button"},context:{"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-action-demo-loading":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,41866))})),asset:{type:"BLOCK",id:"packages-ui-src-action-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(42650).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"loading \u72B6\u6001"},context:{"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-action-demo-fixed":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,93513))})),asset:{type:"BLOCK",id:"packages-ui-src-action-demo-fixed",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(10485).Z},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u56FA\u5B9A\u7684 Action"},context:{"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-action-demo-groupcontrol":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,73063))})),asset:{type:"BLOCK",id:"packages-ui-src-action-demo-groupcontrol",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(90203).Z},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6574\u4F53\u63A7\u5236\u72B6\u6001"},context:{"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},2621:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(17209),I={"backgroundtaskmanager-demo-notificationcenterdemo":{component:s.memo(s.lazy(function(){return n.e(7897).then(n.bind(n,9920))})),asset:{type:"BLOCK",id:"backgroundtaskmanager-demo-notificationcenterdemo",refAtomIds:["BackgroundTaskManager"],dependencies:{"index.tsx":{type:"FILE",value:n(2780).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"},"./NotificationCenter.tsx":{type:"FILE",value:n(3209).Z},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./mockApi.ts":{type:"FILE",value:n(80353).Z}},entry:"index.tsx"},context:{"@oceanbase/design":n(43503),react:n(75271),"./NotificationCenter.tsx":n(10471),"@oceanbase/ui":n(57785),"./mockApi.ts":n(89950)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},77825:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(55227),I={"basiclayout-demo-basic":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,1702))})),asset:{type:"BLOCK",id:"basiclayout-demo-basic",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(61616).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"./IconFont.tsx":{type:"FILE",value:n(38937).Z},"../../PageContainer/demo/complete.tsx":{type:"FILE",value:n(74004).Z}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"./IconFont.tsx":n(13862),"../../PageContainer/demo/complete.tsx":n(74241)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-menu-over-length":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,29168))})),asset:{type:"BLOCK",id:"basiclayout-demo-menu-over-length",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(80601).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"../../PageContainer/demo/complete.tsx":{type:"FILE",value:n(74004).Z},"./IconFont.tsx":{type:"FILE",value:n(38937).Z}},entry:"index.tsx",description:"\u81EA\u52A8\u7701\u7565 + tooltip",title:"\u83DC\u5355\u9879\u5185\u5BB9\u8D85\u957F"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"../../PageContainer/demo/complete.tsx":n(74241),"./IconFont.tsx":n(13862)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-banner":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,99327))})),asset:{type:"BLOCK",id:"basiclayout-demo-banner",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(39985).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"./IconFont.tsx":{type:"FILE",value:n(38937).Z},"../../PageContainer/demo/empty.tsx":{type:"FILE",value:n(93174).Z}},entry:"index.tsx",title:"\u5E26\u9876\u90E8 banner"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"./IconFont.tsx":n(13862),"../../PageContainer/demo/empty.tsx":n(37137)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-topheader-icon":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,42658))})),asset:{type:"BLOCK",id:"basiclayout-demo-topheader-icon",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(37671).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"./IconFont.tsx":{type:"FILE",value:n(38937).Z},"../../PageContainer/demo/empty.tsx":{type:"FILE",value:n(93174).Z}},entry:"index.tsx",title:"\u9876\u90E8\u5BFC\u822A icon \u6A21\u5F0F"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"./IconFont.tsx":n(13862),"../../PageContainer/demo/empty.tsx":n(37137)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-topheader-title":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,9174))})),asset:{type:"BLOCK",id:"basiclayout-demo-topheader-title",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(56214).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"./IconFont.tsx":{type:"FILE",value:n(38937).Z},"../../PageContainer/demo/empty.tsx":{type:"FILE",value:n(93174).Z}},entry:"index.tsx",title:"\u5E26\u9876\u90E8\u6807\u9898"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"./IconFont.tsx":n(13862),"../../PageContainer/demo/empty.tsx":n(37137)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-subsidemenu":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,2007))})),asset:{type:"BLOCK",id:"basiclayout-demo-subsidemenu",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(63212).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"./IconFont.tsx":{type:"FILE",value:n(38937).Z},"../../PageContainer/demo/empty.tsx":{type:"FILE",value:n(93174).Z}},entry:"index.tsx",title:"\u5E26\u5B50\u4FA7\u8FB9\u680F\u7684\u4E8C\u7EA7\u5BFC\u822A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"./IconFont.tsx":n(13862),"../../PageContainer/demo/empty.tsx":n(37137)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-no-sider-and-custom-header":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,27239))})),asset:{type:"BLOCK",id:"basiclayout-demo-no-sider-and-custom-header",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(19343).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u65E0\u4FA7\u8FB9\u5BFC\u822A & \u81EA\u5B9A\u4E49\u9876\u90E8\u5BFC\u822A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"basiclayout-demo-welcome":{component:s.memo(s.lazy(function(){return n.e(8874).then(n.bind(n,19550))})),asset:{type:"BLOCK",id:"basiclayout-demo-welcome",refAtomIds:["BasicLayout"],dependencies:{"index.tsx":{type:"FILE",value:n(56417).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"./IconFont.tsx":{type:"FILE",value:n(38937).Z}},entry:"index.tsx",title:"\u548C\u6B22\u8FCE\u9875\u642D\u914D\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"./IconFont.tsx":n(13862)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},42872:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(54495),I={"batchoperationbar-demo-basic":{component:s.memo(s.lazy(function(){return n.e(8592).then(n.bind(n,59843))})),asset:{type:"BLOCK",id:"batchoperationbar-demo-basic",refAtomIds:["BatchOperationBar"],dependencies:{"index.tsx":{type:"FILE",value:n(62876).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"batchoperationbar-demo-with-table":{component:s.memo(s.lazy(function(){return n.e(8592).then(n.bind(n,25312))})),asset:{type:"BLOCK",id:"batchoperationbar-demo-with-table",refAtomIds:["BatchOperationBar"],dependencies:{"index.tsx":{type:"FILE",value:n(28893).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u914D\u5408 Table \u4F7F\u7528"},context:{"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"batchoperationbar-demo-with-multiple-table":{component:s.memo(s.lazy(function(){return n.e(8592).then(n.bind(n,671))})),asset:{type:"BLOCK",id:"batchoperationbar-demo-with-multiple-table",refAtomIds:["BatchOperationBar"],dependencies:{"index.tsx":{type:"FILE",value:n(13633).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u914D\u5408\u591A\u4E2A Table \u4F7F\u7528"},context:{"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"batchoperationbar-demo-with-drawer":{component:s.memo(s.lazy(function(){return n.e(8592).then(n.bind(n,59755))})),asset:{type:"BLOCK",id:"batchoperationbar-demo-with-drawer",refAtomIds:["BatchOperationBar"],dependencies:{"index.tsx":{type:"FILE",value:n(40483).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5728 Drawer \u4E2D\u4F7F\u7528"},context:{"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"batchoperationbar-demo-with-multiple-drawer-table":{component:s.memo(s.lazy(function(){return n.e(8592).then(n.bind(n,40259))})),asset:{type:"BLOCK",id:"batchoperationbar-demo-with-multiple-drawer-table",refAtomIds:["BatchOperationBar"],dependencies:{"index.tsx":{type:"FILE",value:n(14255).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5728 Drawer \u4E2D\u914D\u5408\u591A\u4E2A Table \u4F7F\u7528"},context:{"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),react:n(75271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},32587:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(86721),I={"packages-ui-src-boundary-demo-function":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,98199))})),asset:{type:"BLOCK",id:"packages-ui-src-boundary-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(6618).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u4E1A\u52A1\u529F\u80FD\u515C\u5E95\u5C55\u793A"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-boundary-demo-403code":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,14448))})),asset:{type:"BLOCK",id:"packages-ui-src-boundary-demo-403code",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(3391).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"403 \u9519\u8BEF\u7801\u515C\u5E95"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-boundary-demo-404code":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,31498))})),asset:{type:"BLOCK",id:"packages-ui-src-boundary-demo-404code",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(85493).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"404 \u9519\u8BEF\u7801\u515C\u5E95"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-boundary-demo-errorexception":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,74128))})),asset:{type:"BLOCK",id:"packages-ui-src-boundary-demo-errorexception",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(37220).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"JS Error \u515C\u5E95\u62A5\u9519",description:"Exception \u4F7F\u7528\u65F6\u53EA\u9700\u7528\u8BE5\u7EC4\u4EF6\u5C06\u9700\u8981\u515C\u5E95\u7684\u9875\u9762\u5305\u88F9,\u7136\u540E\u5B50\u7EC4\u4EF6\u62A5\u9519\u5373\u53EF\u89E6\u53D1"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-boundary-demo-compatibleexception":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,27605))})),asset:{type:"BLOCK",id:"packages-ui-src-boundary-demo-compatibleexception",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(98234).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u517C\u5BB9\u6027\u62A5\u9519"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},74057:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(90453),I={"contentwithicon-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4912).then(n.bind(n,31529))})),asset:{type:"BLOCK",id:"contentwithicon-demo-basic",refAtomIds:["ContentWithIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(58126).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{react:n(75271),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"contentwithicon-demo-prefix":{component:s.memo(s.lazy(function(){return n.e(4912).then(n.bind(n,19409))})),asset:{type:"BLOCK",id:"contentwithicon-demo-prefix",refAtomIds:["ContentWithIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(57214).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"contentwithicon-demo-tipwithlink":{component:s.memo(s.lazy(function(){return n.e(4912).then(n.bind(n,39182))})),asset:{type:"BLOCK",id:"contentwithicon-demo-tipwithlink",refAtomIds:["ContentWithIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(60115).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"contentwithicon-demo-customicon":{component:s.memo(s.lazy(function(){return n.e(4912).then(n.bind(n,31042))})),asset:{type:"BLOCK",id:"contentwithicon-demo-customicon",refAtomIds:["ContentWithIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(77206).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"contentwithicon-demo-exclamation":{component:s.memo(s.lazy(function(){return n.e(4912).then(n.bind(n,74854))})),asset:{type:"BLOCK",id:"contentwithicon-demo-exclamation",refAtomIds:["ContentWithIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(80989).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},16490:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(38141),I={"contentwithquestion-demo-basic":{component:s.memo(s.lazy(function(){return n.e(7991).then(n.bind(n,82797))})),asset:{type:"BLOCK",id:"contentwithquestion-demo-basic",refAtomIds:["ContentWithQuestion"],dependencies:{"index.tsx":{type:"FILE",value:n(55011).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./index.less":{type:"FILE",value:n(18872).Z}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u7EC4\u4EF6\u9ED8\u8BA4\u60C5\u51B5\u56FE\u6807\u5728\u6587\u5B57\u540E\uFF0C\u5982\u4E0D\u9700\u8981\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u5219\u4E0D\u9700\u8981\u4F20 suffixIcon"},context:{react:n(75271),"@oceanbase/ui":n(57785),"./index.less":n(1659)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"contentwithquestion-demo-prefix":{component:s.memo(s.lazy(function(){return n.e(7991).then(n.bind(n,63023))})),asset:{type:"BLOCK",id:"contentwithquestion-demo-prefix",refAtomIds:["ContentWithQuestion"],dependencies:{"index.tsx":{type:"FILE",value:n(54294).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u56FE\u6807\u5728\u6587\u5B57\u524D",description:"\u56FE\u6807\u82E5\u5728\u6587\u5B57\u524D\uFF0C\u9700\u628A suffixIcon \u7F6E\u4E3A null\uFF0CprefixIcon \u4F7F\u7528\u9ED8\u8BA4\u56FE\u6807\u7684\u8BDD\u4F20 true"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},59129:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(31839),I={"dialog-demo-dialogdemo":{component:s.memo(s.lazy(function(){return n.e(286).then(n.bind(n,75769))})),asset:{type:"BLOCK",id:"dialog-demo-dialogdemo",refAtomIds:["Dialog"],dependencies:{"index.tsx":{type:"FILE",value:n(63964).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u70B9\u51FB Help \u6309\u94AE\u6253\u5F00 Dialog"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),lodash:n(32699)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"dialog-demo-embdeddialogdemo":{component:s.memo(s.lazy(function(){return n.e(286).then(n.bind(n,24527))})),asset:{type:"BLOCK",id:"dialog-demo-embdeddialogdemo",refAtomIds:["Dialog"],dependencies:{"index.tsx":{type:"FILE",value:n(27290).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx",title:"\u5D4C\u5165",description:"\u70B9\u51FB Help \u6309\u94AE\u6253\u5F00\u5D4C\u5165\u7248 Dialog"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),lodash:n(32699)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"dialog-demo-embdeddialogandnormaldemo":{component:s.memo(s.lazy(function(){return n.e(286).then(n.bind(n,41517))})),asset:{type:"BLOCK",id:"dialog-demo-embdeddialogandnormaldemo",refAtomIds:["Dialog"],dependencies:{"index.tsx":{type:"FILE",value:n(16089).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx",title:"\u52A8\u6001\u5207\u6362",description:"\u70B9\u51FB Help \u6309\u94AE\u6253\u5F00\u5D4C\u5165\u7248\u548C\u666E\u901A\u7248\u81EA\u52A8\u5207\u6362 Dialog"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),lodash:n(32699)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},82638:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(39134),I={"docdialog-demo-docdialogdemo":{component:s.memo(s.lazy(function(){return n.e(8037).then(n.bind(n,35743))})),asset:{type:"BLOCK",id:"docdialog-demo-docdialogdemo",refAtomIds:["DocDialog"],dependencies:{"index.tsx":{type:"FILE",value:n(46437).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./index.less":{type:"FILE",value:n(56068).Z}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u70B9\u51FB Help \u6309\u94AE\u6253\u5F00 Dialog"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"./index.less":n(74490)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},33467:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(3529),I={"footertoolbar-demo-basic":{component:s.memo(s.lazy(function(){return n.e(3650).then(n.bind(n,8883))})),asset:{type:"BLOCK",id:"footertoolbar-demo-basic",refAtomIds:["FooterToolbar"],dependencies:{"index.tsx":{type:"FILE",value:n(61648).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},50437:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(60196),I={"fullscreenbox-demo-viewportfullscreendemo":{component:s.memo(s.lazy(function(){return n.e(3007).then(n.bind(n,43078))})),asset:{type:"BLOCK",id:"fullscreenbox-demo-viewportfullscreendemo",refAtomIds:["FullscreenBox"],dependencies:{"index.tsx":{type:"FILE",value:n(56030).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./SimpleTable.tsx":{type:"FILE",value:n(37354).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/ui":n(57785),"./SimpleTable.tsx":n(9650),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"fullscreenbox-demo-browserfullscreendemo":{component:s.memo(s.lazy(function(){return n.e(3007).then(n.bind(n,80691))})),asset:{type:"BLOCK",id:"fullscreenbox-demo-browserfullscreendemo",refAtomIds:["FullscreenBox"],dependencies:{"index.tsx":{type:"FILE",value:n(10540).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./SimpleTable.tsx":{type:"FILE",value:n(37354).Z},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6D4F\u89C8\u5668\u5168\u5C4F"},context:{react:n(75271),"@oceanbase/ui":n(57785),"./SimpleTable.tsx":n(9650),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"fullscreenbox-demo-listtoolbardemo":{component:s.memo(s.lazy(function(){return n.e(3007).then(n.bind(n,57321))})),asset:{type:"BLOCK",id:"fullscreenbox-demo-listtoolbardemo",refAtomIds:["FullscreenBox"],dependencies:{"index.tsx":{type:"FILE",value:n(34064).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./SimpleTable.tsx":{type:"FILE",value:n(37354).Z}},entry:"index.tsx",title:"\u548C ListToolbar \u4E00\u8D77\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"./SimpleTable.tsx":n(9650)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},90661:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(93149),I={"graphtoolbar-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4562).then(n.bind(n,49362))})),asset:{type:"BLOCK",id:"graphtoolbar-demo-basic",refAtomIds:["GraphToolbar"],dependencies:{"index.tsx":{type:"FILE",value:n(68365).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},90242:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(52058),I={"highlight-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,38760))})),asset:{type:"BLOCK",id:"highlight-demo-basic",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(95094).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6307\u5B9A\u8BED\u8A00"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"highlight-demo-auto":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,65920))})),asset:{type:"BLOCK",id:"highlight-demo-auto",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(54951).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u4E0D\u6307\u5B9A\u8BED\u8A00"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"highlight-demo-linenumber":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,23888))})),asset:{type:"BLOCK",id:"highlight-demo-linenumber",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(46881).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5C55\u793A\u4EE3\u7801\u5757\u884C\u53F7"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"highlight-demo-json":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,45260))})),asset:{type:"BLOCK",id:"highlight-demo-json",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(1063).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"JSON \u683C\u5F0F"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"highlight-demo-diff":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,64401))})),asset:{type:"BLOCK",id:"highlight-demo-diff",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(23384).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"Diff \u6BD4\u8F83"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"highlight-demo-theme":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,92902))})),asset:{type:"BLOCK",id:"highlight-demo-theme",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(97842).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./config.js":{type:"FILE",value:n(15351).Z}},entry:"index.tsx",title:"\u5207\u6362\u8BED\u8A00\u4E0E\u4E3B\u9898"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"./config.js":n(52271)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"highlight-demo-innerhtml":{component:s.memo(s.lazy(function(){return n.e(4941).then(n.bind(n,46773))})),asset:{type:"BLOCK",id:"highlight-demo-innerhtml",refAtomIds:["Highlight"],dependencies:{"index.tsx":{type:"FILE",value:n(72026).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u591A\u6BB5\u4EE3\u7801\u6E32\u67D3"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},81657:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(59289),I={"iconfont-demo-basic":{component:s.memo(s.lazy(function(){return n.e(7884).then(n.bind(n,95070))})),asset:{type:"BLOCK",id:"iconfont-demo-basic",refAtomIds:["IconFont"],dependencies:{"index.tsx":{type:"FILE",value:n(15599).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./basic.less":{type:"FILE",value:n(78664).Z}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/ui":n(57785),"./basic.less":n(42999)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},5373:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(90764),I={"lightfilter-demo-basic":{component:s.memo(s.lazy(function(){return n.e(9624).then(n.bind(n,17262))})),asset:{type:"BLOCK",id:"lightfilter-demo-basic",refAtomIds:["LightFilter"],dependencies:{"index.tsx":{type:"FILE",value:n(73861).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},dayjs:{type:"NPM",value:"1.11.12"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),dayjs:n(28026)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},40726:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(8542),I={"login-demo-basic":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,2253))})),asset:{type:"BLOCK",id:"login-demo-basic",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(55979).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-bg-image":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,71813))})),asset:{type:"BLOCK",id:"login-demo-bg-image",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(82088).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u80CC\u666F\u56FE\u7247"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-board":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,8860))})),asset:{type:"BLOCK",id:"login-demo-board",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(78243).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u9876\u90E8\u516C\u544A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-otherlogin":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,20548))})),asset:{type:"BLOCK",id:"login-demo-otherlogin",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(5862).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7B2C\u4E09\u65B9\u767B\u5F55"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-with-alert":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,90419))})),asset:{type:"BLOCK",id:"login-demo-with-alert",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(83946).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8B66\u544A\u63D0\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-activate":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,53043))})),asset:{type:"BLOCK",id:"login-demo-activate",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(40597).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7528\u6237\u6FC0\u6D3B"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-authcode":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,50568))})),asset:{type:"BLOCK",id:"login-demo-authcode",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(84784).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u767B\u5F55\u9A8C\u8BC1\u7801"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"login-demo-is-mobile":{component:s.memo(s.lazy(function(){return n.e(596).then(n.bind(n,80215))})),asset:{type:"BLOCK",id:"login-demo-is-mobile",refAtomIds:["Login"],dependencies:{"index.tsx":{type:"FILE",value:n(86605).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u79FB\u52A8\u7AEF\u652F\u6301"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},28257:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(52701),I={"packages-ui-src-lottie-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,99356))})),asset:{type:"BLOCK",id:"packages-ui-src-lottie-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(4402).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-lottie-demo-speed":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,94671))})),asset:{type:"BLOCK",id:"packages-ui-src-lottie-demo-speed",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(33490).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u64AD\u653E\u901F\u5EA6"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-lottie-demo-control":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,99369))})),asset:{type:"BLOCK",id:"packages-ui-src-lottie-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(57097).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u64AD\u653E\u63A7\u5236"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/icons":n(50010),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},77906:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(16267),I={"navmenu-demo-basic":{component:s.memo(s.lazy(function(){return n.e(3310).then(n.bind(n,73583))})),asset:{type:"BLOCK",id:"navmenu-demo-basic",refAtomIds:["NavMenu"],dependencies:{"index.tsx":{type:"FILE",value:n(16635).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./style.less":{type:"FILE",value:n(40273).Z}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"./style.less":n(41273)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},54287:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(22844),I={"pagecontainer-demo-basic":{component:s.memo(s.lazy(function(){return n.e(8515).then(n.bind(n,54987))})),asset:{type:"BLOCK",id:"pagecontainer-demo-basic",refAtomIds:["PageContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(25490).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",description:"\u5305\u542B\u6807\u9898\u3001\u64CD\u4F5C\u533A\u3001\u5185\u5BB9\u533A\u3001\u9875\u811A",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pagecontainer-demo-complete":{component:s.memo(s.lazy(function(){return n.e(8515).then(n.bind(n,53361))})),asset:{type:"BLOCK",id:"pagecontainer-demo-complete",refAtomIds:["PageContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(74004).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5B8C\u6574\u4F7F\u7528",description:"\u5305\u542B\u9762\u5305\u5C51\u3001\u9875\u9762\u8FD4\u56DE\u3001reload \u5237\u65B0\u7B49\uFF0C\u5E76\u652F\u6301\u9875\u9762\u6EDA\u52A8"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pagecontainer-demo-with-tabs":{component:s.memo(s.lazy(function(){return n.e(8515).then(n.bind(n,41321))})),asset:{type:"BLOCK",id:"pagecontainer-demo-with-tabs",refAtomIds:["PageContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(27217).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u548C Tabs \u7EC4\u5408\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/icons":n(50010),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pagecontainer-demo-extra-footer":{component:s.memo(s.lazy(function(){return n.e(8515).then(n.bind(n,78930))})),asset:{type:"BLOCK",id:"pagecontainer-demo-extra-footer",refAtomIds:["PageContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(56937).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",description:"\u4F4D\u4E8E\u9875\u5934\u548C\u9875\u811A\u64CD\u4F5C\u533A\u7684\u7EC4\u4EF6\u5C3A\u5BF8\u4E3A large\uFF0C\u5B57\u4F53\u5927\u5C0F\u4E3A middle\u3002",title:"\u9875\u5934\u548C\u9875\u811A\u64CD\u4F5C\u533A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pagecontainer-demo-header-less":{component:s.memo(s.lazy(function(){return n.e(8515).then(n.bind(n,98734))})),asset:{type:"BLOCK",id:"pagecontainer-demo-header-less",refAtomIds:["PageContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(74987).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u65E0 PageHeader",description:"\u5934\u90E8\u5185\u5BB9\u4E3A\u7A7A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pagecontainer-demo-empty":{component:s.memo(s.lazy(function(){return n.e(8515).then(n.bind(n,14041))})),asset:{type:"BLOCK",id:"pagecontainer-demo-empty",refAtomIds:["PageContainer"],dependencies:{"index.tsx":{type:"FILE",value:n(93174).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u7A7A\u9875\u9762"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},78668:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(37022),I={"pageloading-demo-basic":{component:s.memo(s.lazy(function(){return n.e(8689).then(n.bind(n,87568))})),asset:{type:"BLOCK",id:"pageloading-demo-basic",refAtomIds:["PageLoading"],dependencies:{"index.tsx":{type:"FILE",value:n(77760).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",description:"\u5E38\u7528\u4E8E dynamicImport \u7684\u52A0\u8F7D\u52A8\u753B",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pageloading-demo-with-page-container":{component:s.memo(s.lazy(function(){return n.e(8689).then(n.bind(n,1564))})),asset:{type:"BLOCK",id:"pageloading-demo-with-page-container",refAtomIds:["PageLoading"],dependencies:{"index.tsx":{type:"FILE",value:n(91737).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",description:"\u5DF2\u5185\u7F6E\u5230 PageContainer\uFF0C\u901A\u8FC7 loading \u5C5E\u6027\u63A7\u5236\u5373\u53EF",title:"\u9875\u5BB9\u5668\u52A0\u8F7D"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"pageloading-demo-matchwrapperheight":{component:s.memo(s.lazy(function(){return n.e(8689).then(n.bind(n,52603))})),asset:{type:"BLOCK",id:"pageloading-demo-matchwrapperheight",refAtomIds:["PageLoading"],dependencies:{"index.tsx":{type:"FILE",value:n(54890).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/design":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u56FA\u5B9A\u9AD8\u5EA6\u7684\u5BB9\u5668\u5185\u52A0\u8F7D"},context:{react:n(75271),"@oceanbase/ui":n(57785),"@oceanbase/design":n(43503)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},35362:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(97733),I={"password-demo-basic":{component:s.memo(s.lazy(function(){return n.e(3091).then(n.bind(n,43077))})),asset:{type:"BLOCK",id:"password-demo-basic",refAtomIds:["Password"],dependencies:{"index.tsx":{type:"FILE",value:n(35565).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u4F7F\u7528\u5185\u7F6E\u7684\u6821\u9A8C\u89C4\u5219"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"password-demo-custom-rules":{component:s.memo(s.lazy(function(){return n.e(3091).then(n.bind(n,41642))})),asset:{type:"BLOCK",id:"password-demo-custom-rules",refAtomIds:["Password"],dependencies:{"index.tsx":{type:"FILE",value:n(80216).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"password-demo-random-generate-password":{component:s.memo(s.lazy(function(){return n.e(3091).then(n.bind(n,60869))})),asset:{type:"BLOCK",id:"password-demo-random-generate-password",refAtomIds:["Password"],dependencies:{"index.tsx":{type:"FILE",value:n(92216).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u751F\u6210\u968F\u673A\u5BC6\u7801"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"password-demo-custom-rules-and-random-generate":{component:s.memo(s.lazy(function(){return n.e(3091).then(n.bind(n,56971))})),asset:{type:"BLOCK",id:"password-demo-custom-rules-and-random-generate",refAtomIds:["Password"],dependencies:{"index.tsx":{type:"FILE",value:n(9865).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219 + \u751F\u6210\u968F\u673A\u5BC6\u7801"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},31673:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(37700),I={"protable-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4843).then(n.bind(n,98168))})),asset:{type:"BLOCK",id:"protable-demo-basic",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:n(78848).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"protable-demo-light-filter":{component:s.memo(s.lazy(function(){return n.e(4843).then(n.bind(n,63010))})),asset:{type:"BLOCK",id:"protable-demo-light-filter",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:n(52718).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u8F7B\u91CF\u7B5B\u9009"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},11677:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(39933),I={"packages-ui-src-ranger-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,96430))})),asset:{type:"BLOCK",id:"packages-ui-src-ranger-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(21160).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},dayjs:{type:"NPM",value:"1.11.12"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/ui":n(57785),dayjs:n(28026)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-ranger-demo-with-form":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,29251))})),asset:{type:"BLOCK",id:"packages-ui-src-ranger-demo-with-form",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(31955).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},dayjs:{type:"NPM",value:"1.11.12"}},entry:"index.tsx",title:"\u914D\u5408 Form \u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),dayjs:n(28026)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-ranger-demo-selected":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,51025))})),asset:{type:"BLOCK",id:"packages-ui-src-ranger-demo-selected",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(66811).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u9879"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-ranger-demo-default-value":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,26675))})),asset:{type:"BLOCK",id:"packages-ui-src-ranger-demo-default-value",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(80111).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},dayjs:{type:"NPM",value:"1.11.12"}},entry:"index.tsx",title:"\u6307\u5B9A\u9ED8\u8BA4\u503C"},context:{react:n(75271),"@oceanbase/ui":n(57785),dayjs:n(28026)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-ranger-demo-mini":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,14024))})),asset:{type:"BLOCK",id:"packages-ui-src-ranger-demo-mini",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(63479).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"mini \u6A21\u5F0F"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"packages-ui-src-ranger-demo-quick-picker":{component:s.memo(s.lazy(function(){return Promise.all([n.e(2470),n.e(309),n.e(5082),n.e(4214),n.e(2433)]).then(n.bind(n,8879))})),asset:{type:"BLOCK",id:"packages-ui-src-ranger-demo-quick-picker",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(49867).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5355\u72EC\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},61137:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(49231),I={"sidetip-demo-basic":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,48750))})),asset:{type:"BLOCK",id:"sidetip-demo-basic",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(22485).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-normal":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,27726))})),asset:{type:"BLOCK",id:"sidetip-demo-normal",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(6004).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u666E\u901A\u6309\u94AE\u6A21\u5F0F"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-small":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,92230))})),asset:{type:"BLOCK",id:"sidetip-demo-small",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(70979).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5C0F\u5C3A\u5BF8"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-operation":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,39270))})),asset:{type:"BLOCK",id:"sidetip-demo-operation",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(96619).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u64CD\u4F5C\u9009\u5355"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-backtop":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,49449))})),asset:{type:"BLOCK",id:"sidetip-demo-backtop",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(9421).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u56DE\u5230\u9876\u90E8"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-disabled":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,65377))})),asset:{type:"BLOCK",id:"sidetip-demo-disabled",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(95652).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u4E0D\u53EF\u7528"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-loading":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,30166))})),asset:{type:"BLOCK",id:"sidetip-demo-loading",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(20080).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u52A0\u8F7D\u4E2D"},context:{react:n(75271),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-content":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,4569))})),asset:{type:"BLOCK",id:"sidetip-demo-content",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(95321).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/util":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u5185\u5BB9\u5C55\u793A"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010),"@oceanbase/util":n(84319)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-modal":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,23197))})),asset:{type:"BLOCK",id:"sidetip-demo-modal",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(48640).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"\u70B9\u51FB\u65B0\u5EFA Modal"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"sidetip-demo-tooltip":{component:s.memo(s.lazy(function(){return n.e(5381).then(n.bind(n,28666))})),asset:{type:"BLOCK",id:"sidetip-demo-tooltip",refAtomIds:["SideTip"],dependencies:{"index.tsx":{type:"FILE",value:n(70162).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",title:"ToolTip"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785),"@oceanbase/icons":n(50010)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},66997:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(55541),I={"tagselect-demo-tagselect-base":{component:s.memo(s.lazy(function(){return n.e(833).then(n.bind(n,4005))})),asset:{type:"BLOCK",id:"tagselect-demo-tagselect-base",refAtomIds:["TagSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(38114).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tagselect-demo-tagselect-group":{component:s.memo(s.lazy(function(){return n.e(833).then(n.bind(n,46632))})),asset:{type:"BLOCK",id:"tagselect-demo-tagselect-group",refAtomIds:["TagSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(7874).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u6807\u7B7E\u9009\u62E9\u5668\u7EC4\u5408"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tagselect-demo-tagselect-radio":{component:s.memo(s.lazy(function(){return n.e(833).then(n.bind(n,47450))})),asset:{type:"BLOCK",id:"tagselect-demo-tagselect-radio",refAtomIds:["TagSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(37972).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5355\u9009"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tagselect-demo-tagselect-multiple":{component:s.memo(s.lazy(function(){return n.e(833).then(n.bind(n,76332))})),asset:{type:"BLOCK",id:"tagselect-demo-tagselect-multiple",refAtomIds:["TagSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(31407).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u591A\u9009"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tagselect-demo-tagselect-img":{component:s.memo(s.lazy(function(){return n.e(833).then(n.bind(n,67106))})),asset:{type:"BLOCK",id:"tagselect-demo-tagselect-img",refAtomIds:["TagSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(46506).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u56FE\u7247\u6807\u7B7E"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"tagselect-demo-tagselect-size":{component:s.memo(s.lazy(function(){return n.e(833).then(n.bind(n,10768))})),asset:{type:"BLOCK",id:"tagselect-demo-tagselect-size",refAtomIds:["TagSelect"],dependencies:{"index.tsx":{type:"FILE",value:n(17137).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u5C3A\u5BF8"},context:{react:n(75271),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},46838:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(8811),I={"taskgraph-demo-basic":{component:s.memo(s.lazy(function(){return n.e(4562).then(n.bind(n,49362))})),asset:{type:"BLOCK",id:"taskgraph-demo-basic",refAtomIds:["TaskGraph"],dependencies:{"index.tsx":{type:"FILE",value:n(68365).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},27463:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(97906),I={"treesearch-demo-basic":{component:s.memo(s.lazy(function(){return n.e(7165).then(n.bind(n,8035))})),asset:{type:"BLOCK",id:"treesearch-demo-basic",refAtomIds:["TreeSearch"],dependencies:{"index.tsx":{type:"FILE",value:n(25978).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"treesearch-demo-customtitle":{component:s.memo(s.lazy(function(){return n.e(7165).then(n.bind(n,69297))})),asset:{type:"BLOCK",id:"treesearch-demo-customtitle",refAtomIds:["TreeSearch"],dependencies:{"index.tsx":{type:"FILE",value:n(8196).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/icons":{type:"NPM",value:"0.3.2"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./style.less":{type:"FILE",value:n(15255).Z}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u8282\u70B9 title"},context:{react:n(75271),"@oceanbase/icons":n(50010),"@oceanbase/ui":n(57785),"./style.less":n(78444)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"treesearch-demo-virtual":{component:s.memo(s.lazy(function(){return n.e(7165).then(n.bind(n,27679))})),asset:{type:"BLOCK",id:"treesearch-demo-virtual",refAtomIds:["TreeSearch"],dependencies:{"index.tsx":{type:"FILE",value:n(69162).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"},"./style.less":{type:"FILE",value:n(15255).Z}},entry:"index.tsx",title:"\u865A\u62DF\u6EDA\u52A8"},context:{react:n(75271),"@oceanbase/ui":n(57785),"./style.less":n(78444)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},58120:function(c,a,n){n.r(a),n.d(a,{demos:function(){return I}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=n(75271),g=n(25449),I={"welcome-demo-basic":{component:s.memo(s.lazy(function(){return n.e(5815).then(n.bind(n,43053))})),asset:{type:"BLOCK",id:"welcome-demo-basic",refAtomIds:["Welcome"],dependencies:{"index.tsx":{type:"FILE",value:n(816).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"\u57FA\u672C"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}},"welcome-demo-with-card-type":{component:s.memo(s.lazy(function(){return n.e(5815).then(n.bind(n,49212))})),asset:{type:"BLOCK",id:"welcome-demo-with-card-type",refAtomIds:["Welcome"],dependencies:{"index.tsx":{type:"FILE",value:n(60303).Z},react:{type:"NPM",value:"18.3.1"},"@oceanbase/design":{type:"NPM",value:"0.3.7"},"@oceanbase/ui":{type:"NPM",value:"0.3.7"}},entry:"index.tsx",title:"stepType \u7C7B\u578B"},context:{react:n(75271),"@oceanbase/design":n(43503),"@oceanbase/ui":n(57785)},renderOpts:{compile:function(){var l=u()(o()().mark(function r(){var t,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6954).then(n.bind(n,36954));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},r)}));function d(){return l.apply(this,arguments)}return d}()}}}},10471:function(c,a,n){n.r(a),n.d(a,{TASK_CENTER_STATUS:function(){return p}});var m=n(82092),o=n.n(m),v=n(90228),u=n.n(v),s=n(87999),g=n.n(s),I=n(57785),l=n(75271),d=n(89950),r=n(3214),t=I.BackgroundTaskManagerConstants.NotificationApi,i=I.BackgroundTaskManagerConstants.REFRESH_FREQUENCY;window.obuiMockModel={backgroundTaskManagerAPIs:{}};var p=function(x){return x.WAITING="WAITING",x.PROCESSING="PROCESSING",x.SUCCESS="SUCCESS",x.FAILED="FAILED",x}({}),e=function(){var h=(0,l.useRef)(),T=function(y){var f;(f=h.current)===null||f===void 0||f.setPreset(y)},M=function(y){var f;(f=h.current)===null||f===void 0||f.setQueue(y)},A=function(y){var f;(f=h.current)===null||f===void 0||f.pushQueue(y)},O=function(y){var f;(f=h.current)===null||f===void 0||f.popQueue(y)},D=function(){var y,f=(y=h.current)===null||y===void 0?void 0:y.fetchPreset();return f},B=function(){var y,f=(y=h.current)===null||y===void 0?void 0:y.fetchQueue();return f},S=function(y){var f;return(f=h.current)===null||f===void 0?void 0:f.fetchQueueNsById(y)};return window.obuiMockModel.backgroundTaskManagerAPIs={setNotificationPreset:T,setNotificationQueue:M,pushNotificationQueue:A,popNotificationQueue:O,fetchPreset:D,fetchQueue:B,fetchQueueNsById:S},(0,l.useEffect)(function(){var b=function(){var y=g()(u()().mark(function f(E){var P;return u()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return P=E.id,C.abrupt("return",(0,d.getTaskById)({id:P}));case 2:case"end":return C.stop()}},f)}));return function(E){return y.apply(this,arguments)}}();T({download_task:{api:b,successCb:function(f,E){var P=f||{},R=P.status,C=P.fileName,L=P.fileUrl;if([p.SUCCESS,p.FAILED].includes(R)){O(E);var N=o()(o()({},p.SUCCESS,t.success),p.FAILED,t.error),F=o()(o()({},p.SUCCESS,"The file has been generated and can be downloaded"),p.FAILED,"File generation failed");return{type:N[R],config:{key:E,top:78,duration:null,message:F[R],description:R===p.SUCCESS?(0,r.tZ)(l.Fragment,null,(0,r.tZ)("div",null,C),(0,r.tZ)("a",{href:L,target:"_blank",rel:"noreferrer"},"Download")):null}}}return null}}})},[]),(0,r.tZ)(I.BackgroundTaskManager,{ref:h,rollingFrequency:i.EXTREMELY,prefix:"obui_backgroundtaskmanager_demo"})};a.default=e},89950:function(c,a,n){n.r(a),n.d(a,{getTaskById:function(){return g}});var m=n(90228),o=n.n(m),v=n(87999),u=n.n(v),s=0;function g(d){return I.apply(this,arguments)}function I(){return I=u()(o()().mark(function d(r){var t;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t=r.id,p.next=3,l(1e3);case 3:return s=s===3?0:s+1,p.abrupt("return",{id:t,gmtCreate:"2022-12-01T12:32:47.000+00:00",passportId:"200000000008",bizType:"BILL_DETAIL",fileName:"bill-detail-2022-12.xlsx",fileUrl:"",status:s===3?"SUCCESS":"CONNECTING",fileExpireTime:"2022-12-04T12:32:47.000+00:00"});case 5:case"end":return p.stop()}},d)})),I.apply(this,arguments)}function l(d){return new Promise(function(r){setTimeout(r,d)})}},13862:function(c,a,n){n.r(a);var m=n(68585),o=n.n(m),v=n(67825),u=n.n(v),s=n(75271),g=n(50010),I=n(3214),l=["type"],d=(0,g.createFromIconfontCN)({scriptUrl:"//at.alicdn.com/t/a/font_3786261_ifhixq9j5c.js"}),r=function(i){var p=i.type,e=u()(i,l);return(0,I.tZ)(d,o()({type:p},e))};a.default=r},9650:function(c,a,n){n.r(a),n.d(a,{SimpleTable:function(){return u}});var m=n(75271),o=n(43503),v=n(3214),u=function(){var g=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],I=[{title:"Name",dataIndex:"name",key:"name",render:function(d){return(0,v.tZ)("a",null,d)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(d){return(0,v.tZ)("span",null,d.map(function(r){var t=r.length>5?"geekblue":"green";return r==="loser"&&(t="volcano"),(0,v.tZ)(o.Tag,{color:t,key:r},r.toUpperCase())}))}},{title:"Action",key:"action",render:function(d,r){return(0,v.tZ)("span",null,(0,v.tZ)("a",null,"Invite ",r.name),(0,v.tZ)(o.Divider,{type:"vertical"}),(0,v.tZ)("a",null,"Delete"))}}];return(0,v.tZ)(o.Table,{rowSelection:{onChange:function(){}},columns:I,dataSource:g,pagination:!1})}},74241:function(c,a,n){n.r(a);var m=n(48305),o=n.n(m),v=n(75271),u=n(43503),s=n(57785),g=n(50010),I=n(3214);a.default=function(){var l=(0,v.useState)(!1),d=o()(l,2),r=d[0],t=d[1],i=function(){var h=new Promise(function(T){setTimeout(function(){T()},1e3)});return t(!0),h.then(function(){t(!1),u.message.success("\u5237\u65B0\u6210\u529F")}),h},p=[{key:"1",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"2",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"3",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"4",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"5",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"6",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"7",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"8",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"9",name:"\u80E1\u5F66\u658C",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"},{key:"10",name:"\u80E1\u5F66\u7956",age:42,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7"}],e=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u4F4F\u5740",dataIndex:"address",key:"address"}];return(0,I.tZ)(s.PageContainer,{ghost:!0,loading:r,header:{title:"\u9875\u9762\u6807\u9898",onBack:function(){},reload:{spin:r,onClick:function(){i()}},breadcrumb:{items:[{href:"",title:"\u4E00\u7EA7\u9875\u9762"},{href:"",title:"\u4E8C\u7EA7\u9875\u9762"},{title:"\u5F53\u524D\u9875\u9762"}]},extra:[(0,I.tZ)(u.Button,{key:"1",onClick:function(){u.Modal.confirm({title:"\u786E\u5B9A\u8981\u6267\u884C\u5F53\u524D\u4EFB\u52A1\u5417\uFF1F",onOk:function(){return i().then(function(){u.Modal.success({title:"\u4EFB\u52A1\u63D0\u4EA4\u6210\u529F\uFF01"})})}})}},"\u6B21\u8981\u6309\u94AE"),(0,I.tZ)(u.Button,{key:"2",type:"primary"},"\u4E3B\u8981\u6309\u94AE"),(0,I.tZ)(u.Dropdown,{menu:{items:[{label:"\u4E0B\u62C9\u83DC\u5355",key:"1"},{label:"\u4E0B\u62C9\u83DC\u53552",key:"2"},{label:"\u4E0B\u62C9\u83DC\u53553",key:"3"}]}},(0,I.tZ)(u.Button,{key:"3",style:{padding:"0 8px"}},(0,I.tZ)(g.EllipsisOutlined,null)))]},footer:[(0,I.tZ)(u.Button,null,"\u91CD\u7F6E"),(0,I.tZ)(u.Button,{type:"primary"},"\u63D0\u4EA4")]},(0,I.tZ)(u.Space,{size:16,direction:"vertical"},(0,I.tZ)(u.Card,{bordered:!1},(0,I.tZ)(u.Descriptions,null,(0,I.tZ)(u.Descriptions.Item,{label:"\u521B\u5EFA\u4EBA"},"\u66F2\u4E3D\u4E3D"),(0,I.tZ)(u.Descriptions.Item,{label:"\u7535\u8BDD\u53F7\u7801"},"1810000000"),(0,I.tZ)(u.Descriptions.Item,{label:"\u5730\u5740"},"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u5DE5\u4E13\u8DEF"),(0,I.tZ)(u.Descriptions.Item,{label:"\u5173\u8054\u8868\u5355"},(0,I.tZ)("a",null,"421421")),(0,I.tZ)(u.Descriptions.Item,{label:"\u521B\u5EFA\u65F6\u95F4"},"2017-01-10"),(0,I.tZ)(u.Descriptions.Item,{label:"\u5907\u6CE8"},"\u8FD9\u662F\u5907\u6CE8"))),(0,I.tZ)(u.Card,{bordered:!1,tabList:[{tab:"\u57FA\u672C\u4FE1\u606F",key:"base"},{tab:"\u8BE6\u7EC6\u4FE1\u606F",key:"info"}]},(0,I.tZ)(u.Table,{columns:e,dataSource:p}))))}},37137:function(c,a,n){n.r(a);var m=n(75271),o=n(43503),v=n(57785),u=n(3214);a.default=function(){return(0,u.tZ)(v.PageContainer,{header:{title:"\u603B\u89C8"}},(0,u.tZ)(o.Card,{bordered:!1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 72px - 24px)"}},(0,u.tZ)(o.Empty,{image:o.Empty.PRESENTED_IMAGE_COLORED,title:"\u521B\u5EFA\u7B2C\u4E00\u4E2A\u96C6\u7FA4"},(0,u.tZ)(o.Button,{type:"primary"},"\u7ACB\u5373\u521B\u5EFA"))))}},1659:function(c,a,n){n.r(a)},74490:function(c,a,n){n.r(a)},42999:function(c,a,n){n.r(a)},41273:function(c,a,n){n.r(a)},78444:function(c,a,n){n.r(a)},89900:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(81373);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:5},{value:"\u8BF4\u660E",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"\u7248\u672C",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"400",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"data",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:5},{value:"object[]",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"xField",paraId:0,tocIndex:5},{value:"x \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"yField",paraId:0,tocIndex:5},{value:"y \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"seriesField",paraId:0,tocIndex:5},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"isStack",paraId:0,tocIndex:5},{value:"\u662F\u5426\u4E3A\u5806\u53E0\u9762\u79EF\u56FE",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"isPercent",paraId:0,tocIndex:5},{value:"\u662F\u5426\u4E3A\u767E\u5206\u6BD4\u9762\u79EF\u56FE",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:1,tocIndex:5},{value:"https://charts.ant.design/zh/examples/area/basic#basic",paraId:1,tocIndex:5}]},4310:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(33609);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:7},{value:"\u8BF4\u660E",paraId:0,tocIndex:7},{value:"\u7C7B\u578B",paraId:0,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"\u7248\u672C",paraId:0,tocIndex:7},{value:"width",paraId:0,tocIndex:7},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:7},{value:"number",paraId:0,tocIndex:7},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"height",paraId:0,tocIndex:7},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:7},{value:"number",paraId:0,tocIndex:7},{value:"400",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"data",paraId:0,tocIndex:7},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:7},{value:"object[]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"xField",paraId:0,tocIndex:7},{value:"x \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"yField",paraId:0,tocIndex:7},{value:"y \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"seriesField",paraId:0,tocIndex:7},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D\uFF0C\u5E38\u7528\u4E8E\u5806\u53E0\u6761\u5F62\u56FE\u3001\u5206\u7EC4\u6761\u5F62\u56FE\u3001\u767E\u5206\u6BD4\u6761\u5F62\u56FE",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"isStack",paraId:0,tocIndex:7},{value:"\u662F\u5426\u4E3A\u5806\u53E0\u6761\u5F62\u56FE",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"isGroup",paraId:0,tocIndex:7},{value:"\u662F\u5426\u4E3A\u5206\u7EC4\u6761\u5F62\u56FE",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"isPercent",paraId:0,tocIndex:7},{value:"\u662F\u5426\u4E3A\u767E\u5206\u6BD4\u6761\u5F62\u56FE\uFF0C\u901A\u5E38\u9700\u8981\u642D\u914D ",paraId:0,tocIndex:7},{value:"isStack",paraId:0,tocIndex:7},{value:" \u4F7F\u7528",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"isRange",paraId:0,tocIndex:7},{value:"\u662F\u5426\u4E3A\u533A\u95F4\u6761\u5F62\u56FE",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"isProgress ",paraId:0,tocIndex:7},{value:"\u6269\u5C55\u5C5E\u6027",paraId:1,tocIndex:7},{value:"\u662F\u5426\u4E3A\u8FDB\u5EA6\u6761\u5F62\u56FE\uFF0C\u6570\u503C\u8303\u56F4\u4E3A 0 ~ 1",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"warningPercent ",paraId:0,tocIndex:7},{value:"\u6269\u5C55\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u8B66\u544A\u6C34\u4F4D\u7EBF\uFF0C\u4EC5 ",paraId:0,tocIndex:7},{value:"isProgress",paraId:0,tocIndex:7},{value:" \u4E3A ",paraId:0,tocIndex:7},{value:"true",paraId:0,tocIndex:7},{value:" \u65F6\u751F\u6548",paraId:0,tocIndex:7},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"dangerPercent ",paraId:0,tocIndex:7},{value:"\u6269\u5C55\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u5371\u9669\u6C34\u4F4D\u7EBF\uFF0C\u4EC5 ",paraId:0,tocIndex:7},{value:"isProgress",paraId:0,tocIndex:7},{value:" \u4E3A ",paraId:0,tocIndex:7},{value:"true",paraId:0,tocIndex:7},{value:" \u65F6\u751F\u6548",paraId:0,tocIndex:7},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:4,tocIndex:7},{value:"https://charts.ant.design/zh/examples/bar/basic#basic",paraId:4,tocIndex:7}]},96468:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(97974);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:6},{value:"\u8BF4\u660E",paraId:0,tocIndex:6},{value:"\u7C7B\u578B",paraId:0,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:6},{value:"\u7248\u672C",paraId:0,tocIndex:6},{value:"width",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"height",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"400",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"data",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:6},{value:"object[]",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"xField",paraId:0,tocIndex:6},{value:"x \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"yField",paraId:0,tocIndex:6},{value:"y \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"seriesField",paraId:0,tocIndex:6},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D\uFF0C\u5E38\u7528\u4E8E\u5806\u53E0\u67F1\u72B6\u56FE\u3001\u5206\u7EC4\u67F1\u72B6\u56FE\u3001\u767E\u5206\u6BD4\u67F1\u72B6\u56FE",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"isStack",paraId:0,tocIndex:6},{value:"\u662F\u5426\u4E3A\u5806\u53E0\u67F1\u72B6\u56FE",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"isGroup",paraId:0,tocIndex:6},{value:"\u662F\u5426\u4E3A\u5206\u7EC4\u67F1\u72B6\u56FE",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"isPercent",paraId:0,tocIndex:6},{value:"\u662F\u5426\u4E3A\u767E\u5206\u6BD4\u67F1\u72B6\u56FE",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"isRange",paraId:0,tocIndex:6},{value:"\u662F\u5426\u4E3A\u533A\u95F4\u67F1\u72B6\u56FE",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:1,tocIndex:6},{value:"https://charts.ant.design/zh/examples/column/basic#basic",paraId:1,tocIndex:6}]},20273:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(84337);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:7},{value:"\u8BF4\u660E",paraId:0,tocIndex:7},{value:"\u7C7B\u578B",paraId:0,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"\u7248\u672C",paraId:0,tocIndex:7},{value:"width",paraId:0,tocIndex:7},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:7},{value:"number",paraId:0,tocIndex:7},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"height",paraId:0,tocIndex:7},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:7},{value:"number",paraId:0,tocIndex:7},{value:"400",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"data",paraId:0,tocIndex:7},{value:"\u56FE\u8868\u6570\u636E\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5F62\u5F0F\u4E3A ",paraId:0,tocIndex:7},{value:"[\u5DE6\u8F74\u56FE\u5F62\u6570\u636E\uFF0C\u53F3\u8F74\u56FE\u5F62\u6570\u636E]",paraId:0,tocIndex:7},{value:"object[][]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"xField",paraId:0,tocIndex:7},{value:"x \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"yField",paraId:0,tocIndex:7},{value:"y \u65B9\u5411\u5B57\u6BB5\u540D\u6570\u7EC4\uFF0C\u5F62\u5F0F\u4E3A ",paraId:0,tocIndex:7},{value:"[\u5DE6\u8F74\u56FE\u5F62\u6570\u636E\u5B57\u6BB5\u540D\uFF0C\u53F3\u8F74\u56FE\u5F62\u6570\u636E\u5B57\u6BB5\u540D]",paraId:0,tocIndex:7},{value:"string[]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"geometryOptions",paraId:0,tocIndex:7},{value:"\u53CC\u8F74\u5404\u81EA\u5BF9\u5E94\u7684\u56FE\u5F62\u914D\u7F6E\uFF0C\u5F62\u5F0F\u4E3A ",paraId:0,tocIndex:7},{value:"[\u5DE6\u8F74\u56FE\u5F62\u914D\u7F6E\uFF0C\u53F3\u8F74\u56FE\u5F62\u914D\u7F6E]",paraId:0,tocIndex:7},{value:"\uFF0C\u914D\u7F6E\u7C7B\u578B\u4E3A ",paraId:0,tocIndex:7},{value:"GeometryLineOption",paraId:1,tocIndex:7},{value:" \u6216 ",paraId:0,tocIndex:7},{value:"GeometryColumnOption",paraId:2,tocIndex:7},{value:"(GeometryLineOption | GeometryColumnOption)[]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"\u7248\u672C",paraId:3,tocIndex:8},{value:"geometry",paraId:3,tocIndex:8},{value:"\u56FE\u5F62\u7C7B\u578B",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"line",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"seriesField",paraId:3,tocIndex:8},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"smooth",paraId:3,tocIndex:8},{value:"\u662F\u5426\u5E73\u6ED1",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"lineStyle",paraId:3,tocIndex:8},{value:"\u6298\u7EBF\u6837\u5F0F",paraId:3,tocIndex:8},{value:"LineStyle",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"point",paraId:3,tocIndex:8},{value:"\u6298\u7EBF\u6570\u636E\u70B9\u6837\u5F0F",paraId:3,tocIndex:8},{value:"Point",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u53C2\u6570",paraId:4,tocIndex:9},{value:"\u8BF4\u660E",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"\u7248\u672C",paraId:4,tocIndex:9},{value:"geometry",paraId:4,tocIndex:9},{value:"\u56FE\u5F62\u7C7B\u578B",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"line",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"seriesField",paraId:4,tocIndex:9},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"groupField",paraId:4,tocIndex:9},{value:"\u5206\u7EC4\u5B57\u6BB5\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"isStack",paraId:4,tocIndex:9},{value:"\u662F\u5426\u5806\u53E0\u67F1\u72B6\u56FE",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"isGroup",paraId:4,tocIndex:9},{value:"\u662F\u5426\u5206\u7EC4\u67F1\u72B6\u56FE",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"isRange",paraId:4,tocIndex:9},{value:"\u662F\u5426\u533A\u95F4\u67F1\u72B6\u56FE",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"columnStyle",paraId:4,tocIndex:9},{value:"\u67F1\u5B50\u6837\u5F0F",paraId:4,tocIndex:9},{value:"ColumnStyle",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u67F1\u72B6\u56FE label",paraId:4,tocIndex:9},{value:"Label",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:5,tocIndex:9},{value:"https://charts.ant.design/zh/examples/dual-axes/dual-line#dual-line",paraId:5,tocIndex:9}]},18059:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(19460);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:5},{value:"\u8BF4\u660E",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"\u7248\u672C",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"400",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"type",paraId:0,tocIndex:5},{value:"\u4EEA\u8868\u76D8\u7C7B\u578B",paraId:0,tocIndex:5},{value:"undefined | 'meter'",paraId:0,tocIndex:5},{value:"undefined",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"percent",paraId:0,tocIndex:5},{value:"\u767E\u5206\u6BD4\u6570\u503C\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"innerRadius",paraId:0,tocIndex:5},{value:"\u5185\u73AF\u534A\u5F84\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"range",paraId:0,tocIndex:5},{value:"\u5706\u5F27\u6837\u5F0F",paraId:0,tocIndex:5},{value:"{ ticks: number[]; color: string | string[]; width: number }",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"gaugeStyle",paraId:0,tocIndex:5},{value:"\u5706\u5F27\u80CC\u666F\u6837\u5F0F",paraId:0,tocIndex:5},{value:"StyleAttr",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:1,tocIndex:5},{value:"https://charts.ant.design/zh/examples/progress-plots/gauge#basic",paraId:1,tocIndex:5}]},59796:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(50580);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:3},{value:"\u8BF4\u660E",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"\u7248\u672C",paraId:0,tocIndex:3},{value:"width",paraId:0,tocIndex:3},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"height",paraId:0,tocIndex:3},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"400",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"data",paraId:0,tocIndex:3},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:3},{value:"object[]",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"binField",paraId:0,tocIndex:3},{value:"\u503C\u5B57\u6BB5\u540D\uFF0C\u7528\u4E8E\u5206\u7BB1",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"stackField",paraId:0,tocIndex:3},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D\uFF0C\u7528\u4E8E\u5806\u53E0\u76F4\u65B9\u56FE",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"binWidth",paraId:0,tocIndex:3},{value:"\u5206\u7BB1\u5BBD\u5EA6\uFF0C\u51B3\u5B9A\u76F4\u65B9\u56FE\u88AB\u5206\u6210\u591A\u5C11\u7BB1",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"binNumber",paraId:0,tocIndex:3},{value:"\u5206\u7BB1\u6570\uFF0C\u4E0D\u80FD\u4E0E ",paraId:0,tocIndex:3},{value:"binWidth",paraId:0,tocIndex:3},{value:" \u4E00\u8D77\u4F7F\u7528",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:1,tocIndex:3},{value:"https://charts.ant.design/zh/examples/more-plots/histogram#basic",paraId:1,tocIndex:3}]},31632:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(98858);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:6},{value:"\u8BF4\u660E",paraId:0,tocIndex:6},{value:"\u7C7B\u578B",paraId:0,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:6},{value:"\u7248\u672C",paraId:0,tocIndex:6},{value:"width",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"height",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"400",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"data",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:6},{value:"object[]",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"xField",paraId:0,tocIndex:6},{value:"x \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"yField",paraId:0,tocIndex:6},{value:"y \u65B9\u5411\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"seriesField",paraId:0,tocIndex:6},{value:"\u5206\u7C7B\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"stepType",paraId:0,tocIndex:6},{value:"\u9636\u68AF\u6298\u7EBF\u56FE\u7C7B\u578B\uFF0C\u914D\u7F6E\u540E smooth \u65E0\u6548\u3002 h \u548C v \u5206\u522B\u6307 horizontal \u548C vertical\uFF0C\u56E0\u6B64 vh \u610F\u4E3A\u8D77\u59CB\u70B9\u5148\u7AD6\u76F4\u65B9\u5411\uFF0C\u7136\u540E\u6C34\u5E73\u65B9\u5411",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:1,tocIndex:6},{value:"https://charts.ant.design/zh/examples/line/basic#line",paraId:1,tocIndex:6}]},68058:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(14800);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:5},{value:"\u8BF4\u660E",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"\u7248\u672C",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"400",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"layout ",paraId:0,tocIndex:5},{value:"\u6269\u5C55\u5C5E\u6027",paraId:1,tocIndex:5},{value:"\u5E03\u5C40",paraId:0,tocIndex:5},{value:"vertical",paraId:0,tocIndex:5},{value:"horizontal | vertical",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"title ",paraId:0,tocIndex:5},{value:"\u6269\u5C55\u5C5E\u6027",paraId:2,tocIndex:5},{value:"\u6807\u9898",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"percent",paraId:0,tocIndex:5},{value:"\u767E\u5206\u6BD4\u6570\u503C",paraId:0,tocIndex:5},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"warningPercent ",paraId:0,tocIndex:5},{value:"\u6269\u5C55\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8B66\u544A\u6C34\u4F4D\u7EBF",paraId:0,tocIndex:5},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"dangerPercent ",paraId:0,tocIndex:5},{value:"\u6269\u5C55\u5C5E\u6027",paraId:4,tocIndex:5},{value:"\u5371\u9669\u6C34\u4F4D\u7EBF",paraId:0,tocIndex:5},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"decimal ",paraId:0,tocIndex:5},{value:"\u6269\u5C55\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u767E\u5206\u6BD4\u6700\u591A\u4FDD\u7559\u7684\u6709\u6548\u5C0F\u6570\u4F4D\u6570",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"2",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"containerStyle",paraId:0,tocIndex:5},{value:"\u5BB9\u5668\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"percentStyle",paraId:0,tocIndex:5},{value:"\u767E\u5206\u6BD4\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"titleStyle",paraId:0,tocIndex:5},{value:"\u6807\u9898\u6837\u5F0F",paraId:0,tocIndex:5},{value:"CSSProperties",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:6,tocIndex:5},{value:"https://charts.ant.design/zh/examples/progress-plots/liquid#basic",paraId:6,tocIndex:5}]},29786:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(92302);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:6},{value:"\u8BF4\u660E",paraId:0,tocIndex:6},{value:"\u7C7B\u578B",paraId:0,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:6},{value:"\u7248\u672C",paraId:0,tocIndex:6},{value:"width",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"height",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"400",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"data",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:6},{value:"object[]",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"angleField",paraId:0,tocIndex:6},{value:"\u6247\u5F62\u5207\u7247\u5927\u5C0F\uFF08\u5F27\u5EA6\uFF09\u6240\u5BF9\u5E94\u7684\u6570\u636E\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"colorField",paraId:0,tocIndex:6},{value:"\u6247\u5F62\u989C\u8272\u6620\u5C04\u5BF9\u5E94\u7684\u6570\u636E\u5B57\u6BB5\u540D",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"isDonut ",paraId:0,tocIndex:6},{value:"\u6269\u5C55\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u662F\u5426\u4E3A\u73AF\u56FE",paraId:0,tocIndex:6},{value:"boolean",paraId:0,tocIndex:6},{value:"false",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"isHalfDonut ",paraId:0,tocIndex:6},{value:"\u6269\u5C55\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u662F\u5426\u4E3A\u534A\u5706\u73AF\u56FE",paraId:0,tocIndex:6},{value:"boolean",paraId:0,tocIndex:6},{value:"false",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"statisticTitle ",paraId:0,tocIndex:6},{value:"\u6269\u5C55\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u7EDF\u8BA1\u6807\u9898",paraId:0,tocIndex:6},{value:"string",paraId:0,tocIndex:6},{value:"\u603B\u6570",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:4,tocIndex:6},{value:"https://charts.ant.design/zh/examples/pie/basic#basic",paraId:4,tocIndex:6}]},67127:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(90743);const o=[{value:"\u9ED8\u8BA4 85 <= num \u5206\u4E3A\u4F18\uFF08\u7EFF\u8272\uFF09\uFF0C70 <= num < 85 \u4E3A\u826F\uFF08\u84DD\u8272\uFF09\uFF0C60 <= num < 70 \u4E3A\u4E2D\uFF08\u6A59\u8272\uFF09\uFF0CNUM < 60 \u4E3A\u5DEE\uFF08\u7EA2\u8272\uFF09",paraId:0,tocIndex:0},{value:" ",paraId:1},{value:" ",paraId:2},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u7248\u672C",paraId:3,tocIndex:5},{value:"size",paraId:3,tocIndex:5},{value:"\u56FE\u8868\u5927\u5C0F",paraId:3,tocIndex:5},{value:"string| number",paraId:3,tocIndex:5},{value:"middle",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"color",paraId:3,tocIndex:5},{value:"\u56FE\u8868\u989C\u8272",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"green",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"value",paraId:3,tocIndex:5},{value:"\u6570\u503C",paraId:3,tocIndex:5},{value:"number",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"valueStyle",paraId:3,tocIndex:5},{value:"\u6570\u5B57\u6837\u5F0F",paraId:3,tocIndex:5},{value:"CSSProperties",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"unit",paraId:3,tocIndex:5},{value:"\u5355\u4F4D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"\u5206",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"unitStyle",paraId:3,tocIndex:5},{value:"\u5355\u4F4D\u6837\u5F0F",paraId:3,tocIndex:5},{value:"CSSProperties",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"thresholds",paraId:3,tocIndex:5},{value:"\u9608\u503C\u548C\u989C\u8272\u503C\u6620\u5C04\u5BF9\u8C61",paraId:3,tocIndex:5},{value:"object",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"className",paraId:3,tocIndex:5},{value:"\u7C7B\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5}]},43471:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(48306);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"\u7248\u672C",paraId:0,tocIndex:2},{value:"width",paraId:0,tocIndex:2},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"height",paraId:0,tocIndex:2},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"400",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"padding",paraId:0,tocIndex:2},{value:"\u56FE\u8868\u5185\u95F4\u8DDD",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"8",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"title",paraId:0,tocIndex:2},{value:"\u6807\u9898",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"value",paraId:0,tocIndex:2},{value:"\u6570\u503C",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"prefix",paraId:0,tocIndex:2},{value:"\u6570\u503C\u524D\u7F00",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"suffix",paraId:0,tocIndex:2},{value:"\u6570\u503C\u540E\u7F00",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"layout",paraId:0,tocIndex:2},{value:"\u5E03\u5C40",paraId:0,tocIndex:2},{value:"vertical | horizontal",paraId:0,tocIndex:2},{value:"vertical",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"theme",paraId:0,tocIndex:2},{value:"\u4E3B\u9898\u6A21\u5F0F",paraId:0,tocIndex:2},{value:"light | dark",paraId:0,tocIndex:2},{value:"light",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"colorMode",paraId:0,tocIndex:2},{value:"\u7740\u8272\u6A21\u5F0F",paraId:0,tocIndex:2},{value:"none | value | background",paraId:0,tocIndex:2},{value:"background",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"chartMode",paraId:0,tocIndex:2},{value:"\u56FE\u8868\u6A21\u5F0F",paraId:0,tocIndex:2},{value:"none | line | area",paraId:0,tocIndex:2},{value:"none",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"chartData",paraId:0,tocIndex:2},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:2},{value:"number[]",paraId:0,tocIndex:2},{value:"[]",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"chartConfig",paraId:0,tocIndex:2},{value:"\u56FE\u8868\u914D\u7F6E",paraId:0,tocIndex:2},{value:"TinyAreaConfig",paraId:1,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"textAlign",paraId:0,tocIndex:2},{value:"\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:0,tocIndex:2},{value:"auto | center",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"thresholds",paraId:0,tocIndex:2},{value:"\u9608\u503C\u548C\u989C\u8272\u503C\u6620\u5C04\u5BF9\u8C61",paraId:0,tocIndex:2},{value:"object",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"className",paraId:0,tocIndex:2},{value:"\u7C7B\u540D",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"style",paraId:0,tocIndex:2},{value:"\u6837\u5F0F",paraId:0,tocIndex:2},{value:"CSSProperties",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2}]},39125:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(64173);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:6},{value:"\u8BF4\u660E",paraId:0,tocIndex:6},{value:"\u7C7B\u578B",paraId:0,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:6},{value:"\u7248\u672C",paraId:0,tocIndex:6},{value:"width",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"height",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:0,tocIndex:6},{value:"number",paraId:0,tocIndex:6},{value:"60",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"data",paraId:0,tocIndex:6},{value:"\u56FE\u8868\u6570\u636E",paraId:0,tocIndex:6},{value:"number[]",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"color",paraId:0,tocIndex:6},{value:"\u989C\u8272",paraId:0,tocIndex:6},{value:"string | string[] | Function",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"lineStyle",paraId:0,tocIndex:6},{value:"line \u6837\u5F0F",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"point",paraId:0,tocIndex:6},{value:"point \u6837\u5F0F",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"\u7248\u672C",paraId:1,tocIndex:7},{value:"width",paraId:1,tocIndex:7},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:1,tocIndex:7},{value:"number",paraId:1,tocIndex:7},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"height",paraId:1,tocIndex:7},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:1,tocIndex:7},{value:"number",paraId:1,tocIndex:7},{value:"60",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"data",paraId:1,tocIndex:7},{value:"\u56FE\u8868\u6570\u636E",paraId:1,tocIndex:7},{value:"number[]",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"color",paraId:1,tocIndex:7},{value:"\u989C\u8272",paraId:1,tocIndex:7},{value:"string | string[] | Function",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"areaStyle",paraId:1,tocIndex:7},{value:"area \u6837\u5F0F",paraId:1,tocIndex:7},{value:"StyleAttr | Function",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"line",paraId:1,tocIndex:7},{value:"line \u6837\u5F0F",paraId:1,tocIndex:7},{value:"object",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"point",paraId:1,tocIndex:7},{value:"point \u6837\u5F0F",paraId:1,tocIndex:7},{value:"object",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u53C2\u6570",paraId:2,tocIndex:8},{value:"\u8BF4\u660E",paraId:2,tocIndex:8},{value:"\u7C7B\u578B",paraId:2,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:8},{value:"\u7248\u672C",paraId:2,tocIndex:8},{value:"width",paraId:2,tocIndex:8},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:2,tocIndex:8},{value:"number",paraId:2,tocIndex:8},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"height",paraId:2,tocIndex:8},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:2,tocIndex:8},{value:"number",paraId:2,tocIndex:8},{value:"60",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"data",paraId:2,tocIndex:8},{value:"\u56FE\u8868\u6570\u636E",paraId:2,tocIndex:8},{value:"number[]",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"color",paraId:2,tocIndex:8},{value:"\u989C\u8272",paraId:2,tocIndex:8},{value:"string | string[] | Function",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"columnStyle",paraId:2,tocIndex:8},{value:"column \u6837\u5F0F",paraId:2,tocIndex:8},{value:"StyleAttr | Function",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"label",paraId:2,tocIndex:8},{value:"label \u6837\u5F0F",paraId:2,tocIndex:8},{value:"object",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"\u53C2\u6570",paraId:3,tocIndex:9},{value:"\u8BF4\u660E",paraId:3,tocIndex:9},{value:"\u7C7B\u578B",paraId:3,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:9},{value:"\u7248\u672C",paraId:3,tocIndex:9},{value:"width",paraId:3,tocIndex:9},{value:"\u56FE\u8868\u5BBD\u5EA6",paraId:3,tocIndex:9},{value:"number",paraId:3,tocIndex:9},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"height",paraId:3,tocIndex:9},{value:"\u56FE\u8868\u9AD8\u5EA6",paraId:3,tocIndex:9},{value:"number",paraId:3,tocIndex:9},{value:"20",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"compact ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u662F\u5426\u4E3A\u7D27\u51D1\u578B\u5E03\u5C40\uFF0C\u6B64\u65F6\u8FDB\u5EA6\u6761\u4E0E\u6807\u7B7E\u7684\u95F4\u8DDD\u8F83\u5C0F\uFF0C\u5E38\u7528\u4E8E\u8868\u683C\u7B49\u573A\u666F",paraId:3,tocIndex:9},{value:"boolean",paraId:3,tocIndex:9},{value:"false",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"title ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u6807\u9898",paraId:3,tocIndex:9},{value:"ReactNode",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"percent",paraId:3,tocIndex:9},{value:"\u767E\u5206\u6BD4\u6570\u503C",paraId:3,tocIndex:9},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"warningPercent ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:9},{value:"\u8B66\u544A\u6C34\u4F4D\u7EBF",paraId:3,tocIndex:9},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"dangerPercent ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:9},{value:"\u5371\u9669\u6C34\u4F4D\u7EBF",paraId:3,tocIndex:9},{value:"number\uFF0C\u8303\u56F4 0-1",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"color",paraId:3,tocIndex:9},{value:"\u989C\u8272",paraId:3,tocIndex:9},{value:"string | string[] | Function",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"progressStyle",paraId:3,tocIndex:9},{value:"\u8FDB\u5EA6\u6761\u6837\u5F0F",paraId:3,tocIndex:9},{value:"StyleAttr | Function",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"percentStyle ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:8,tocIndex:9},{value:"\u767E\u5206\u6BD4\u6807\u7B7E\u6837\u5F0F",paraId:3,tocIndex:9},{value:"CSSProperties",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"maxColumnWidth",paraId:3,tocIndex:9},{value:"\u8FDB\u5EA6\u6761\u6700\u5927\u5BBD\u5EA6",paraId:3,tocIndex:9},{value:"number",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"decimal ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u767E\u5206\u6BD4\u6700\u591A\u4FDD\u7559\u7684\u6709\u6548\u5C0F\u6570\u4F4D\u6570",paraId:3,tocIndex:9},{value:"number",paraId:3,tocIndex:9},{value:"2",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"formatter ",paraId:3,tocIndex:9},{value:"\u6269\u5C55\u5C5E\u6027",paraId:10,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u767E\u5206\u6BD4\u5C55\u793A\u7684\u51FD\u6570",paraId:3,tocIndex:9},{value:"(percent: number) => ReactNode",paraId:3,tocIndex:9},{value:"(percent) => `${percent * 100}%`",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"\u66F4\u591A API \u8BE6\u89C1 Ant Design Charts \u6587\u6863\uFF1A",paraId:11,tocIndex:9},{value:"https://charts.ant.design/zh/examples/tiny/tiny-line#basic-line",paraId:11,tocIndex:9}]},2332:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(95227);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Alert",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"ghost",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301\u900F\u660E\u80CC\u666F\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"colored",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301\u5168\u5C40\u7740\u8272\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:9},{value:"\u8BF4\u660E",paraId:1,tocIndex:9},{value:"\u7C7B\u578B",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:9},{value:"\u7248\u672C",paraId:1,tocIndex:9},{value:"ghost",paraId:1,tocIndex:9},{value:"\u662F\u5426\u4E3A\u900F\u660E\u80CC\u666F\uFF0C\u5F00\u542F\u540E\u4F1A\u53BB\u6389\u80CC\u666F\u3001\u8FB9\u6846\u548C\u5185\u90E8\u95F4\u8DDD\uFF0C\u53EF\u7528\u4E8E\u8F7B\u91CF\u63D0\u793A\u6216\u8005\u63D0\u793A\u5185\u5D4C\u7B49\u573A\u666F",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"false",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"colored",paraId:1,tocIndex:9},{value:"\u662F\u5426\u5168\u5C40\u7740\u8272\uFF0C\u5305\u62EC\u6587\u672C\u3001\u5173\u95ED icon \u7B49",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"false",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Alert \u6587\u6863: ",paraId:2,tocIndex:9},{value:"https://ant.design/components/alert-cn",paraId:2,tocIndex:9}]},11812:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(80369);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Badge",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"icon",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301\u72B6\u6001\u56FE\u6807\uFF0C\u4EC5\u8BBE\u7F6E\u4E86 ",paraId:0},{value:"status",paraId:0},{value:" \u6709\u6548\u3002",paraId:0},{value:"\u{1F4E2} \u72B6\u6001\u6587\u672C\u7684\u9ED8\u8BA4\u5B57\u4F53\u989C\u8272\uFF0C\u4F1A\u7EE7\u627F\u7236\u5143\u7D20\u7684\u8BBE\u7F6E\uFF0C\u800C\u4E0D\u603B\u662F ",paraId:0},{value:"token.colorText",paraId:0},{value:"\uFF0C\u4FBF\u4E8E\u548C\u5176\u4ED6\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:9},{value:"\u8BF4\u660E",paraId:1,tocIndex:9},{value:"\u7C7B\u578B",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:9},{value:"\u7248\u672C",paraId:1,tocIndex:9},{value:"icon",paraId:1,tocIndex:9},{value:"\u662F\u5426\u4E3A\u56FE\u6807\u6A21\u5F0F\uFF0C\u503C\u4E3A true \u65F6\u5C55\u793A\u9ED8\u8BA4\u56FE\u6807\uFF0C\u503C\u4E3A ReactNode \u65F6\u5C55\u793A\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:1,tocIndex:9},{value:"boolean | React.ReactNode",paraId:1,tocIndex:9},{value:"false",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Badge \u6587\u6863: ",paraId:2,tocIndex:9},{value:"https://ant.design/components/badge-cn",paraId:2,tocIndex:9}]},84988:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(99517);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Breadcrumb",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Breadcrumb \u6587\u6863: ",paraId:1,tocIndex:4},{value:"https://ant.design/components/breadcrumb-cn",paraId:1,tocIndex:4}]},14347:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(15664);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Button",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Button \u6587\u6863: ",paraId:1,tocIndex:7},{value:"https://ant.design/components/button-cn",paraId:1,tocIndex:7}]},63547:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(77792);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Card",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"divided",paraId:0},{value:" \u5C5E\u6027\uFF0C\u63A7\u5236\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"tabList",paraId:0},{value:" \u65B0\u589E ",paraId:0},{value:"tag",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u9009\u9879\u5361\u540E\u9762\u7684\u6807\u7B7E\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:9},{value:"\u8BF4\u660E",paraId:1,tocIndex:9},{value:"\u7C7B\u578B",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:9},{value:"\u7248\u672C",paraId:1,tocIndex:9},{value:"divided",paraId:1,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"true",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"tabList",paraId:1,tocIndex:9},{value:"\u9875\u7B7E\u6807\u9898\u5217\u8868",paraId:1,tocIndex:9},{value:"{key: string, tab: ReactNode, tag: ReactNode }[]",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Card \u6587\u6863: ",paraId:2,tocIndex:9},{value:"https://ant.design/components/card-cn",paraId:2,tocIndex:9}]},20967:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(47846);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Cascader",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Cascader \u6587\u6863: ",paraId:1,tocIndex:3},{value:"https://ant.design/components/cascader-cn",paraId:1,tocIndex:3}]},21442:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(17539);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"ConfigProvider",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F308} \u5B9A\u5236\u5168\u5C40\u4E3B\u9898\u548C\u7A7A\u72B6\u6001\uFF0C\u4EE5\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u9ED8\u8BA4\u5185\u5D4C ",paraId:0},{value:"App \u5305\u88F9\u7EC4\u4EF6",paraId:0},{value:"\uFF0C\u652F\u6301 message, notification \u548C Modal \u7B49\u9759\u6001\u65B9\u6CD5\u6D88\u8D39 ConfigProvider \u914D\u7F6E\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"theme.isAliyun",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u5F00\u542F\u963F\u91CC\u4E91\u4E3B\u9898\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"theme.customFont",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u5F00\u542F ",paraId:0},{value:"Source Sans Pro",paraId:0},{value:" \u5B9A\u5236\u5B57\u4F53\u4EE5\u63D0\u5347\u5C55\u793A\u6548\u679C\uFF0C\u4EC5\u652F\u6301\u7EBF\u4E0A\u5E94\u7528\u548C\u82F1\u6587\u73AF\u5883\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"locale.Input.placeholder",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u914D\u7F6E Input \u7684\u9ED8\u8BA4 ",paraId:0},{value:"placeholder",paraId:0},{value:"\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"table.selectionColumnWidth",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u914D\u7F6E\u8868\u683C\u7684\u5C55\u5F00\u5217\u5BBD\u5EA6\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"injectStaticFunction",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u914D\u7F6E ",paraId:0},{value:"message",paraId:0},{value:", ",paraId:0},{value:"notification",paraId:0},{value:" \u548C ",paraId:0},{value:"Modal",paraId:0},{value:" \u9759\u6001\u65B9\u6CD5\u662F\u5426\u53EF\u4EE5\u6D88\u8D39\u5168\u5C40\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u5F00\u542F\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:1},{value:"styleProviderProps",paraId:1},{value:" \u5C5E\u6027\uFF0C\u4E00\u822C\u7528\u4E8E\u914D\u7F6E ",paraId:1},{value:"StyleProvider",paraId:1},{value:" \u7684 ",paraId:1},{value:"hashPriority",paraId:1},{value:" \u548C ",paraId:1},{value:"transformers",paraId:1},{value:" \u5C5E\u6027\u5B9E\u73B0\u6837\u5F0F\u964D\u7EA7\uFF0C\u6765\u517C\u5BB9 Chrome 88 \u4EE5\u4E0B\u7684\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\uFF0C\u8BE6\u89C1 ",paraId:1},{value:"antd v5 \u6837\u5F0F\u517C\u5BB9\u8BF4\u660E",paraId:1},{value:"\u3002",paraId:1},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:6},{value:"prefixCls",paraId:2,tocIndex:6},{value:" \u548C ",paraId:2,tocIndex:6},{value:"iconPrefixCls",paraId:2,tocIndex:6},{value:" \u53EF\u8BBE\u7F6E antd \u7EC4\u4EF6\u548C\u56FE\u6807\u7684\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00\u3002",paraId:2,tocIndex:6},{value:`import React, { useState } from 'react';
import { ConfigProvider } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider prefixCls="prefix" iconPrefixCls="icon-prefix">
      {...}
    </ConfigProvider>
  );
};

export default App;
`,paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"\u7248\u672C",paraId:4,tocIndex:7},{value:"theme.isAliyun",paraId:4,tocIndex:7},{value:"\u7528\u4E8E\u5F00\u542F\u963F\u91CC\u4E91\u4E3B\u9898",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"0.3.5",paraId:4,tocIndex:7},{value:"theme.customFont",paraId:4,tocIndex:7},{value:"\u7528\u4E8E\u5F00\u542F ",paraId:4,tocIndex:7},{value:"Source Sans Pro",paraId:4,tocIndex:7},{value:" \u5B9A\u5236\u5B57\u4F53\u4EE5\u63D0\u5347\u5C55\u793A\u6548\u679C\uFF0C\u4EC5\u652F\u6301\u7EBF\u4E0A\u5E94\u7528\u548C\u82F1\u6587\u73AF\u5883",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"0.3.1",paraId:4,tocIndex:7},{value:"locale.Input.placeholder",paraId:4,tocIndex:7},{value:"\u7528\u4E8E\u914D\u7F6E Input \u7684\u9ED8\u8BA4 ",paraId:4,tocIndex:7},{value:"placeholder",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"0.3.2",paraId:4,tocIndex:7},{value:"spin",paraId:4,tocIndex:7},{value:"Spin \u5168\u5C40\u914D\u7F6E",paraId:4,tocIndex:7},{value:"{ indicator?: ReactNode; className?: string; style?: React.CSSProperties; }",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"table",paraId:4,tocIndex:7},{value:"Table \u5168\u5C40\u914D\u7F6E",paraId:4,tocIndex:7},{value:"{ selectionColumnWidth?: width; className?: string; style?: React.CSSProperties; }",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"injectStaticFunction",paraId:4,tocIndex:7},{value:"\u7528\u4E8E\u914D\u7F6E ",paraId:4,tocIndex:7},{value:"message",paraId:4,tocIndex:7},{value:", ",paraId:4,tocIndex:7},{value:"notification",paraId:4,tocIndex:7},{value:" \u548C ",paraId:4,tocIndex:7},{value:"Modal",paraId:4,tocIndex:7},{value:" \u9759\u6001\u65B9\u6CD5\u662F\u5426\u53EF\u4EE5\u6D88\u8D39\u5168\u5C40\u914D\u7F6E ",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"true",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"styleProviderProps",paraId:4,tocIndex:7},{value:"StyleProvider \u914D\u7F6E",paraId:4,tocIndex:7},{value:"\uFF0C\u4E00\u822C\u7528\u4E8E\u914D\u7F6E ",paraId:4,tocIndex:7},{value:"hashPriority",paraId:4,tocIndex:7},{value:" \u548C ",paraId:4,tocIndex:7},{value:"transformers",paraId:4,tocIndex:7},{value:" \u5C5E\u6027\u5B9E\u73B0\u6837\u5F0F\u964D\u7EA7",paraId:4,tocIndex:7},{value:"StyleProviderProps",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u66F4\u591A API \u8BE6\u89C1 antd ConfigProvider \u6587\u6863: ",paraId:5,tocIndex:7},{value:"https://ant.design/components/config-provider-cn",paraId:5,tocIndex:7}]},84009:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(26052);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Descriptions",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u5168\u5C40\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u65E0\u8FB9\u6846\u6A21\u5F0F\u4E0B\uFF0C\u63CF\u8FF0\u9879\u5185\u5BB9\u6EA2\u51FA\u65F6\u81EA\u52A8\u7701\u7565\uFF0C\u5E76\u5C55\u793A ",paraId:0},{value:"Tooltip",paraId:0},{value:"\u3002",paraId:0},{value:"\u{1F195} \u65E0\u8FB9\u6846\u6A21\u5F0F\u4E0B\uFF0C",paraId:0},{value:"items",paraId:0},{value:" \u548C Descriptions.Item \u65B0\u589E ",paraId:0},{value:"contentProps",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u7701\u7565\u3001\u7F16\u8F91\u3001\u590D\u5236\u7B49\u5185\u5BB9\u5C5E\u6027\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"\u7248\u672C",paraId:1,tocIndex:7},{value:"contentProps",paraId:1,tocIndex:7},{value:"\u5185\u5BB9\u5C5E\u6027\uFF0C\u4EC5\u65E0\u8FB9\u6846\u6A21\u5F0F\u751F\u6548",paraId:1,tocIndex:7},{value:"TextProps",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Descriptions \u6587\u6863: ",paraId:2,tocIndex:7},{value:"https://ant.design/components/descriptions-cn",paraId:2,tocIndex:7}]},54480:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(72029);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Drawer",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:`\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\uFF0C\u6BD4\u5982\uFF1A
`,paraId:0},{value:"\u6309\u94AE\u533A\u548C\u4E3B\u6309\u94AE\u4F4D\u7F6E\u5C45\u5DE6\u5C55\u793A\u3002",paraId:1},{value:"\u5185\u5BB9\u533A\u6EDA\u52A8\u65F6\uFF0C\u52A8\u6001\u8BBE\u7F6E\u9875\u5934\u548C\u9875\u811A\u7684\u9634\u5F71\u3002",paraId:1},{value:"\u5F53\u5185\u5BB9\u9AD8\u5EA6\u5927\u4E8E\u7B49\u4E8E\u62BD\u5C49\u9AD8\u5EA6\u65F6\uFF0C\u9875\u811A\u4F1A\u7F6E\u5E95\u5C55\u793A\uFF1B\u5F53\u5185\u5BB9\u9AD8\u5EA6\u5C0F\u4E8E\u62BD\u5C49\u9AD8\u5EA6\u65F6\uFF0C",paraId:1},{value:"footer",paraId:1},{value:" \u4F1A\u8DDF\u968F\u5185\u5BB9\u5C55\u793A\u3002",paraId:1},{value:"\u{1F4E2} ",paraId:0},{value:"destroyOnClose",paraId:0},{value:" \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u4E3A ",paraId:0},{value:"true",paraId:0},{value:"\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"footer",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u62BD\u5C49\u7684\u5E95\u90E8\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:0},{value:"\u53D6\u6D88",paraId:0},{value:" \u548C ",paraId:0},{value:"\u786E\u5B9A",paraId:0},{value:" \u6309\u94AE\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"footerExtra",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u62BD\u5C49\u5E95\u90E8\u7684\u989D\u5916\u5185\u5BB9\uFF0C\u4EC5\u9ED8\u8BA4\u9875\u811A\u751F\u6548\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"onOk",paraId:0},{value:" \u548C ",paraId:0},{value:"onCancel",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E ",paraId:0},{value:"\u53D6\u6D88",paraId:0},{value:" \u548C ",paraId:0},{value:"\u786E\u5B9A",paraId:0},{value:" \u6309\u94AE\u7684\u56DE\u8C03\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"cancelText",paraId:0},{value:" \u548C ",paraId:0},{value:"okText",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E ",paraId:0},{value:"\u53D6\u6D88",paraId:0},{value:" \u548C ",paraId:0},{value:"\u786E\u5B9A",paraId:0},{value:" \u6309\u94AE\u7684\u6587\u5B57\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"okButtonProps",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E ",paraId:0},{value:"\u786E\u5B9A",paraId:0},{value:" \u6309\u94AE\u7684\u5C5E\u6027\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"confirmLoading",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E ",paraId:0},{value:"\u786E\u5B9A",paraId:0},{value:" \u6309\u94AE\u7684\u52A0\u8F7D\u6001\u3002",paraId:0},{value:"\u53C2\u6570",paraId:2,tocIndex:9},{value:"\u8BF4\u660E",paraId:2,tocIndex:9},{value:"\u7C7B\u578B",paraId:2,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:9},{value:"\u7248\u672C",paraId:2,tocIndex:9},{value:"destroyOnClose",paraId:2,tocIndex:9},{value:"\u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20",paraId:2,tocIndex:9},{value:"boolean",paraId:2,tocIndex:9},{value:"true",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"onOk",paraId:2,tocIndex:9},{value:"\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03\uFF0C\u8BBE\u7F6E\u65F6\u4F1A\u5F00\u542F\u9ED8\u8BA4\u9875\u811A",paraId:2,tocIndex:9},{value:"(e) => void",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"onCancel",paraId:2,tocIndex:9},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03",paraId:2,tocIndex:9},{value:"(e) => void",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"cancelText",paraId:2,tocIndex:9},{value:"\u8BBE\u7F6E\u53D6\u6D88\u6309\u94AE\u6587\u5B57",paraId:2,tocIndex:9},{value:"string",paraId:2,tocIndex:9},{value:"\u53D6\u6D88",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"okText",paraId:2,tocIndex:9},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57",paraId:2,tocIndex:9},{value:"string",paraId:2,tocIndex:9},{value:"\u786E\u5B9A",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"okButtonProps",paraId:2,tocIndex:9},{value:"ok \u6309\u94AE props",paraId:2,tocIndex:9},{value:"ButtonProps",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"confirmLoading",paraId:2,tocIndex:9},{value:"\u786E\u5B9A\u6309\u94AE loading",paraId:2,tocIndex:9},{value:"boolean",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"footer",paraId:2,tocIndex:9},{value:"\u62BD\u5C49\u7684\u9875\u811A",paraId:2,tocIndex:9},{value:"boolean | ReactNode",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"footerExtra",paraId:2,tocIndex:9},{value:"\u62BD\u5C49\u9875\u811A\u7684\u989D\u5916\u5185\u5BB9\uFF0C\u4EC5\u9ED8\u8BA4\u9875\u811A\u751F\u6548",paraId:2,tocIndex:9},{value:"ReactNode",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Drawer \u6587\u6863: ",paraId:3,tocIndex:9},{value:"https://ant.design/components/drawer-cn",paraId:3,tocIndex:9}]},96421:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(95567);const o=[{value:"\u{1F525} \u5B8C\u5168\u517C\u5BB9 antd ",paraId:0},{value:"Empty",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u63D2\u56FE\u3001\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u4EE5\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} \u4E0D\u518D\u533A\u5206\u9ED8\u8BA4\u56FE\u7247\u548C\u7B80\u5355\u56FE\u7247\uFF0C\u5373 PRESENTED_IMAGE_DEFAULT \u548C PRESENTED_IMAGE_SIMPLE \u56FE\u7247\u76F8\u540C\u3002",paraId:0},{value:"\u2B50\uFE0F \u65B0\u589E PRESENTED_IMAGE_COLORED \u5185\u7F6E\u56FE\u7247\uFF0C\u7528\u4E8E\u9875\u9762\u548C\u533A\u5757\u7EA7\u7684\u7A7A\u72B6\u6001\u573A\u666F\u3002",paraId:0},{value:"\u2B50\uFE0F \u65B0\u589E PRESENTED_IMAGE_DATABASE \u5185\u7F6E\u56FE\u7247\uFF0C\u7528\u4E8E\u6570\u636E\u5E93\u5B9E\u4F8B\u7684\u7A7A\u72B6\u6001\u573A\u666F\u3002",paraId:0},{value:"\u2B50\uFE0F \u65B0\u589E PRESENTED_IMAGE_GUIDE \u5185\u7F6E\u56FE\u7247\uFF0C\u7528\u4E8E\u529F\u80FD\u5F00\u901A\u7B49\u5F15\u5BFC\u7C7B\u573A\u666F\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"title",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u7A7A\u72B6\u6001\u6807\u9898\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"steps",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u6B65\u9AA4\u63D0\u793A\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"layout",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u7A7A\u72B6\u6001\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:0},{value:"vertical",paraId:0},{value:"\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:10},{value:"\u8BF4\u660E",paraId:1,tocIndex:10},{value:"\u7C7B\u578B",paraId:1,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:10},{value:"\u7248\u672C",paraId:1,tocIndex:10},{value:"title",paraId:1,tocIndex:10},{value:"\u6807\u9898",paraId:1,tocIndex:10},{value:"React.ReactNode",paraId:1,tocIndex:10},{value:"horizontal",paraId:1,tocIndex:10},{value:"-",paraId:1,tocIndex:10},{value:"steps",paraId:1,tocIndex:10},{value:"\u6B65\u9AA4\u63D0\u793A",paraId:1,tocIndex:10},{value:"StepItem",paraId:1,tocIndex:10},{value:"[]",paraId:1,tocIndex:10},{value:"-",paraId:1,tocIndex:10},{value:"-",paraId:1,tocIndex:10},{value:"layout",paraId:1,tocIndex:10},{value:"\u5E03\u5C40",paraId:1,tocIndex:10},{value:"vertical | horizontal",paraId:1,tocIndex:10},{value:"vertical",paraId:1,tocIndex:10},{value:"-",paraId:1,tocIndex:10},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Empty \u6587\u6863: ",paraId:2,tocIndex:10},{value:"https://ant.design/components/Empty-cn",paraId:2,tocIndex:10},{value:"RESENTED_IMAGE_DEFAULT \u548C PRESENTED_IMAGE_SIMPLE",paraId:3,tocIndex:11},{value:"PRESENTED_IMAGE_COLORED",paraId:4,tocIndex:11},{value:"PRESENTED_IMAGE_DATABASE",paraId:5,tocIndex:11},{value:"PRESENTED_IMAGE_GUIDE",paraId:6,tocIndex:11}]},37361:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(34862);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Form",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} Form ",paraId:0},{value:"preserve",paraId:0},{value:" \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u4E3A ",paraId:0},{value:"true",paraId:0},{value:"\u3002",paraId:0},{value:"\u{1F4E2} Form ",paraId:0},{value:"requiredMark",paraId:0},{value:" \u9ED8\u8BA4\u4E3A ",paraId:0},{value:"optional",paraId:0},{value:" \u53EF\u9009\u6837\u5F0F\u3002",paraId:0},{value:"\u{1F195} Form.Item ",paraId:0},{value:"tooltip",paraId:0},{value:" \u65B0\u589E ",paraId:0},{value:"type",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301\u4E0D\u540C\u7C7B\u578B\u7684 Tooltip \u63D0\u793A\uFF0C\u8BE6\u89C1 ",paraId:0},{value:"Tooltip \u6587\u6863",paraId:1},{value:"\u3002",paraId:0},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"\u7248\u672C",paraId:2,tocIndex:6},{value:"preserve",paraId:2,tocIndex:6},{value:"\u5F53\u5B57\u6BB5\u88AB\u5220\u9664\u65F6\u4FDD\u7559\u5B57\u6BB5\u503C\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:6},{value:"getFieldsValue(true)",paraId:2,tocIndex:6},{value:" \u6765\u83B7\u53D6\u4FDD\u7559\u5B57\u6BB5\u503C",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"0.3.1",paraId:2,tocIndex:6},{value:"requiredMark",paraId:2,tocIndex:6},{value:"\u8BBE\u7F6E\u5FC5\u9009\u6216\u53EF\u9009\u6837\u5F0F\u3002\u6B64\u4E3A Form \u914D\u7F6E\uFF0CForm.Item \u65E0\u6CD5\u5355\u72EC\u914D\u7F6E",paraId:2,tocIndex:6},{value:"boolean | ",paraId:2,tocIndex:6},{value:"optional",paraId:2,tocIndex:6},{value:" | ((label: ReactNode, info: { required: boolean }) => ReactNode)",paraId:2,tocIndex:6},{value:"optional",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Form \u6587\u6863: ",paraId:3,tocIndex:6},{value:"https://ant.design/components/form-cn",paraId:3,tocIndex:6}]},79231:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(8361);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Grid",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:" ",paraId:1},{value:"\u8BE6\u89C1 antd Grid \u6587\u6863: ",paraId:2},{value:"https://ant.design/components/grid-cn/",paraId:2}]},63779:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(87533);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Icon",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F195} \u5728 antd \u56FE\u6807\u57FA\u7840\u4E0A\uFF0C\u65B0\u589E\u4E0A\u767E\u4E2A\u901A\u7528\u56FE\u6807\u548C OceanBase \u4E1A\u52A1\u56FE\u6807\u3002",paraId:0},{value:"\u4F7F\u7528\u56FE\u6807\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 ",paraId:1,tocIndex:0},{value:"@oceanbase/icons",paraId:1,tocIndex:0},{value:" \u56FE\u6807\u7EC4\u4EF6\u5305\uFF1A",paraId:1,tocIndex:0},{value:`npm install --save @oceanbase/icons
`,paraId:2,tocIndex:0},{value:"\u8BE6\u89C1 antd Icon \u6587\u6863: ",paraId:3,tocIndex:4},{value:"https://ant.design/components/icon-cn",paraId:3,tocIndex:4}]},16058:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(25702);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"InputNumber",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\uFF0C\u6BD4\u5982\u603B\u662F\u5C55\u793A\u4E0A\u4E0B\u7BAD\u5934\u3002",paraId:0},{value:"\u8BE6\u89C1 antd InputNumber \u6587\u6863: ",paraId:1,tocIndex:5},{value:"https://ant.design/components/input-number-cn",paraId:1,tocIndex:5}]},85554:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(62541);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Input",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} \u9ED8\u8BA4\u586B\u5145 ",paraId:0},{value:"placeholder",paraId:0},{value:"\uFF0C\u5E76\u652F\u6301\u901A\u8FC7 ConfigProvider ",paraId:0},{value:"locale.Input.placeholder",paraId:0},{value:" \u8FDB\u884C\u5168\u5C40\u914D\u7F6E\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Input \u6587\u6863: ",paraId:1,tocIndex:6},{value:"https://ant.design/components/input-cn",paraId:1,tocIndex:6}]},94677:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(71608);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"List",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u8BE6\u89C1 antd List \u6587\u6863: ",paraId:1,tocIndex:3},{value:"https://ant.design/components/list-cn",paraId:1,tocIndex:3}]},72482:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(91910);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Message",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"message.method()",paraId:0},{value:" \u9759\u6001\u65B9\u6CD5\uFF0C\u652F\u6301\u6D88\u8D39 ",paraId:0},{value:"ConfigProvider",paraId:0},{value:" \u5168\u5C40\u914D\u7F6E\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Message \u6587\u6863: ",paraId:1,tocIndex:2},{value:"https://ant.design/components/message-cn",paraId:1,tocIndex:2}]},65597:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(63562);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Modal",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} ",paraId:0},{value:"destroyOnClose",paraId:0},{value:" \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u4E3A ",paraId:0},{value:"true",paraId:0},{value:"\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"Modal.Progress",paraId:0},{value:" \u7EC4\u4EF6\uFF0C\u53EF\u7528\u4E8E\u5F02\u6B65\u4EFB\u52A1\u6216\u8017\u65F6\u8F83\u957F\u7684\u573A\u666F\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"Modal.method()",paraId:0},{value:" \u9759\u6001\u65B9\u6CD5\uFF0C\u652F\u6301\u6D88\u8D39 ",paraId:0},{value:"ConfigProvider",paraId:0},{value:" \u5168\u5C40\u914D\u7F6E\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"\u7248\u672C",paraId:1,tocIndex:7},{value:"destroyOnClose",paraId:1,tocIndex:7},{value:"\u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"true",paraId:1,tocIndex:7},{value:"0.3.1",paraId:1,tocIndex:7},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Modal \u6587\u6863: ",paraId:2,tocIndex:7},{value:"https://ant.design/components/modal-cn#api",paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"\u7248\u672C",paraId:3,tocIndex:8},{value:"width",paraId:3,tocIndex:8},{value:"\u5BF9\u8BDD\u6846\u5BBD\u5EA6",paraId:3,tocIndex:8},{value:"string | number",paraId:3,tocIndex:8},{value:"480",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"maskClosable",paraId:3,tocIndex:8},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"destroyOnClose",paraId:3,tocIndex:8},{value:"\u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"true",paraId:3,tocIndex:8},{value:"0.3.1",paraId:3,tocIndex:8},{value:"title",paraId:3,tocIndex:8},{value:"\u6807\u9898",paraId:3,tocIndex:8},{value:"ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"loading",paraId:3,tocIndex:8},{value:"\u662F\u5426\u52A0\u8F7D\u4E2D",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"progress",paraId:3,tocIndex:8},{value:"\u8FDB\u5EA6\u6761\u5C5E\u6027",paraId:3,tocIndex:8},{value:"ProgressProps",paraId:3,tocIndex:8},{value:"{ type: 'circle', size: 150  }",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"description",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"footer",paraId:3,tocIndex:8},{value:"\u5E95\u90E8\u5185\u5BB9",paraId:3,tocIndex:8},{value:"ReactNode",paraId:3,tocIndex:8},{value:"null",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Modal \u6587\u6863: ",paraId:4,tocIndex:8},{value:"https://ant.design/components/modal-cn#api",paraId:4,tocIndex:8},{value:"\u8BE6\u89C1 antd Modal.method() \u6587\u6863 ",paraId:5,tocIndex:9},{value:"https://ant.design/components/modal-cn#modalmethod",paraId:5,tocIndex:9}]},83495:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(43753);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Notification",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"notification.method()",paraId:0},{value:" \u9759\u6001\u65B9\u6CD5\uFF0C\u652F\u6301\u6D88\u8D39 ",paraId:0},{value:"ConfigProvider",paraId:0},{value:" \u5168\u5C40\u914D\u7F6E\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Notification \u6587\u6863: ",paraId:1,tocIndex:2},{value:"https://ant.design/components/notification-cn",paraId:1,tocIndex:2}]},59689:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(9044);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Radio",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Radio \u6587\u6863: ",paraId:1,tocIndex:3},{value:"https://ant.design/components/radio-cn",paraId:1,tocIndex:3}]},4063:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(48561);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Result",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u63D2\u56FE\u3001\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u4EE5\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"status",paraId:0},{value:" \u5C5E\u6027\u65B0\u589E ",paraId:0},{value:"processing",paraId:0},{value:" \u679A\u4E3E\u503C\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u8FDB\u884C\u4E2D\u7684\u72B6\u6001\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:10},{value:"\u8BF4\u660E",paraId:1,tocIndex:10},{value:"\u7C7B\u578B",paraId:1,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:10},{value:"\u7248\u672C",paraId:1,tocIndex:10},{value:"status",paraId:1,tocIndex:10},{value:"\u72B6\u6001",paraId:1,tocIndex:10},{value:"success | error | warning | processing | info | 403 | 404 | 500",paraId:1,tocIndex:10},{value:"info",paraId:1,tocIndex:10},{value:"-",paraId:1,tocIndex:10},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Result \u6587\u6863: ",paraId:2,tocIndex:10},{value:"https://ant.design/components/result-cn",paraId:2,tocIndex:10}]},8108:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(98023);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Segmented",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF08\u989C\u8272\u5BBD\u5EA6\u7B49\uFF09\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"options",paraId:0},{value:" \u9009\u9879\u65B0\u589E ",paraId:0},{value:"ellipsis",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u914D\u7F6E\u5185\u5BB9\u6EA2\u51FA\u65F6\u51FA\u73B0\u7701\u7565\u548C Tooltip \u63D0\u793A\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"\u7248\u672C",paraId:1,tocIndex:7},{value:"options",paraId:1,tocIndex:7},{value:"\u9009\u9879\u5217\u8868",paraId:1,tocIndex:7},{value:"string[] | number[] | { label: ReactNode; value: string; icon?: ReactNode; disabled?: boolean; ellipsis?: ",paraId:1,tocIndex:7},{value:"EllipsisConfig",paraId:1,tocIndex:7},{value:"; className?: string }[]",paraId:1,tocIndex:7},{value:"[]",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Segmented \u6587\u6863: ",paraId:2,tocIndex:7},{value:"https://ant.design/components/segmented-cn",paraId:2,tocIndex:7}]},76166:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(97078);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Select",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} \u9ED8\u8BA4\u586B\u5145 ",paraId:0},{value:"placeholder",paraId:0},{value:"\uFF0C\u5E76\u652F\u6301\u901A\u8FC7 ConfigProvider ",paraId:0},{value:"locale.global.placeholder",paraId:0},{value:" \u6216 ",paraId:0},{value:"locale.Select.placeholder",paraId:0},{value:" \u8FDB\u884C\u5168\u5C40\u914D\u7F6E\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Select \u6587\u6863: ",paraId:1},{value:"https://ant.design/components/select-cn/",paraId:1}]},67987:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(12294);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Space",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"  ",paraId:1},{value:" ",paraId:2},{value:"\u8BE6\u89C1 antd Space \u6587\u6863: ",paraId:3},{value:"https://ant.design/components/space-cn/",paraId:3}]},77090:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(52658);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Spin",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u5B9A\u5236 ",paraId:0},{value:"indicator",paraId:0},{value:" \u52A0\u8F7D\u6307\u793A\u7B26\uFF0C\u652F\u6301 ",paraId:0},{value:"\u9ED8\u8BA4",paraId:0},{value:" \u548C ",paraId:0},{value:"\u7070\u8272",paraId:0},{value:" \u4E24\u79CD\u7C7B\u578B\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:8},{value:"\u8BF4\u660E",paraId:1,tocIndex:8},{value:"\u7C7B\u578B",paraId:1,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:8},{value:"\u7248\u672C",paraId:1,tocIndex:8},{value:"gray",paraId:1,tocIndex:8},{value:"\u662F\u5426\u4E3A\u7070\u8272\u7684\u52A0\u8F7D\u6307\u793A\u7B26\uFF0C\u4EC5\u9488\u5BF9\u9ED8\u8BA4\u6307\u793A\u7B26\u751F\u6548\uFF0C\u5173\u95ED\u540E\u4E3A\u5F69\u8272\u7684\u52A0\u8F7D\u6307\u793A\u7B26",paraId:1,tocIndex:8},{value:"boolean",paraId:1,tocIndex:8},{value:"true",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Spin \u6587\u6863: ",paraId:2,tocIndex:8},{value:"https://ant.design/components/spin-cn",paraId:2,tocIndex:8}]},35694:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(36496);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Switch",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\uFF0C\u6BD4\u5982\u603B\u662F\u5C55\u793A\u4E0A\u4E0B\u7BAD\u5934\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Switch \u6587\u6863: ",paraId:1,tocIndex:5},{value:"https://ant.design/components/switch-cn",paraId:1,tocIndex:5}]},51529:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(99831);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Alert",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u8BBE\u7F6E ",paraId:0},{value:"column.ellipsis",paraId:0},{value:"\uFF0C\u5F00\u542F\u81EA\u52A8\u7701\u7565\uFF0C\u5E76\u4F7F\u7528 Tooltip \u5C55\u793A\u5168\u90E8\u5185\u5BB9\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"\u6279\u91CF\u64CD\u4F5C\u680F",paraId:0},{value:"\uFF0C\u53EF\u914D\u7F6E\u9009\u4E2D\u5BF9\u8C61\u3001\u6279\u91CF\u64CD\u4F5C\u9879\u7B49\uFF0C\u8BE6\u89C1 ",paraId:0},{value:"API",paraId:1},{value:"\u3002",paraId:0},{value:"\u53C2\u6570",paraId:2,tocIndex:16},{value:"\u8BF4\u660E",paraId:2,tocIndex:16},{value:"\u7C7B\u578B",paraId:2,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:16},{value:"\u7248\u672C",paraId:2,tocIndex:16},{value:"pagination",paraId:2,tocIndex:16},{value:"\u5206\u9875\u914D\u7F6E",paraId:2,tocIndex:16},{value:"ReactNode",paraId:2,tocIndex:16},{value:"{}",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"cancelText",paraId:2,tocIndex:16},{value:"\u9009\u62E9\u8868\u683C\u4E2D \u53D6\u6D88 \u6309\u94AE\u6587\u6848",paraId:2,tocIndex:16},{value:"ReactNode",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"collapseText",paraId:2,tocIndex:16},{value:"\u9009\u62E9\u8868\u683C\u4E2D \u6536\u8D77 \u6309\u94AE\u6587\u6848",paraId:2,tocIndex:16},{value:"ReactNode",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"openText",paraId:2,tocIndex:16},{value:"\u9009\u62E9\u8868\u683C\u4E2D \u5C55\u5F00 \u6309\u94AE\u6587\u6848",paraId:2,tocIndex:16},{value:"ReactNode",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"hiddenCancelBtn",paraId:2,tocIndex:16},{value:"\u9009\u62E9\u8868\u683C\u4E2D\u662F\u5426\u9690\u85CF\u53D6\u6D88\u6309\u94AE",paraId:2,tocIndex:16},{value:"boolean",paraId:2,tocIndex:16},{value:"false",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"locale",paraId:2,tocIndex:16},{value:"Table \u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E\uFF0C\u76EE\u524D\u5305\u62EC\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u7A7A\u6570\u636E\u6587\u6848",paraId:2,tocIndex:16},{value:"object",paraId:2,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"toolOptionsRender",paraId:2,tocIndex:16},{value:"\u6E32\u67D3\u5DE5\u5177\u680F\uFF0C\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A dom \u6570\u7EC4\uFF0C\u4F1A\u81EA\u52A8\u589E\u52A0 margin",paraId:2,tocIndex:16},{value:"(selectedRowKeys, selectedRows) => ReactNode[]",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"toolAlertRender",paraId:2,tocIndex:16},{value:"\u6E32\u67D3 alert \u63D0\u793A\u4FE1\u606F",paraId:2,tocIndex:16},{value:"((selectedRowKeys, selectedRows) => ReactNode) | false\uFF0C\u8BBE\u7F6E false \u53D6\u6D88 alert \u63D0\u793A",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"toolSelectedContent",paraId:2,tocIndex:16},{value:"\u6E32\u67D3\u5C55\u5F00\u5185\u5BB9",paraId:2,tocIndex:16},{value:"(selectedRowKeys, selectedRows) => ReactNode",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"-",paraId:2,tocIndex:16},{value:"\u8BE6\u89C1 antd Table \u6587\u6863: ",paraId:3,tocIndex:16},{value:"https://ant.design/components/table-cn",paraId:3,tocIndex:16}]},56693:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(66952);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Tabs",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF08\u706B\u67F4\u68CD\u5BBD\u5EA6\u7B49\uFF09\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} ",paraId:0},{value:"items",paraId:0},{value:" \u548C ",paraId:0},{value:"TabPane",paraId:0},{value:" \u65B0\u589E ",paraId:0},{value:"tag",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u9009\u9879\u5361\u540E\u9762\u7684\u6807\u7B7E\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"\u7248\u672C",paraId:1,tocIndex:7},{value:"tag",paraId:1,tocIndex:7},{value:"\u7528\u4E8E\u8BBE\u7F6E\u9009\u9879\u5361\u540E\u9762\u7684\u6807\u7B7E",paraId:1,tocIndex:7},{value:"ReactNode",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Tabs \u6587\u6863: ",paraId:2,tocIndex:7},{value:"https://ant.design/components/tabs-cn",paraId:2,tocIndex:7}]},8545:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(17948);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Tag",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"ellipsis",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u914D\u7F6E\u5185\u5BB9\u6EA2\u51FA\u65F6\u7684\u7701\u7565\u548C Tooltip \u63D0\u793A\u3002",paraId:0},{value:" ",paraId:1},{value:" ",paraId:2},{value:" ",paraId:3},{value:" ",paraId:4},{value:" ",paraId:5},{value:" ",paraId:6},{value:"\u53C2\u6570",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u7C7B\u578B",paraId:7,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:8},{value:"ellipsis",paraId:7,tocIndex:8},{value:"\u5185\u5BB9\u8D85\u957F\u65F6\u662F\u5426\u81EA\u52A8\u7701\u7565",paraId:7,tocIndex:8},{value:"boolean",paraId:7,tocIndex:8},{value:" | ",paraId:7,tocIndex:8},{value:"EllipsisConfig",paraId:7,tocIndex:8},{value:"true",paraId:7,tocIndex:8},{value:"\u8BE6\u89C1 antd Tag \u6587\u6863: ",paraId:8,tocIndex:8},{value:"https://ant.design/components/tag-cn/",paraId:8,tocIndex:8}]},63484:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(76447);const o=[{value:"OceanBase Design \u7684\u8BBE\u8BA1\u4F53\u7CFB\u9075\u5FAA Ant Design 5.0 \u8BBE\u8BA1\u89C4\u8303\uFF0C\u5E76\u5728\u6B64\u57FA\u7840\u4E0A\u6269\u5C55\u51FA\u4E86\u5F88\u591A\u5177\u5907 OceanBase \u4EA7\u54C1\u98CE\u683C\u7684\u8BBE\u8BA1\u89C4\u8303\u6A21\u5F0F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5168\u5C40\u6837\u5F0F\uFF08\u8272\u677F\u3001\u5706\u89D2\u3001\u8FB9\u6846\uFF09\u548C\u7279\u5B9A\u7EC4\u4EF6\u7684\u89C6\u89C9\u5B9A\u5236\uFF0C\u4EE5\u4F20\u9012 OceanBase \u79D1\u6280\u3001\u6D3B\u529B\u3001\u4E13\u6CE8\u548C\u5173\u6000\u7684\u54C1\u724C\u7279\u70B9\u3002",paraId:0},{value:"OceanBase Design Token \u7531\u8BBE\u8BA1\u5E08\u8FDB\u884C\u7EF4\u62A4\u548C\u66F4\u65B0\uFF0C\u5728\u6280\u672F\u4E0A @oceanbase/design \u652F\u6301\u548C ",paraId:1},{value:"antd",paraId:1},{value:" \u5B8C\u5168\u4E00\u81F4\u7684\u4E3B\u9898\u5B9A\u5236\u80FD\u529B\u3002",paraId:1},{value:`import { ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider theme={{ xxx }}>
      {...}
    </ConfigProvider>
  );
};
`,paraId:2,tocIndex:0},{value:"\u5982\u679C\u662F\u51FD\u6570\u7EC4\u4EF6\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:3,tocIndex:2},{value:"useToken",paraId:3,tocIndex:2},{value:" hook \u6765\u83B7\u53D6 Design Token:",paraId:3,tocIndex:2},{value:`import { Button, useToken } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  const { token } = useToken();

  return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
};

export default App;
`,paraId:4,tocIndex:2},{value:"\u5982\u679C\u662F\u7C7B\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"token",paraId:5,tocIndex:2},{value:" \u5BF9\u8C61\u6765\u83B7\u53D6 Design Token:",paraId:5,tocIndex:2},{value:`import { Button, ConfigProvider, token } from '@oceanbase/design';
import React from 'react';

class App extends React.Component {
  render() {
    return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
  }
}

export default App;
`,paraId:6,tocIndex:2},{value:"\u5728\u5E38\u91CF\u6587\u4EF6\u3001dva model \u7B49\u975E React \u73AF\u5883\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:7,tocIndex:3},{value:"token",paraId:7,tocIndex:3},{value:" \u5BF9\u8C61\u6765\u83B7\u53D6 Design Token\u3002",paraId:7,tocIndex:3},{value:`import { token } from '@oceanbase/design';

export const taskStatusList = [
  {
    value: 'running',
    label: '\u8FD0\u884C\u4E2D',
    color: token.colorPrimary,
  },
];
`,paraId:8,tocIndex:3},{value:"\u901A\u8FC7\u5F15\u7528 @oceanbase/design \u63D0\u4F9B\u7684 ",paraId:9,tocIndex:4},{value:"less",paraId:9,tocIndex:4},{value:" \u4E3B\u9898\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 Design Token \u5BF9\u5E94\u7684 less \u53D8\u91CF:",paraId:9,tocIndex:4},{value:`@import '~@oceanbase/design/es/theme/index.less';

.button {
  color: @colorPrimary;
  border-radius: ~'@{borderRadius}px';
}
`,paraId:10,tocIndex:4},{value:"\u5982\u679C\u9700\u8981\u4F7F\u7528\u7279\u5B9A\u4E3B\u9898\u7684 less \u6587\u4EF6\uFF0C\u53EF\u4EE5\u5728\u5168\u5C40\u6837\u5F0F\u4E2D\u8BBE\u7F6E ",paraId:11,tocIndex:4},{value:"@theme",paraId:11,tocIndex:4},{value:" \u4E3B\u9898\u53D8\u91CF:",paraId:11,tocIndex:4},{value:`@theme: default | dark | compact | aliyun;
`,paraId:12,tocIndex:4},{value:"\u5728 VSCode \u4E2D\u5B89\u88C5 ",paraId:13,tocIndex:4},{value:"Less IntelliSense",paraId:13,tocIndex:4},{value:" \u63D2\u4EF6\uFF0C\u53EF\u652F\u6301\u53D8\u91CF\u63D0\u793A\u548C\u8865\u5168\u3002",paraId:13,tocIndex:4},{value:`import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        isDark: true,
        algorithm: theme.darkAlgorithm,
      }}
    >
      {...}
    </ConfigProvider>
  );
};
`,paraId:14,tocIndex:5},{value:`import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm
      }}
    >
      {...}
    </ConfigProvider>
  );
};
`,paraId:15,tocIndex:6},{value:`import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        isAliyun: true,
      }}
    >
      {...}
    </ConfigProvider>
  );
};
`,paraId:16,tocIndex:7},{value:"\u4E3B\u9898\u7684\u66F4\u591A\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 antd \u6587\u6863: ",paraId:17,tocIndex:8},{value:"https://ant.design/docs/react/customize-theme-cn",paraId:17,tocIndex:8}]},22614:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(93019);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Tooltip",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"type",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301 ",paraId:0},{value:"default",paraId:0},{value:"\u3001",paraId:0},{value:"light",paraId:0},{value:"\u3001",paraId:0},{value:"info",paraId:0},{value:"\u3001",paraId:0},{value:"success",paraId:0},{value:"\u3001",paraId:0},{value:"warning",paraId:0},{value:" \u548C ",paraId:0},{value:"error",paraId:0},{value:" \u4E94\u79CD\u7C7B\u578B\u7684 Tooltip\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"mouseFollow",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301\u9F20\u6807\u8DDF\u968F\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"closeIcon",paraId:0},{value:" \u5C5E\u6027\uFF0C\u652F\u6301\u5C55\u793A\u5173\u95ED\u6309\u94AE\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"onClose",paraId:0},{value:" \u5C5E\u6027\uFF0C\u5173\u95ED\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\u8C03\u7528\u6B64\u51FD\u6570\uFF0C\u53EF\u4EE5\u914D\u5408 ",paraId:0},{value:"open",paraId:0},{value:" \u548C ",paraId:0},{value:"onOpenChange",paraId:0},{value:" \u5C5E\u6027\u6765\u63A7\u5236 ",paraId:0},{value:"Tooltip",paraId:0},{value:" \u5C55\u793A\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"\u7248\u672C",paraId:1,tocIndex:5},{value:"type",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"default | light | info | success | warning | error",paraId:1,tocIndex:5},{value:"default",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"mouseFollow",paraId:1,tocIndex:5},{value:"\u662F\u5426\u8DDF\u968F\u9F20\u6807\u79FB\u52A8\uFF0C\u5F00\u542F\u540E\u4F1A\u53BB\u6389\u7BAD\u5934\uFF0C\u5E76\u4E14 ",paraId:1,tocIndex:5},{value:"placement",paraId:1,tocIndex:5},{value:"\u3001",paraId:1,tocIndex:5},{value:"open",paraId:1,tocIndex:5},{value:"\u3001",paraId:1,tocIndex:5},{value:"closeIcon",paraId:1,tocIndex:5},{value:" \u548C ",paraId:1,tocIndex:5},{value:"trigger",paraId:1,tocIndex:5},{value:" \u7B49\u5C5E\u6027\u4E5F\u5C06\u5931\u6548",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"closeIcon",paraId:1,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE",paraId:1,tocIndex:5},{value:"boolean | ReactNode",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"closeTitle",paraId:1,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6807\u9898",paraId:1,tocIndex:5},{value:"ReactNode",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"onClose",paraId:1,tocIndex:5},{value:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\uFF08\u53EF\u901A\u8FC7 e.preventDefault() \u6765\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF09",paraId:1,tocIndex:5},{value:"(e) => void",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u66F4\u591A API \u8BE6\u89C1 antd Tooltip \u6587\u6863: ",paraId:2,tocIndex:5},{value:"https://ant.design/components/tooltip-cn",paraId:2,tocIndex:5}]},61273:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(35008);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"TreeSelect",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} \u9ED8\u8BA4\u586B\u5145 ",paraId:0},{value:"placeholder",paraId:0},{value:"\uFF0C\u5E76\u652F\u6301\u901A\u8FC7 ConfigProvider ",paraId:0},{value:"locale.global.placeholder",paraId:0},{value:" \u6216 ",paraId:0},{value:"locale.TreeSelect.placeholder",paraId:0},{value:" \u8FDB\u884C\u5168\u5C40\u914D\u7F6E\u3002",paraId:0},{value:"\u8BE6\u89C1 antd TreeSelect \u6587\u6863: ",paraId:1},{value:"https://ant.design/components/tree-select-cn/",paraId:1}]},39594:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(95276);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F antd ",paraId:0},{value:"Typography",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} Typography.Text \u548C Typography.Paragraph \u7684\u9ED8\u8BA4\u5B57\u4F53\u989C\u8272\u548C\u884C\u9AD8\uFF0C\u4F1A\u7EE7\u627F\u7236\u5143\u7D20\u7684\u8BBE\u7F6E\uFF0C\u800C\u4E0D\u603B\u662F ",paraId:0},{value:"token.colorText",paraId:0},{value:" \u548C ",paraId:0},{value:"token.lineHeight",paraId:0},{value:"\uFF0C\u4FBF\u4E8E\u548C\u5176\u4ED6\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528\u3002",paraId:0},{value:"\u8BE6\u89C1 antd Segmented \u6587\u6863: ",paraId:1,tocIndex:3},{value:"https://ant.design/components/segmented-cn",paraId:1,tocIndex:3}]},18543:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(64422);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:7},{value:"\u8BF4\u660E",paraId:0,tocIndex:7},{value:"\u7C7B\u578B",paraId:0,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"visible",paraId:0,tocIndex:7},{value:"\u662F\u5426\u53EF\u89C1",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"true",paraId:0,tocIndex:7},{value:"loading",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u52A0\u8F7D\u72B6\u6001",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"false",paraId:0,tocIndex:7},{value:"tooltip",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u63D0\u793A\u6587\u6848",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"disabled",paraId:0,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"false",paraId:0,tocIndex:7},{value:"onClick",paraId:0,tocIndex:7},{value:"\u70B9\u51FB\u94FE\u63A5\u7684\u56DE\u8C03",paraId:0,tocIndex:7},{value:"async () => void | () => void",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"className",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E link \u7684\u6837\u5F0F\u540D",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u53C2\u6570",paraId:1,tocIndex:8},{value:"\u8BF4\u660E",paraId:1,tocIndex:8},{value:"\u7C7B\u578B",paraId:1,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:8},{value:"visible",paraId:1,tocIndex:8},{value:"\u662F\u5426\u53EF\u89C1",paraId:1,tocIndex:8},{value:"boolean",paraId:1,tocIndex:8},{value:"true",paraId:1,tocIndex:8},{value:"loading",paraId:1,tocIndex:8},{value:"\u8BBE\u7F6E\u52A0\u8F7D\u72B6\u6001",paraId:1,tocIndex:8},{value:"boolean",paraId:1,tocIndex:8},{value:"false",paraId:1,tocIndex:8},{value:"tooltip",paraId:1,tocIndex:8},{value:"\u8BBE\u7F6E\u63D0\u793A\u6587\u6848",paraId:1,tocIndex:8},{value:"string",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"disabled",paraId:1,tocIndex:8},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:8},{value:"boolean",paraId:1,tocIndex:8},{value:"false",paraId:1,tocIndex:8},{value:"type",paraId:1,tocIndex:8},{value:"\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B",paraId:1,tocIndex:8},{value:"primary | default",paraId:1,tocIndex:8},{value:"default",paraId:1,tocIndex:8},{value:"danger",paraId:1,tocIndex:8},{value:"\u8BBE\u7F6E\u5371\u9669\u6309\u94AE",paraId:1,tocIndex:8},{value:"boolean",paraId:1,tocIndex:8},{value:"false",paraId:1,tocIndex:8},{value:"onClick",paraId:1,tocIndex:8},{value:"\u70B9\u51FB\u94FE\u63A5\u7684\u56DE\u8C03",paraId:1,tocIndex:8},{value:"async () => void | () => void",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"className",paraId:1,tocIndex:8},{value:"\u8BBE\u7F6E\u6309\u94AE\u7684\u6837\u5F0F\u540D",paraId:1,tocIndex:8},{value:"string",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"\u53C2\u6570",paraId:2,tocIndex:9},{value:"\u8BF4\u660E",paraId:2,tocIndex:9},{value:"\u7C7B\u578B",paraId:2,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:9},{value:"size",paraId:2,tocIndex:9},{value:"\u6700\u591A\u5C55\u793A\u51E0\u4E2A",paraId:2,tocIndex:9},{value:"number",paraId:2,tocIndex:9},{value:"3",paraId:2,tocIndex:9},{value:"dropDownPlacement",paraId:2,tocIndex:9},{value:"\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E",paraId:2,tocIndex:9},{value:"topLeft | topCenter | topRight | bottomLeft | bottomCenter | bottomRight",paraId:2,tocIndex:9},{value:"bottomLeft",paraId:2,tocIndex:9},{value:"shouldVisible",paraId:2,tocIndex:9},{value:"\u901A\u8FC7\u51FD\u6570\u5BF9 action \u662F\u5426\u5C55\u793A\u7684\u5904\u7406",paraId:2,tocIndex:9},{value:"(key: string) => boolean",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"shouldDisabled",paraId:2,tocIndex:9},{value:"\u901A\u8FC7\u51FD\u6570\u5BF9 action \u662F\u5426\u7981\u7528\u7684\u5904\u7406",paraId:2,tocIndex:9},{value:"(key: string) => boolean",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"enableLoading",paraId:2,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A loading \u72B6\u6001",paraId:2,tocIndex:9},{value:"boolean",paraId:2,tocIndex:9},{value:"true",paraId:2,tocIndex:9},{value:"moreText",paraId:2,tocIndex:9},{value:"\u66F4\u591A\u64CD\u4F5C\u7684\u81EA\u5B9A\u4E49\u5C55\u793A",paraId:2,tocIndex:9},{value:"string | ReactElement",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9}]},91234:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(17209);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u8BF4\u660E",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u7248\u672C",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:"\u83B7\u53D6\u7EC4\u4EF6\u5185\u7F6E\u51FD\u6570\u7684 ref",paraId:0,tocIndex:1},{value:"BackgroundTaskManagerRef",paraId:0,tocIndex:1},{value:"{}",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"prefix",paraId:0,tocIndex:1},{value:"localstorage \u547D\u540D\u7A7A\u95F4",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"rollingFrequency",paraId:0,tocIndex:1},{value:"\u4EFB\u52A1\u8F6E\u8BE2\u65F6\u95F4\u95F4\u9694",paraId:0,tocIndex:1},{value:"number",paraId:0,tocIndex:1},{value:"3 * 1000",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u7248\u672C",paraId:1,tocIndex:2},{value:"pushQueue",paraId:1,tocIndex:2},{value:"push \u4EFB\u52A1\u961F\u5217",paraId:1,tocIndex:2},{value:"(queue: ",paraId:1,tocIndex:2},{value:"ITaskMgrQueue",paraId:2,tocIndex:2},{value:") => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"popQueue",paraId:1,tocIndex:2},{value:"pop \u4EFB\u52A1\u961F\u5217",paraId:1,tocIndex:2},{value:"(id: ",paraId:1,tocIndex:2},{value:"TaskMgrID",paraId:3,tocIndex:2},{value:") => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"setQueue",paraId:1,tocIndex:2},{value:"\u5168\u91CF\u8BBE\u7F6E\u4EFB\u52A1\u961F\u5217",paraId:1,tocIndex:2},{value:"(queue: ",paraId:1,tocIndex:2},{value:"ITaskMgrQueue",paraId:4,tocIndex:2},{value:") => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"pushPreset",paraId:1,tocIndex:2},{value:"push \u4EFB\u52A1\u9884\u8BBE",paraId:1,tocIndex:2},{value:"(preset: ",paraId:1,tocIndex:2},{value:"ITaskMgrPreset",paraId:5,tocIndex:2},{value:") => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"setPreset",paraId:1,tocIndex:2},{value:"\u5168\u91CF\u8BBE\u7F6E\u4EFB\u52A1\u9884\u8BBE",paraId:1,tocIndex:2},{value:"(preset: ",paraId:1,tocIndex:2},{value:"ITaskMgrPreset",paraId:6,tocIndex:2},{value:") => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:7,tocIndex:3},{value:"\u8BF4\u660E",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:3},{value:"\u7248\u672C",paraId:7,tocIndex:3},{value:"ITaskMgrPreset",paraId:7,tocIndex:3},{value:"\u540E\u53F0\u7BA1\u7406\u4E8B\u4EF6\u7684\u884C\u4E3A\u5B9A\u4E49",paraId:7,tocIndex:3},{value:"Record<",paraId:7,tocIndex:3},{value:"Namespace",paraId:8,tocIndex:3},{value:", ",paraId:7,tocIndex:3},{value:"NotificationAction",paraId:9,tocIndex:3},{value:">",paraId:7,tocIndex:3},{value:"-",paraId:7,tocIndex:3},{value:"-",paraId:7,tocIndex:3},{value:"\u53C2\u6570",paraId:10,tocIndex:4},{value:"\u8BF4\u660E",paraId:10,tocIndex:4},{value:"\u7C7B\u578B",paraId:10,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:4},{value:"\u7248\u672C",paraId:10,tocIndex:4},{value:"api",paraId:10,tocIndex:4},{value:"\u4EFB\u52A1\u7684\u8F6E\u8BE2\u63A5\u53E3",paraId:10,tocIndex:4},{value:"(params: any) => Promise",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"successCb",paraId:10,tocIndex:4},{value:"\u4EFB\u52A1\u6210\u529F\u56DE\u8C03",paraId:10,tocIndex:4},{value:"(response: any, id: ID) => { type: keyof NotificationInstance; config: ",paraId:10,tocIndex:4},{value:"ConfigProps",paraId:10,tocIndex:4},{value:" } or null",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"failedCb",paraId:10,tocIndex:4},{value:"\u4EFB\u52A1\u5931\u8D25\u56DE\u8C03",paraId:10,tocIndex:4},{value:"(response: any, id: ID ) => { type: keyof NotificationInstance; config: ",paraId:10,tocIndex:4},{value:"ConfigProps",paraId:10,tocIndex:4},{value:" } or null",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"\u53C2\u6570",paraId:11,tocIndex:5},{value:"\u8BF4\u660E",paraId:11,tocIndex:5},{value:"\u7C7B\u578B",paraId:11,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:5},{value:"\u7248\u672C",paraId:11,tocIndex:5},{value:"ITaskMgrQueue",paraId:11,tocIndex:5},{value:"\u4EFB\u52A1\u961F\u5217\u5BF9\u8C61\u96C6\u5408",paraId:11,tocIndex:5},{value:"Record<",paraId:11,tocIndex:5},{value:"ID",paraId:12,tocIndex:5},{value:", ",paraId:11,tocIndex:5},{value:"Namespace",paraId:13,tocIndex:5},{value:">",paraId:11,tocIndex:5},{value:"-",paraId:11,tocIndex:5},{value:"-",paraId:11,tocIndex:5},{value:"\u53C2\u6570",paraId:14,tocIndex:6},{value:"\u8BF4\u660E",paraId:14,tocIndex:6},{value:"\u7C7B\u578B",paraId:14,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:6},{value:"\u7248\u672C",paraId:14,tocIndex:6},{value:"ID",paraId:14,tocIndex:6},{value:"\u4EFB\u52A1\u552F\u4E00\u6807\u8BC6",paraId:14,tocIndex:6},{value:"string or number",paraId:14,tocIndex:6},{value:"''",paraId:14,tocIndex:6},{value:"-",paraId:14,tocIndex:6},{value:"\u53C2\u6570",paraId:15,tocIndex:7},{value:"\u8BF4\u660E",paraId:15,tocIndex:7},{value:"\u7C7B\u578B",paraId:15,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:7},{value:"\u7248\u672C",paraId:15,tocIndex:7},{value:"Namespace",paraId:15,tocIndex:7},{value:"\u4EFB\u52A1\u547D\u540D\u7A7A\u95F4/\u4EFB\u52A1\u7C7B\u578B",paraId:15,tocIndex:7},{value:"string",paraId:15,tocIndex:7},{value:"''",paraId:15,tocIndex:7},{value:"-",paraId:15,tocIndex:7}]},35455:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(55227);const o=[{value:"\u4E3A\u4E86\u5B9E\u73B0\u9009\u4E2D\u83DC\u5355\u548C\u5F53\u524D\u8DEF\u7531\u4E4B\u95F4\u7684\u8054\u52A8\uFF0C\u9700\u8981\u8BBE\u7F6E BasicLayout \u7684 ",paraId:0,tocIndex:10},{value:"location",paraId:0,tocIndex:10},{value:" \u5C5E\u6027\uFF0C",paraId:0,tocIndex:10},{value:"umi",paraId:0,tocIndex:10},{value:" \u7684\u793A\u4F8B\u5982\u4E0B:",paraId:0,tocIndex:10},{value:`import { useLocation } from 'umi';
const location = useLocation();

<BasicLayout location={location} />;
`,paraId:1,tocIndex:10},{value:"\u7531\u4E8E BasicLayout \u5DE6\u4FA7\u548C\u9876\u90E8\u5BFC\u822A\u7684\u8DF3\u8F6C\u4F9D\u8D56\u8DEF\u7531\u80FD\u529B\uFF0C\u9700\u8981\u901A\u8FC7 ConfigProvider \u5168\u5C40\u6CE8\u5165 ",paraId:2,tocIndex:11},{value:"navigate",paraId:2,tocIndex:11},{value:" \u51FD\u6570\u624D\u4F1A\u751F\u6548\u3002",paraId:2,tocIndex:11},{value:"\u5BF9\u4E8E ",paraId:3,tocIndex:11},{value:"umi v4",paraId:3,tocIndex:11},{value:":",paraId:3,tocIndex:11},{value:`import { ConfigProvider } from '@oceanbase/design';
import { BasicLayout } from '@oceanbase/ui';
// for umi v4 with react-router-dom v6
import { useNavigate } from 'umi';

const App = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider navigate={navigate}>
      <BasicLayout />
    </ConfigProvider>
  );
};
`,paraId:4,tocIndex:11},{value:"\u5BF9\u4E8E ",paraId:5,tocIndex:11},{value:"umi v3",paraId:5,tocIndex:11},{value:":",paraId:5,tocIndex:11},{value:`import { ConfigProvider } from '@oceanbase/design';
import { BasicLayout } from '@oceanbase/ui';
import { useHistory } from 'react-router-dom';
// for umi v3 with react-router-dom v5
import { useHistory } from 'umi';
// or use \`history\` directly
// import { history } from 'umi';

const App = () => {
  const history = useHistory();
  return (
    <ConfigProvider navigate={history.push}>
      <BasicLayout />
    </ConfigProvider>
  );
};
`,paraId:6,tocIndex:11},{value:"\u53C2\u6570",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u7248\u672C",paraId:7,tocIndex:12},{value:"location",paraId:7,tocIndex:12},{value:"location \u5BF9\u8C61\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u9009\u4E2D\u83DC\u5355\u548C\u5F53\u524D\u8DEF\u7531\u4E4B\u95F4\u7684\u8054\u52A8",paraId:7,tocIndex:12},{value:"Location",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"banner",paraId:7,tocIndex:12},{value:"\u9876\u90E8\u516C\u544A",paraId:7,tocIndex:12},{value:"ReactNode",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"iconUrl",paraId:7,tocIndex:12},{value:"\u4EA7\u54C1 icon \u7684 URL \u5730\u5740\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u5B50\u4FA7\u8FB9\u680F\u7684 icon",paraId:7,tocIndex:12},{value:"string",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"logoUrl",paraId:7,tocIndex:12},{value:"\u4EA7\u54C1 logo \u7684 URL \u5730\u5740\uFF0C\u7528\u4E8E ",paraId:7,tocIndex:12},{value:"\u5173\u4E8E",paraId:7,tocIndex:12},{value:" \u5F39\u7A97\u4E2D\u7684\u5C55\u793A\uFF0C\u901A\u5E38\u4E0E\u767B\u5F55\u9875\u7684 logo \u4E00\u81F4",paraId:7,tocIndex:12},{value:"string",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"simpleLogoUrl",paraId:7,tocIndex:12},{value:"\u4EA7\u54C1\u7B80\u7248 logo \u7684 URL \u5730\u5740\uFF0C\u7528\u4E8E\u5DE6\u4FA7\u83DC\u5355\u5BFC\u822A\u7684\u5C55\u793A",paraId:7,tocIndex:12},{value:"string",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"topHeader",paraId:7,tocIndex:12},{value:"\u9876\u90E8\u5BFC\u822A\u680F\u5185\u5BB9",paraId:7,tocIndex:12},{value:"TopHeader",paraId:8,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"menus",paraId:7,tocIndex:12},{value:"\u4FA7\u8FB9\u680F\u5BFC\u822A\u7684\u83DC\u5355\u9879\u5217\u8868\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u5C55\u793A",paraId:7,tocIndex:12},{value:"MenuItem",paraId:9,tocIndex:12},{value:"[]",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"defaultCollapsed",paraId:7,tocIndex:12},{value:"\u4FA7\u8FB9\u680F\u5BFC\u822A\u662F\u5426\u9ED8\u8BA4\u6536\u8D77",paraId:7,tocIndex:12},{value:"boolean",paraId:7,tocIndex:12},{value:"false",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"defaultSelectedKeys",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u83DC\u5355 keys",paraId:7,tocIndex:12},{value:"string[]",paraId:7,tocIndex:12},{value:"[]",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"defaultOpenKeys",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u5C55\u5F00\u7684\u83DC\u5355 keys",paraId:7,tocIndex:12},{value:"string[]",paraId:7,tocIndex:12},{value:"[]",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"sideHeader",paraId:7,tocIndex:12},{value:"\u5DE6\u4FA7\u5BFC\u822A\u680F\u5934\u90E8\u5185\u5BB9",paraId:7,tocIndex:12},{value:"ReactNode",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"subSideMenus",paraId:7,tocIndex:12},{value:"\u5B50\u4FA7\u8FB9\u680F\u5BFC\u822A\u7684\u83DC\u5355\u9879\u5217\u8868\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u5C55\u793A",paraId:7,tocIndex:12},{value:"MenuItem",paraId:10,tocIndex:12},{value:"[]",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"subSideMenuProps",paraId:7,tocIndex:12},{value:"\u5B50\u4FA7\u8FB9\u680F\u5BFC\u822A Menu \u5C5E\u6027",paraId:7,tocIndex:12},{value:"MenuProps",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"\u53C2\u6570",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"\u7248\u672C",paraId:11,tocIndex:13},{value:"link",paraId:11,tocIndex:13},{value:"\u83DC\u5355\u5BF9\u5E94\u7684\u8DEF\u5F84\u6216\u94FE\u63A5",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"title",paraId:11,tocIndex:13},{value:"\u83DC\u5355\u6807\u9898",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u83DC\u5355 icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"selectedIcon",paraId:11,tocIndex:13},{value:"\u83DC\u5355\u9009\u4E2D\u6001 icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"accessible",paraId:11,tocIndex:13},{value:"\u83DC\u5355\u9879\u662F\u5426\u6E32\u67D3\uFF0C\u5E38\u7528\u4E8E\u6743\u9650\u63A7\u5236\u548C\u6761\u4EF6\u6E32\u67D3\u7684\u573A\u666F",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"true",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"divider",paraId:11,tocIndex:13},{value:"\u662F\u5426\u5E26\u5206\u9694\u7EBF",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"children",paraId:11,tocIndex:13},{value:"\u5B50\u83DC\u5355\u5217\u8868\uFF0C\u652F\u6301\u591A\u5C42\u5D4C\u5957",paraId:11,tocIndex:13},{value:"MenuItem",paraId:12,tocIndex:13},{value:"[]",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u53C2\u6570",paraId:13,tocIndex:14},{value:"\u8BF4\u660E",paraId:13,tocIndex:14},{value:"\u7C7B\u578B",paraId:13,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:14},{value:"\u7248\u672C",paraId:13,tocIndex:14},{value:"showLabel",paraId:13,tocIndex:14},{value:"\u9876\u90E8\u5BFC\u822A\u662F\u5426\u5C55\u5F00, true \u4E3A\u5C55\u5F00 \u5F62\u6001\uFF1AIcon + \u6587\u6848\uFF1Bfales \u4E3A\u5173\u95ED \u5F62\u6001\uFF1AIcon",paraId:13,tocIndex:14},{value:"boolean",paraId:13,tocIndex:14},{value:"true",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"title",paraId:13,tocIndex:14},{value:"\u9876\u90E8\u6807\u9898",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"welcomePath",paraId:13,tocIndex:14},{value:"\u6B22\u8FCE\u9875\u5BF9\u5E94\u7684 path \u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E\u8DEF\u7531\u914D\u7F6E\u4E00\u81F4\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u5C55\u793A\u6B22\u8FCE\u9875\u83DC\u5355",paraId:13,tocIndex:14},{value:"string",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"docsPath",paraId:13,tocIndex:14},{value:"\u5E2E\u52A9\u6587\u6863\u9996\u9875\u5BF9\u5E94\u7684 path \u8DEF\u5F84\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u5C55\u793A\u6587\u6863\u83DC\u5355",paraId:13,tocIndex:14},{value:"string",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"pdfPath",paraId:13,tocIndex:14},{value:"\u5E2E\u52A9\u6587\u6863\u4E0B\u8F7D\u5BF9\u5E94\u7684 path \u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4F18\u5148\u4F7F\u7528\u8DEF\u5F84\u4E2D\u7684\u6587\u4EF6\u540D",paraId:13,tocIndex:14},{value:"string",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"showLocale",paraId:13,tocIndex:14},{value:"\u662F\u5426\u5C55\u793A\u56FD\u9645\u5316\u5207\u6362\u5165\u53E3",paraId:13,tocIndex:14},{value:"boolean",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"username",paraId:13,tocIndex:14},{value:"\u7528\u6237\u540D",paraId:13,tocIndex:14},{value:"string",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"userMenu",paraId:13,tocIndex:14},{value:"\u7528\u6237\u4E0B\u62C9\u83DC\u5355",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"appData",paraId:13,tocIndex:14},{value:"\u4EA7\u54C1\u4FE1\u606F",paraId:13,tocIndex:14},{value:"AppData",paraId:14,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"\u53C2\u6570",paraId:15,tocIndex:15},{value:"\u8BF4\u660E",paraId:15,tocIndex:15},{value:"\u7C7B\u578B",paraId:15,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:15},{value:"\u7248\u672C",paraId:15,tocIndex:15},{value:"shortName",paraId:15,tocIndex:15},{value:"\u4EA7\u54C1\u7B80\u79F0\uFF0C\u6BD4\u5982 OCP",paraId:15,tocIndex:15},{value:"string",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"version",paraId:15,tocIndex:15},{value:"\u4EA7\u54C1\u7248\u672C",paraId:15,tocIndex:15},{value:"string",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"releaseTime",paraId:15,tocIndex:15},{value:"\u4EA7\u54C1\u53D1\u5E03\u65F6\u95F4",paraId:15,tocIndex:15},{value:"string",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15}]},22032:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(54495);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:7},{value:"\u8BF4\u660E",paraId:0,tocIndex:7},{value:"\u7C7B\u578B",paraId:0,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"\u7248\u672C",paraId:0,tocIndex:7},{value:"open",paraId:0,tocIndex:7},{value:"\u662F\u5426\u5C55\u5F00",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"false",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"title",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E bar \u7684 title \u4FE1\u606F",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"content",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u5C55\u5F00\u533A\u7684\u5185\u5BB9",paraId:0,tocIndex:7},{value:"ReactNode | (props: ",paraId:0,tocIndex:7},{value:"AlertRenderParams",paraId:1,tocIndex:7},{value:") => ReactNode)",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"selectedRows",paraId:0,tocIndex:7},{value:"\u6570\u636E\u6570\u7EC4",paraId:0,tocIndex:7},{value:"any[]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"className",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E BatchOperationBar \u7684\u6837\u5F0F\u540D",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"width",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u5BBD\u5EA6",paraId:0,tocIndex:7},{value:"(number | string)",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"position",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u4F4D\u7F6E",paraId:0,tocIndex:7},{value:"[bottom | top, right | left]",paraId:0,tocIndex:7},{value:"[bottom, right]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"showCancelBtn",paraId:0,tocIndex:7},{value:"\u662F\u5426\u663E\u793A\u53D6\u6D88\u9009\u62E9\u6309\u94AE",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"true",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"showOpenBtn",paraId:0,tocIndex:7},{value:"\u662F\u5426\u663E\u793A\u5C55\u5F00\u6536\u8D77\u6309\u94AE",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"true",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"cancelText",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u53D6\u6D88\u9009\u62E9\u6309\u94AE\u6587\u672C",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"openText",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u5C55\u5F00\u63D0\u793A\u6587\u6848",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"openIcon",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u5C55\u5F00\u63D0\u793A icon",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"hiddenText",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u6536\u8D77\u63D0\u793A\u6587\u6848",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"hiddenIcon",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u6536\u8D77\u63D0\u793A icon",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"barStyle",paraId:0,tocIndex:7},{value:"\u8BBE\u7F6E\u7EC4\u4EF6 style \u6837\u5F0F",paraId:0,tocIndex:7},{value:"React.CSSProperties",paraId:0,tocIndex:7},{value:"{}",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"alertRender",paraId:0,tocIndex:7},{value:"\u63D0\u793A\u4FE1\u606F\u680F\u6E32\u67D3\u5DE5\u5177\uFF0C\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A ReactNode \u6216\u8005 JSX.Element \u8BBE\u7F6E false \u4E0D\u5C55\u793A",paraId:0,tocIndex:7},{value:"(selectedRows: object[]) => (ReactNode | JSX.Element)",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"alertOptionRender",paraId:0,tocIndex:7},{value:"\u64CD\u4F5C\u4FE1\u606F\u680F\u6E32\u67D3\u5DE5\u5177\uFF0C\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A ReactNode \u6216\u8005 JSX.Element \u8BBE\u7F6E false \u4E0D\u5C55\u793A",paraId:0,tocIndex:7},{value:"(props: ",paraId:0,tocIndex:7},{value:"AlertRenderParams",paraId:2,tocIndex:7},{value:") => ReactNode | JSX.Element)",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"\u7248\u672C",paraId:3,tocIndex:8},{value:"selectedRows",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u7684\u6570\u636E",paraId:3,tocIndex:8},{value:"any[]",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"setSelectedRows",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E\u9009\u4E2D\u7684\u6570\u636E",paraId:3,tocIndex:8},{value:"(selectedRows: any[]) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"cleanSelectedRows",paraId:3,tocIndex:8},{value:"\u6E05\u9664\u9009\u4E2D\u7684\u6570\u636E\u4E0D\u4F20\u503C\u9ED8\u8BA4\u6E05\u7A7A\u5168\u90E8",paraId:3,tocIndex:8},{value:"(cleanSelectdRows?: any[]) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8}]},62262:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(86721);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:7},{value:"\u8BF4\u660E",paraId:0,tocIndex:7},{value:"\u7C7B\u578B",paraId:0,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"\u7248\u672C",paraId:0,tocIndex:7},{value:"code",paraId:0,tocIndex:7},{value:"\u5F02\u5E38\u72B6\u6001\u7801",paraId:0,tocIndex:7},{value:"number (\u76EE\u524D\u4EC5\u652F\u6301 403\uFF0C404)",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"children",paraId:0,tocIndex:7},{value:"\u5B50\u5143\u7D20",paraId:0,tocIndex:7},{value:"ReactNode",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"onClick",paraId:0,tocIndex:7},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:0,tocIndex:7},{value:"() => void",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"imageUrl",paraId:0,tocIndex:7},{value:"\u56FE\u7247\u5730\u5740",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"title",paraId:0,tocIndex:7},{value:"\u6807\u9898\u6587\u6848",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"buttonText",paraId:0,tocIndex:7},{value:"\u6309\u94AE\u6587\u6848",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u53C2\u6570",paraId:1,tocIndex:8},{value:"\u8BF4\u660E",paraId:1,tocIndex:8},{value:"\u7C7B\u578B",paraId:1,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:8},{value:"\u7248\u672C",paraId:1,tocIndex:8},{value:"config",paraId:1,tocIndex:8},{value:"\u6240\u6E32\u67D3\u6570\u636E\u7684\u5BF9\u8C61",paraId:1,tocIndex:8},{value:"Record<string, ",paraId:1,tocIndex:8},{value:"ConfigType",paraId:2,tocIndex:8},{value:">",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"state",paraId:1,tocIndex:8},{value:"\u6B64\u65F6\u6240\u6E32\u67D3\u7684\u6570\u636E",paraId:1,tocIndex:8},{value:"key of config",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"children",paraId:1,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:1,tocIndex:8},{value:"ReactNode",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"onClick",paraId:1,tocIndex:8},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03 \uFF08\u5F53\u6240\u6709\u7C7B\u578B\u7684\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\u4E00\u81F4\u65F6\uFF0C\u53EF\u7EDF\u4E00\u4F20\u503C\uFF0C\u5982\u4E0D\u540C\uFF0C\u8BF7\u5728 config \u4E2D\u5355\u72EC\u914D\u7F6E\uFF09",paraId:1,tocIndex:8},{value:"() => void",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"\u53C2\u6570",paraId:3,tocIndex:9},{value:"\u8BF4\u660E",paraId:3,tocIndex:9},{value:"\u7C7B\u578B",paraId:3,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:9},{value:"\u7248\u672C",paraId:3,tocIndex:9},{value:"title",paraId:3,tocIndex:9},{value:"\u6807\u9898",paraId:3,tocIndex:9},{value:"string",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"imageUrl",paraId:3,tocIndex:9},{value:"\u56FE\u7247\u94FE\u63A5",paraId:3,tocIndex:9},{value:"string",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"buttonText",paraId:3,tocIndex:9},{value:"\u6309\u94AE\u6587\u6848",paraId:3,tocIndex:9},{value:"string",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"onClick",paraId:3,tocIndex:9},{value:"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:3,tocIndex:9},{value:"() => void",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"\u53C2\u6570",paraId:4,tocIndex:10},{value:"\u8BF4\u660E",paraId:4,tocIndex:10},{value:"\u7C7B\u578B",paraId:4,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:10},{value:"\u7248\u672C",paraId:4,tocIndex:10},{value:"children",paraId:4,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:10},{value:"ReactNode",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"subscription",paraId:4,tocIndex:10},{value:"\u5185\u5BB9\u6587\u6848",paraId:4,tocIndex:10},{value:"string",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"onClick",paraId:4,tocIndex:10},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:4,tocIndex:10},{value:"() => void",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"imageUrl",paraId:4,tocIndex:10},{value:"\u56FE\u7247\u5730\u5740",paraId:4,tocIndex:10},{value:"string",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"title",paraId:4,tocIndex:10},{value:"\u6807\u9898\u6587\u6848",paraId:4,tocIndex:10},{value:"string",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"buttonText",paraId:4,tocIndex:10},{value:"\u6309\u94AE\u6587\u6848",paraId:4,tocIndex:10},{value:"string",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"showError",paraId:4,tocIndex:10},{value:"\u662F\u5426\u663E\u793A\u62A5\u9519\u4FE1\u606F",paraId:4,tocIndex:10},{value:"boolean",paraId:4,tocIndex:10},{value:"false",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"hasButton",paraId:4,tocIndex:10},{value:"\u662F\u5426\u6709\u6309\u94AE",paraId:4,tocIndex:10},{value:"boolean",paraId:4,tocIndex:10},{value:"true",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10}]},48405:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(90453);const o=[{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u60C5\u51B5\u56FE\u6807\u5728\u6587\u5B57\u540E\uFF0C\u5982\u4E0D\u9700\u8981\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u5219\u4E0D\u9700\u8981\u4F20 suffixIcon ",paraId:0,tocIndex:1},{value:"\u56FE\u6807\u82E5\u5728\u6587\u5B57\u524D\uFF0C\u9700\u628A suffixIcon \u7F6E\u4E3A null\uFF0CprefixIcon \u4F7F\u7528\u9ED8\u8BA4\u56FE\u6807\u7684\u8BDD\u4F20 true ",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u60C5\u51B5\u662F\u4F7F\u7528 toooltip \u8FDB\u884C\u63D0\u793A\uFF0C\u5982\u4E0D\u9700\u8981\uFF0C\u5219\u4E0D\u9700\u8981\u4F20 tooltipWithLink ",paraId:2,tocIndex:3},{value:"\u63D0\u793A\u53EF\u5E73\u94FA\u5C55\u793A textHidden \u4F20 false \u76F4\u63A5\u5C55\u793A\uFF0C\u9ED8\u8BA4\u4E3A true \u9690\u85CF\u5C55\u793A\uFF0C\u53EA\u9002\u7528\u4E8E iconType \u7B49\u4E8E info \u7C7B\u578B\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49 icon \u989C\u8272 ",paraId:3,tocIndex:4},{value:"exclamation \u7C7B\u578B\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49 icon \u989C\u8272 ",paraId:4,tocIndex:5},{value:"\u53C2\u6570",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"\u7248\u672C",paraId:5,tocIndex:6},{value:"content",paraId:5,tocIndex:6},{value:"\u6587\u5B57\u5185\u5BB9",paraId:5,tocIndex:6},{value:"String",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"tooltip",paraId:5,tocIndex:6},{value:"Tooltip \u914D\u7F6E",paraId:5,tocIndex:6},{value:"TooltipProps",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"prefixIcon",paraId:5,tocIndex:6},{value:"\u6587\u5B57\u524D\u56FE\u6807\u914D\u7F6E",paraId:5,tocIndex:6},{value:"IconProps",paraId:5,tocIndex:6},{value:"null",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"suffixIcon",paraId:5,tocIndex:6},{value:"\u6587\u5B57\u540E\u56FE\u6807\u914D\u7F6E",paraId:5,tocIndex:6},{value:"IconProps",paraId:5,tocIndex:6},{value:"{ type: 'question-circle', spin: false, pointable: true, style: { marginRight: 4 } }",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"tooltipWithLink",paraId:5,tocIndex:6},{value:"\u63D0\u793A\u6587\u672C\u5E26\u6709\u8D85\u94FE\u63A5",paraId:5,tocIndex:6},{value:"PopoverProps",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"textHidden",paraId:5,tocIndex:6},{value:"\u63D0\u793A\u6587\u672C\u5C55\u793A\u65B9\u5F0F",paraId:5,tocIndex:6},{value:"Boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"size",paraId:5,tocIndex:6},{value:"\u6587\u5B57\u5185\u5BB9\u4E0E icon \u7684\u5927\u5C0F",paraId:5,tocIndex:6},{value:"Number",paraId:5,tocIndex:6},{value:"14",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"infoColor",paraId:5,tocIndex:6},{value:"info \u56FE\u6807\u989C\u8272",paraId:5,tocIndex:6},{value:"String",paraId:5,tocIndex:6},{value:"333333",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"exclamationColor",paraId:5,tocIndex:6},{value:"exclamation \u56FE\u6807\u989C\u8272",paraId:5,tocIndex:6},{value:"String",paraId:5,tocIndex:6},{value:"FAAD14",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"className",paraId:5,tocIndex:6},{value:"\u7EC4\u4EF6 className",paraId:5,tocIndex:6},{value:"String",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"style",paraId:5,tocIndex:6},{value:"\u7EC4\u4EF6 style",paraId:5,tocIndex:6},{value:"React.CSSProperties",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6}]},63910:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(38141);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:3},{value:"\u8BF4\u660E",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"\u7248\u672C",paraId:0,tocIndex:3},{value:"content",paraId:0,tocIndex:3},{value:"\u6587\u5B57\u5185\u5BB9",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"tooltip",paraId:0,tocIndex:3},{value:"Tooltip \u914D\u7F6E",paraId:0,tocIndex:3},{value:"TooltipProps",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"prefixIcon",paraId:0,tocIndex:3},{value:"\u6587\u5B57\u524D\u56FE\u6807\u914D\u7F6E",paraId:0,tocIndex:3},{value:"React.ReactNode | boolean",paraId:0,tocIndex:3},{value:"null",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"suffixIcon",paraId:0,tocIndex:3},{value:"\u6587\u5B57\u540E\u56FE\u6807\u914D\u7F6E",paraId:0,tocIndex:3},{value:"React.ReactNode | boolean",paraId:0,tocIndex:3},{value:"true",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"className",paraId:0,tocIndex:3},{value:"\u7EC4\u4EF6 className",paraId:0,tocIndex:3},{value:"String",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"style",paraId:0,tocIndex:3},{value:"\u7EC4\u4EF6 style",paraId:0,tocIndex:3},{value:"React.CSSProperties",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3}]},80685:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(31839);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:5},{value:"\u8BF4\u660E",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"\u7248\u672C",paraId:0,tocIndex:5},{value:"className",paraId:0,tocIndex:5},{value:"\u7EC4\u4EF6 className",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"visible",paraId:0,tocIndex:5},{value:"\u7EC4\u4EF6\u662F\u5426\u663E\u793A",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"min",paraId:0,tocIndex:5},{value:"\u5F39\u7A97\u7F29\u653E\u6700\u5C0F\u9650\u5236[\u5BBD\uFF0C\u9AD8]",paraId:0,tocIndex:5},{value:"[number, number]",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"max",paraId:0,tocIndex:5},{value:"\u5F39\u7A97\u7F29\u653E\u6700\u5927\u9650\u5236[\u5BBD\uFF0C\u9AD8]",paraId:0,tocIndex:5},{value:"[number, number]",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"width",paraId:0,tocIndex:5},{value:"\u5F39\u7A97\u9ED8\u8BA4\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"520",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"height",paraId:0,tocIndex:5},{value:"\u5F39\u7A97\u9ED8\u8BA4\u9AD8\u5EA6",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"600",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"left",paraId:0,tocIndex:5},{value:"\u5F39\u7A97\u9ED8\u8BA4\u4F4D\u7F6E",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"top",paraId:0,tocIndex:5},{value:"\u5F39\u7A97\u9ED8\u8BA4\u4F4D\u7F6E",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"title",paraId:0,tocIndex:5},{value:"\u6807\u9898",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"\u5E2E\u52A9\u6587\u6863",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"extLink",paraId:0,tocIndex:5},{value:"\u5916\u94FE",paraId:0,tocIndex:5},{value:"IDialogExtLink",paraId:1,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onClose",paraId:0,tocIndex:5},{value:"\u5173\u95ED\u6309\u94AE\u7684\u56DE\u8C03",paraId:0,tocIndex:5},{value:"() => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"clientWidth",paraId:0,tocIndex:5},{value:"\u7A97\u53E3\u5BBD\u5EA6\uFF0C \u5FC5\u4F20",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"clientHeight",paraId:0,tocIndex:5},{value:"\u7A97\u53E3\u9AD8\u5EA6\uFF0C \u5FC5\u4F20",paraId:0,tocIndex:5},{value:"number",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"resizable",paraId:0,tocIndex:5},{value:"\u5F00\u542F\u53EF\u7F29\u653E",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"true",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"draggable",paraId:0,tocIndex:5},{value:"\u5F00\u542F\u53EF\u62D6\u62FD",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"true",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"enableMaximization",paraId:0,tocIndex:5},{value:"\u5F00\u542F\u6700\u5927\u5316\u529F\u80FD",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"true",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"setRootWidth",paraId:0,tocIndex:5},{value:"\u8BBE\u7F6E\u5916\u90E8\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:5},{value:"(params: string) => void;",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"isEmbed",paraId:0,tocIndex:5},{value:"\u5F00\u542F\u5F39\u7A97\u5D4C\u5165\u6A21\u5F0F",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"\u7248\u672C",paraId:2,tocIndex:6},{value:"text",paraId:2,tocIndex:6},{value:"\u5916\u94FE\u6587\u6848",paraId:2,tocIndex:6},{value:"string",paraId:2,tocIndex:6},{value:"''",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"link",paraId:2,tocIndex:6},{value:"\u5916\u94FE\u94FE\u63A5",paraId:2,tocIndex:6},{value:"string",paraId:2,tocIndex:6},{value:"''",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6}]},6:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(39134);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:3},{value:"\u8BF4\u660E",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"\u7248\u672C",paraId:0,tocIndex:3},{value:"className",paraId:0,tocIndex:3},{value:"\u7EC4\u4EF6 className",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"visible",paraId:0,tocIndex:3},{value:"\u7EC4\u4EF6\u662F\u5426\u663E\u793A",paraId:0,tocIndex:3},{value:"boolean",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"title",paraId:0,tocIndex:3},{value:"\u6807\u9898",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"\u5E2E\u52A9\u6587\u6863",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"defaultTop",paraId:0,tocIndex:3},{value:"\u8DDD\u79BB\u5C4F\u5E55\u9876\u90E8\u8DDD\u79BB",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"embedConfig",paraId:0,tocIndex:3},{value:"\u5D4C\u5165\u6A21\u5F0F\u4E00\u822C\u5C5E\u6027\u914D\u7F6E",paraId:0,tocIndex:3},{value:"IDialogConfig",paraId:1,tocIndex:3},{value:"{}",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"normalConfig",paraId:0,tocIndex:3},{value:"\u5F39\u7A97\u6A21\u5F0F\u4E00\u822C\u5C5E\u6027\u914D\u7F6E",paraId:0,tocIndex:3},{value:"IDialogConfig",paraId:2,tocIndex:3},{value:"{}",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"onClose",paraId:0,tocIndex:3},{value:"\u5173\u95ED\u6309\u94AE\u7684\u56DE\u8C03",paraId:0,tocIndex:3},{value:"() => void",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"setRootWidth",paraId:0,tocIndex:3},{value:"\u8BBE\u7F6E\u5916\u90E8\u5BB9\u5668\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"(params: string) => void;",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"\u7248\u672C",paraId:3,tocIndex:4},{value:"min",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u7F29\u653E\u6700\u5C0F\u9650\u5236[\u5BBD\uFF0C\u9AD8]",paraId:3,tocIndex:4},{value:"[number, number]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"max",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u7F29\u653E\u6700\u5927\u9650\u5236[\u5BBD\uFF0C\u9AD8]",paraId:3,tocIndex:4},{value:"[number, number]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"width",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u9ED8\u8BA4\u5BBD\u5EA6",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"520",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"height",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u9ED8\u8BA4\u9AD8\u5EA6",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"600",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"left",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u9ED8\u8BA4\u4F4D\u7F6E",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"top",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u9ED8\u8BA4\u4F4D\u7F6E",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4}]},99522:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(3529);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F pro-components ",paraId:0},{value:"FooterToolbar",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} \u9ED8\u8BA4\u5173\u95ED ",paraId:0},{value:"portalDom",paraId:0},{value:"\uFF0C\u5373\u5E95\u90E8\u64CD\u4F5C\u680F\u9ED8\u8BA4\u6E32\u67D3\u5230\u7236\u5143\u7D20\uFF0C\u800C\u4E0D\u662F ",paraId:0},{value:"body",paraId:0},{value:"\u3002",paraId:0},{value:"\u8BE6\u89C1 pro-components FooterToolbar \u6587\u6863: ",paraId:1,tocIndex:2},{value:"https://procomponents.ant.design/components/page-container#footertoolbar",paraId:1,tocIndex:2}]},52468:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(60196);const o=[{value:"\u5168\u5C4F\u5C06\u6307\u5B9A\u533A\u57DF\uFF08\u5BB9\u5668\uFF09\u7684\u5185\u5BB9\u663E\u793A\u8303\u56F4\u653E\u5927\u5230\u5168\u5C4F\u533A\u57DF\u8FDB\u884C\u6D4F\u89C8\u6216\u64CD\u4F5C\uFF0C\u5C4F\u853D\u533A\u57DF\u5916\u7684\u5176\u5B83\u5185\u5BB9\u5E72\u6270\uFF0C\u5E76\u4F7F\u6307\u5B9A\u533A\u57DF\uFF08\u5BB9\u5668\uFF09\u7684\u53EF\u89C6\u9762\u79EF\u6700\u5927\u5316\u3002",paraId:0},{value:"\u627F\u8F7D\u5185\u5BB9\u7684\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u9700\u8981\u66F4\u5927\u533A\u57DF\u5448\u73B0\u5185\u5BB9\u65F6\u3002",paraId:1,tocIndex:0},{value:"\u9875\u9762\u5185\u5BB9\u8F83\u590D\u6742\uFF0C\u90E8\u5206\u5185\u5BB9\u9700\u8981\u51CF\u5C11\u5E72\u6270\uFF0C\u8FBE\u5230\u6C89\u6D78\u5F0F\u6D4F\u89C8\u6216\u64CD\u4F5C\u7684\u76EE\u7684\u65F6\u3002",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u5168\u5C4F\u662F\u89C6\u53E3\u7EA7\u522B\u7684\u5168\u5C4F\u3002",paraId:2,tocIndex:2},{value:"\u53EF\u4EE5\u914D\u7F6E ",paraId:3,tocIndex:4},{value:"defaultMode",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u4E3A ",paraId:3,tocIndex:4},{value:"browser",paraId:3,tocIndex:4},{value:" \u914D\u7F6E\u6D4F\u89C8\u5668\u5168\u5C4F\u3002",paraId:3,tocIndex:4},{value:"\u5168\u5C4F\u6700\u5E38\u7528\u7684\u573A\u666F\u662F\u548C\u8868\u683C\u5217\u8868\u4E00\u8D77\u4F7F\u7528\uFF0C\u8FD9\u91CC\u7ED9\u51FA\u548C\u5217\u8868\u5DE5\u5177\u680F\u4E00\u8D77\u4F7F\u7528\u7684\u4F8B\u5B50\uFF0C\u63A7\u5236\u5168\u5C4F\u72B6\u6001\u3002",paraId:4,tocIndex:6},{value:"\u53C2\u6570",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u7C7B\u578B",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"\u7248\u672C",paraId:5,tocIndex:8},{value:"className",paraId:5,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:8},{value:"string",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"style",paraId:5,tocIndex:8},{value:"\u5168\u5C4F\u5BB9\u5668\u7684\u6837\u5F0F",paraId:5,tocIndex:8},{value:"React.CSSProperties",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"defaultMode",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u7684\u5168\u5C4F\u6A21\u5F0F\uFF0C\u4E0D\u53EF\u53D8",paraId:5,tocIndex:8},{value:"browser | viewport",paraId:5,tocIndex:8},{value:"viewport",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"header",paraId:5,tocIndex:8},{value:"\u81EA\u5B9A\u4E49 Header",paraId:5,tocIndex:8},{value:"false | ReactNode | { title: ReactNode; extra: ReactNode }",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"onChange",paraId:5,tocIndex:8},{value:"\u5168\u5C4F\u72B6\u6001\u503C\u6539\u53D8\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:8},{value:"(fullscreen: boolean) => void",paraId:5,tocIndex:8},{value:"\u200B-",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8}]},93282:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(93149);const o=[{value:"\u{1F4E2} \u9700\u8981\u548C ",paraId:0},{value:"G6",paraId:0},{value:" Graph \u914D\u5408\u4F7F\u7528\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u7248\u672C",paraId:1,tocIndex:2},{value:"mode",paraId:1,tocIndex:2},{value:"\u5C55\u793A\u6A21\u5F0F",paraId:1,tocIndex:2},{value:"fixed | embed",paraId:1,tocIndex:2},{value:"fixed",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"graph",paraId:1,tocIndex:2},{value:"G6 Graph \u5B9E\u4F8B",paraId:1,tocIndex:2},{value:"Graph",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"showFullscreen",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u5168\u5C4F\u5165\u53E3",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onFullscreen",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u5168\u5C4F\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:2},{value:"() => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onReload",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u5237\u65B0\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:2},{value:"() => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2}]},7359:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(52058);const o=[{value:"\u9AD8\u4EAE\u4EE3\u7801\uFF0C\u76F8\u8F83\u7F16\u8F91\u5668\u800C\u8A00\u8981\u66F4\u8F7B\u91CF\uFF0C\u7EC4\u4EF6\u5C01\u88C5\u4E86 ",paraId:0},{value:"highlight.js",paraId:0},{value:" \u7684\u9AD8\u4EAE\u80FD\u529B\uFF0C\u76EE\u524D ",paraId:0},{value:"highlight.js",paraId:0},{value:" \u652F\u6301 ",paraId:0},{value:"187 \u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u8BED\u8A00",paraId:0},{value:"\uFF0C\u4E3A\u9632\u6B62\u6253\u5305\u4F53\u79EF\u8FC7\u5927\uFF0C\u76EE\u524D\u6211\u4EEC\u4EC5\u52A0\u8F7D\u4E86\u90E8\u5206\u8BED\u8A00\u7C7B\u578B\uFF0C\u82E5\u6709\u65B0\u589E\u7684\u8BED\u8A00\u9700\u6C42\uFF0C\u8BF7\u8054\u7CFB\u6211\u4EEC\u6DFB\u52A0\u3002",paraId:0},{value:"\u5C55\u793A\u4EE3\u7801\u65F6\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u7F16\u8F91\u4EE3\u7801\u65F6\u4F7F\u7528\uFF0C\u5982\u679C\u9700\u8981\u4EE3\u7801\u7F16\u8F91\uFF0C\u53EF\u4EE5\u8003\u8651\u91C7\u7528\u5982\u4E0B\u65B9\u6848\uFF1A",paraId:1,tocIndex:0},{value:"\u793E\u533A\u65B9\u6848 monaco-editor\uFF1A",paraId:2,tocIndex:0},{value:"https://microsoft.github.io/monaco-editor/",paraId:2,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u901A\u8FC7 ",paraId:3,tocIndex:2},{value:"language",paraId:3,tocIndex:2},{value:" \u6307\u5B9A\u8BED\u8A00\u9AD8\u4EAE\uFF0C\u901A\u8FC7 ",paraId:3,tocIndex:2},{value:"theme",paraId:3,tocIndex:2},{value:" \u6307\u5B9A\u9AD8\u4EAE\u4E3B\u9898\u3002",paraId:3,tocIndex:2},{value:"\u82E5\u4E0D\u6307\u5B9A\u8BED\u8A00\uFF0C\u90A3\u4E48 ",paraId:4,tocIndex:4},{value:"Highlight",paraId:4,tocIndex:4},{value:" \u4F1A\u81EA\u5DF1\u8FDB\u884C\u667A\u80FD\u8BC6\u522B\u3002",paraId:4,tocIndex:4},{value:"\u4F60\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"lineNumber",paraId:5,tocIndex:6},{value:" \u6307\u5B9A\u662F\u5426\u9700\u8981\u5C55\u793A\u4EE3\u7801\u5757\u884C\u53F7\u3002",paraId:5,tocIndex:6},{value:"\u5F53\u683C\u5F0F\u4E3A json \u65F6\uFF0C",paraId:6,tocIndex:8},{value:"children",paraId:6,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:6,tocIndex:8},{value:"object",paraId:6,tocIndex:8},{value:" \u5BF9\u8C61\u7528\u4E8E\u5C42\u7EA7\u6536\u653E\u5C55\u793A\u3002",paraId:6,tocIndex:8},{value:"\u652F\u6301\u5C06\u591A\u4E2A\u7248\u672C\u7684\u4EE3\u7801\u8FDB\u884C diff \u6BD4\u8F83\u3002",paraId:7,tocIndex:10},{value:"\u8FD9\u91CC\u6211\u4EEC\u6F14\u793A\u4E00\u4E0B\u76EE\u524D\u652F\u6301\u7684\u6240\u6709\u8BED\u8A00\u548C\u4E3B\u9898\u7684\u5207\u6362\u3001\u884C\u53F7\u5C55\u793A\u4E0E\u5426\u7684\u6548\u679C\u3002",paraId:8,tocIndex:12},{value:"\u7EC4\u4EF6\u8FD8\u652F\u6301\u901A\u8FC7\u914D\u7F6E ",paraId:9,tocIndex:14},{value:"innerHTML",paraId:9,tocIndex:14},{value:" \u5C5E\u6027\u652F\u6301\u591A\u6BB5\u4EE3\u7801\u7684\u6E32\u67D3\uFF0C\u5BF9\u4E8E\u7528 ",paraId:9,tocIndex:14},{value:"cms",paraId:9,tocIndex:14},{value:" \u573A\u666F\u83B7\u53D6\u4EE3\u7801\u6E32\u67D3\u7684\u60C5\u51B5\u975E\u5E38\u6709\u7528\uFF0C\u6CE8\u610F\u9700\u81EA\u884C\u9632\u6B62",paraId:9,tocIndex:14},{value:"XSS",paraId:9,tocIndex:14},{value:"\u4EE3\u7801\u6CE8\u5165\u3002\u53E6\u5916\u82E5\u662F ",paraId:9,tocIndex:14},{value:"html/xml",paraId:9,tocIndex:14},{value:" \u683C\u5F0F\u7684\u4EE3\u7801\uFF0C\u6CE8\u610F\u5148\u8FDB\u884C Escape\u3002",paraId:9,tocIndex:14},{value:"\u53C2\u6570",paraId:10,tocIndex:17},{value:"\u8BF4\u660E",paraId:10,tocIndex:17},{value:"\u7C7B\u578B",paraId:10,tocIndex:17},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:17},{value:"\u7248\u672C",paraId:10,tocIndex:17},{value:"language",paraId:10,tocIndex:17},{value:"\u6307\u5B9A\u8BED\u8A00\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u8868\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8BED\u8A00\u7EC4\u4EF6\u4F1A\u667A\u80FD\u63A2\u6D4B\u4E3A\u53EF\u9009\u7C7B\u578B\u8BED\u8A00\u4E2D\u7684\u4E00\u79CD\u8FDB\u884C\u6E32\u67D3",paraId:10,tocIndex:17},{value:"string",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"theme",paraId:10,tocIndex:17},{value:"\u6307\u5B9A\u4E3B\u9898\uFF0C\u53EF\u9009 ",paraId:10,tocIndex:17},{value:"dark",paraId:10,tocIndex:17},{value:", ",paraId:10,tocIndex:17},{value:"light",paraId:10,tocIndex:17},{value:"string | dark | light",paraId:10,tocIndex:17},{value:"light",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"lineNumber",paraId:10,tocIndex:17},{value:"\u6307\u5B9A\u4EE3\u7801\u5757\u884C\u53F7\u662F\u5426\u5F00\u542F\uFF0C\u53EF\u9009 ",paraId:10,tocIndex:17},{value:"true",paraId:10,tocIndex:17},{value:", ",paraId:10,tocIndex:17},{value:"false",paraId:10,tocIndex:17},{value:"boolean",paraId:10,tocIndex:17},{value:"false",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"copyable",paraId:10,tocIndex:17},{value:"\u6307\u5B9A\u4EE3\u7801\u5757\u662F\u5426\u5C55\u793A\u590D\u5236\u6309\u94AE\uFF0C\u53EF\u9009 ",paraId:10,tocIndex:17},{value:"true",paraId:10,tocIndex:17},{value:", ",paraId:10,tocIndex:17},{value:"false",paraId:10,tocIndex:17},{value:"boolean",paraId:10,tocIndex:17},{value:"true",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"onCopyChange",paraId:10,tocIndex:17},{value:"\u70B9\u51FB\u590D\u5236\u6309\u94AE\u7684\u56DE\u6389",paraId:10,tocIndex:17},{value:"(value) => void",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"height",paraId:10,tocIndex:17},{value:"\u6307\u5B9A\u4EE3\u7801\u5757\u9AD8\u5EA6\uFF0C\u7528\u4E8E\u9700\u8981\u63A7\u5236\u4EE3\u7801\u5757\u9AD8\u5EA6\u56FA\u5B9A\u7684\u573A\u666F, \u975E innerHTML \u573A\u666F\u6709\u6548",paraId:10,tocIndex:17},{value:"number",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"innerHTML",paraId:10,tocIndex:17},{value:"\u4F7F\u7528 ",paraId:10,tocIndex:17},{value:"dangerouslySetInnerHTML",paraId:10,tocIndex:17},{value:" \u6765\u6E32\u67D3\u591A\u6BB5\u4EE3\u7801\uFF0C\u4EE3\u7801\u4F7F\u7528",paraId:10,tocIndex:17},{value:"<pre><code></code></pre>",paraId:10,tocIndex:17},{value:"\u8FDB\u884C\u5305\u88F9\uFF0C\u5728\u4ECE cms \u573A\u666F\u83B7\u53D6\u4EE3\u7801\u6E32\u67D3\u7684\u60C5\u51B5\u4E0B\u975E\u5E38\u6709\u7528\uFF0C\u8BF7\u81EA\u884C\u786E\u4FDD\u4F20\u5165\u7684\u4EE3\u7801\u5185\u5BB9\u5B89\u5168\uFF0C\u9632\u6B62",paraId:10,tocIndex:17},{value:"XSS",paraId:10,tocIndex:17},{value:"\u4EE3\u7801\u6CE8\u5165.",paraId:10,tocIndex:17},{value:"boolean",paraId:10,tocIndex:17},{value:"false",paraId:10,tocIndex:17},{value:"-",paraId:10,tocIndex:17},{value:"\u53C2\u6570",paraId:11,tocIndex:18},{value:"\u8BF4\u660E",paraId:11,tocIndex:18},{value:"\u7C7B\u578B",paraId:11,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:18},{value:"\u7248\u672C",paraId:11,tocIndex:18},{value:"language",paraId:11,tocIndex:18},{value:"\u6307\u5B9A\u8BED\u8A00\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u8868\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8BED\u8A00\u7EC4\u4EF6\u4F1A\u667A\u80FD\u63A2\u6D4B\u4E3A\u53EF\u9009\u7C7B\u578B\u8BED\u8A00\u4E2D\u7684\u4E00\u79CD\u8FDB\u884C\u6E32\u67D3",paraId:11,tocIndex:18},{value:"string",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"theme",paraId:11,tocIndex:18},{value:"\u6307\u5B9A\u4E3B\u9898\uFF0C\u53EF\u9009 ",paraId:11,tocIndex:18},{value:"dark",paraId:11,tocIndex:18},{value:", ",paraId:11,tocIndex:18},{value:"light",paraId:11,tocIndex:18},{value:"string | dark | light",paraId:11,tocIndex:18},{value:"light",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"source",paraId:11,tocIndex:18},{value:"\u5BF9\u6BD4\u539F\u59CB\u4EE3\u7801",paraId:11,tocIndex:18},{value:"string",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"split",paraId:11,tocIndex:18},{value:"\u662F\u5426\u62C6\u5206\u6210\u4E24\u680F\u5BF9\u6BD4",paraId:11,tocIndex:18},{value:"boolean",paraId:11,tocIndex:18},{value:"false",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"startRowIndex",paraId:11,tocIndex:18},{value:"\u8D77\u59CB\u884C\u53F7\uFF0C\u82E5\u4E3A\u6570\u7EC4\u7C7B\u578B\uFF0C\u5219\u5206\u522B\u6307\u5B9A\u5DE6\u53F3\u4E24\u8FB9\u7684\u8D77\u59CB\u884C\u53F7",paraId:11,tocIndex:18},{value:"number | number[x,y]",paraId:11,tocIndex:18},{value:"1",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"target",paraId:11,tocIndex:18},{value:"\u5BF9\u6BD4\u76EE\u6807\u4EE3\u7801",paraId:11,tocIndex:18},{value:"string",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"-",paraId:11,tocIndex:18},{value:"javascript",paraId:12,tocIndex:19},{value:"typescript",paraId:12,tocIndex:19},{value:"css",paraId:12,tocIndex:19},{value:"groovy",paraId:12,tocIndex:19},{value:"java",paraId:12,tocIndex:19},{value:"python",paraId:12,tocIndex:19},{value:"bash",paraId:12,tocIndex:19},{value:"json",paraId:12,tocIndex:19},{value:"cpp",paraId:12,tocIndex:19},{value:"http",paraId:12,tocIndex:19},{value:"markdown",paraId:12,tocIndex:19},{value:"nginx",paraId:12,tocIndex:19},{value:"ruby",paraId:12,tocIndex:19},{value:"sql",paraId:12,tocIndex:19},{value:"xml",paraId:12,tocIndex:19},{value:"dockerfile",paraId:12,tocIndex:19},{value:"go",paraId:12,tocIndex:19},{value:"yaml",paraId:12,tocIndex:19},{value:"solidity",paraId:12,tocIndex:19},{value:"tsx",paraId:12,tocIndex:19},{value:"jsx",paraId:12,tocIndex:19}]},78208:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(59289);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"\u7248\u672C",paraId:0,tocIndex:2},{value:"type",paraId:0,tocIndex:2},{value:"Iconfont \u540D\u79F0",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2}]},40641:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(90764);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F pro-components ",paraId:0},{value:"LightFilter",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u8BE6\u89C1 pro-components LightFilter \u6587\u6863: ",paraId:1,tocIndex:2},{value:"https://procomponents.ant.design/components/query-filter#lightfilter",paraId:1,tocIndex:2}]},50642:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(8542);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:9},{value:"\u8BF4\u660E",paraId:0,tocIndex:9},{value:"\u7C7B\u578B",paraId:0,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:9},{value:"\u7248\u672C",paraId:0,tocIndex:9},{value:"logo",paraId:0,tocIndex:9},{value:"\u6807\u9898",paraId:0,tocIndex:9},{value:"string",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"bgImage",paraId:0,tocIndex:9},{value:"\u80CC\u666F\u56FE\u7247 URL \u5730\u5740",paraId:0,tocIndex:9},{value:"string",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"title",paraId:0,tocIndex:9},{value:"\u80CC\u666F\u56FE\u7247\u4E0A\u7684\u6587\u6848\u6807\u9898",paraId:0,tocIndex:9},{value:"string",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"description",paraId:0,tocIndex:9},{value:"\u80CC\u666F\u56FE\u7247\u4E0A\u7684\u63CF\u8FF0\u6587\u6848",paraId:0,tocIndex:9},{value:"string",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"board",paraId:0,tocIndex:9},{value:"\u9876\u90E8\u516C\u544A",paraId:0,tocIndex:9},{value:"ReactNode",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"alertProps",paraId:0,tocIndex:9},{value:"Alert \u5C5E\u6027",paraId:0,tocIndex:9},{value:"ButtonProps",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"enableRegister",paraId:0,tocIndex:9},{value:"\u662F\u5426\u5F00\u542F\u6CE8\u518C",paraId:0,tocIndex:9},{value:"boolean",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"loginProps",paraId:0,tocIndex:9},{value:"\u4F20\u9012\u7ED9 login \u7684\u53C2\u6570\uFF0C\u7EE7\u627F\u81EA FormProps",paraId:0,tocIndex:9},{value:"FormProps",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"registerProps",paraId:0,tocIndex:9},{value:"\u4F20\u9012\u7ED9 register \u7684\u53C2\u6570\uFF0C\u7EE7\u627F\u81EA FormProps",paraId:0,tocIndex:9},{value:"FormProps",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"otherLoginProps",paraId:0,tocIndex:9},{value:"\u4F20\u9012\u7ED9 register \u7684\u53C2\u6570\uFF0C\u7EE7\u627F\u81EA FormProps",paraId:0,tocIndex:9},{value:"FormProps",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"showAuthCode",paraId:0,tocIndex:9},{value:"\u662F\u5426\u663E\u793A\u9A8C\u8BC1\u7801",paraId:0,tocIndex:9},{value:"boolean",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"showOtherLoginButton",paraId:0,tocIndex:9},{value:"\u662F\u5426\u663E\u793A\u7B2C\u4E09\u65B9\u767B\u5F55\u6309\u94AE",paraId:0,tocIndex:9},{value:"boolean",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"authCodeImg",paraId:0,tocIndex:9},{value:"\u9A8C\u8BC1\u7801\u56FE\u7247 URL \u5730\u5740",paraId:0,tocIndex:9},{value:"string",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"onAuthCodeImgChange",paraId:0,tocIndex:9},{value:"\u5237\u65B0\u9A8C\u8BC1\u7801\u56DE\u8C03",paraId:0,tocIndex:9},{value:"function",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9},{value:"isMobile",paraId:0,tocIndex:9},{value:"\u662F\u5426\u4E3A\u79FB\u52A8\u7AEF",paraId:0,tocIndex:9},{value:"boolean",paraId:0,tocIndex:9},{value:"false",paraId:0,tocIndex:9},{value:"-",paraId:0,tocIndex:9}]},37884:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(52701);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:4},{value:"\u8BF4\u660E",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"\u7248\u672C",paraId:0,tocIndex:4},{value:"path",paraId:0,tocIndex:4},{value:"\u52A8\u753B\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4E00\u822C\u4E3A json \u6587\u4EF6",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"renderer",paraId:0,tocIndex:4},{value:"\u6E32\u67D3\u5668",paraId:0,tocIndex:4},{value:"svg | canvas | html",paraId:0,tocIndex:4},{value:"svg",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"loop",paraId:0,tocIndex:4},{value:"\u662F\u5426\u5FAA\u73AF\u64AD\u653E",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"autoplay",paraId:0,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u64AD\u653E",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"speed",paraId:0,tocIndex:4},{value:"\u52A8\u753B\u64AD\u653E\u901F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002\u503C\u5C0F\u4E8E 1 \u65F6\uFF0C\u4F1A\u51CF\u7F13\u64AD\u653E\u901F\u5EA6\uFF1B\u503C\u5927\u4E8E 1 \u65F6\uFF0C\u4F1A\u52A0\u5FEB\u64AD\u653E\u901F\u5EA6",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"1",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"\u66F4\u591A API \u8BE6\u89C1 lottie-web \u6587\u6863: ",paraId:1,tocIndex:4},{value:"https://github.com/airbnb/lottie-web/blob/master/index.d.ts#L129",paraId:1,tocIndex:4}]},44479:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(16267);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"menuList",paraId:0,tocIndex:2},{value:"\u83DC\u5355\u680F\u914D\u7F6E\u6570\u636E",paraId:0,tocIndex:2},{value:"IMenu[]",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u552F\u4E00\u6807\u8BC6",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"title",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u5C55\u793A\u6587\u6848",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"link",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u5E94\u7528\u5185\u8DEF\u7531\u94FE\u63A5",paraId:1,tocIndex:3},{value:"string | string[]",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"openNewTab",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u662F\u5426\u4E0D\u5728\u672C\u5E94\u7528\u5185\u6253\u5F00",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"href",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u5916\u94FE",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:"\u662F\u5426\u7F6E\u7070",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"id",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u7ED1\u5B9A\u5143\u7D20 id\uFF0C\u7528\u4E8E\u57CB\u70B9\u7B49\u573A\u666F\u5BF9\u5143\u7D20\u8BC6\u522B",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"children",paraId:1,tocIndex:3},{value:"\u83DC\u5355\u9879\u914D\u7F6E\u6570\u636E",paraId:1,tocIndex:3},{value:"IMenu[]",paraId:1,tocIndex:3},{value:"[]",paraId:1,tocIndex:3}]},52832:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(22844);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F pro-components ",paraId:0},{value:"PageContainer",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} \u9ED8\u8BA4\u5173\u95ED ",paraId:0},{value:"footerToolBarProps.portalDom",paraId:0},{value:"\uFF0C\u5373\u5E95\u90E8\u64CD\u4F5C\u680F\u9ED8\u8BA4\u6E32\u67D3\u5230\u7236\u5143\u7D20\uFF0C\u800C\u4E0D\u662F ",paraId:0},{value:"body",paraId:0},{value:"\u3002",paraId:0},{value:"\u{1F195} \u65B0\u589E ",paraId:0},{value:"header.reload",paraId:0},{value:" \u5C5E\u6027\uFF0C\u7528\u4E8E\u5237\u65B0\u6574\u4E2A\u9875\u9762\u3002",paraId:0},{value:"\u{1F195} \u5185\u7F6E ",paraId:0},{value:"header.itemRender",paraId:0},{value:"\uFF0C\u9ED8\u8BA4\u652F\u6301 ",paraId:0},{value:"hashHistory",paraId:0},{value:" \u548C ",paraId:0},{value:"browserHistory",paraId:0},{value:"\uFF0C\u4F46\u8981\u6C42\u9879\u76EE\u5B89\u88C5 ",paraId:0},{value:"react-router",paraId:0},{value:"\u3002\u8BE6\u89C1 ",paraId:0},{value:"\u8BF4\u660E",paraId:0},{value:"\u3002",paraId:0},{value:"\u7531\u4E8E PageContainer \u5185\u7F6E\u7684\u9762\u5305\u5C51\u5BFC\u822A\u8DF3\u8F6C\u4F9D\u8D56\u8DEF\u7531\u80FD\u529B\uFF0C\u9700\u8981\u901A\u8FC7 ConfigProvider \u5168\u5C40\u6CE8\u5165 ",paraId:1,tocIndex:7},{value:"navigate",paraId:1,tocIndex:7},{value:" \u51FD\u6570\u624D\u4F1A\u751F\u6548\u3002",paraId:1,tocIndex:7},{value:"\u5BF9\u4E8E ",paraId:2,tocIndex:7},{value:"umi v4",paraId:2,tocIndex:7},{value:":",paraId:2,tocIndex:7},{value:`import { ConfigProvider } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
// for umi v4 with react-router-dom v6
import { useNavigate } from 'umi';

const App = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider navigate={navigate}>
      <PageContainer />
    </ConfigProvider>
  );
};
`,paraId:3,tocIndex:7},{value:"\u5BF9\u4E8E ",paraId:4,tocIndex:7},{value:"umi v3",paraId:4,tocIndex:7},{value:":",paraId:4,tocIndex:7},{value:`import { ConfigProvider } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
// for umi v3 with react-router-dom v5
import { useHistory } from 'umi';
// or use \`history\` directly
// import { history } from 'umi';

const App = () => {
  const history = useHistory();
  return (
    <ConfigProvider navigate={history.push}>
      <PageContainer />
    </ConfigProvider>
  );
};
`,paraId:5,tocIndex:7},{value:"\u53C2\u6570",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"\u7248\u672C",paraId:6,tocIndex:8},{value:"header.reload",paraId:6,tocIndex:8},{value:"\u914D\u7F6E\u9875\u9762\u5237\u65B0",paraId:6,tocIndex:8},{value:"boolean | ",paraId:6,tocIndex:8},{value:"IconComponentProps",paraId:6,tocIndex:8},{value:" | ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u66F4\u591A API \u8BE6\u89C1 pro-components PageContainer \u6587\u6863: ",paraId:7,tocIndex:8},{value:"https://procomponents.ant.design/components/page-container",paraId:7,tocIndex:8}]},94190:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(37022);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:4},{value:"\u8BF4\u660E",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"\u7248\u672C",paraId:0,tocIndex:4},{value:"matchWrapperHeight",paraId:0,tocIndex:4},{value:"\u662F\u5426\u5339\u914D\u5BB9\u5668\u9AD8\u5EA6",paraId:0,tocIndex:4},{value:"boolean | false",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"\u66F4\u591A API \u8BE6\u89C1 ",paraId:1,tocIndex:4},{value:"Spin \u6587\u6863",paraId:2,tocIndex:4}]},58310:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(97733);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:5},{value:"\u8BF4\u660E",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"\u7248\u672C",paraId:0,tocIndex:5},{value:"rules",paraId:0,tocIndex:5},{value:"\u5BC6\u7801\u6821\u9A8C\u89C4\u5219",paraId:0,tocIndex:5},{value:"Validator",paraId:1,tocIndex:5},{value:"[]",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"generatePasswordRegex",paraId:0,tocIndex:5},{value:"\u968F\u673A\u751F\u6210\u5BC6\u7801\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u4E3A\u7A7A\u5219\u5C55\u793A\u968F\u673A\u751F\u6210\u7684\u6309\u94AE",paraId:0,tocIndex:5},{value:"RegExp",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"value",paraId:0,tocIndex:5},{value:"\u5BC6\u7801\u6846\u5185\u5BB9",paraId:0,tocIndex:5},{value:"string",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u5BC6\u7801\u6846\u5185\u5BB9\u53D8\u5316\u7684\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(value?: string) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"onValidate",paraId:0,tocIndex:5},{value:"\u5BC6\u7801\u6846\u5185\u5BB9\u53D8\u5316\u89E6\u53D1\u6821\u9A8C\u7684\u56DE\u8C03",paraId:0,tocIndex:5},{value:"(passed: boolean) => void",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"-",paraId:0,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"\u7248\u672C",paraId:2,tocIndex:6},{value:"validate",paraId:2,tocIndex:6},{value:"\u5BC6\u7801\u89C4\u5219",paraId:2,tocIndex:6},{value:"(value?: string) => boolean",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"message",paraId:2,tocIndex:6},{value:"\u5BC6\u7801\u89C4\u5219\u8BF4\u660E",paraId:2,tocIndex:6},{value:"string",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"optional",paraId:2,tocIndex:6},{value:"\u5BC6\u7801\u89C4\u5219\u662F\u5426\u4E3A\u6821\u9A8C\u53EF\u9009\u9879",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"true",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6}]},56727:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(37700);const o=[{value:"\u{1F525} \u5B8C\u5168\u7EE7\u627F pro-components ",paraId:0},{value:"ProTable",paraId:0},{value:" \u7684\u80FD\u529B\u548C API\uFF0C\u53EF\u65E0\u7F1D\u5207\u6362\u3002",paraId:0},{value:"\u{1F484} \u5B9A\u5236\u4E3B\u9898\u548C\u6837\u5F0F\uFF0C\u7B26\u5408 OceanBase Design \u8BBE\u8BA1\u89C4\u8303\u3002",paraId:0},{value:"\u{1F4E2} ProTable \u7684\u9ED8\u8BA4\u5C3A\u5BF8\u6539\u4E3A ",paraId:0},{value:"large",paraId:0},{value:"\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"defaultSize",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u5C3A\u5BF8",paraId:1,tocIndex:3},{value:"large",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"middle",paraId:1,tocIndex:3},{value:" | ",paraId:1,tocIndex:3},{value:"small",paraId:1,tocIndex:3},{value:"large",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u66F4\u591A API \u8BE6\u89C1 pro-components ProTable \u6587\u6863: ",paraId:2,tocIndex:3},{value:"https://procomponents.ant.design/components/pro-table",paraId:2,tocIndex:3}]},19411:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(39933);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:7},{value:"\u8BF4\u660E",paraId:0,tocIndex:7},{value:"\u7C7B\u578B",paraId:0,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"\u7248\u672C",paraId:0,tocIndex:7},{value:"selects",paraId:0,tocIndex:7},{value:"\u5FEB\u901F\u9009\u62E9\u65F6\u95F4\u914D\u7F6E\u9879",paraId:0,tocIndex:7},{value:"RangeOption",paraId:0,tocIndex:7},{value:"[NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"value",paraId:0,tocIndex:7},{value:"DatePicker \u63A7\u4EF6\u7684\u503C",paraId:0,tocIndex:7},{value:"Dayjs[] | Moment[]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"onChange",paraId:0,tocIndex:7},{value:"value \u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:0,tocIndex:7},{value:"(range: Dayjs[] | Moment[]) => void",paraId:0,tocIndex:7},{value:"noop",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"defaultValue",paraId:0,tocIndex:7},{value:"DatePicker \u63A7\u4EF6\u7684\u9ED8\u8BA4\u503C",paraId:0,tocIndex:7},{value:"Dayjs[] | Moment[]",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"defaultQuickValue",paraId:0,tocIndex:7},{value:"\u5FEB\u901F\u9009\u62E9\u7684\u9ED8\u8BA4\u503C\uFF08\u4F18\u5148\u7EA7\u4F4E\u4E8E value/defaultValue\uFF09",paraId:0,tocIndex:7},{value:"string",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"mode",paraId:0,tocIndex:7},{value:"\u6E32\u67D3\u7C7B\u578B",paraId:0,tocIndex:7},{value:"default | mini",paraId:0,tocIndex:7},{value:"default",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"pastOnly",paraId:0,tocIndex:7},{value:"\u53EA\u80FD\u9009\u62E9\u8FC7\u53BB\u65F6\u95F4",paraId:0,tocIndex:7},{value:"boolean",paraId:0,tocIndex:7},{value:"false",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"disabledDate",paraId:0,tocIndex:7},{value:"\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F",paraId:0,tocIndex:7},{value:"(currentDate: Dayjs | Moment) => boolean",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u5176\u4ED6 antd/RangePicker \u7684 ",paraId:0,tocIndex:7},{value:"props",paraId:0,tocIndex:7},{value:"antd-RangePicker",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"-",paraId:0,tocIndex:7},{value:"\u53C2\u6570",paraId:1,tocIndex:8},{value:"\u8BF4\u660E",paraId:1,tocIndex:8},{value:"\u7C7B\u578B",paraId:1,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:8},{value:"\u7248\u672C",paraId:1,tocIndex:8},{value:"selects",paraId:1,tocIndex:8},{value:"\u5FEB\u901F\u9009\u62E9\u65F6\u95F4\u914D\u7F6E\u9879",paraId:1,tocIndex:8},{value:"RangeOption",paraId:1,tocIndex:8},{value:"[NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS]",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"name",paraId:1,tocIndex:8},{value:"\u5FEB\u901F\u9009\u62E9\u7684\u503C",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"defaultName",paraId:1,tocIndex:8},{value:"name \u7684\u9ED8\u8BA4\u503C",paraId:1,tocIndex:8},{value:"string",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"onNameChange",paraId:1,tocIndex:8},{value:"value \u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:8},{value:"(name: string) => void",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"onChange",paraId:1,tocIndex:8},{value:"value \u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:8},{value:"(range: Dayjs[] | Moment[]) => void",paraId:1,tocIndex:8},{value:"noop",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"type",paraId:1,tocIndex:8},{value:"\u6E32\u67D3\u7C7B\u578B",paraId:1,tocIndex:8},{value:"select | dropdown",paraId:1,tocIndex:8},{value:"select",paraId:1,tocIndex:8},{value:"-",paraId:1,tocIndex:8},{value:"\u53C2\u6570",paraId:2,tocIndex:9},{value:"\u8BF4\u660E",paraId:2,tocIndex:9},{value:"\u7C7B\u578B",paraId:2,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:9},{value:"\u7248\u672C",paraId:2,tocIndex:9},{value:"name",paraId:2,tocIndex:9},{value:"\u5FEB\u901F\u9009\u62E9\u7684\u540D\u79F0",paraId:2,tocIndex:9},{value:"string",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"localeName",paraId:2,tocIndex:9},{value:"\u5FEB\u901F\u9009\u62E9\u7684\u540D\u79F0(\u82F1\u6587)",paraId:2,tocIndex:9},{value:"string",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"range",paraId:2,tocIndex:9},{value:"\u9009\u4E2D\u7684\u65F6\u95F4\u533A\u95F4",paraId:2,tocIndex:9},{value:"() => Dayjs[] | Moment[]",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9},{value:"-",paraId:2,tocIndex:9}]},70180:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(49231);const o=[{value:"\u4FA7\u8FB9\u63D0\u793A\u7528\u4E8E\u5728\u9875\u9762\u4FA7\u8FB9\u680F\u53F3\u4E0B\u89D2\u63D0\u793A\u7528\u6237\u8FDB\u884C\u64CD\u4F5C\u65F6\u5019\u7684\u4FBF\u6377\u6309\u94AE\uFF0C\u529F\u80FD\u7279\u6027\u4E3A\uFF1A",paraId:0},{value:"\u9ED8\u8BA4\u5904\u4E8E\u9875\u9762\u53F3\u4E0B\u89D2",paraId:1},{value:"\u53EF\u62D6\u62FD",paraId:1},{value:"\u53EF\u9690\u85CF(hover \u51FA\u9690\u85CF\u5C0F\u6309\u94AE)",paraId:1},{value:"\u53EF\u70B9\u51FB",paraId:1},{value:"\u5982\u63D0\u4F9B\u5E2E\u52A9\u54A8\u8BE2\uFF0C\u6536\u96C6\u8C03\u67E5\u95EE\u5377\u7B49\u3002",paraId:2,tocIndex:0},{value:"\u4FA7\u8FB9\u63D0\u793A\u9ED8\u8BA4\u63D0\u4F9B ",paraId:3,tocIndex:2},{value:"primary",paraId:3,tocIndex:2},{value:" \u548C\u9ED8\u8BA4\u4E24\u79CD\u5F62\u5F0F\u7684\u6309\u94AE\u4F9B\u9009\u62E9\uFF0C\u53EF\u4EE5\u914D\u7F6E ",paraId:3,tocIndex:2},{value:"defaultHide",paraId:3,tocIndex:2},{value:" \u6765\u521D\u59CB\u9690\u85CF\u3002\u8BE6\u89C1\u9875\u9762\u53F3\u4E0B\u89D2\u9690\u85CF\u7684\u6309\u94AE\u3002",paraId:3,tocIndex:2},{value:"\u4FA7\u8FB9\u63D0\u793A\u6309\u94AE\u9ED8\u8BA4\u53EF\u9690\u85CF\uFF0C\u4F46\u4F60\u4E5F\u53EF\u4EE5\u7981\u7528\u8FD9\u4E9B\u80FD\u529B\uFF0C\u9000\u5316\u6210\u666E\u901A\u7684\u6309\u94AE\u3002",paraId:4,tocIndex:4},{value:"\u4FA7\u8FB9\u63D0\u793A\u9ED8\u8BA4\u63D0\u4F9B ",paraId:5,tocIndex:6},{value:"small",paraId:5,tocIndex:6},{value:" \u548C\u9ED8\u8BA4\u4E24\u79CD\u5C3A\u5BF8\u7684\u6309\u94AE\u4F9B\u9009\u62E9",paraId:5,tocIndex:6},{value:"\u64CD\u4F5C\u9009\u5355\u8981\u6839\u636E\u6309\u94AE\u7684\u76F8\u5BF9\u4F4D\u7F6E\u800C\u53D8\uFF0C\u9700\u8981\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"id",paraId:6,tocIndex:8},{value:" \u6807\u8BB0\u6309\u94AE\uFF0C\u7136\u540E ",paraId:6,tocIndex:8},{value:"DropDown",paraId:6,tocIndex:8},{value:" \u4E0B\u62C9\u9009\u9879\u7684 ",paraId:6,tocIndex:8},{value:"getPopupContainer",paraId:6,tocIndex:8},{value:" \u65B9\u6CD5\u8BBE\u5B9A\u5176\u76F8\u5BF9\u7684 pop \u4F4D\u7F6E\u3002",paraId:6,tocIndex:8},{value:"\u6211\u4EEC\u5C1D\u8BD5\u7528 ",paraId:7,tocIndex:10},{value:"SideTip",paraId:7,tocIndex:10},{value:" \u7EC4\u4EF6\u5B9E\u73B0\u56DE\u5230\u9876\u90E8\u7684\u529F\u80FD\u3002",paraId:7,tocIndex:10},{value:"\u8981\u914D\u7F6E\u6309\u94AE\u4E0D\u53EF\u7528\u53EA\u8981\u914D\u7F6E ",paraId:8,tocIndex:12},{value:"disabled",paraId:8,tocIndex:12},{value:" \u5C5E\u6027\u5373\u53EF\u3002",paraId:8,tocIndex:12},{value:"\u6839\u636E ",paraId:9,tocIndex:14},{value:"type",paraId:9,tocIndex:14},{value:" \u4E0D\u540C, loading \u7684\u989C\u8272\u4E5F\u4F1A\u76F8\u5E94\u53D8\u5316\u3002",paraId:9,tocIndex:14},{value:"\u96C6\u6210 antd ",paraId:10,tocIndex:16},{value:"Badge",paraId:10,tocIndex:16},{value:" \u7EC4\u4EF6\u76F8\u5173\u5C5E\u6027\uFF0C\u53C2\u8003 ",paraId:10,tocIndex:16},{value:"badge",paraId:10,tocIndex:16},{value:" \u7EC4\u4EF6\u3002",paraId:10,tocIndex:16},{value:`| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| :-- | :-- | :-- | :-- | :-- | --- |
| type | \u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A `,paraId:11,tocIndex:22},{value:"primary",paraId:11,tocIndex:22},{value:` \u6216\u8005\u4E0D\u8BBE | string | - | - |
| hideable | \u8BBE\u7F6E\u662F\u5426\u53EF\u9690\u85CF | boolean | true | - |
| size | \u8BBE\u7F6E\u6309\u94AE\u5C3A\u5BF8 | small | default | default | - |
| icon | \u6307\u5B9A\u6309\u94AE\u56FE\u6807 | URL | ReactNode | - | - |
| open | \u6307\u5B9A\u662F\u5426\u6253\u5F00 | boolean | false | - |
| defaultHide | \u9ED8\u8BA4\u662F\u5426\u9690\u85CF, `,paraId:11,tocIndex:22},{value:"hideable",paraId:11,tocIndex:22},{value:"\u4E3A",paraId:11,tocIndex:22},{value:"true",paraId:11,tocIndex:22},{value:`\u65F6\u6709\u6548 | boolean | false | - |
| disabled | \u6307\u5B9A\u662F\u5426\u7981\u7528 | boolean | false | - |
| loading | \u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001 | boolean | false | - |
| position | \u521D\u59CB\u4F4D\u7F6E | { right: number, bottom: number } | {right: 24, bottom: 24} | - |
| badge | antd Badge \u7EC4\u4EF6\u76F8\u5173\u5C5E\u6027 | \u53C2\u8003 `,paraId:11,tocIndex:22},{value:"badge",paraId:11,tocIndex:22},{value:` \u7EC4\u4EF6 | - | - |
| tooltip | antd Tooltip \u7EC4\u4EF6\u76F8\u5173\u5C5E\u6027 | \u53C2\u8003 `,paraId:11,tocIndex:22},{value:"tooltip",paraId:11,tocIndex:22},{value:` \u7EC4\u4EF6 | - | - |
| id | \u82E5\u9875\u9762\u4E2D\u6709\u591A\u4E2A\u4FA7\u8FB9\u63D0\u793A\u7EC4\u4EF6\uFF0C\u5219\u901A\u8FC7 id \u6807\u8BC6\u5F53\u524D\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u7F13\u5B58\u4FA7\u8FB9\u63D0\u793A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u914D\u7F6E | string | - | - |
| onDragStart | \u5F00\u59CB\u62D6\u52A8\u7684\u65B9\u6CD5\u56DE\u8C03 | () => void | - | - |
| onDragEnd | \u7ED3\u675F\u62D6\u52A8\u7684\u65B9\u6CD5\u56DE\u8C03 | () => void | - | - |
| onDrag | \u62D6\u52A8\u4E2D\u7684\u65B9\u6CD5\u56DE\u8C03 | (offset: {right: number, bottom: number}) => void | - | - |
| buttonStyle | \u6309\u94AE\u7684\u6837\u5F0F | React.CSSProperties | - | 2.10.3 | - |
| buttonClassName | \u6309\u94AE\u7684\u7C7B | string | - | 2.10.3 | - |`,paraId:11,tocIndex:22}]},35404:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(55541);const o=[{value:" ",paraId:0},{value:" ",paraId:1},{value:" ",paraId:2},{value:" ",paraId:3},{value:" ",paraId:4},{value:"\u53C2\u6570",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u7C7B\u578B",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"checked",paraId:5,tocIndex:8},{value:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",paraId:5,tocIndex:8},{value:"boolean",paraId:5,tocIndex:8},{value:"false",paraId:5,tocIndex:8},{value:"defaultChecked",paraId:5,tocIndex:8},{value:"\u521D\u59CB\u662F\u5426\u9009\u4E2D",paraId:5,tocIndex:8},{value:"boolean",paraId:5,tocIndex:8},{value:"false",paraId:5,tocIndex:8},{value:"value",paraId:5,tocIndex:8},{value:"\u9009\u9879\u503C",paraId:5,tocIndex:8},{value:"string | number",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"disabled",paraId:5,tocIndex:8},{value:"\u7981\u7528",paraId:5,tocIndex:8},{value:"boolean",paraId:5,tocIndex:8},{value:"false",paraId:5,tocIndex:8},{value:"cover",paraId:5,tocIndex:8},{value:"\u8BBE\u7F6E\u4E3A\u56FE\u7247\u9009\u9879\u6216\u81EA\u5B9A\u4E49\u5F62\u5F0F",paraId:5,tocIndex:8},{value:"string | ReactNode",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"onChange",paraId:5,tocIndex:8},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:5,tocIndex:8},{value:"function(e: Event)",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"\u53C2\u6570",paraId:6,tocIndex:9},{value:"\u8BF4\u660E",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"title",paraId:6,tocIndex:9},{value:"\u9009\u9879\u7EC4\u6807\u9898",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"defaultValue",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879",paraId:6,tocIndex:9},{value:"string | string[] | number | number[]",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"disabled",paraId:6,tocIndex:9},{value:"\u6574\u7EC4\u7981\u7528",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"false",paraId:6,tocIndex:9},{value:"options",paraId:6,tocIndex:9},{value:"\u6307\u5B9A\u53EF\u9009\u9879",paraId:6,tocIndex:9},{value:"string[] | number[] | Option[]",paraId:6,tocIndex:9},{value:"[]",paraId:6,tocIndex:9},{value:"value",paraId:6,tocIndex:9},{value:"\u5F53\u524D\u9009\u4E2D\u7684\u9009\u9879",paraId:6,tocIndex:9},{value:"string | string[] | number | number[]",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"multiple",paraId:6,tocIndex:9},{value:"\u662F\u5426\u4E3A\u591A\u9009",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"false",paraId:6,tocIndex:9},{value:"size",paraId:6,tocIndex:9},{value:"\u8BBE\u7F6E\u9009\u9879\u7684\u5927\u5C0F",paraId:6,tocIndex:9},{value:"large | middle | small",paraId:6,tocIndex:9},{value:"middle",paraId:6,tocIndex:9},{value:"onChange",paraId:6,tocIndex:9},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:6,tocIndex:9},{value:"function(checkedValue)",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9}]},72810:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(8811);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"\u7248\u672C",paraId:0,tocIndex:2},{value:"data",paraId:0,tocIndex:2},{value:"G6 \u7684\u7ED8\u56FE\u6570\u636E",paraId:0,tocIndex:2},{value:"GraphData",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"logLoading",paraId:0,tocIndex:2},{value:"\u65E5\u5FD7\u662F\u5426\u52A0\u8F7D\u4E2D",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"subTaskLog",paraId:0,tocIndex:2},{value:"\u4EFB\u52A1\u65E5\u5FD7",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"onMenuClick",paraId:0,tocIndex:2},{value:"\u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03\u51FD\u6570",paraId:0,tocIndex:2},{value:"function(key: MenuKey, subTask: any, onSuccess: () => void)",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"onTabsChange",paraId:0,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03\u51FD\u6570",paraId:0,tocIndex:2},{value:"function(targetKey: string)",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"onTabsEdit",paraId:0,tocIndex:2},{value:"\u6807\u7B7E\u9875\u7F16\u8F91\u9762\u677F\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5305\u62EC\u65B0\u589E\u9762\u677F\u548C\u5220\u9664\u9762\u677F",paraId:0,tocIndex:2},{value:"function(targetKey: string, action: 'add' | 'remove)",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"assetsPath",paraId:0,tocIndex:2},{value:"\u56FE\u7247\u8D44\u6E90\u5F15\u7528\u8DEF\u5F84",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"/assets",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"\u5176\u4E2D type MenuKey = 'log' | 'parameter' | 'stop' | 'retry' | 'skip'\uFF0C\u5206\u522B\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"\u67E5\u770B\u65E5\u5FD7",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u67E5\u770B\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u7EC8\u6B62\u8FD0\u884C",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u91CD\u65B0\u8FD0\u884C",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u4E3A\u6210\u529F/\u8DF3\u8FC7",paraId:1,tocIndex:2},{value:" \u7684\u64CD\u4F5C\u3002",paraId:1,tocIndex:2},{value:`\u4EFB\u52A1\u72B6\u6001\u7684\u679A\u4E3E\u503C\u5206\u522B\u4E3A:
`,paraId:1,tocIndex:2},{value:"SUCCESSFUL",paraId:2,tocIndex:2},{value:": \u5DF2\u5B8C\u6210",paraId:2,tocIndex:2},{value:"RUNNING",paraId:2,tocIndex:2},{value:": \u4EFB\u52A1\u6267\u884C\u4E2D",paraId:2,tocIndex:2},{value:"FAILED",paraId:2,tocIndex:2},{value:": \u4EFB\u52A1\u5931\u8D25",paraId:2,tocIndex:2},{value:"PENDING",paraId:2,tocIndex:2},{value:": \u672A\u5F00\u59CB\u6267\u884C",paraId:2,tocIndex:2},{value:`\u7531\u4E8E\u4EFB\u52A1\u6D41\u7A0B\u56FE\u4E2D\u6D89\u53CA\u5230\u591A\u4E2A\u56FE\u7247\u8D44\u6E90\uFF0C\u56E0\u6B64\u4E0A\u5C42\u4F7F\u7528\u65F6\u9700\u8981\u5C06\u4EE5\u4E0B\u7684\u56FE\u7247\u8D44\u6E90\u52A0\u5165\u5230\u9879\u76EE\u4E2D:
`,paraId:1,tocIndex:2},{value:"graph_fit_view_icon.svg",paraId:3,tocIndex:2},{value:"graph_reset_icon.svg",paraId:3,tocIndex:2},{value:"icon_ellipsis.svg",paraId:3,tocIndex:2},{value:"task_failed.svg",paraId:3,tocIndex:2},{value:"task_pending.svg",paraId:3,tocIndex:2},{value:"task_running.svg",paraId:3,tocIndex:2},{value:"task_successful.svg",paraId:3,tocIndex:2},{value:"\u4EE5\u4E0A\u56FE\u7247\u7684\u9ED8\u8BA4\u5F15\u7528\u8DEF\u5F84\u4E3A ",paraId:1,tocIndex:2},{value:"/assets/XXX.svg",paraId:1,tocIndex:2},{value:"\uFF0C\u5982\u679C\u4E0E\u5B9E\u9645\u9879\u76EE\u7684\u90E8\u7F72\u60C5\u51B5\u4E0D\u7B26\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:2},{value:"assetsPath",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\uFF0C\u6765\u81EA\u5B9A\u4E49\u56FE\u7247\u8D44\u6E90\u7684\u5F15\u7528\u8DEF\u5F84 (",paraId:1,tocIndex:2},{value:"${assetsPath}/XXX.svg",paraId:1,tocIndex:2},{value:")\u3002\u6240\u6709\u7684\u56FE\u7247\u8D44\u6E90\u53EF\u4EE5\u5728 ",paraId:1,tocIndex:2},{value:"\u6B64\u5904",paraId:1,tocIndex:2},{value:" \u8FDB\u884C\u4E0B\u8F7D\u3002",paraId:1,tocIndex:2}]},7508:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(97906);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:4},{value:"\u8BF4\u660E",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"\u7248\u672C",paraId:0,tocIndex:4},{value:"treeNode",paraId:0,tocIndex:4},{value:"\u6811\u7ED3\u6784\u6570\u636E",paraId:0,tocIndex:4},{value:"Node",paraId:0,tocIndex:4},{value:"[]",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"defaultExpandAll",paraId:0,tocIndex:4},{value:"\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"false",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"checkable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u8282\u70B9\u53EF\u9009",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"titleRender",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u8282\u70B9 title \u6E32\u67D3\u51FD\u6570",paraId:0,tocIndex:4},{value:"(nodeData: Node) => ReactNode",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"onChange",paraId:0,tocIndex:4},{value:"\u9009\u4E2D\u6539\u53D8\u7684\u56DE\u8C03\u51FD\u6570",paraId:0,tocIndex:4},{value:"(nodes: Node[]) => void",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"width",paraId:0,tocIndex:4},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"auto",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"height",paraId:0,tocIndex:4},{value:"\u865A\u62DF\u6EDA\u52A8\u6700\u5927\u9AD8\u5EA6\uFF0C\u5982\u679C\u4E0D\u4F20\u5219\u4F1A\u6839\u636E\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"followLeaf",paraId:0,tocIndex:4},{value:"\u53EA\u5173\u6CE8\u53F6\u5B50\u8282\u70B9\u7684\u53D8\u5316",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"ref",paraId:0,tocIndex:4},{value:"\u83B7\u53D6\u7EC4\u4EF6\u5185\u7F6E\u51FD\u6570\u7684 ref",paraId:0,tocIndex:4},{value:"TreeSearchRef",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"loadData",paraId:0,tocIndex:4},{value:"\u5F02\u6B65\u8BF7\u6C42\u8282\u70B9\u6570\u636E\u7684\u56DE\u8C03\u51FD\u6570",paraId:0,tocIndex:4},{value:"(data: unknown) => Promise",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"searchStyle",paraId:0,tocIndex:4},{value:"\u641C\u7D22\u6846\u6837\u5F0F",paraId:0,tocIndex:4},{value:"Record<string, unknown>",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"\u7248\u672C",paraId:1,tocIndex:5},{value:"icon",paraId:1,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 icon",paraId:1,tocIndex:5},{value:"ReactNode",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"title",paraId:1,tocIndex:5},{value:"\u8282\u70B9\u7684\u5B9E\u9645\u6E32\u67D3\u6587\u6848",paraId:1,tocIndex:5},{value:"string",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"value",paraId:1,tocIndex:5},{value:"\u8282\u70B9\u7684\u771F\u5B9E\u503C\uFF08title \u4E0D\u586B\u65F6\u4F1A\u6E32\u67D3 value\uFF09",paraId:1,tocIndex:5},{value:"string",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"children",paraId:1,tocIndex:5},{value:"\u5B50\u8282\u70B9 (\u4E3A\u7A7A\u65F6\u4EE3\u8868\u5F53\u524D\u8282\u70B9\u4E3A leaf)",paraId:1,tocIndex:5},{value:"Node[]",paraId:1,tocIndex:5},{value:"undefined",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"\u7248\u672C",paraId:2,tocIndex:6},{value:"reset",paraId:2,tocIndex:6},{value:"\u91CD\u7F6E\u641C\u7D22\u533A\u548C tree \u7684\u5185\u5BB9",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"checkAll",paraId:2,tocIndex:6},{value:"\u5168\u9009 tree \u7684\u5185\u5BB9",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"invertSelect",paraId:2,tocIndex:6},{value:"\u53CD\u9009 tree \u7684\u5185\u5BB9",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6}]},87192:function(c,a,n){n.r(a),n.d(a,{texts:function(){return o}});var m=n(25449);const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:3},{value:"\u8BF4\u660E",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"\u7248\u672C",paraId:0,tocIndex:3},{value:"title",paraId:0,tocIndex:3},{value:"\u6807\u9898",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"description",paraId:0,tocIndex:3},{value:"\u63CF\u8FF0",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"bgImage",paraId:0,tocIndex:3},{value:"\u80CC\u666F\u56FE\u7247 URL \u5730\u5740",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"introduces",paraId:0,tocIndex:3},{value:"\u4ECB\u7ECD\u5217\u8868",paraId:0,tocIndex:3},{value:"IntroduceItem",paraId:1,tocIndex:3},{value:"[]",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"buttonText",paraId:0,tocIndex:3},{value:"\u6309\u94AE\u6587\u672C",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"buttonProps",paraId:0,tocIndex:3},{value:"Button \u5C5E\u6027",paraId:0,tocIndex:3},{value:"ButtonProps",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"steps",paraId:0,tocIndex:3},{value:"\u6B65\u9AA4\u5217\u8868",paraId:0,tocIndex:3},{value:"StepItem",paraId:2,tocIndex:3},{value:"[]",paraId:0,tocIndex:3},{value:"{}",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"stepType",paraId:0,tocIndex:3},{value:"\u6B65\u9AA4\u7684\u5C55\u793A\u7C7B\u578B",paraId:0,tocIndex:3},{value:"['default', 'card']",paraId:0,tocIndex:3},{value:"default",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"helps",paraId:0,tocIndex:3},{value:"\u56FA\u5B9A\u8868\u5934",paraId:0,tocIndex:3},{value:"HelpItem",paraId:3,tocIndex:3},{value:"[]",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"\u7248\u672C",paraId:4,tocIndex:4},{value:"image",paraId:4,tocIndex:4},{value:"\u56FE\u7247\u7684 URL \u5730\u5740",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"title",paraId:4,tocIndex:4},{value:"\u4ECB\u7ECD\u6807\u9898",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"description",paraId:4,tocIndex:4},{value:"\u4ECB\u7ECD\u63CF\u8FF0",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u53C2\u6570",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"\u7248\u672C",paraId:5,tocIndex:5},{value:"title",paraId:5,tocIndex:5},{value:"\u6B65\u9AA4\u6807\u9898",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"description",paraId:5,tocIndex:5},{value:"\u6B65\u9AA4\u63CF\u8FF0",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"imgUrl",paraId:5,tocIndex:5},{value:"icon",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"operations",paraId:5,tocIndex:5},{value:"\u64CD\u4F5C\u63CF\u8FF0",paraId:5,tocIndex:5},{value:"OperationProps[]",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:6},{value:"\u8BF4\u660E",paraId:6,tocIndex:6},{value:"\u7C7B\u578B",paraId:6,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:6},{value:"\u7248\u672C",paraId:6,tocIndex:6},{value:"onClick",paraId:6,tocIndex:6},{value:"\u64CD\u4F5C\u56DE\u8C03",paraId:6,tocIndex:6},{value:"Func",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"text",paraId:6,tocIndex:6},{value:"\u64CD\u4F5C\u6587\u6848",paraId:6,tocIndex:6},{value:"string",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u7248\u672C",paraId:7,tocIndex:7},{value:"title",paraId:7,tocIndex:7},{value:"\u5E2E\u52A9\u6807\u9898",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"link",paraId:7,tocIndex:7},{value:"\u5E2E\u52A9\u6587\u6863\u5BF9\u5E94\u94FE\u63A5",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"isMore",paraId:7,tocIndex:7},{value:"\u662F\u5426\u4E3A ",paraId:7,tocIndex:7},{value:"\u67E5\u770B\u66F4\u591A",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"false",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7}]},70955:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      tickCount: 7,
    },
  };
  return <Area {...config} />;
};
`},84541:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    xAxis: {
      range: [0, 1],
    },
  };
  return <Area {...config} />;
};
`},99728:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    xAxis: {
      tickCount: 7,
    },
  };
  return <Area {...config} />;
};
`},76076:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    autoFit: false,
    height: 160,
    width: 400,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    xAxis: {
      tickCount: 7,
    },
    tooltip: {
      scrollable: true,
    },
  };
  return <Area {...config} />;
};
`},31823:function(c,a){a.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1951 \u5E74',
      value: 38,
    },
    {
      year: '1952 \u5E74',
      value: 52,
    },
    {
      year: '1956 \u5E74',
      value: 61,
    },
    {
      year: '1957 \u5E74',
      value: 138,
    },
    {
      year: '1958 \u5E74',
      value: 48,
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'value',
    yField: 'year',
    legend: {
      position: 'top-left',
    },
  };

  return <Bar {...config} />;
};
`},17189:function(c,a){a.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config: BarConfig = {
    data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
  };

  return <Bar {...config} />;
};
`},44605:function(c,a){a.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
  };
  return <Bar data={data} {...config} />;
};
`},55135:function(c,a){a.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '\u77ED\u8DD1',
      value: 0.95,
    },
    {
      type: '\u957F\u8DD1',
      value: 0.72,
    },
    {
      type: '\u8DB3\u7403',
      value: 0.64,
    },
    {
      type: '\u7BEE\u7403',
      value: 0.32,
    },
    {
      type: '\u7F51\u7403',
      value: 0.21,
    },
  ];
  const config1 = {
    isProgress: true,
    xField: 'value',
    yField: 'type',
    meta: {
      value: {
        alias: '\u6BD4\u8D5B\u8FDB\u5EA6',
      },
    },
  };
  const config2 = {
    ...config1,
    warningPercent: 0.7,
    dangerPercent: 0.8,
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Bar height={200} data={data} {...config1} />
      </Col>
      <Col span={12}>
        <Bar height={200} data={data} {...config2} />
      </Col>
    </Row>
  );
};
`},1948:function(c,a){a.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: '\u5206\u7C7B\u4E00',
      values: [76, 100],
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      values: [56, 108],
    },
    {
      type: '\u5206\u7C7B\u4E09',
      values: [38, 129],
    },
    {
      type: '\u5206\u7C7B\u56DB',
      values: [58, 155],
    },
    {
      type: '\u5206\u7C7B\u4E94',
      values: [45, 120],
    },
    {
      type: '\u5206\u7C7B\u516D',
      values: [23, 99],
    },
    {
      type: '\u5206\u7C7B\u4E03',
      values: [18, 56],
    },
    {
      type: '\u5206\u7C7B\u516B',
      values: [18, 34],
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'values',
    yField: 'type',
    isRange: true,
  };
  return <Bar {...config} />;
};
`},35930:function(c,a){a.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 4.5,
      type: 'Jon',
    },
    {
      year: '1992',
      value: 5,
      type: 'Jon',
    },
    {
      year: '1993',
      value: 3,
      type: 'Jon',
    },
    {
      year: '1994',
      value: 4.9,
      type: 'Jon',
    },
    {
      year: '1995',
      value: 4,
      type: 'Jon',
    },
  ];
  const config: BarConfig = {
    data,
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
  };
  return <Bar {...config} />;
};
`},15383:function(c,a){a.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: '\u5BB6\u5177',
      sales: 38,
    },
    {
      type: '\u7CAE\u6CB9',
      sales: 52,
    },
    {
      type: '\u751F\u9C9C',
      sales: 61,
    },
    {
      type: '\u7F8E\u5BB9',
      sales: 145,
    },
    {
      type: '\u6BCD\u5A74',
      sales: 48,
    },
    {
      type: '\u98DF\u54C1',
      sales: 38,
    },
    {
      type: '\u996E\u6599',
      sales: 38,
    },
    {
      type: '\u6E05\u6D01',
      sales: 38,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // \u53EF\u624B\u52A8\u914D\u7F6E label \u6570\u636E\u6807\u7B7E\u4F4D\u7F6E
      position: 'top',
    },
  };
  return <Column {...config} />;
};
`},33650:function(c,a){a.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config: ColumnConfig = {
    data,
    isGroup: true,
    xField: 'label',
    yField: 'value',
    seriesField: 'type',
  };
  return <Column {...config} />;
};
`},32949:function(c,a){a.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
  };

  return <Column {...config} />;
};
`},63098:function(c,a){a.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: '\u5206\u7C7B\u4E00',
      values: [76, 100],
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      values: [56, 108],
    },
    {
      type: '\u5206\u7C7B\u4E09',
      values: [38, 129],
    },
    {
      type: '\u5206\u7C7B\u56DB',
      values: [58, 155],
    },
    {
      type: '\u5206\u7C7B\u4E94',
      values: [45, 120],
    },
    {
      type: '\u5206\u7C7B\u516D',
      values: [23, 99],
    },
    {
      type: '\u5206\u7C7B\u4E03',
      values: [18, 56],
    },
    {
      type: '\u5206\u7C7B\u516B',
      values: [18, 34],
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'values',
    isRange: true,
  };

  return <Column {...config} />;
};
`},79037:function(c,a){a.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 4.7,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 4.7,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 4.5,
      type: 'Jon',
    },
    {
      year: '1992',
      value: 5,
      type: 'Jon',
    },
    {
      year: '1993',
      value: 3,
      type: 'Jon',
    },
    {
      year: '1994',
      value: 4.9,
      type: 'Jon',
    },
    {
      year: '1995',
      value: 4,
      type: 'Jon',
    },
    {
      year: '1996',
      value: 4.7,
      type: 'Jon',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Jon',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Jon',
    },
  ];
  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
  };

  return <Column {...config} />;
};
`},8485:function(c,a){a.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      time: '2019-03',
      value: 350,
      count: 800,
    },
    {
      time: '2019-04',
      value: 900,
      count: 600,
    },
    {
      time: '2019-05',
      value: 300,
      count: 400,
    },
    {
      time: '2019-06',
      value: 450,
      count: 380,
    },
    {
      time: '2019-07',
      value: 470,
      count: 220,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},70273:function(c,a){a.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const uvData = [
    {
      time: '2019-03',
      value: 35,
    },
    {
      time: '2019-04',
      value: 90,
    },
    {
      time: '2019-05',
      value: 30,
    },
    {
      time: '2019-06',
      value: 45,
    },
    {
      time: '2019-07',
      value: 47,
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const config = {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
        seriesField: 'name',
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},84065:function(c,a){a.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
      },
      {
        geometry: 'line',
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},61706:function(c,a){a.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        point: {},
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},28145:function(c,a){a.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    autoFit: false,
    height: 140,
    width: 400,
    xField: 'time',
    yField: ['value', 'count'],
    tooltip: {
      scrollable: true,
    },
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        point: {},
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},64665:function(c,a){a.Z=`import React from 'react';
import { Gauge } from '@oceanbase/charts';

export default () => {
  const config = {
    percent: 0.75,
  };
  return <Gauge {...config} />;
};
`},14784:function(c,a){a.Z=`import React from 'react';
import { Gauge, useTheme } from '@oceanbase/charts';

export default () => {
  const themeConfig = useTheme();
  const config = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: [themeConfig.semanticGreen, themeConfig.semanticYellow, themeConfig.semanticRed],
    },
  };
  return <Gauge {...config} />;
};
`},26613:function(c,a){a.Z=`import React from 'react';
import { Gauge, useTheme } from '@oceanbase/charts';

export default () => {
  const themeConfig = useTheme();
  const config = {
    percent: 0.75,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: [themeConfig.semanticGreen, themeConfig.semanticYellow, themeConfig.semanticRed],
    },
  };
  return <Gauge {...config} />;
};
`},41965:function(c,a){a.Z=`import React from 'react';
import { Gauge } from '@oceanbase/charts';
import type { GaugeConfig } from '@oceanbase/charts';

export default () => {
  const config: GaugeConfig = {
    percent: 0.75,
    indicator: false,
    innerRadius: 0.75,
  };
  return <Gauge {...config} />;
};
`},20784:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Histogram } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    binField: 'value',
    binWidth: 2,
  };

  return <Histogram {...config} />;
};
`},97891:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Histogram } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    binField: 'depth',
    binWidth: 2,
    stackField: 'cut',
  };

  return <Histogram {...config} />;
};
`},8464:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // \u6570\u503C\u683C\u5F0F\u5316\u4E3A\u5343\u5206\u4F4D
        formatter: v => \`\${v}\`.replace(/\\d{1,3}(?=(\\d{3})+$)/g, s => \`\${s},\`),
      },
    },
    style: {
      height: '50vh',
    },
  };
  return <Line {...config} />;
};
`},81197:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'timeCat',
    },
  };
  return <Line {...config} />;
};
`},45579:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // \u6570\u503C\u683C\u5F0F\u5316\u4E3A\u5343\u5206\u4F4D
        formatter: v => \`\${v}\`.replace(/\\d{1,3}(?=(\\d{3})+$)/g, s => \`\${s},\`),
      },
    },
  };
  return <Line {...config} />;
};
`},76747:function(c,a){a.Z=`import React from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh',
  };
  return <Line {...config} />;
};
`},94672:function(c,a){a.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    autoFit: false,
    height: 160,
    width: 400,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    tooltip: {
      scrollable: true,
    },
  };
  return <Line {...config} />;
};
`},30022:function(c,a){a.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Liquid height={200} title="CPU" percent={0.9} warningPercent={0.6} dangerPercent={0.9} />
      </Col>
      <Col span={8}>
        <Liquid height={200} title="\u5185\u5B58" percent={0.6} warningPercent={0.6} dangerPercent={0.9} />
      </Col>
      <Col span={8}>
        <Liquid height={200} title="\u78C1\u76D8" percent={0.3} warningPercent={0.6} dangerPercent={0.9} />
      </Col>
    </Row>
  );
};
`},84679:function(c,a){a.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={[24, 100]}>
      <Col span={8}>
        <Liquid height={100} layout="horizontal" title="CPU" percent={0.6754} />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="\u5185\u5B58"
          percent={0.6754}
          // \u4FDD\u7559 1 \u4F4D\u6709\u6548\u5C0F\u6570
          decimal={1}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="\u78C1\u76D8"
          percent={0.6754}
          // \u4FDD\u7559 0 \u4F4D\u6709\u6548\u5C0F\u6570
          decimal={0}
        />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="CPU" percent={0.001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="\u5185\u5B58" percent={0.0001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="\u78C1\u76D8" percent={0.00001234} />
      </Col>
    </Row>
  );
};
`},81386:function(c,a){a.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={[24, 100]}>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="\u5185\u5B58"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="\u78C1\u76D8"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="\u5185\u5B58"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="\u78C1\u76D8"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
    </Row>
  );
};
`},30783:function(c,a){a.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="\u5185\u5B58"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="\u78C1\u76D8"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
    </Row>
  );
};
`},626:function(c,a){a.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '\u5206\u7C7B\u4E00',
      value: 1.3,
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      value: 3.38,
    },
    {
      type: '\u5206\u7C7B\u4E09',
      value: 4.56,
    },
    {
      type: '\u5206\u7C7B\u56DB',
      value: 5.7,
    },
    {
      type: '\u5206\u7C7B\u4E94',
      value: 6.22,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},38508:function(c,a){a.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '\u5206\u7C7B\u4E00',
      value: 32,
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      value: 25,
    },
    {
      type: '\u5206\u7C7B\u4E09',
      value: 18,
    },
    {
      type: '\u5206\u7C7B\u56DB',
      value: 15,
    },
    {
      type: '\u5206\u7C7B\u4E94',
      value: 20,
    },
    {
      type: '\u5176\u4ED6',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},25588:function(c,a){a.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '\u5206\u7C7B\u4E00',
      value: 32,
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      value: 25,
    },
    {
      type: '\u5206\u7C7B\u4E09',
      value: 18,
    },
    {
      type: '\u5206\u7C7B\u56DB',
      value: 15,
    },
    {
      type: '\u5206\u7C7B\u4E94',
      value: 20,
    },
    {
      type: '\u5176\u4ED6',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isHalfDonut: true,
    legend: {
      position: 'bottom',
    },
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'right',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},31791:function(c,a){a.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: '\u5206\u7C7B\u4E00',
      value: 32,
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      value: 25,
    },
    {
      type: '\u5206\u7C7B\u4E09',
      value: 18,
    },
    {
      type: '\u5206\u7C7B\u56DB',
      value: 15,
    },
    {
      type: '\u5206\u7C7B\u4E94',
      value: 20,
    },
    {
      type: '\u5176\u4ED6',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
    label: {
      content: datum => \`\${(datum.percent * 100).toFixed(0)}%\`,
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},67550:function(c,a){a.Z=`import React, { useState } from 'react';
import { Pie } from '@oceanbase/charts';

const Demo: React.FC = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([
    {
      type: '\u5206\u7C7B\u4E00',
      value: 27,
    },
    {
      type: '\u5206\u7C7B\u4E8C',
      value: 25,
    },
    {
      type: '\u5206\u7C7B\u4E09',
      value: 18,
    },
    {
      type: '\u5206\u7C7B\u56DB',
      value: 15,
    },
    {
      type: '\u5206\u7C7B\u4E94',
      value: 10,
    },
    {
      type: '\u5176\u4ED6',
      value: 5,
    },
  ]);

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    onReady: plot => {
      console.log(plot);
    },
  };

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          marginLeft: 8,
        }}
      >
        \u5916\u90E8\u72B6\u6001\u6539\u53D8\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3
      </button>
      <button
        onClick={() => {
          setData([
            {
              type: '\u5206\u7C7B\u56DB',
              value: 15,
            },
            {
              type: '\u5206\u7C7B\u4E94',
              value: 10,
            },
            {
              type: '\u5176\u4ED6',
              value: Math.random() * 100,
            },
          ]);
        }}
        style={{
          marginLeft: 8,
        }}
      >
        \u6570\u636E\u6539\u53D8\u91CD\u65B0\u6E32\u67D3
      </button>
      <Pie {...config} />
    </div>
  );
};

export default Demo;
`},28256:function(c,a){a.Z=`import React, { useState } from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';

export default () => {
  const [size, setSize] = useState('middle');

  return (
    <div>
      <Form style={{ marginBottom: '30px' }}>
        <Form.Item label="Size" required={true}>
          <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value={300}>300px</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Row>
        <Col span={6}>
          <Score size={size} value={50} />
        </Col>
        <Col span={6}>
          <Score size={size} value={60} />
        </Col>
        <Col span={6}>
          <Score size={size} value={70} />
        </Col>
        <Col span={6}>
          <Score size={size} value={85} />
        </Col>
      </Row>
    </div>
  );
};
`},3151:function(c,a){a.Z=`import React from 'react';
import { Score } from '@oceanbase/charts';

export default () => {
  return <Score value={100} color="#A084E8" unit="" valueStyle={{ color: '#D0BFFF' }} />;
};
`},69256:function(c,a){a.Z=`import React from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const thresholds = {
    0: 'rgb(242, 73, 92)',
    20: 'rgb(250, 222, 42)',
    40: 'rgb(255, 152, 48)',
    60: 'rgb(184, 119, 217)',
    80: 'rgb(87, 148, 242)',
    100: 'rgb(115, 191, 105)',
  };
  return (
    <Row gutter={[8, 8]}>
      {range(0, 6).map(index => (
        <Col span={8} key={index}>
          <Score value={index * 20} thresholds={thresholds} />
        </Col>
      ))}
    </Row>
  );
};
`},74433:function(c,a){a.Z=`import React, { useState } from 'react';
import { Stat } from '@oceanbase/charts';
import type { StatConfig } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const [height, setHeight] = useState(100);
  const [span, setSpan] = useState(8);
  const [layout, setLayout] = useState<StatConfig['layout']>('vertical');
  const [colorMode, setColorMode] = useState<StatConfig['colorMode']>('background');
  const [chartMode, setChartMode] = useState<StatConfig['chartMode']>('area');
  const [textAlign, setTextAlign] = useState<StatConfig['textAlign']>('auto');
  const [extra, setExtra] = useState('suffix');
  const config: StatConfig = {
    height,
    ...(extra
      ? {
          [extra]: extra === 'prefix' ? '$' : 'USD',
        }
      : {}),
    layout,
    colorMode,
    chartMode,
    chartData: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
      243, 226, 192,
    ],
    textAlign,
    thresholds: {
      100: 'rgb(87, 148, 242)',
      200: 'rgb(115, 191, 105)',
      300: 'rgb(184, 119, 217)',
      400: 'rgb(250, 222, 42)',
      500: 'rgb(255, 152, 48)',
      600: 'rgb(242, 73, 92)',
    },
  };
  return (
    <div>
      <Form
        layout="horizontal"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{ span: 18 }}
        requiredMark={false}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Height">
              <Radio.Group value={height} onChange={e => setHeight(e.target.value)}>
                <Radio.Button value={200}>200</Radio.Button>
                <Radio.Button value={150}>150</Radio.Button>
                <Radio.Button value={100}>100</Radio.Button>
                <Radio.Button value={50}>50</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Columns">
              <Radio.Group value={span} onChange={e => setSpan(e.target.value)}>
                <Radio.Button value={4}>6</Radio.Button>
                <Radio.Button value={6}>4</Radio.Button>
                <Radio.Button value={8}>3</Radio.Button>
                <Radio.Button value={12}>2</Radio.Button>
                <Radio.Button value={24}>1</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Layout">
              <Radio.Group value={layout} onChange={e => setLayout(e.target.value)}>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Color Mode">
              <Radio.Group value={colorMode} onChange={e => setColorMode(e.target.value)}>
                <Radio.Button value="none">None</Radio.Button>
                <Radio.Button value="value">Value</Radio.Button>
                <Radio.Button value="background">Background</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Chart Mode">
              <Radio.Group value={chartMode} onChange={e => setChartMode(e.target.value)}>
                <Radio.Button value="none">None</Radio.Button>
                <Radio.Button value="line">Line</Radio.Button>
                <Radio.Button value="area">Area</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Text Align">
              <Radio.Group value={textAlign} onChange={e => setTextAlign(e.target.value)}>
                <Radio.Button value="auto">Auto</Radio.Button>
                <Radio.Button value="center">Center</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Extra">
              <Radio.Group value={extra} onChange={e => setExtra(e.target.value)}>
                <Radio.Button value={undefined}>None</Radio.Button>
                <Radio.Button value="prefix">Prefix</Radio.Button>
                <Radio.Button value="suffix">Suffix</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={[8, 8]}>
        {range(1, 7).map(index => (
          <Col span={span} key={index}>
            <Stat title={\`Cluster\${index + 1}\`} value={index * 100} {...config} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
`},20441:function(c,a){a.Z=`import React from 'react';
import { TinyArea, useTheme } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const themeConfig = useTheme();
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
    243, 226, 192,
  ];
  const config1 = {
    data,
  };
  const config2 = {
    ...config1,
    color: themeConfig.semanticRed,
    point: {},
    areaStyle: {
      fill: themeConfig.semanticRedGradient,
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyArea {...config1} />
      </Col>
      <Col span={12}>
        <TinyArea {...config2} />
      </Col>
    </Row>
  );
};
`},39115:function(c,a){a.Z=`import React from 'react';
import { TinyColumn } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [274, 337, 81, 497, 666, 219, 269];
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyColumn data={data} />
      </Col>
      <Col span={12}>
        <TinyColumn data={data} label={{}} />
      </Col>
    </Row>
  );
};
`},27363:function(c,a){a.Z=`import React from 'react';
import { TinyLine, useTheme } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const themeConfig = useTheme();
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
    243, 226, 192,
  ];
  const config1 = {
    data,
  };
  const config2 = {
    ...config1,
    color: themeConfig.semanticGreen,
    point: {},
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyLine {...config1} />
      </Col>
      <Col span={12}>
        <TinyLine {...config2} />
      </Col>
    </Row>
  );
};
`},73891:function(c,a){a.Z=`import React from 'react';
import { Progress } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const titleStyle = { width: 90 };
  const percentStyle = {
    width: 80,
  };
  const progressStyle = { radius: 6 };
  const maxColumnWidth = 6;
  return (
    <Row gutter={[100, 50]}>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="\u5185\u5B58" percent={0.7} />
        <Progress title="\u78C1\u76D8" percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="\u5185\u5B58" percent={0.7} warningPercent={0.7} />
        <Progress title="\u78C1\u76D8" percent={0.9} dangerPercent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} progressStyle={progressStyle} />
        <Progress title="\u5185\u5B58" percent={0.7} progressStyle={progressStyle} />
        <Progress title="\u78C1\u76D8" percent={0.9} progressStyle={progressStyle} />
      </Col>
      <Col span={12}>
        <Progress title={<div style={titleStyle}>CPU</div>} percent={0.3} />
        <Progress title={<div style={titleStyle}>\u5185\u5B58\u5185\u5B58</div>} percent={0.7} />
        <Progress title={<div style={titleStyle}>\u78C1\u76D8\u78C1\u76D8\u78C1\u76D8</div>} percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} formatter={percent => \`\u767E\u5206\u6BD4: \${percent * 100}%\`} />
        <Progress title="\u5185\u5B58" percent={0.7} formatter={percent => \`\u767E\u5206\u6BD4: \${percent * 100}%\`} />
        <Progress title="\u78C1\u76D8" percent={0.9} formatter={percent => \`\u767E\u5206\u6BD4: \${percent * 100}%\`} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} maxColumnWidth={maxColumnWidth} />
        <Progress title="\u5185\u5B58" percent={0.7} maxColumnWidth={maxColumnWidth} />
        <Progress title="\u78C1\u76D8" percent={0.9} maxColumnWidth={maxColumnWidth} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="\u5185\u5B58" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="\u78C1\u76D8" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="\u5185\u5B58" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="\u78C1\u76D8" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
    </Row>
  );
};
`},4165:function(c,a){a.Z=`import { Alert, Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Success Tips" type="success" showIcon action={<a>Detail</a>} />
    <Alert message="Informational Notes" type="info" showIcon action={<a>Detail</a>} />
    <Alert message="Warning" type="warning" showIcon action={<a>Detail</a>} />
    <Alert message="Error" type="error" showIcon action={<a>Detail</a>} />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
      closable
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
  </Space>
);

export default App;
`},5669:function(c,a){a.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Warning text" banner />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <Alert type="error" message="Error text" banner />
  </Space>
);

export default App;
`},23502:function(c,a){a.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Success Tips" type="success" showIcon closable onClose={onClose} />
    <Alert message="Informational Notes" type="info" showIcon closable onClose={onClose} />
    <Alert message="Warning" type="warning" showIcon closable onClose={onClose} />
    <Alert message="Error" type="error" showIcon closable onClose={onClose} />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
      closable
      onClose={onClose}
    />
  </Space>
);

export default App;
`},70684:function(c,a){a.Z=`import { Alert, Button } from '@oceanbase/design';
import React, { useState } from 'react';

const { ErrorBoundary } = Alert;

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

const App: React.FC = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);

export default App;
`},55861:function(c,a){a.Z=`import { Alert, Form, Radio, Space } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [ghost, setGhost] = useState(true);
  const [colored, setColored] = useState(true);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="\u900F\u660E\u80CC\u666F" required={true}>
          <Radio.Group
            value={ghost}
            onChange={e => {
              setGhost(e.target.value);
            }}
          >
            <Radio.Button value={true}>\u662F</Radio.Button>
            <Radio.Button value={false}>\u5426</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="\u5168\u5C40\u7740\u8272" required={true}>
          <Radio.Group
            value={colored}
            onChange={e => {
              setColored(e.target.value);
            }}
          >
            <Radio.Button value={true}>\u662F</Radio.Button>
            <Radio.Button value={false}>\u5426</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Tips" type="success" showIcon ghost={ghost} colored={colored} />
        <Alert message="Informational Notes" type="info" showIcon ghost={ghost} colored={colored} />
        <Alert message="Warning" type="warning" showIcon ghost={ghost} colored={colored} />
        <Alert message="Error" type="error" showIcon ghost={ghost} colored={colored} />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
          ghost={ghost}
          colored={colored}
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
          ghost={ghost}
          colored={colored}
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          ghost={ghost}
          colored={colored}
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
          ghost={ghost}
          colored={colored}
        />
      </Space>
    </div>
  );
};

export default App;
`},40113:function(c,a){a.Z=`import { Alert } from '@oceanbase/design';
import React from 'react';
import Marquee from 'react-fast-marquee';

const App: React.FC = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
);

export default App;
`},95720:function(c,a){a.Z=`import React from 'react';
import { Alert, Button, Space } from '@oceanbase/design';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      action={<a>Detail</a>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      closable
      action={<a>Detail</a>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      description="Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      description="Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
  </Space>
);

export default App;
`},75611:function(c,a){a.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </Space>
);

export default App;
`},61845:function(c,a){a.Z=`import React, { useState } from 'react';
import { Badge, Space, Switch, theme } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [show, setShow] = useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color={token.colorWarning} />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{ color: token.colorError }} /> : 0} />
      <Badge count={show ? 109 : 0} style={{ backgroundColor: token.colorSuccess }} />
    </Space>
  );
};

export default App;
`},1724:function(c,a){a.Z=`import React from 'react';
import { Avatar, Badge, Space, theme } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Space size="middle">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: token.colorError }} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  );
};

export default App;
`},83073:function(c,a){a.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';
import { NotificationOutlined } from '@ant-design/icons';

const App: React.FC = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
);

export default App;
`},44207:function(c,a){a.Z=`import React from 'react';
import { Badge, Card, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
    <Badge.Ribbon text="Hippies">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="cyan">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="green">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="volcano">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="magenta">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
  </Space>
);

export default App;
`},97776:function(c,a){a.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';
import {
  LoadingOutlined,
  AppleOutlined,
  WindowsOutlined,
  ChromeOutlined,
  TaobaoOutlined,
} from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical">
    <Badge icon={<ChromeOutlined />} status="success" text="Success" />
    <Badge icon={<AppleOutlined />} status="error" text="Error" />
    <Badge icon={<WindowsOutlined />} status="default" text="Default" />
    <Badge icon={<LoadingOutlined />} status="processing" text="Processing" />
    <Badge icon={<TaobaoOutlined />} status="warning" text="Warning" />
  </Space>
);

export default App;
`},69466:function(c,a){a.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Space>
      <Badge icon={true} status="success" />
      <Badge icon={true} status="error" />
      <Badge icon={true} status="default" />
      <Badge icon={true} status="processing" />
      <Badge icon={true} status="warning" />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <Badge icon={true} status="success" text="Success" />
      <Badge icon={true} status="error" text="Error" />
      <Badge icon={true} status="default" text="Default" />
      <Badge icon={true} status="processing" text="Processing" />
      <Badge icon={true} status="warning" text="Warning" />
    </Space>
  </>
);

export default App;
`},3262:function(c,a){a.Z=`import React from 'react';
import { Badge, Button, Space, Tooltip } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size={16}>
    <Button type="primary">
      <Badge status="success" text="Success" />
    </Button>
    <Button danger={true}>
      <Badge status="success" text="Success" icon={true} />
    </Button>
    <Tooltip open={true} title={<Badge status="success" text="Success" />}>
      <span>Tooltip</span>
    </Tooltip>
  </Space>
);

export default App;
`},40002:function(c,a){a.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Space>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  </>
);

export default App;
`},48118:function(c,a){a.Z=`import React from 'react';
import { Breadcrumb } from '@oceanbase/design';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: 'User',
      },
      {
        href: '',
        title: 'User List',
      },
      {
        title: 'User Detail',
      },
    ]}
  />
);

export default App;
`},46123:function(c,a){a.Z=`import React from 'react';
import { Breadcrumb } from '@oceanbase/design';
import { UserOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>User</span>
          </>
        ),
      },
      {
        href: '',
        title: 'User List',
      },
      {
        title: 'User Detail',
      },
    ]}
  />
);

export default App;
`},29326:function(c,a){a.Z=`import React, { useState } from 'react';
import { Breadcrumb } from '@oceanbase/design';

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const menuItems = [
    {
      key: '1',
      label: 'Jackson',
    },
    {
      key: '2',
      label: 'John',
    },
    {
      key: '3',
      label: 'Lucy',
    },
  ];
  return (
    <Breadcrumb
      items={[
        {
          href: '',
          title: 'User',
        },
        {
          title: 'User List',
        },
        {
          title: menuItems.find(item => item.key === selectedKey).label,
          menu: {
            items: menuItems,
            selectedKeys: [selectedKey],
            onClick: ({ key }) => {
              setSelectedKey(key);
            },
          },
        },
      ]}
    />
  );
};

export default App;
`},30043:function(c,a){a.Z=`import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

export default App;
`},97118:function(c,a){a.Z=`import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Space>
);

export default App;
`},71156:function(c,a){a.Z=`import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Space>
    <Space>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" href="https://design.oceanbase.com">
        Href Primary
      </Button>
      <Button type="primary" href="https://design.oceanbase.com" disabled>
        Href Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" danger>
        Danger Default
      </Button>
      <Button type="primary" danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
  </Space>
);

export default App;
`},27170:function(c,a){a.Z=`import React from 'react';
import { Dropdown, Space } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const App: React.FC = () => (
  <Space>
    <Dropdown.Button
      menu={{
        items,
        onClick: e => {
          console.log('click', e);
        },
      }}
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      menu={{
        items,
        onClick: e => {
          console.log('click', e);
        },
      }}
      icon={<DownOutlined />}
    >
      Dropdown
    </Dropdown.Button>
  </Space>
);

export default App;
`},63654:function(c,a){a.Z=`import React, { useState } from 'react';
import { PlusOutlined } from '@oceanbase/icons';
import { Button, Divider, Radio, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [position, setPosition] = useState<'start' | 'end'>('end');

  return (
    <>
      <Space>
        <Radio.Group value={position} onChange={e => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Space>
        <Button type="primary" icon={<PlusOutlined />} iconPosition={position}>
          Primary
        </Button>
        <Button icon={<PlusOutlined />} iconPosition={position}>
          Default
        </Button>
        <Button type="dashed" icon={<PlusOutlined />} iconPosition={position}>
          Dashed
        </Button>
        <Button icon={<PlusOutlined />} iconPosition={position} />
      </Space>
    </>
  );
};

export default App;
`},68102:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Form, Space, Switch } from '@oceanbase/design';
import { CheckOutlined, CloseOutlined, PoweroffOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Space size={16} direction="vertical">
      <Form layout="inline">
        <Form.Item label="loading" required={true}>
          <Switch
            checked={loading}
            onChange={value => {
              setLoading(value);
            }}
          />
        </Form.Item>
      </Form>
      <Space>
        <Button type="primary" loading={loading}>
          Loading
        </Button>
        <Button loading={loading}>Loading</Button>
        <Button loading={loading} />
      </Space>
      <Space>
        <Button type="primary" danger loading={loading}>
          Loading
        </Button>
        <Button danger ghost loading={loading}>
          Loading
        </Button>
        <Button type="link" loading={loading}>
          Link
        </Button>
      </Space>
    </Space>
  );
};

export default App;
`},55385:function(c,a){a.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Default size card" extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card size="small" title="Small size card" extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
`},19464:function(c,a){a.Z=`import React from 'react';
import { Card, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorFillContent,
        padding: '40px 24px',
        margin: '-40px -24px',
      }}
    >
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default App;
`},97893:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Card, Modal, Spin } from '@oceanbase/design';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.confirm({
            title: 'This is first Modal.confirm',
            onOk: () => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                Modal.confirm({
                  title: 'This is second Modal.confirm',
                });
              }, 2000);
            },
          });
        }}
      >
        Click
      </Button>
      <div style={{ marginTop: 16 }}>
        {loading ? (
          <Spin />
        ) : (
          <Card title="Card title" style={{ width: 300 }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
        )}
      </div>
    </>
  );
};

export default App;
`},43792:function(c,a){a.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const App: React.FC = () => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);

export default App;
`},68119:function(c,a){a.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card title="Card title">
      <Card title="Inner Card title" divided={false}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card
      title="Card title"
      bodyStyle={{
        padding: 0,
      }}
    >
      <Card title="Inner Card title" bordered={false} divided={false}>
        Inner Card content
      </Card>
    </Card>
  </>
);

export default App;
`},38336:function(c,a){a.Z=`import { Card } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Card divided={false} title="Card title" extra={<a>More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export default App;
`},38965:function(c,a){a.Z=`import React, { useState } from 'react';
import { Card, Form, Radio, Switch } from '@oceanbase/design';
import type { CardSize } from '@oceanbase/design/es/card';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
    tag: 22,
  },
  {
    key: 'app',
    tab: 'app',
    tag: 99,
  },
  {
    key: 'project',
    tab: 'project',
    tag: 0,
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const App: React.FC = () => {
  const [size, setSize] = useState<CardSize>('default');
  const [divided, setDivided] = useState(true);
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 24 }}>
        <Form.Item label="size">
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="divided">
          <Switch
            checked={divided}
            onChange={e => {
              setDivided(e);
            }}
          />
        </Form.Item>
      </Form>
      <Card
        size={size}
        divided={divided}
        title="Card title"
        extra={<a>More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <Card
        size={size}
        divided={divided}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a>More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default App;
`},29027:function(c,a){a.Z=`import React from 'react';
import { Cascader } from '@oceanbase/design';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange = (value: (string | number)[]) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);

export default App;
`},56042:function(c,a){a.Z=`import React from 'react';
import { Cascader } from '@oceanbase/design';
import type { MultipleCascaderProps } from '@oceanbase/design/es/cascader';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: \`Number \${index}\`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

const onChange: MultipleCascaderProps<Option>['onChange'] = value => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader
    style={{ width: '100%' }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
    defaultValue={[
      ['light', 0],
      ['light', 1],
    ]}
  />
);

export default App;
`},85976:function(c,a){a.Z=`import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import React, { useState } from 'react';

const { TabPane } = Tabs;

const App: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');

  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={e => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space size={[0, 16]} style={{ width: '100%' }} direction="vertical">
          <Input />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select defaultValue="demo" options={[{ value: 'demo', label: 'demo' }]} />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Age', dataIndex: 'age' },
              ]}
              dataSource={[
                { key: '1', name: 'John Brown', age: 32 },
                { key: '2', name: 'Jim Green', age: 42 },
                { key: '3', name: 'Joe Black', age: 32 },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
`},59235:function(c,a){a.Z=`import React from 'react';
import { Alert, ConfigProvider, Space, Spin } from '@oceanbase/design';
import { LoadingOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  return (
    <ConfigProvider
      spin={{
        indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
      }}
    >
      <Space size="middle" direction="vertical">
        <Spin />
        <Spin tip="Loading">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},32748:function(c,a){a.Z=`import { Button, ConfigProvider, Form, InputNumber, token } from '@oceanbase/design';
import React from 'react';
import { SketchPicker } from 'react-color';

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultData: ThemeData = {
  borderRadius: token.borderRadius,
  colorPrimary: token.colorPrimary,
};

export default () => {
  const [form] = Form.useForm();

  const [data, setData] = React.useState<ThemeData>(defaultData);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Form
        form={form}
        onValuesChange={(changedValues, allValues) => {
          const colorObj = changedValues?.colorPrimary
            ? { colorPrimary: allValues?.colorPrimary?.hex }
            : {};
          setData({
            ...allValues,
            ...colorObj,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item valuePropName="color" name="colorPrimary" label="Primary Color" required={true}>
          <SketchPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius" required={true}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="submit" wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
`},74908:function(c,a){a.Z=`import React from 'react';
import { Button, Descriptions } from '@oceanbase/design';

const App: React.FC = () => (
  <Descriptions title="User Info" extra={<Button type="primary">Edit</Button>}>
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

export default App;
`},98402:function(c,a){a.Z=`import React from 'react';
import { Badge, Descriptions } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </Descriptions.Item>
  </Descriptions>
);
`},87081:function(c,a){a.Z=`import React from 'react';
import { Descriptions, Tooltip } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">
      <Tooltip placement="topLeft" title="Custom Tooltip">
        <a>This is long long long long long long long long long long long Link</a>
      </Tooltip>
    </Descriptions.Item>
    <Descriptions.Item
      label="Description"
      contentProps={{
        copyable: true,
        editable: true,
      }}
    >
      This is a description. This is a description. This is a description
    </Descriptions.Item>
    <Descriptions.Item
      span={3}
      label="No ellipsis"
      contentProps={{
        ellipsis: false,
      }}
    >
      This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no
      ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis.
      This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no
      ellipsis. This is no ellipsis.
    </Descriptions.Item>
  </Descriptions>
);
`},32598:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Descriptions, Radio } from '@oceanbase/design';
import type { DescriptionsProps, RadioChangeEvent } from '@oceanbase/design';

const borderedItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
  {
    key: '7',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
];

const App: React.FC = () => {
  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');

  const onChange = (e: RadioChangeEvent) => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={onChange} value={size}>
        <Radio value="default">default</Radio>
        <Radio value="middle">middle</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions title="Custom Size" size={size} items={items} />
      <br />
      <Descriptions bordered title="Custom Size" size={size} items={borderedItems} />
    </div>
  );
};

export default App;
`},35920:function(c,a){a.Z=`import React from 'react';
import { Descriptions } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];

const App: React.FC = () => <Descriptions title="User Info" layout="vertical" items={items} />;

export default App;
`},21100:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},263:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        confirmLoading={true}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},93742:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Ok
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Space>
            <div>Some info message</div>
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},28825:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button, Descriptions } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Descriptions column={1}>
          <Descriptions.Item label="Name">John</Descriptions.Item>
          <Descriptions.Item label="Age">18</Descriptions.Item>
          <Descriptions.Item label="Address">Hangzhou, Zhejiang Province</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </>
  );
};
`},51871:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Enable Drawer footer by onOk
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Enable Drawer footer by footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Enable Drawer footer by onOk"
        onOk={() => {
          setOpen1(false);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        open={open2}
        title="Enable Drawer footer by footer"
        onOk={() => {
          setOpen2(false);
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},52247:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
        }}
        footerExtra={<div>This is footer extra</div>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},17140:function(c,a){a.Z=`import React, { useState } from 'react';
import { Drawer, Button, Form, Input } from '@oceanbase/design';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(\`name: \${name}; age: \${age}\`);
    });
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Name is required',
              },
            ]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Age is required',
              },
            ]}
          >
            <Input placeholder="age" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
`},52215:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Descriptions, Drawer, Form, Input, Space } from '@oceanbase/design';
import { range } from 'lodash';
import { DownOutlined, UpOutlined } from '@oceanbase/icons';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(\`name: \${name}; age: \${age}\`);
    });
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Open Drawer with footer
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Open Drawer with dynamic content
        </Button>
        <Button
          onClick={() => {
            setOpen3(true);
          }}
        >
          Open Drawer without footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Drawer with footer"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          {range(1, 20).map(item => (
            <Form.Item
              key={item}
              name={\`item \${item}\`}
              label="Name"
              rules={[
                {
                  required: true,
                  message: \`item \${item} is required\`,
                },
              ]}
            >
              <Input placeholder={\`item \${item}\`} />
            </Form.Item>
          ))}
        </Form>
      </Drawer>
      <Drawer
        open={open2}
        title="Drawer with dynamic content"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          {range(1, 5).map(item => (
            <Form.Item
              key={item}
              name={\`item \${item}\`}
              label="Name"
              rules={[
                {
                  required: true,
                  message: \`item \${item} is required\`,
                },
              ]}
            >
              <Input placeholder={\`item \${item}\`} />
            </Form.Item>
          ))}
          <Button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            icon={collapsed ? <DownOutlined /> : <UpOutlined />}
          >
            {collapsed ? 'Expand' : 'Collapse'}
          </Button>
          {collapsed
            ? null
            : range(5, 20).map(item => (
                <Form.Item
                  key={item}
                  name={\`item \${item}\`}
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: \`item \${item} is required\`,
                    },
                  ]}
                >
                  <Input placeholder={\`item \${item}\`} />
                </Form.Item>
              ))}
        </Form>
      </Drawer>
      <Drawer
        open={open3}
        title="Drawer without footer"
        onCancel={() => {
          setOpen3(false);
        }}
      >
        <Descriptions layout="vertical" column={1}>
          {range(1, 20).map(item => (
            <Descriptions.Item key={item} label={\`item \${item}\`}>
              {\`Some message of item \${item}\`}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Drawer>
    </>
  );
};
`},16497:function(c,a){a.Z=`import React from 'react';
import { Empty } from '@oceanbase/design';

export default () => {
  return <Empty />;
};
`},55191:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Empty, Form, Space, Switch } from '@oceanbase/design';

export default () => {
  const [title, setTitle] = useState(true);
  const [description, setDescription] = useState(true);
  const [children, setChildren] = useState(true);

  return (
    <>
      <Form
        layout="inline"
        style={{
          marginBottom: 48,
        }}
      >
        <Form.Item label="title" required={true}>
          <Switch
            size="small"
            value={title}
            onChange={value => {
              setTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="description" required={true}>
          <Switch
            size="small"
            value={description}
            onChange={value => {
              setDescription(value);
            }}
          />
        </Form.Item>
        <Form.Item label="children" required={true}>
          <Switch
            size="small"
            value={children}
            onChange={value => {
              setChildren(value);
            }}
          />
        </Form.Item>
      </Form>
      <Empty
        image={Empty.PRESENTED_IMAGE_COLORED}
        title={title && 'Create Your Cluster'}
        description={description ? 'There is no cluster, welcome to create one!' : ''}
      >
        {children && (
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Second</Button>
          </Space>
        )}
      </Empty>
    </>
  );
};
`},9531:function(c,a){a.Z=`import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_COLORED}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
`},37272:function(c,a){a.Z=`import React from 'react';
import { Cascader, List, Select, Space, Table, Transfer, TreeSelect } from '@oceanbase/design';

const style: React.CSSProperties = { width: 200 };

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <h4>Select</h4>
      <Select style={style} />
      <h4>TreeSelect</h4>
      <TreeSelect style={style} treeData={[]} />
      <h4>Cascader</h4>
      <Cascader style={style} options={[]} showSearch />
      <h4>Transfer</h4>
      <Transfer />
      <h4>Table</h4>
      <Table
        style={{ marginTop: 8 }}
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
        ]}
      />
      <h4>List</h4>
      <List />
    </Space>
  );
};

export default App;
`},18319:function(c,a){a.Z=`import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_DATABASE}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
`},91689:function(c,a){a.Z=`import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      layout="horizontal"
      image={Empty.PRESENTED_IMAGE_GUIDE}
      title="\u6B22\u8FCE\u4F53\u9A8C OB \u667A\u80FD\u8BCA\u65AD"
      description={
        <>
          <div>\u2022 OB \u667A\u80FD\u8BCA\u65AD\u662F\u4E00\u4E2A\u6570\u636E\u5E93\u95EE\u9898\u8BCA\u65AD\u7684\u63A7\u5236\u9762\u677F</div>
          <div>\u2022 \u5C06\u8BE6\u7EC6\u7684\u6570\u636E\u5E93\u6570\u636E\u56FE\u5F62\u5316\u7684\u5C55\u793A</div>
          <div>\u2022 \u65E8\u5728\u5E2E\u52A9\u5BA2\u6237\u5FEB\u901F\u8BC4\u4F30\u6570\u636E\u5E93\u7684\u8FD0\u884C\u72B6\u6001\uFF0C\u5E76\u5BF9\u5982\u4F55\u5904\u7406\u95EE\u9898\u63D0\u4F9B\u5EFA\u8BAE\u548C\u6307\u5BFC</div>
        </>
      }
    >
      <Button type="primary">\u5F00\u542F\u667A\u80FD\u8BCA\u65AD</Button>
    </Empty>
  );
};
`},76512:function(c,a){a.Z=`import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8Q4gRbl_qmMAAAAAAAAAAAAADmfOAQ/original"
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
`},39519:function(c,a){a.Z=`import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  const description = 'This is a long long long long long long description.';
  const steps = [
    {
      title: 'First',
      description,
    },
    {
      title: 'Second',
      description,
    },
    {
      title: 'Third',
      description,
    },
    {
      title: 'Fourth',
      description,
    },
  ];

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_COLORED}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
      steps={steps}
    >
      <Button type="primary">Create Cluster</Button>
    </Empty>
  );
};
`},50127:function(c,a){a.Z=`import React from 'react';
import { Button, Card, Empty } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={true}
      header={{
        title: 'Page Title',
      }}
    >
      <Card
        bordered={false}
        bodyStyle={{
          height: 'calc(100vh - 96px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_COLORED}
          title="Create Your Cluster"
          description="There is no cluster, welcome to create one!"
        >
          <Button type="primary">Create</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
`},12832:function(c,a){a.Z=`import { Button, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Failed');
  console.log(errorInfo);
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 10 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address">
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
`},30585:function(c,a){a.Z=`import { Button, Checkbox, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Failed');
  console.log(errorInfo);
};

const App: React.FC = () => {
  const formItemLayout1 = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const formItemLayout2 = {
    wrapperCol: {
      offset: 6,
      span: 10,
    },
  };
  return (
    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} {...formItemLayout1}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        tooltip={{
          title: 'This is username',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        tooltip={{
          type: 'light',
          title: 'This is password',
        }}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" {...formItemLayout2}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...formItemLayout2}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
`},11174:function(c,a){a.Z=`import { Button, ConfigProvider, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Failed');
  console.log(errorInfo);
};

const App: React.FC = () => (
  <ConfigProvider
    form={{
      requiredMark: true,
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      hideRequiredMark={true}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default App;
`},29944:function(c,a){a.Z=`import React from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { ProForm, ProFormText } from '@oceanbase/ui';

const App: React.FC = () => (
  <ConfigProvider>
    <ProForm name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
      <ProFormText
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Name is required',
          },
        ]}
      />
      <ProFormText label="Address" name="address" />
    </ProForm>
  </ConfigProvider>
);

export default App;
`},99676:function(c,a){a.Z=`import { Button, ConfigProvider, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Failed');
  console.log(errorInfo);
};

const App: React.FC = () => (
  <ConfigProvider
    form={{
      // global config
      requiredMark: true,
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // local config
      // requiredMark={true}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default App;
`},35418:function(c,a){a.Z=`import React from 'react';
import { Col, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default App;
`},19440:function(c,a){a.Z=`import React from 'react';
import { Col, Divider, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Divider orientation="left">sub-element align left</Divider>
    <Row justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align center</Divider>
    <Row justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align right</Divider>
    <Row justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element monospaced arrangement</Divider>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align full</Divider>
    <Row justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align evenly</Divider>
    <Row justify="space-evenly">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </>
);

export default App;
`},78602:function(c,a){a.Z=`import React from 'react';
import { Col, Divider, Row } from '@oceanbase/design';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const App: React.FC = () => (
  <>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);

export default App;
`},53927:function(c,a){a.Z=`import React from 'react';
import { Col, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);

export default App;
`},18876:function(c,a){a.Z=`import React from 'react';
import {
  PlOutlined,
  DatabaseRadiusOutlined,
  DrilldownOutlined,
  SqlLineChartOutlined,
  HourglassHalfOutlined,
  OceanBaseFilled,
  DouyinFilled,
  InternetTwoTone,
} from '@oceanbase/icons';
import { Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space>
    <PlOutlined />
    <DatabaseRadiusOutlined />
    <DrilldownOutlined />
    <SqlLineChartOutlined rotate={180} />
    <HourglassHalfOutlined spin />
    <OceanBaseFilled style={{ color: '#E5E5E5' }} />
    <DouyinFilled style={{ color: 'hotpink' }} />
    <InternetTwoTone twoToneColor={['rgb(115,209,61)', 'rgba(115,209,61,0.450)']} />
  </Space>
);

export default App;
`},94984:function(c,a){a.Z=`import React from 'react';
import { Cascader, InputNumber, Select, Space } from '@oceanbase/design';
import { SettingOutlined } from '@oceanbase/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">\u20AC</Option>
    <Option value="GBP">\xA3</Option>
    <Option value="CNY">\xA5</Option>
  </Select>
);

const App: React.FC = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
    <InputNumber
      addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
      defaultValue={100}
    />
  </Space>
);

export default App;
`},26958:function(c,a){a.Z=`import React from 'react';
import { InputNumber } from '@oceanbase/design';

const onChange = (value: number) => {
  console.log('changed', value);
};

const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;

export default App;
`},2477:function(c,a){a.Z=`import React from 'react';
import { InputNumber, Space } from '@oceanbase/design';

const onChange = (value: number | string) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}
      parser={value => value!.replace(/\\$\\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => \`\${value}%\`}
      parser={value => value!.replace('%', '')}
      onChange={onChange}
    />
  </Space>
);

export default App;
`},81379:function(c,a){a.Z=`import React from 'react';
import { InputNumber, Space } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="error" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
    <InputNumber status="warning" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
  </Space>
);

export default App;
`},7631:function(c,a){a.Z=`import React from 'react';
import { Input, Space } from '@oceanbase/design';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input defaultValue="Input with clear icon" allowClear onChange={onChange} />
    <TextArea defaultValue="TextArea with clear icon" allowClear onChange={onChange} />
  </Space>
);

export default App;
`},11616:function(c,a){a.Z=`import React from 'react';
import { Input, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input />
    <Input.Search />
    <Input.Password />
    <Input.TextArea />
  </Space>
);

export default App;
`},48707:function(c,a){a.Z=`import React from 'react';
import { Input, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input.Password placeholder="auto fill password by default" />
      <Input.Password
        autoComplete="new-password"
        placeholder='not auto fill password with autoComplete="new-password"'
      />
    </Space>
  );
};

export default App;
`},73885:function(c,a){a.Z=`import React from 'react';
import { AudioOutlined } from '@oceanbase/icons';
import { Input, Space } from '@oceanbase/design';
import type { SearchProps } from '@oceanbase/design/es/input';

const { Search } = Input;

const App: React.FC = () => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#006AFF',
      }}
    />
  );
  const onSearch: SearchProps['onSearch'] = value => {
    console.log(value);
  };

  return (
    <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <Search
        addonBefore="https://"
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 304 }}
      />
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
    </Space>
  );
};

export default App;
`},55789:function(c,a){a.Z=`import React from 'react';
import { Input, Space } from '@oceanbase/design';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input showCount maxLength={20} onChange={onChange} />
    <TextArea showCount maxLength={100} onChange={onChange} />
  </Space>
);

export default App;
`},27109:function(c,a){a.Z=`import React from 'react';
import { Avatar, List } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i < 100; i++) {
  dataSource.push({
    title: 'This is title',
    content: \`This is long long long long long long long long text\`,
  });
}

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />}
          title={<a href="https://design.oceanbase.com">{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
    pagination={{
      pageSize: 5,
    }}
  />
);

export default App;
`},62816:function(c,a){a.Z=`import React from 'react';
import { List } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i <= 5; i++) {
  dataSource.push({
    content: \`This is long long long long long long long long text\`,
  });
}

const App: React.FC = () => (
  <List
    bordered={true}
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    dataSource={dataSource}
    renderItem={item => <List.Item>{item.content}</List.Item>}
  />
);

export default App;
`},63146:function(c,a){a.Z=`import { Button, ConfigProvider, message, Space } from '@oceanbase/design';

export default () => {
  // \u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21 ConfigProvider \u5373\u53EF
  return (
    <ConfigProvider>
      <Space>
        <Button
          onClick={() => {
            message.info('This is a info message');
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            message.success('This is a success message');
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            message.error('This is an error message');
          }}
        >
          Error
        </Button>
        <Button
          onClick={() => {
            message.warning('This is a warning message');
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            message.loading('This is a loading message');
          }}
        >
          Loading
        </Button>
      </Space>
    </ConfigProvider>
  );
};
`},81563:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Modal } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},84560:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Modal, theme } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open over height Modal
      </Button>
      <Modal
        title="Over height Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        bodyStyle={{
          maxHeight: 400,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: 800,
            background: token.colorBgLayout,
            borderRadius: token.borderRadius,
            padding: 12,
          }}
        >
          scroll-y is enabled by default when over height.
        </div>
      </Modal>
    </>
  );
};
`},48525:function(c,a){a.Z=`import React, { useState } from 'react';
import { Alert, Button, Modal, Space } from '@oceanbase/design';
import { useTimeout } from 'ahooks';

export default () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [done, setDone] = useState(false);

  useTimeout(
    () => {
      setDone(true);
    },
    (successOpen && !done) || (failOpen && !done) ? 3000 : undefined
  );

  return (
    <>
      <Space direction="vertical" size="middle">
        <Button
          type="primary"
          onClick={() => {
            setSuccessOpen(true);
          }}
        >
          Open Progress Modal from loading to success
        </Button>
        <Button
          onClick={() => {
            setFailOpen(true);
          }}
        >
          Open Progress Modal from loading to fail
        </Button>
      </Space>
      <Modal.Progress
        title={done ? '\u{1F389} Success to create cluster!' : 'Cluster is creating...'}
        open={successOpen}
        loading={done ? false : true}
        progress={
          done
            ? {
                percent: 100,
              }
            : {}
        }
        description={
          done
            ? 'Congratulations! please enjoy your OceanBase journey.'
            : 'Cluster is creating, please waiting for 3 seconds.'
        }
        onOk={() => {
          setSuccessOpen(false);
          setDone(false);
        }}
        onCancel={() => {
          setSuccessOpen(false);
          setDone(false);
        }}
      />
      <Modal.Progress
        title={done ? '\u{1F62D} Fail to create cluster!' : 'Cluster is creating...'}
        open={failOpen}
        loading={done ? false : true}
        progress={
          done
            ? {
                percent: 100,
                status: 'exception',
              }
            : {}
        }
        description={
          done ? (
            <Alert
              type="error"
              showIcon={true}
              message="Please fix errors or try agin later"
              description="This is error message. This is error message. This is error message. This is error message."
            />
          ) : (
            'Cluster is creating, please waiting for 3 seconds.'
          )
        }
        onOk={() => {
          setFailOpen(false);
          setDone(false);
        }}
        onCancel={() => {
          setFailOpen(false);
          setDone(false);
        }}
      />
    </>
  );
};
`},42995:function(c,a){a.Z=`import React, { useState } from 'react';
import { Alert, Button, Modal, Space } from '@oceanbase/design';
import { useInterval } from 'ahooks';

export default () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [percent, setPercent] = useState(0);

  const success = percent === 100;
  const fail = percent === 60;

  useInterval(
    () => {
      setPercent(percent + 20);
    },
    (successOpen && !success) || (failOpen && !fail) ? 1000 : undefined
  );

  return (
    <>
      <Space direction="vertical" size="middle">
        <Button
          type="primary"
          onClick={() => {
            setSuccessOpen(true);
          }}
        >
          Open Progress Modal from percent to success
        </Button>
        <Button
          onClick={() => {
            setFailOpen(true);
          }}
        >
          Open Progress Modal from percent to fail
        </Button>
      </Space>
      <Modal.Progress
        title={success ? '\u{1F389} Success to create cluster!' : 'Cluster is creating...'}
        open={successOpen}
        progress={{
          percent,
        }}
        description={
          success
            ? 'Congratulations! please enjoy your OceanBase journey.'
            : 'Cluster is creating, please waiting for a few seconds.'
        }
        onOk={() => {
          setSuccessOpen(false);
          setPercent(0);
        }}
        onCancel={() => {
          setSuccessOpen(false);
          setPercent(0);
        }}
      />
      <Modal.Progress
        title={fail ? '\u{1F62D} Fail to create cluster!' : 'Cluster is creating...'}
        open={failOpen}
        progress={{
          percent,
          status: fail ? 'exception' : 'normal',
        }}
        description={
          fail ? (
            <Alert
              type="error"
              showIcon={true}
              message="Please fix errors or try agin later"
              description="This is error message. This is error message. This is error message. This is error message."
            />
          ) : (
            'Cluster is creating, please waiting for a few seconds.'
          )
        }
        onOk={() => {
          setFailOpen(false);
          setPercent(0);
        }}
        onCancel={() => {
          setFailOpen(false);
          setPercent(0);
        }}
      />
    </>
  );
};
`},71911:function(c,a){a.Z=`import React from 'react';
import { Button, Modal, Space } from '@oceanbase/design';

export default () => (
  <Space>
    <Button
      onClick={() => {
        Modal.confirm({
          title: 'This is a confirm modal',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
      }}
    >
      Confirm
    </Button>
    <Button
      onClick={() => {
        Modal.info({
          title: 'This is a info message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
      }}
    >
      Info
    </Button>
    <Button
      onClick={() => {
        Modal.success({
          title: 'This is a success message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
        });
      }}
    >
      Success
    </Button>
    <Button
      onClick={() => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Error
    </Button>
    <Button
      onClick={() => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Warning
    </Button>
  </Space>
);
`},42362:function(c,a){a.Z=`import React from 'react';
import { Button, ConfigProvider, notification, Space, theme } from '@oceanbase/design';

export default () => {
  // \u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21 ConfigProvider \u5373\u53EF
  return (
    <ConfigProvider>
      <Space>
        <Button
          onClick={() => {
            notification.info({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            notification.success({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            notification.error({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
          }}
        >
          Error
        </Button>
        <Button
          onClick={() => {
            notification.warning({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
          }}
        >
          Warning
        </Button>
      </Space>
    </ConfigProvider>
  );
};
`},39602:function(c,a){a.Z=`import React from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(\`radio checked:\${e.target.value}\`);
  };

  return (
    <Space direction="vertical" size="middle">
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b" disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group disabled onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </Space>
  );
};

export default App;
`},82302:function(c,a){a.Z=`import React, { useState } from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState('A');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Space direction="vertical">
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
      <Radio.Group onChange={onChange} value={value} disabled={true}>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
    </Space>
  );
};

export default App;
`},83692:function(c,a){a.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="\u6570\u636E\u4F20\u8F93\u670D\u52A1\u9700\u8981\u4E91\u8D44\u6E90\u7684\u8BBF\u95EE\u6743\u9650"
      extra={<Button type="primary">\u524D\u5F80 RAM \u89D2\u8272\u6388\u6743</Button>}
    />
  );
};
`},91229:function(c,a){a.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="\u96C6\u7FA4\u5DF2\u88AB\u5220\u9664\uFF0C\u9875\u9762\u65E0\u6CD5\u6253\u5F00"
      extra={<Button type="primary">\u8FD4\u56DE\u9996\u9875</Button>}
    />
  );
};
`},37016:function(c,a){a.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="\u670D\u52A1\u5668\u53D1\u751F\u4E86\u9519\u8BEF"
      extra={<Button type="primary">\u8FD4\u56DE\u9996\u9875</Button>}
    />
  );
};
`},64484:function(c,a){a.Z=`import React from 'react';
import { Result, Button, theme, Typography } from '@oceanbase/design';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      status="error"
      title="\u4EFB\u52A1\u6267\u884C\u5931\u8D25"
      subTitle="\u8FD9\u662F\u4E00\u6BB5\u5173\u4E8E\u4EFB\u52A1\u6267\u884C\u5931\u8D25\u7684\u63CF\u8FF0"
      extra={[
        <Button type="primary" key="console">
          \u4E3B\u64CD\u4F5C
        </Button>,
        <Button key="buy">\u6B21\u64CD\u4F5C</Button>,
      ]}
    >
      <Typography.Title level={5}>\u51FA\u9519\u539F\u56E0</Typography.Title>
      <div
        style={{
          color: token.colorTextTertiary,
        }}
      >
        <div>
          {
            'Error1: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error2: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error3: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error4: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
      </div>
    </Result>
  );
};
`},20520:function(c,a){a.Z=`import React from 'react';
import { Result, Button, theme } from '@oceanbase/design';
import { CheckCircleFilled } from '@oceanbase/icons';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      icon={<CheckCircleFilled style={{ color: token.colorSuccess }} />}
      title="\u4EFB\u52A1\u6267\u884C\u6210\u529F"
      subTitle="\u8FD9\u662F\u4E00\u6BB5\u5173\u4E8E\u4EFB\u52A1\u6267\u884C\u6210\u529F\u7684\u63CF\u8FF0"
      extra={[
        <Button type="primary" key="console">
          \u4E3B\u64CD\u4F5C
        </Button>,
        <Button key="buy">\u6B21\u64CD\u4F5C</Button>,
      ]}
    />
  );
};
`},61153:function(c,a){a.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="processing"
      title="\u4EFB\u52A1\u6267\u884C\u4E2D"
      subTitle="\u8FD9\u662F\u4E00\u6BB5\u5173\u4E8E\u4EFB\u52A1\u6267\u884C\u4E2D\u7684\u63CF\u8FF0"
      extra={[
        <Button type="primary" key="console">
          \u4E3B\u64CD\u4F5C
        </Button>,
        <Button key="buy">\u6B21\u64CD\u4F5C</Button>,
      ]}
    />
  );
};
`},73844:function(c,a){a.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="success"
      title="\u4EFB\u52A1\u6267\u884C\u6210\u529F"
      subTitle="\u8FD9\u662F\u4E00\u6BB5\u5173\u4E8E\u4EFB\u52A1\u6267\u884C\u6210\u529F\u7684\u63CF\u8FF0"
      extra={[
        <Button type="primary" key="console">
          \u4E3B\u64CD\u4F5C
        </Button>,
        <Button key="buy">\u6B21\u64CD\u4F5C</Button>,
      ]}
    />
  );
};
`},10778:function(c,a){a.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="warning"
      title="\u5BF9\u8C61\u72B6\u6001\u5F02\u5E38"
      subTitle="\u5EFA\u8BAE\u8FDB\u884C\u91CD\u542F\u64CD\u4F5C\uFF0C\u6765\u6062\u590D\u5BF9\u8C61\u72B6\u6001"
      extra={[
        <Button type="primary" key="console">
          \u4E3B\u64CD\u4F5C
        </Button>,
        <Button key="buy">\u6B21\u64CD\u4F5C</Button>,
      ]}
    />
  );
};
`},65940:function(c,a){a.Z=`import React from 'react';
import { Button, Card, Result } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={true}
      header={{
        title: 'Page Title',
      }}
    >
      <Card
        bordered={false}
        bodyStyle={{
          height: 'calc(100vh - 96px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Result
          status="success"
          title="\u4EFB\u52A1\u6267\u884C\u6210\u529F"
          subTitle="\u8FD9\u662F\u4E00\u6BB5\u5173\u4E8E\u4EFB\u52A1\u6267\u884C\u6210\u529F\u7684\u63CF\u8FF0"
          extra={[
            <Button type="primary" key="console">
              \u4E3B\u64CD\u4F5C
            </Button>,
            <Button key="buy">\u6B21\u64CD\u4F5C</Button>,
          ]}
        />
      </Card>
    </PageContainer>
  );
};
`},54081:function(c,a){a.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;
};
`},28698:function(c,a){a.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return <Segmented block options={[123, 456, 789]} />;
};
`},22595:function(c,a){a.Z=`import React from 'react';
import { Segmented, Space } from '@oceanbase/design';

export default () => {
  return (
    <Space direction="vertical">
      <Segmented options={['Daily', 'Weekly', 'Monthly']} disabled />
      <Segmented
        options={[
          'Daily',
          { label: 'Weekly', value: 'Weekly', disabled: true },
          'Monthly',
          { label: 'Quarterly', value: 'Quarterly', disabled: true },
          'Yearly',
        ]}
      />
    </Space>
  );
};
`},11077:function(c,a){a.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return (
    <Segmented
      block
      options={[
        123,
        456,
        {
          value: 'longtext1',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: true,
          },
        },
        {
          value: 'longtext2',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: {
              title: 'custom tooltip title',
              placement: 'topLeft',
            },
          },
        },
      ]}
    />
  );
};
`},5070:function(c,a){a.Z=`import React from 'react';
import { Segmented, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical">
    <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
  </Space>
);

export default App;
`},836:function(c,a){a.Z=`import React from 'react';
import { Select, Space } from '@oceanbase/design';

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Space wrap>
    <Select
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
  </Space>
);

export default App;
`},50449:function(c,a){a.Z=`import { Select, Tag } from '@oceanbase/design';
import React from 'react';

const options = ['gold', 'green', 'red', 'cyan'];

const tagRender = props => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag color={value} onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
      {label}
    </Tag>
  );
};

const App: React.FC = () => (
  <>
    <Select
      mode="multiple"
      tagRender={tagRender}
      defaultValue={['gold', 'cyan']}
      style={{ width: '100%' }}
      options={options.map(item => ({ label: item, value: item }))}
    />
  </>
);

export default App;
`},52401:function(c,a){a.Z=`import React from 'react';
import { Select, Space } from '@oceanbase/design';
import type { SelectProps } from '@oceanbase/design';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Space style={{ width: '100%' }} direction="vertical">
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
    <Select
      mode="multiple"
      disabled
      style={{ width: '100%' }}
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default App;
`},21220:function(c,a){a.Z=`import { Select } from '@oceanbase/design';
import React from 'react';
import type { SelectProps } from '@oceanbase/design';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);

export default App;`},66068:function(c,a){a.Z=`import React from 'react';
import { Flex, Select } from '@oceanbase/design';

const App: React.FC = () => (
  <Flex gap={12} vertical>
    <Flex gap={8}>
      <Select
        placeholder="Outlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Outlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Filled"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Filled"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Borderless"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Borderless"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
  </Flex>
);

export default App;
`},2537:function(c,a){a.Z=`import { Button, Popconfirm, Space } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);

export default App;
`},28511:function(c,a){a.Z=`import { Space, Card } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);

export default App;
`},74032:function(c,a){a.Z=`import { Space, Button } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

export default App;
`},27465:function(c,a){a.Z=`import React from 'react';
import { Spin } from '@oceanbase/design';

const App: React.FC = () => <Spin />;

export default App;
`},32829:function(c,a){a.Z=`import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin gray={false} size="small" />
    <Spin gray={false} />
    <Spin gray={false} size="large" />
  </Space>
);

export default App;
`},12551:function(c,a){a.Z=`import React from 'react';
import { Alert, Space, Spin } from '@oceanbase/design';
import { LoadingOutlined } from '@oceanbase/icons';

const indicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const App: React.FC = () => (
  <Space size="middle" direction="vertical">
    <Spin indicator={indicator} />
    <Spin indicator={indicator} tip="Loading">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);

export default App;
`},95047:function(c,a){a.Z=`import React from 'react';
import { Spin, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        margin: '20px 0',
        marginBottom: 20,
        padding: '30px 50px',
        textAlign: 'center',
        background: token.colorBgLayout,
        borderRadius: 4,
      }}
    >
      <Spin />
    </div>
  );
};

export default App;
`},17173:function(c,a){a.Z=`import React, { useState } from 'react';
import { Alert, Spin, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const toggle = (checked: boolean) => {
    setLoading(checked);
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state\uFF1A
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};

export default App;
`},77749:function(c,a){a.Z=`import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

export default App;
`},66897:function(c,a){a.Z=`import React from 'react';
import { Alert, Space, Spin, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const containerStyle = {
    padding: 50,
    background: token.colorBgLayout,
    borderRadius: 4,
    width: 120,
    height: 120,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Spin tip="Loading" size="small">
          <div style={containerStyle} />
        </Spin>
        <Spin tip="Loading">
          <div style={containerStyle} />
        </Spin>
        <Spin tip="Loading" size="large">
          <div style={containerStyle} />
        </Spin>
      </Space>

      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export default App;
`},4052:function(c,a){a.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const onChange = (checked: boolean) => {
  console.log(\`switch to \${checked}\`);
};

const App: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export default App;
`},53879:function(c,a){a.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked disabled={true} />
    <br />
    <Switch disabled={true} size="small" />
  </>
);

export default App;
`},4717:function(c,a){a.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked loading={true} />
    <br />
    <Switch loading={true} size="small" />
  </>
);

export default App;
`},22773:function(c,a){a.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch defaultChecked size="small" />
  </>
);

export default App;
`},95749:function(c,a){a.Z=`import { Table } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: '\u80E1\u5F66\u658C' + i,
      age: 32,
      address: \`\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED\${i}\u53F7\`,
    });
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
`},36695:function(c,a){a.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />
);

export default App;
`},28803:function(c,a){a.Z=`import React, { useState } from 'react';
import { Card, Form, Radio, Switch, Table, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();

  const [hasBorder, setHasBorder] = useState(true);
  const [hasTitle, setHasTitle] = useState(true);
  const [hasPadding, setHasPadding] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: '\u80E1\u5F66\u658C' + i,
      age: 32,
      address: \`\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED\${i}\u53F7\`,
    });
  }

  return (
    <div
      style={
        hasBorder
          ? {}
          : {
              backgroundColor: token.colorFillContent,
              padding: '40px 24px',
              margin: '-40px -24px',
            }
      }
    >
      <Form layout="inline" style={{ marginBottom: 24 }}>
        <Form.Item label="Card bordered" required={true}>
          <Switch
            size="small"
            value={hasBorder}
            onChange={value => {
              setHasBorder(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card title" required={true}>
          <Switch
            size="small"
            value={hasTitle}
            onChange={value => {
              setHasTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card body padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <Card
        bordered={hasBorder}
        title={hasTitle ? 'Title' : ''}
        bodyStyle={
          hasPadding
            ? {}
            : {
                padding: 0,
              }
        }
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.key}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (keys: React.Key[]) => {
              setSelectedRowKeys(keys);
            },
          }}
          pagination={{
            pageSize: 5,
          }}
        />
      </Card>
    </div>
  );
};

export default App;
`},50338:function(c,a){a.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

const sharedOnCell = (_: DataType, index: number) => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

const columns: ColumnsType<DataType> = [
  {
    title: 'RowHead',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: sharedOnCell,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 3) {
        return { rowSpan: 2 };
      }
      // These two are merged into above cell
      if (index === 4) {
        return { rowSpan: 0 };
      }
      if (index === 1) {
        return { colSpan: 0 };
      }

      return {};
    },
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    onCell: sharedOnCell,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell: sharedOnCell,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} bordered />;

export default App;
`},419:function(c,a){a.Z=`import React, { useState } from 'react';
import { Form, Radio, Space, Switch, Table } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import type { ColumnsType, TableProps } from '@oceanbase/design/es/table';
import type { ExpandableConfig, TableRowSelection } from '@oceanbase/design/es/table/interface';
import { DownOutlined } from '@oceanbase/icons';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(\`\${i}2\`),
    address: \`New York No. \${i} Lake Park\`,
    description: \`My name is John Brown, I am \${i}2 years old, living in New York No. \${i} Lake Park.\`,
  });
}

const defaultExpandable = { expandedRowRender: (record: DataType) => <p>{record.description}</p> };
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';

const App: React.FC = () => {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>('large');
  const [expandable, setExpandable] = useState<ExpandableConfig<DataType> | undefined>(
    defaultExpandable
  );
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState<TableRowSelection<DataType> | undefined>({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState<TablePaginationPosition | 'none'>('none');
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string>();

  const handleBorderChange = (enable: boolean) => {
    setBordered(enable);
  };

  const handleLoadingChange = (enable: boolean) => {
    setLoading(enable);
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setTableLayout(e.target.value);
  };

  const handleExpandChange = (enable: boolean) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };

  const handleEllipsisChange = (enable: boolean) => {
    setEllipsis(enable);
  };

  const handleTitleChange = (enable: boolean) => {
    setShowTitle(enable);
  };

  const handleHeaderChange = (enable: boolean) => {
    setShowHeader(enable);
  };

  const handleFooterChange = (enable: boolean) => {
    setShowFooter(enable);
  };

  const handleRowSelectionChange = (enable: boolean) => {
    setRowSelection(enable ? {} : undefined);
  };

  const handleYScrollChange = (enable: boolean) => {
    setYScroll(enable);
  };

  const handleXScrollChange = (e: RadioChangeEvent) => {
    setXScroll(e.target.value);
  };

  const handleDataChange = (newHasData: boolean) => {
    setHasData(newHasData);
  };

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns = columns.map(item => ({ ...item, ellipsis }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  const tableProps: TableProps<DataType> = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  const style = {
    marginBottom: 8,
  };

  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 16 }}>
        <Form.Item label="Bordered" style={style}>
          <Switch checked={bordered} onChange={handleBorderChange} />
        </Form.Item>
        <Form.Item label="loading" style={style}>
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>
        <Form.Item label="Title" style={style}>
          <Switch checked={showTitle} onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item label="Column Header" style={style}>
          <Switch checked={showHeader} onChange={handleHeaderChange} />
        </Form.Item>
        <Form.Item label="Footer" style={style}>
          <Switch checked={showfooter} onChange={handleFooterChange} />
        </Form.Item>
        <Form.Item label="Expandable" style={style}>
          <Switch checked={!!expandable} onChange={handleExpandChange} />
        </Form.Item>
        <Form.Item label="Checkbox" style={style}>
          <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
        </Form.Item>
        <Form.Item label="Fixed Header" style={style}>
          <Switch checked={!!yScroll} onChange={handleYScrollChange} />
        </Form.Item>
        <Form.Item label="Has Data" style={style}>
          <Switch checked={!!hasData} onChange={handleDataChange} />
        </Form.Item>
        <Form.Item label="Ellipsis" style={style}>
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item>
        <Form.Item label="Size" style={style}>
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Scroll" style={style}>
          <Radio.Group value={xScroll} onChange={handleXScrollChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout" style={style}>
          <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="fixed">Fixed</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Top" style={style}>
          <Radio.Group
            value={top}
            onChange={e => {
              setTop(e.target.value);
            }}
          >
            <Radio.Button value="topLeft">TopLeft</Radio.Button>
            <Radio.Button value="topCenter">TopCenter</Radio.Button>
            <Radio.Button value="topRight">TopRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Bottom" style={style}>
          <Radio.Group
            value={bottom}
            onChange={e => {
              setBottom(e.target.value);
            }}
          >
            <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
            <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
            <Radio.Button value="bottomRight">BottomRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        {...tableProps}
        pagination={{ position: [top as TablePaginationPosition, bottom] }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};

export default App;
`},4867:function(c,a){a.Z=`import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from '@oceanbase/design';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: \`Edward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: \`Please Input \${title}!\`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default App;
`},32044:function(c,a){a.Z=`import { Table, Tooltip } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
    render: address => <a>{address}</a>,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
    // ellipsis \u9ED8\u8BA4\u4F7F\u7528\u7684 Tooltip \u5982\u679C\u4E0D\u6EE1\u8DB3\u9884\u671F\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 Tooltip
    render: address => (
      <Tooltip placement="topLeft" title="Custom your tooltip">
        <a>{address}</a>
      </Tooltip>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park, Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
`},83693:function(c,a){a.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import { ColumnProps } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const App: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 50,
      address: 'London Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 60,
      address: 'London Park',
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 70,
      address: 'London Park',
    },
  ];

  const columns: ColumnProps<DataType>[] = [
    {
      title: 'Full Name',
      width: 120,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  return <Table columns={columns} dataSource={dataSource} scroll={{ x: 1440 }} />;
};

export default App;
`},15874:function(c,a){a.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

const App: React.FC = () => (
  <Table
    bordered={true}
    columns={columns}
    dataSource={data}
    scroll={{ x: 'calc(700px + 50%)', y: 240 }}
  />
);

export default App;
`},54995:function(c,a){a.Z=`import React, { useState } from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Form,
  Radio,
  Space,
  Table,
  TableColumnsType,
} from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import { DownOutlined } from '@oceanbase/icons';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const expandedRowRender = (size: SizeType) => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown menu={{ items }}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table size={size} columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  const toolOptionsRender = (size: SizeType) => {
    return [
      <Button size={size}>\u6279\u91CF\u5220\u9664</Button>,
      <Button size={size}>\u6279\u91CF\u66F4\u65B0</Button>,
      <Button size={size}>\u6279\u91CF\u91CD\u542F</Button>,
    ];
  };

  const toolSelectedContent = (selectedRowKeys: React.Key[], selectedRows: any[]) => {
    return <Table columns={columns} dataSource={selectedRows} pagination={false} />;
  };

  return (
    <>
      <Form style={{ marginBottom: 24 }}>
        <Form.Item label="Size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="large">large</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        size={size}
        columns={columns}
        dataSource={data}
        toolOptionsRender={() => toolOptionsRender('middle')}
        toolSelectedContent={toolSelectedContent}
        expandable={{
          expandedRowRender: () => expandedRowRender(size),
          defaultExpandedRowKeys: ['0'],
        }}
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          onChange: (keys: React.Key[]) => {
            setSelectedRowKeys(keys);
          },
        }}
      />
    </>
  );
};

export default App;
`},65317:function(c,a){a.Z=`import React, { useState } from 'react';
import type { TableColumnsType } from '@oceanbase/design';
import { Badge, Dropdown, Form, Radio, Space, Table } from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import { DownOutlined } from '@oceanbase/icons';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');

  const expandedRowRender = (size: SizeType) => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown menu={{ items }}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table size={size} columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <>
      <Form style={{ marginBottom: 24 }}>
        <Form.Item label="Size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="large">large</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        size={size}
        columns={columns}
        expandable={{
          expandedRowRender: () => expandedRowRender(size),
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    </>
  );
};

export default App;
`},99789:function(c,a){a.Z=`import { Button, Table } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(['4', '5']);
  const dataSource = [
    {
      key: '1',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '2',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '3',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '4',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '5',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '6',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '7',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '8',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
  ];

  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const toolOptionsRender = (action: any) => {
    return [<Button>\u6279\u91CF\u5220\u9664</Button>, <Button>\u6279\u91CF\u66F4\u65B0</Button>, <Button>\u6279\u91CF\u91CD\u542F</Button>];
  };

  const toolSelectedContent = (selectedRowKeys: any, selectedRows: any) => {
    return <Table columns={columns} dataSource={selectedRows} pagination={false} />;
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      toolOptionsRender={toolOptionsRender}
      toolSelectedContent={toolSelectedContent}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (keys: React.Key[]) => {
          setSelectedRowKeys(keys);
        },
      }}
    />
  );
};

export default App;
`},90542:function(c,a){a.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: (_, index) => {
      return { rowSpan: index % 2 === 0 ? 2 : 0 };
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Home phone',
    dataIndex: 'tel',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '2',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} bordered />;

export default App;
`},30665:function(c,a){a.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
        children: [
          {
            key: 111,
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
          },
        ],
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default App;
`},4126:function(c,a){a.Z=`import React from 'react';
import { Space, Switch, Table, Typography } from '@oceanbase/design';
import type { TableProps } from '@oceanbase/design';

interface RecordType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
  address2: string;
  address3: string;
}

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
  },
  {
    title: 'Group',
    width: 120,
    render: (_, record) => \`Group \${Math.floor(record.id / 4)}\`,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
  },
  {
    title: 'Address 1',
    dataIndex: 'address1',
  },
  {
    title: 'Address 2',
    dataIndex: 'address2',
  },
  {
    title: 'Address 3',
    dataIndex: 'address3',
  },
  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
        <Typography.Link>Action1</Typography.Link>
        <Typography.Link>Action2</Typography.Link>
      </Space>
    ),
  },
];

const getData = (count: number) => {
  const data: RecordType[] = new Array(count).fill(null).map((_, index) => ({
    id: index,
    firstName: \`First_\${index.toString(16)}\`,
    lastName: \`Last_\${index.toString(16)}\`,
    age: 25 + (index % 10),
    address1: \`New York No. \${index} Lake Park\`,
    address2: \`London No. \${index} Lake Park\`,
    address3: \`Sydney No. \${index} Lake Park\`,
  }));

  return data;
};

const App = () => {
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const data = getData(10000);

  const expandableProps = React.useMemo<TableProps<RecordType>['expandable']>(() => {
    if (!expanded) {
      return undefined;
    }
    return {
      columnWidth: 48,
      expandedRowRender: record => <p style={{ margin: 0 }}>\u{1F389} Expanded {record.address1}</p>,
    };
  }, [expanded]);

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Switch
            checked={bordered}
            onChange={() => setBordered(!bordered)}
            checkedChildren="Bordered"
            unCheckedChildren="Bordered"
          />
          <Switch
            checked={expanded}
            onChange={() => setExpanded(!expanded)}
            checkedChildren="Expandable"
            unCheckedChildren="Expandable"
          />
        </Space>

        <Table
          bordered={bordered}
          virtual
          columns={columns}
          scroll={{ x: 2000, y: 400 }}
          rowKey="id"
          dataSource={data}
          pagination={false}
          rowSelection={
            expanded
              ? undefined
              : {
                  columnWidth: 48,
                }
          }
          expandable={expandableProps}
        />
      </Space>
    </div>
  );
};

export default App;
`},73325:function(c,a){a.Z=`import type { TabsProps } from '@oceanbase/design';
import { Tabs } from '@oceanbase/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
`},82362:function(c,a){a.Z=`import type { RadioChangeEvent } from '@oceanbase/design';
import { Radio, Space, Tabs } from '@oceanbase/design';
import React, { useState } from 'react';

type TabsPosition = 'left' | 'right' | 'top' | 'bottom';

const App: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabsPosition>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab \${id}\`,
          };
        })}
      />
    </>
  );
};

export default App;
`},50329:function(c,a){a.Z=`import type { RadioChangeEvent } from '@oceanbase/design';
import { Radio, Tabs } from '@oceanbase/design';
import React, { useState } from 'react';

type SizeType = 'small' | 'middle' | 'large';

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{ marginBottom: 32 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};

export default App;
`},98845:function(c,a){a.Z=`import React from 'react';
import { Tabs } from '@oceanbase/design';

const onChange = (key: string) => {
  console.log(key);
};

const App: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <Tabs.TabPane key="1" tab="Tab 1" tag={22}>
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="Tab 2" tag={99}>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="Tab 3" tag={0}>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  );
};

export default App;
`},96180:function(c,a){a.Z=`import React from 'react';
import { Tabs } from '@oceanbase/design';
import type { TabsProps } from '@oceanbase/design';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
    tag: 22,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
    tag: 99,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
    tag: 0,
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
`},53314:function(c,a){a.Z=`import { Tag } from '@oceanbase/design';
import React from 'react';

const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App: React.FC = () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/oceanbase/oceanbase-design">Link</a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>
);

export default App;
`},85026:function(c,a){a.Z=`import React from 'react';
import { Divider, Space, Tag } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <>
      <Space size={[0, 'small']} wrap>
        <Tag bordered={false}>Tag 1</Tag>
        <Tag bordered={false}>Tag 2</Tag>
        <Tag bordered={false} closable>
          Tag 3
        </Tag>
        <Tag bordered={false} closable>
          Tag 4
        </Tag>
      </Space>
      <Divider />
      <Space size={[0, 'small']} wrap>
        <Tag bordered={false} color="processing">
          processing
        </Tag>
        <Tag bordered={false} color="success">
          success
        </Tag>
        <Tag bordered={false} color="error">
          error
        </Tag>
        <Tag bordered={false} color="warning">
          warning
        </Tag>
        <Tag bordered={false} color="magenta">
          magenta
        </Tag>
        <Tag bordered={false} color="red">
          red
        </Tag>
        <Tag bordered={false} color="volcano">
          volcano
        </Tag>
        <Tag bordered={false} color="orange">
          orange
        </Tag>
        <Tag bordered={false} color="gold">
          gold
        </Tag>
        <Tag bordered={false} color="lime">
          lime
        </Tag>
        <Tag bordered={false} color="green">
          green
        </Tag>
        <Tag bordered={false} color="cyan">
          cyan
        </Tag>
        <Tag bordered={false} color="blue">
          blue
        </Tag>
        <Tag bordered={false} color="geekblue">
          geekblue
        </Tag>
        <Tag bordered={false} color="purple">
          purple
        </Tag>
      </Space>
    </>
  );
};

export default App;
`},20234:function(c,a){a.Z=`import { Tag } from '@oceanbase/design';
import React, { useState } from 'react';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsData.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
};

export default App;
`},98648:function(c,a){a.Z=`import { Tag, Divider } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </>
);

export default App;
`},30685:function(c,a){a.Z=`import { Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag>
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
    <Tag
      ellipsis={{
        tooltip: {
          placement: 'topLeft',
          title: 'Custom Title',
        },
      }}
      style={{
        width: 200,
        marginTop: 16,
      }}
    >
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
  </>
);

export default App;
`},63006:function(c,a){a.Z=`import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@oceanbase/icons';
import { Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    <Tag icon={<LinkedinOutlined />} color="#55acee">
      LinkedIn
    </Tag>
  </>
);

export default App;
`},78121:function(c,a){a.Z=`import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import { Tag, Divider } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Without icon</Divider>
    <div>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </div>
    <Divider orientation="left">With icon</Divider>
    <div>
      <Tag icon={<CheckCircleOutlined />} color="success">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </div>
  </>
);

export default App;
`},37129:function(c,a){a.Z=`import { Tooltip } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Tooltip title="This is prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);

export default App;
`},2549:function(c,a){a.Z=`import { Button, Space, Tooltip, message } from '@oceanbase/design';
import { CloseCircleOutlined, ReloadOutlined, SyncOutlined } from '@oceanbase/icons';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  return (
    <Space size={24}>
      <Tooltip
        title="This is prompt text"
        open={open1}
        closeIcon={true}
        onClose={() => {
          setOpen1(false);
          message.success('Default close icon is clicked');
        }}
      >
        <Button>Default close icon</Button>
      </Tooltip>
      <Tooltip
        title="This is prompt text"
        open={open2}
        closeIcon={<CloseCircleOutlined />}
        onClose={() => {
          setOpen2(false);
          message.success('Custom close icon is clicked');
        }}
      >
        <Button>Custom close icon</Button>
      </Tooltip>
      <Button
        icon={<ReloadOutlined />}
        onClick={() => {
          setOpen1(true);
          setOpen2(true);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

export default App;
`},35272:function(c,a){a.Z=`import React, { useState } from 'react';
import { Card, Col, Row, Tooltip, Radio, Form } from '@oceanbase/design';
import type { TooltipType } from '@oceanbase/design/es/tooltip';

const App: React.FC = () => {
  const [type, setType] = useState<TooltipType>('default');
  return (
    <div>
      <Form style={{ marginBottom: 24 }}>
        <Form.Item label="type" required={true}>
          <Radio.Group
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="light">light</Radio.Button>
            <Radio.Button value="success">success</Radio.Button>
            <Radio.Button value="info">info</Radio.Button>
            <Radio.Button value="warning">warning</Radio.Button>
            <Radio.Button value="error">error</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Row gutter={24}>
        <Col span={12}>
          <Tooltip title="This is prompt text" type={type} mouseFollow={true}>
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>\u666E\u901A\u5185\u5BB9</h2>
              <div>Tooltip \u4F4D\u7F6E\u9ED8\u8BA4\u4E3A\u9F20\u6807\u53F3\u4E0B\u89D2</div>
            </Card>
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip
            title="This is prompt text. This is prompt text. This is prompt text. This is prompt text."
            type={type}
            mouseFollow={true}
          >
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>\u8F83\u957F\u5185\u5BB9</h2>
              <div>Tooltip \u4F4D\u7F6E\u4F1A\u6839\u636E\u9F20\u6807\u79FB\u52A8\u81EA\u52A8\u8C03\u6574</div>
            </Card>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default App;
`},57820:function(c,a){a.Z=`import { Button, Space, Tooltip } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Tooltip title="This is prompt text">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="light">
        <Button>Light</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="info">
        <Button>Info</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="success">
        <Button>Success</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="warning">
        <Button>Warning</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="error">
        <Button>Error</Button>
      </Tooltip>
    </Space>
  );
};

export default App;
`},32661:function(c,a){a.Z=`import React, { useState } from 'react';
import { TreeSelect } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'leaf1',
            },
            {
              value: 'leaf2',
              title: 'leaf2',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'leaf3',
              title: <b style={{ color: '#006AFF' }}>leaf3</b>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <TreeSelect
      showSearch
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
      value={value}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  );
};

export default App;
`},53184:function(c,a){a.Z=`import React, { useState } from 'react';
import { TreeSelect } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'my leaf',
            },
            {
              value: 'leaf2',
              title: 'your leaf',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'sss',
              title: <b style={{ color: '#006AFF' }}>sss</b>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <TreeSelect
      multiple
      showSearch
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
      value={value}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  );
};

export default App;
`},3512:function(c,a){a.Z=`import React from 'react';
import { Button, Space, Tooltip, Typography } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical" size={48}>
    <Space size={16}>
      Typography Text
      <Button type="primary">
        <Typography.Text>Typography Text</Typography.Text>
      </Button>
      <Button danger={true}>
        <Typography.Text>Typography Text</Typography.Text>
      </Button>
      <Tooltip open={true} title={<Typography.Text>This is Typography Text</Typography.Text>}>
        <span>Tooltip</span>
      </Tooltip>
    </Space>
    <Space size={16}>
      Typography Paragraph
      <Button type="primary">
        <Typography.Paragraph>Typography Paragraph</Typography.Paragraph>
      </Button>
      <Button danger={true}>
        <Typography.Paragraph>Typography Paragraph</Typography.Paragraph>
      </Button>
      <Tooltip
        open={true}
        title={<Typography.Paragraph>This is Typography Paragraph</Typography.Paragraph>}
      >
        <span>Tooltip</span>
      </Tooltip>
    </Space>
  </Space>
);

export default App;
`},99294:function(c,a){a.Z=`import React from 'react';
import { Space, Typography } from '@oceanbase/design';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>OceanBase Design (default)</Text>
    <Text type="secondary">OceanBase Design (secondary)</Text>
    <Text type="success">OceanBase Design (success)</Text>
    <Text type="warning">OceanBase Design (warning)</Text>
    <Text type="danger">OceanBase Design (danger)</Text>
    <Text disabled>OceanBase Design (disabled)</Text>
    <Text mark>OceanBase Design (mark)</Text>
    <Text code>OceanBase Design (code)</Text>
    <Text keyboard>OceanBase Design (keyboard)</Text>
    <Text underline>OceanBase Design (underline)</Text>
    <Text delete>OceanBase Design (delete)</Text>
    <Text strong>OceanBase Design (strong)</Text>
    <Text italic>OceanBase Design (italic)</Text>
    <Link href="https://design.oceanbase.com" target="_blank">
      OceanBase Design (Link)
    </Link>
  </Space>
);

export default App;
`},70759:function(c,a){a.Z=`import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group moreText={'\u66F4\u591A\u64CD\u4F5C'}>
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>\u5371\u9669\u6309\u94AE</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button>action4</Action.Button>
      <Action.Button>action5</Action.Button>
    </Action.Group>
  );
};
`},10485:function(c,a){a.Z=`import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group size={2}>
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>\u5371\u9669\u6309\u94AE</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button fixed>fixed4</Action.Button>
      <Action.Button fixed>action5</Action.Button>
    </Action.Group>
  );
};
`},90203:function(c,a){a.Z=`import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group
      shouldDisabled={key => key === 'action2'}
      shouldVisible={key => key !== 'action1'}
    >
      <Action.Link key="action1">action1</Action.Link>
      <Action.Link key="action2">action2</Action.Link>
      <Action.Link key="action3">action3</Action.Link>
      <Action.Link key="action4">action4</Action.Link>
      <Action.Link key="action5">action5</Action.Link>
    </Action.Group>
  );
};
`},43019:function(c,a){a.Z=`import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group moreText={'\u66F4\u591A\u64CD\u4F5C'}>
      <Action.Link visible={false}>action1</Action.Link>
      <Action.Link disabled tooltip={'\u7981\u7528\u5C55\u793Atooltip'}>
        \u7981\u7528\u63D0\u793A
      </Action.Link>
      <Action.Link
        onClick={() => {
          console.log('hello~~');
        }}
      >
        action3
      </Action.Link>
      <Action.Link
        onClick={async () => {
          return new Promise(resolve => {
            setTimeout(() => {
              console.log('hello2~~');
              resolve();
            }, 1000);
          });
        }}
      >
        action4
      </Action.Link>
      <Action.Link disabled>action5</Action.Link>
    </Action.Group>
  );
};
`},42650:function(c,a){a.Z=`import { message } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';

import { useCallback } from 'react';

export default () => {
  const linkOnClick = useCallback(() => {
    const promise: Promise<void> = new Promise(resolve => {
      setTimeout(() => {
        message.success('\u6210\u529F\u70B9\u51FBlink');
        resolve();
      }, 2000);
    });
    return promise;
  }, []);

  return (
    <Action.Group enableLoading size={2}>
      <Action.Link key="action1" onClick={linkOnClick}>
        action1
      </Action.Link>
      <Action.Link key="action2" onClick={linkOnClick}>
        action2
      </Action.Link>
      <Action.Link key="action3" onClick={linkOnClick}>
        action3
      </Action.Link>
      <Action.Link key="action4" onClick={linkOnClick}>
        action4
      </Action.Link>
      {/** \u57FA\u7840 loading \u63A7\u5236 */}
      <Action.Link key="action5" loading>
        action5
      </Action.Link>
    </Action.Group>
  );
};
`},3209:function(c,a){a.Z=`import type {
  BackgroundTaskManagerRef,
  ITaskMgrPreset,
  ITaskMgrQueue,
  TaskMgrID,
} from '@oceanbase/ui';
import { BackgroundTaskManager, BackgroundTaskManagerConstants } from '@oceanbase/ui';
import React, { useEffect, useRef } from 'react';
import { getTaskById } from './mockApi';

const { NotificationApi, REFRESH_FREQUENCY } = BackgroundTaskManagerConstants;

// mock model
(window as any).obuiMockModel = {
  backgroundTaskManagerAPIs: {},
};

export enum TASK_CENTER_STATUS {
  'WAITING' = 'WAITING',
  'PROCESSING' = 'PROCESSING',
  'SUCCESS' = 'SUCCESS',
  'FAILED' = 'FAILED',
}

const NotificationCenter = () => {
  const ref = useRef<BackgroundTaskManagerRef>();

  const setNotificationPreset = (p: ITaskMgrPreset) => {
    ref.current?.setPreset(p);
  };

  const setNotificationQueue = (q: ITaskMgrQueue) => {
    ref.current?.setQueue(q);
  };

  const pushNotificationQueue = (q: ITaskMgrQueue) => {
    ref.current?.pushQueue(q);
  };

  const popNotificationQueue = (q: TaskMgrID) => {
    ref.current?.popQueue(q);
  };

  const fetchPreset = () => {
    const preset = ref.current?.fetchPreset();
    return preset;
  };

  const fetchQueue = () => {
    const queue = ref.current?.fetchQueue();
    return queue;
  };

  const fetchQueueNsById = (id: TaskMgrID) => {
    return ref.current?.fetchQueueNsById(id);
  };

  // mock model\u5B58\u50A8
  (window as any).obuiMockModel.backgroundTaskManagerAPIs = {
    setNotificationPreset,
    setNotificationQueue,
    pushNotificationQueue,
    popNotificationQueue,
    fetchPreset,
    fetchQueue,
    fetchQueueNsById,
  };

  useEffect(() => {
    const api = async ({ id }: any) => {
      return getTaskById({ id });
    };
    setNotificationPreset({
      download_task: {
        api,
        successCb: (data, id) => {
          const { status, fileName, fileUrl } = data || {};
          if ([TASK_CENTER_STATUS.SUCCESS, TASK_CENTER_STATUS.FAILED].includes(status)) {
            popNotificationQueue(id);
            const typeMap = {
              [TASK_CENTER_STATUS.SUCCESS]: NotificationApi.success,
              [TASK_CENTER_STATUS.FAILED]: NotificationApi.error,
            };
            const msgMap = {
              [TASK_CENTER_STATUS.SUCCESS]: 'The file has been generated and can be downloaded',
              [TASK_CENTER_STATUS.FAILED]: 'File generation failed',
            };
            return {
              type: typeMap[status],
              config: {
                key: id,
                top: 78,
                duration: null,
                message: msgMap[status],
                description:
                  status === TASK_CENTER_STATUS.SUCCESS ? (
                    <>
                      <div>{fileName}</div>
                      <a href={fileUrl} target="_blank" rel="noreferrer">
                        Download
                      </a>
                    </>
                  ) : null,
              },
            };
          }
          return null;
        },
      },
    });
  }, []);

  return (
    <BackgroundTaskManager
      ref={ref}
      rollingFrequency={REFRESH_FREQUENCY.EXTREMELY}
      prefix="obui_backgroundtaskmanager_demo"
    />
  );
};

export default NotificationCenter;
`},2780:function(c,a){a.Z=`import { Button, message } from '@oceanbase/design';
import React, { useCallback } from 'react';
import NotificationCenter from './NotificationCenter';

export default () => {
  const onBtnClick = useCallback(() => {
    const id = \`\${Math.round(Math.random() * 1000)}\`;
    message.info(\`id\u4E3A: \${id}\u7684\u4EFB\u52A1\u5DF2\u7ECF\u63D0\u4EA4\u6210\u529F\uFF0C\u8BF7\u7B49\u5019\u5904\u7406...\`);
    // \u5B9E\u9645\u4F7F\u7528\u901A\u8FC7\u5F15\u5165model\u7684\u65B9\u6CD5\u6765\u8C03\u7528
    (window as any).obuiMockModel?.backgroundTaskManagerAPIs?.pushNotificationQueue?.({
      [id]: 'download_task',
    });
  }, []);

  return (
    <>
      <NotificationCenter />
      <Button onClick={onBtnClick}>download</Button>
    </>
  );
};
`},80353:function(c,a){a.Z=`let rollingTimes = 0;

// mock \u8F6E\u8BE2\u63A5\u53E3
async function getTaskById({ id }) {
  await sleep(1000);
  rollingTimes = rollingTimes === 3 ? 0 : rollingTimes + 1;
  return {
    id,
    gmtCreate: '2022-12-01T12:32:47.000+00:00',
    passportId: '200000000008',
    bizType: 'BILL_DETAIL',
    fileName: 'bill-detail-2022-12.xlsx',
    fileUrl: '',
    status: rollingTimes === 3 ? 'SUCCESS' : 'CONNECTING',
    fileExpireTime: '2022-12-04T12:32:47.000+00:00',
  };
}

function sleep(time) {
  return new Promise(reslove => {
    setTimeout(reslove, time);
  });
}

export { getTaskById };
`},38937:function(c,a){a.Z=`import React from 'react';
import { createFromIconfontCN } from '@oceanbase/icons';

export interface IconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomIcon = createFromIconfontCN({
  // \u5728 iconfont.cn \u4E0A\u751F\u6210
  scriptUrl: '//at.alicdn.com/t/a/font_3786261_ifhixq9j5c.js',
});

const IconFont = (props: IconFontProps) => {
  const { type, ...restProps } = props;
  return <CustomIcon type={type} {...restProps} />;
};

export default IconFont;
`},39985:function(c,a){a.Z=`import React, { useState } from 'react';
import { Alert, Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const [alertVisible, setalertVisible] = useState(true);
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '\u79DF\u6237\u7BA1\u7406',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '\u76D1\u63A7\u4E2D\u5FC3',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '\u8BCA\u65AD\u4E2D\u5FC3',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: '\u5B9E\u65F6\u8BCA\u65AD',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: '\u5BB9\u91CF\u4E2D\u5FC3',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: '\u62A5\u544A\u4E2D\u5FC3',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '\u65E5\u5FD7\u670D\u52A1',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '\u7CFB\u7EDF\u53C2\u6570',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      banner={
        alertVisible && (
          <Alert
            message="\u5F53\u524D\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u4E3A\u907F\u514D\u53EF\u80FD\u5B58\u5728\u7684\u5B89\u5168\u9690\u60A3\uFF0C\u5EFA\u8BAE\u5C06 Chrome \u6D4F\u89C8\u5668\u5347\u7EA7\u5230 80 \u53CA\u4EE5\u4E0A\u7248\u672C"
            type="warning"
            banner={true}
            showIcon={true}
            closable={true}
            onClose={() => {
              setalertVisible(false);
            }}
          />
        )
      }
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},61616:function(c,a){a.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '\u79DF\u6237\u7BA1\u7406',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '\u76D1\u63A7\u4E2D\u5FC3',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '\u8BCA\u65AD\u4E2D\u5FC3',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: '\u5B9E\u65F6\u8BCA\u65AD',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: '\u5BB9\u91CF\u4E2D\u5FC3',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: '\u62A5\u544A\u4E2D\u5FC3',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '\u65E5\u5FD7\u670D\u52A1',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '\u7CFB\u7EDF\u53C2\u6570',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        pdfPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP Express',
          version: '1.0.0',
          releaseTime: '2022-12-30 00:00:00',
        },
      }}
    >
      <PageContainerCompleteDemo />
    </BasicLayout>
  );
};
`},80601:function(c,a){a.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '\u79DF\u6237\u7BA1\u7406\u79DF\u6237\u7BA1\u7406\u79DF\u6237\u7BA1\u7406\u79DF\u6237\u7BA1\u7406',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '\u76D1\u63A7\u4E2D\u5FC3',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '\u8BCA\u65AD\u4E2D\u5FC3\u8BCA\u65AD\u4E2D\u5FC3\u8BCA\u65AD\u4E2D\u5FC3\u8BCA\u65AD\u4E2D\u5FC3',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: '\u5B9E\u65F6\u8BCA\u65AD',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: '\u5BB9\u91CF\u4E2D\u5FC3',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: '\u62A5\u544A\u4E2D\u5FC3',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '\u65E5\u5FD7\u670D\u52A1',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '\u7CFB\u7EDF\u53C2\u6570',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP Express',
          version: '1.0.0',
          releaseTime: '2022-12-30 00:00:00',
        },
      }}
    >
      <PageContainerCompleteDemo />
    </BasicLayout>
  );
};
`},19343:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Card, Space, Steps } from '@oceanbase/design';
import { BasicLayout, PageContainer } from '@oceanbase/ui';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  ReadOutlined,
} from '@oceanbase/icons';

export default () => {
  const [current, setCurrent] = useState(0);

  const NEW_METADB_OCP_INSTALL = [
    {
      title: 'MetaDB \u914D\u7F6E',
    },
    {
      title: '\u73AF\u5883\u9884\u68C0\u67E5',
    },
    {
      title: 'MetaDB \u90E8\u7F72',
    },
    {
      title: 'OCP \u914D\u7F6E',
    },
    {
      title: 'OCP \u90E8\u7F72',
    },
  ];
  const getIcon = (key: number) => {
    return current > key ? <CheckCircleOutlined /> : <ClockCircleOutlined />;
  };
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={null}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        extra: (
          <Space size={24}>
            <Space style={{ color: '#5C6B8A', cursor: 'pointer' }}>
              <HomeOutlined />
              \u8BBF\u95EE\u5B98\u7F51
            </Space>
            <Space style={{ color: '#5C6B8A', cursor: 'pointer' }}>
              <ReadOutlined />
              \u5E2E\u52A9\u4E2D\u5FC3
            </Space>
          </Space>
        ),
        showLocale: false,
        showHelp: false,
      }}
    >
      <PageContainer
        ghost={true}
        header={{
          title: '\u9875\u9762\u6807\u9898',
        }}
        footer={[
          <Button
            key="prev"
            onClick={() => {
              setCurrent(current > 0 ? current - 1 : 0);
            }}
          >
            \u4E0A\u4E00\u6B65
          </Button>,
          <Button
            key="next"
            type="primary"
            onClick={() => {
              setCurrent(current >= 4 ? current : current + 1);
            }}
          >
            \u4E0B\u4E00\u6B65
          </Button>,
        ]}
      >
        <Card bordered={false}>
          <Steps
            style={{ width: 722, margin: '0 auto' }}
            current={current}
            labelPlacement="vertical"
            items={NEW_METADB_OCP_INSTALL.map((item, index: number) => ({
              ...item,
              icon: getIcon(index),
            }))}
          />
        </Card>
      </PageContainer>
    </BasicLayout>
  );
};
`},63212:function(c,a){a.Z=`import React from 'react';
import { Badge, Dropdown, Menu, message, Space } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import { CaretDownFilled } from '@oceanbase/icons';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: '\u603B\u89C8',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/topo',
      title: '\u62D3\u6251\u56FE',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/tenant',
      title: '\u79DF\u6237\u7BA1\u7406',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/monitor',
      title: '\u6027\u80FD\u76D1\u63A7',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/report',
      title: '\u6027\u80FD\u62A5\u544A',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/resource',
      title: '\u8D44\u6E90\u7BA1\u7406',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/health',
      title: '\u5065\u5EB7\u5DE1\u68C0',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/compaction',
      title: '\u5408\u5E76\u7BA1\u7406',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/backup',
      title: '\u5907\u4EFD\u6062\u590D',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/parameter',
      title: '\u53C2\u6570\u7BA1\u7406',
    },
  ];
  const subSidemenus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-cluster',
      title: '\u96C6\u7FA4',
      icon: <IconFont type="cluster" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-tenant',
      title: '\u79DF\u6237',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-host',
      title: '\u4E3B\u673A',
      icon: <IconFont type="host" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-package',
      title: '\u8F6F\u4EF6\u5305',
      icon: <IconFont type="package" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-obproxy',
      title: 'OBProxy',
      icon: <IconFont type="obproxy" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-system',
      title: '\u7CFB\u7EDF\u7BA1\u7406',
      icon: <IconFont type="system" />,
      children: [
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-alarm',
          title: '\u544A\u8B66',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-task',
          title: '\u4EFB\u52A1',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-inspection',
          title: '\u5DE1\u68C0',
          divider: true,
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-log',
          title: '\u65E5\u5FD7\u670D\u52A1',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auth',
          title: '\u5B89\u5168',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-property',
          title: '\u7CFB\u7EDF\u53C2\u6570',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auditEvent',
          title: '\u5386\u53F2\u4E8B\u4EF6',
        },
      ],
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );
  const sideHeader = (
    <div
      style={{
        textAlign: 'center',
        padding: '10px 0',
      }}
    >
      <Space size={8}>
        <Badge status="success" />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="mysql">mysql</Menu.Item>
              <Menu.Item key="oracle">oracle</Menu.Item>
            </Menu>
          }
        >
          <Space
            size={14}
            style={{
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 600 }}>mysql</span>
            <CaretDownFilled
              style={{
                fontSize: 12,
                color: '#8592AD',
              }}
            />
          </Space>
        </Dropdown>
      </Space>
    </div>
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-demo-subsidemenu/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
      subSideMenus={subSidemenus}
      subSideMenuProps={{ defaultSelectedKeys: ['/~demos/basiclayout-demo-subsidemenu/overview'] }}
      sideHeader={sideHeader}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},37671:function(c,a){a.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '\u79DF\u6237\u7BA1\u7406',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '\u76D1\u63A7\u4E2D\u5FC3',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '\u8BCA\u65AD\u4E2D\u5FC3',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: '\u5B9E\u65F6\u8BCA\u65AD',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: '\u5BB9\u91CF\u4E2D\u5FC3',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: '\u62A5\u544A\u4E2D\u5FC3',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '\u65E5\u5FD7\u670D\u52A1',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '\u7CFB\u7EDF\u53C2\u6570',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );

  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        showLabel: false,
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},56214:function(c,a){a.Z=`import React from 'react';
import { Alert, Menu, message, Popconfirm, Typography } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon, { CloseOutlined } from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

const { Paragraph } = Typography;

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '\u79DF\u6237\u7BA1\u7406',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '\u76D1\u63A7\u4E2D\u5FC3',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '\u8BCA\u65AD\u4E2D\u5FC3',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: '\u5B9E\u65F6\u8BCA\u65AD',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: '\u5BB9\u91CF\u4E2D\u5FC3',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: '\u62A5\u544A\u4E2D\u5FC3',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '\u65E5\u5FD7\u670D\u52A1',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '\u7CFB\u7EDF\u53C2\u6570',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );
  const topHeaderTitle = (
    <Alert
      style={{
        backgroundColor: '#FAFAFA',
        color: '#fa8c16 !important',
        marginTop: -4,
        marginBottom: -4,
        paddingTop: 4,
        paddingBottom: 4,
      }}
      message={
        <Paragraph
          ellipsis={{
            rows: 1,
          }}
          style={{ marginBottom: 0 }}
        >
          {
            '\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u65F6\u95F4\u5DEE\u8FC7\u5927\uFF0C\u65F6\u95F4\u5DEE\u4E3A -90 \u79D2\u3002\u8BF7\u77EB\u6B63\u5BA2\u6237\u7AEF\u6216\u670D\u52A1\u5668\u65F6\u95F4\uFF0C\u65F6\u95F4\u5DEE\u9700\u5C0F\u4E8E 60 \u79D2'
          }
        </Paragraph>
      }
      action={
        <a
          onClick={() => {
            message.success('\u53D1\u8D77\u6821\u9A8C\u6210\u529F');
          }}
        >
          \u518D\u6B21\u6821\u9A8C
        </a>
      }
      type="warning"
      banner={true}
      showIcon={true}
      closable={true}
      closeText={
        <Popconfirm
          placement="topRight"
          title="\u5EFA\u8BAE\u8C03\u6574\u65F6\u95F4\uFF0C\u518D\u6B21\u6821\u9A8C\u65F6\u95F4\u5DEE\u5C0F\u4E8E 60 \u79D2\u540E\u5173\u95ED\u6B64\u63D0\u793A\u3002\u786E\u5B9A\u8981\u5173\u95ED\u6B64\u63D0\u793A\u5417\uFF1F"
          onCancel={e => {
            // \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u907F\u514D\u89E6\u53D1 Alert \u7684\u81EA\u52A8\u5173\u95ED\u884C\u4E3A
            e?.stopPropagation();
          }}
        >
          <CloseOutlined
            onClick={e => {
              e.stopPropagation();
            }}
          />
        </Popconfirm>
      }
    />
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        title: topHeaderTitle,
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},56417:function(c,a){a.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie, Welcome } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '\u603B\u89C8',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '\u79DF\u6237\u7BA1\u7406',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '\u76D1\u63A7\u4E2D\u5FC3',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '\u8BCA\u65AD\u4E2D\u5FC3',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: '\u5B9E\u65F6\u8BCA\u65AD',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: '\u5BB9\u91CF\u4E2D\u5FC3',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: '\u62A5\u544A\u4E2D\u5FC3',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '\u5907\u4EFD\u6062\u590D',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '\u65E5\u5FD7\u670D\u52A1',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '\u7CFB\u7EDF\u53C2\u6570',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('\u4F60\u70B9\u51FB\u4E86\u4E0B\u62C9\u83DC\u5355');
      }}
    >
      <Menu.Item key="profile">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>
      <Menu.Item key="modifyPassword">\u4FEE\u6539\u5BC6\u7801</Menu.Item>
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>
    </Menu>
  );
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u4E13\u4E1A\u7BA1\u7406\u5E73\u53F0',
      description: '\u4EE5 OB \u4E3A\u6838\u5FC3\u7684\u4E13\u4E1A\u6570\u636E\u5E93\u7BA1\u7406\u5E73\u53F0',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406',
      description: '\u4E3A OB \u63D0\u4F9B\u4ECE\u90E8\u7F72\u3001\u8FD0\u7EF4\u3001\u5347\u7EA7\u5230\u5220\u9664\u7684\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u66F4\u9AD8\u6548\u7387\uFF0C\u66F4\u4F4E\u6210\u672C',
      description: '\u63D0\u9AD8\u7528\u6237\u7BA1\u7406 OB \u6548\u7387\uFF0C\u964D\u4F4E\u4F01\u4E1AIT\u8FD0\u7EF4\u6210\u672C',
    },
  ];
  const steps = [
    {
      title: '\u521B\u5EFA\u96C6\u7FA4',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
    {
      title: '\u521B\u5EFA\u79DF\u6237',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
    {
      title: '\u521B\u5EFA\u6570\u636E\u5E93',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
    {
      title: '\u8FDE\u63A5\u6570\u636E\u5E93',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
  ];
  const helps = [
    {
      title: '\u521B\u5EFA\u65B0\u7684\u96C6\u7FA4',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u521B\u5EFA\u65B0\u7684\u79DF\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u7BA1\u7406\u96C6\u7FA4',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u7BA1\u7406\u79DF\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u4EFB\u52A1',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u544A\u8B66',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u6DFB\u52A0\u65B0\u7528\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u66F4\u591A',
      link: 'https://www.alipay.com',
      isMore: true,
    },
  ];
  return (
    <BasicLayout
      location={{
        pathname: '/welcome',
      }}
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <Welcome
        title="Hi\uFF0C\u6B22\u8FCE\u4F7F\u7528 OceanBase \u4E91\u5E73\u53F0"
        description="OceanBase \u4E91\u5E73\u53F0 (OceanBase Cloud Platform\uFF0COCP) \u662F\u7528\u4E8E\u7BA1\u63A7 OceanBase \u6570\u636E\u5E93\u96C6\u7FA4\u7684\u5E73\u53F0\u3002\u901A\u8FC7 OCP\uFF0C\u60A8\u53EF\u4EE5\u5BF9 OceanBase \u96C6\u7FA4\u8FDB\u884C\u5B89\u88C5\u3001\u90E8\u7F72\u3001\u76D1\u63A7\u3001\u544A\u8B66\u7B49\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u63D0\u4F9B\u9AD8\u6548\u7684\u7BA1\u7406\u670D\u52A1\uFF0C\u4E3A\u60A8\u521B\u9020\u66F4\u591A\u4EF7\u503C\u3002"
        bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
        introduces={introduces}
        steps={steps}
        buttonText="\u521B\u5EFA\u96C6\u7FA4"
        buttonProps={{
          onClick: () => {
            message.success('\u4F60\u70B9\u51FB\u4E86\u6309\u94AE');
          },
        }}
        helps={helps}
      />
    </BasicLayout>
  );
};
`},62876:function(c,a){a.Z=`import { Button, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button type="primary" onClick={() => console.log('selectedRows: ', selectedRows)}>
          \u6279\u91CF\u64CD\u4F5C
        </Button>
        <Button onClick={() => cleanSelectedRows()}>\u6279\u91CF\u5220\u9664</Button>
      </Space>
    );
  };
  return (
    <BatchOperationBar
      title={'Table'}
      content={content}
      selectedRows={data}
      alertOptionRender={alertOptionRender}
    />
  );
};
`},40483:function(c,a){a.Z=`import { Button, Drawer, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [open, setOpen] = useState<boolean>(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedData, setSelectedData] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedData(selectedData);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        rowSelection={rowSelection}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer width={500} open={open} title="Basic Drawer" placement="right" onClose={onClose}>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedData(selectedRows);
            },
          }}
        />
        <BatchOperationBar
          width={500}
          position={['bottom', 'right']}
          title={'Table'}
          content={content}
          selectedRows={selectedData}
        />
      </Drawer>
    </>
  );
};
`},14255:function(c,a){a.Z=`import { Button, Drawer, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [open, setOpen] = useState<boolean>(true);
  const [selectedRowKeysTable1, setSelectedRowKeysTabel1] = useState<React.Key[]>([]);
  const [selectedDataTable1, setSelectedDataTable1] = useState<DataType[]>([]);
  const [selectedRowKeysTable2, setSelectedRowKeysTable2] = useState<React.Key[]>([]);
  const [selectedDataTable2, setSelectedDataTable2] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 78,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const batchOperationBarContent1 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable1);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const batchOperationBarContent2 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable2);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={false}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button onClick={() => console.log('selectedRows: ', selectedRows)}>\u6279\u91CF\u64CD\u4F5C</Button>
        <Button onClick={() => cleanSelectedRows()}>\u6279\u91CF\u5220\u9664</Button>
      </Space>
    );
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer width={600} open={open} title="Basic Drawer" placement="right" onClose={onClose}>
        <h2>Table1</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable1,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTabel1(selectedRowKeys);
              setSelectedDataTable1(selectedRows);
            },
          }}
        />
        <h2>Table2</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable2,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTable2(selectedRowKeys);
              setSelectedDataTable2(selectedRows);
            },
          }}
        />
        <h2>Table3</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
        />
        <h2>Table4</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          style={{
            marginBottom: 128,
          }}
        />
        <BatchOperationBar
          position={['bottom', 'right']}
          width={600}
          title={'Table1'}
          content={batchOperationBarContent1}
          barStyle={{
            bottom: 64,
          }}
          selectedRows={selectedDataTable1}
          alertOptionRender={alertOptionRender}
        />
        <BatchOperationBar
          width={600}
          title={'Table2'}
          content={batchOperationBarContent2}
          selectedRows={selectedDataTable2}
          alertOptionRender={alertOptionRender}
        />
      </Drawer>
    </>
  );
};
`},13633:function(c,a){a.Z=`import { Button, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [selectedRowKeysTable1, setSelectedRowKeysTabel1] = useState<React.Key[]>([]);
  const [selectedDataTable1, setSelectedDataTable1] = useState<DataType[]>([]);
  const [selectedRowKeysTable2, setSelectedRowKeysTable2] = useState<React.Key[]>([]);
  const [selectedDataTable2, setSelectedDataTable2] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 78,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const batchOperationBarContent1 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable1);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const batchOperationBarContent2 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable2);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={false}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };

  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button onClick={() => console.log('selectedRows: ', selectedRows)}>\u6279\u91CF\u64CD\u4F5C</Button>
        <Button onClick={() => cleanSelectedRows()}>\u6279\u91CF\u5220\u9664</Button>
      </Space>
    );
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Table1</h2>
        <Table
          columns={columns}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          dataSource={data}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable1,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTabel1(selectedRowKeys);
              setSelectedDataTable1(selectedRows);
            },
          }}
        />
        <h2>Table2</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable2,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTable2(selectedRowKeys);
              setSelectedDataTable2(selectedRows);
            },
          }}
        />
      </div>
      <BatchOperationBar
        title={'Table1'}
        content={batchOperationBarContent1}
        barStyle={{
          bottom: 64,
        }}
        selectedRows={selectedDataTable1}
        alertOptionRender={alertOptionRender}
      />
      <BatchOperationBar
        title={'Table2'}
        content={batchOperationBarContent2}
        selectedRows={selectedDataTable2}
        alertOptionRender={alertOptionRender}
      />
    </>
  );
};
`},28893:function(c,a){a.Z=`import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import type { AlertRenderParams } from '@oceanbase/ui/es/BatchOperationBar';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedData, setSelectedData] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }: AlertRenderParams) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedData(selectedData);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Table</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedData(selectedRows);
            },
          }}
        />
      </div>
      <BatchOperationBar title={'Table'} content={content} selectedRows={selectedData} />
    </>
  );
};
`},3391:function(c,a){a.Z=`import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return <Boundary.Code code={403} />;
};
`},85493:function(c,a){a.Z=`import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return <Boundary.Code code={404} />;
};
`},98234:function(c,a){a.Z=`import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return (
    <Boundary.Exception isNotCompatible={true}>
      <div>\u517C\u5BB9\u6027\u515C\u5E95</div>
    </Boundary.Exception>
  );
};
`},37220:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Radio } from '@oceanbase/design';
import { Boundary } from '@oceanbase/ui';

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <div>
      <Button danger onClick={onClick}>
        Click me to throw a error
      </Button>
    </div>
  );
};

export default () => {
  const [showError, setShowError] = useState(false);
  const [hasButton, setHasButton] = useState(true);
  const onErrorChange = e => {
    setShowError(e.target.value);
  };
  const onButtonChange = e => {
    setHasButton(e.target.value);
  };

  return (
    <div>
      showError:
      <Radio.Group onChange={onErrorChange} value={showError}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <br />
      hasButton:
      <Radio.Group onChange={onButtonChange} value={hasButton}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <Boundary.Exception showError={showError} hasButton={hasButton}>
        <ThrowError />
      </Boundary.Exception>
    </div>
  );
};
`},6618:function(c,a){a.Z=`import React, { useCallback, useState } from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  const [state, setState] = useState('NOT_OPEN');
  const MONITOR_OPEN_CONFIG = {
    NOT_OPEN: {
      title: '\u672A\u5F00\u542F\u6027\u80FD\u76D1\u63A7',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*EIJaSJDIP2kAAAAAAAAAAAAAARQnAQ',
      buttonText: '\u5F00\u542F\u6027\u80FD\u76D1\u63A7',
    },
    PENDING: {
      title: '\u5F00\u542F\u6027\u80FD\u76D1\u63A7\u63D0\u4EA4\u6210\u529F',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*Qf2zSKyaJYwAAAAAAAAAAAAAARQnAQ',
      buttonText: '',
    },
    CANNOT_ACCESS: {
      title: '\u6027\u80FD\u76D1\u63A7\u5F00\u542F\u5931\u8D25',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*pwK7QqOf-dwAAAAAAAAAAAAAARQnAQ',
      buttonText: '\u91CD\u65B0\u5F00\u542F\u6027\u80FD\u76D1\u63A7',
    },
  };

  const handleClick = useCallback(() => {
    const theState = Object.keys(MONITOR_OPEN_CONFIG)[Math.floor(Math.random() * 2)];
    setState(theState);
  }, []);

  return <Boundary.Function config={MONITOR_OPEN_CONFIG} state={state} onClick={handleClick} />;
};
`},58126:function(c,a){a.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';
import { StepForwardOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="question"
          content="\u4ED8\u8D39\u670D\u52A1\u5360\u6BD4"
          tooltip={{
            title:
              '\u767B\u8BB0\u7684\u670D\u52A1\u4EBA\u5929\u4E2D\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u767E\u5206\u6BD4\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u670D\u52A1\u4EBA\u5929\u603B\u548C)/(\u5DF2\u6295\u5165\u4EBA\u5929)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="question"
          content="\u81EA\u5B9A\u4E49\u5B57\u4F53\u4E0E icon \u5927\u5C0F\u4E0E\u989C\u8272"
          tooltip={{
            title: '\u81EA\u5B9A\u4E49\u5B57\u4F53\u4E0E icon \u5927\u5C0F\u4E0E\u989C\u8272',
          }}
          color="#8592AD"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          content="\u81EA\u5B9A\u4E49\u56FE\u6807"
          tooltip={{
            title: '\u81EA\u5B9A\u4E49\u56FE\u6807',
          }}
          color="default"
          suffixIcon={<StepForwardOutlined />}
        />
      </div>
    </>
  );
};
`},77206:function(c,a){a.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="info"
          content="info \u63D0\u793A"
          tooltip={{
            title:
              '\u767B\u8BB0\u7684\u670D\u52A1\u4EBA\u5929\u4E2D\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u767E\u5206\u6BD4\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u670D\u52A1\u4EBA\u5929\u603B\u548C)/(\u5DF2\u6295\u5165\u4EBA\u5929)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="info"
          content="\u81EA\u5B9A\u4E49info \u56FE\u6807\u989C\u8272"
          tooltip={{
            title:
              '\u767B\u8BB0\u7684\u670D\u52A1\u4EBA\u5929\u4E2D\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u767E\u5206\u6BD4\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u670D\u52A1\u4EBA\u5929\u603B\u548C)/(\u5DF2\u6295\u5165\u4EBA\u5929)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
          infoColor="#1890FF"
        />
      </div>
    </>
  );
};
`},80989:function(c,a){a.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="\u81EA\u5B9A\u4E49\u5B57\u4F53\u4E0E icon \u5927\u5C0F"
          tooltip={{
            title: '\u81EA\u5B9A\u4E49\u5B57\u4F53\u4E0E icon \u5927\u5C0F',
          }}
          color="#default"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="\u81EA\u5B9A\u4E49icon \u989C\u8272"
          tooltip={{
            title: '\u81EA\u5B9A\u4E49 icon \u989C\u8272',
          }}
          color="#8592AD"
          exclamationColor="#f5222d"
        />
      </div>
    </>
  );
};
`},57214:function(c,a){a.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithIcon
      iconType="info"
      content="\u4ED8\u8D39\u670D\u52A1\u5360\u6BD4"
      tooltip={{
        title:
          '\u767B\u8BB0\u7684\u670D\u52A1\u4EBA\u5929\u4E2D\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u767E\u5206\u6BD4\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u670D\u52A1\u4EBA\u5929\u603B\u548C)/(\u5DF2\u6295\u5165\u4EBA\u5929)',
        overlayStyle: { maxWidth: '330px' },
      }}
      prefixIcon
      suffixIcon={null}
    />
  );
};
`},60115:function(c,a){a.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <ContentWithIcon
        iconType="question"
        content="\u4ED8\u8D39\u670D\u52A1\u5360\u6BD4"
        popOver={{
          content: (
            <div>
              <span style={{ marginRight: '4px' }}>\u8FD9\u662F\u4E00\u6BB5\u6587\u6848\u63CF\u8FF0\u5E26\u6709\u8D85\u94FE\u63A5</span>
              <a>\u67E5\u770B\u5E2E\u52A9\u6587\u6863</a>
            </div>
          ),
          overlayStyle: { maxWidth: '180px' },
        }}
        color="default"
        tooltipWithLink={true}
      />
    </>
  );
};
`},55011:function(c,a){a.Z=`import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';
import './index.less';

export default () => {
  return (
    <>
      <div>
        <ContentWithQuestion
          content="\u4ED8\u8D39\u670D\u52A1\u5360\u6BD4"
          tooltip={{
            title:
              '\u767B\u8BB0\u7684\u670D\u52A1\u4EBA\u5929\u4E2D\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u767E\u5206\u6BD4\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u670D\u52A1\u4EBA\u5929\u603B\u548C)/(\u5DF2\u6295\u5165\u4EBA\u5929)',
            overlayStyle: { maxWidth: '330px' },
          }}
        />
      </div>
      <div>
        <ContentWithQuestion
          className="customer-className"
          content="\u81EA\u5B9A\u4E49 className"
          tooltip={{
            title: '\u81EA\u5B9A\u4E49\u5B57\u4F53\u84DD\u8272 className',
          }}
        />
      </div>
    </>
  );
};
`},18872:function(c,a){a.Z=`.customer-className {
  color: #597ef7;
}
`},54294:function(c,a){a.Z=`import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithQuestion
      content="\u4ED8\u8D39\u670D\u52A1\u5360\u6BD4"
      tooltip={{
        title:
          '\u767B\u8BB0\u7684\u670D\u52A1\u4EBA\u5929\u4E2D\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u767E\u5206\u6BD4\uFF0C\u8BA1\u7B97\u516C\u5F0F\u4E3A (\u6709\u670D\u52A1\u5305\u5F52\u5C5E\u7684\u670D\u52A1\u4EBA\u5929\u603B\u548C)/(\u5DF2\u6295\u5165\u4EBA\u5929)',
        overlayStyle: { maxWidth: '330px' },
      }}
      prefixIcon
      suffixIcon={null}
    />
  );
};
`},63964:function(c,a){a.Z=`import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';

const docLink = 'https://www.oceanbase.com/docs/enterprise';

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Dialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        draggable={true}
        extLink={{ link: docLink }}
      >
        <iframe src={docLink} />
      </Dialog>
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},16089:function(c,a){a.Z=`import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';

const docLink = 'https://www.oceanbase.com/docs/enterprise';
const DEFAULT_EMBDED_WIDTH = 0.4;
const MAX_EMBED_WIDTH = 0.5;
const MIN_EMBED_WIDTH = 0.3;
const MOBILE_CLIENT_WIDTH = 1280;

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DialogWrapper = useMemo(() => {
    let result: any = {
      visible: showDialog,
      onClose: () => setShowDialog(false),
      clientWidth: clientWidth,
      clientHeight: clientHeight,
      draggable: true,
      extLink: { link: docLink },
    };
    if (clientWidth >= MOBILE_CLIENT_WIDTH) {
      result = {
        ...result,
        setRootWidth,
        max: [MAX_EMBED_WIDTH * clientWidth, clientHeight],
        min: [MIN_EMBED_WIDTH * clientWidth, clientHeight],
        width: DEFAULT_EMBDED_WIDTH * clientWidth,
        height: clientHeight,
        left: (1 - DEFAULT_EMBDED_WIDTH) * clientWidth,
        isEmbed: true,
      };
    } else {
      result = {
        ...result,
        max: [clientWidth, clientHeight],
        width: DEFAULT_EMBDED_WIDTH * clientWidth,
        height: clientHeight / 2,
        top: clientHeight / 2,
        isEmbed: false,
      };
    }
    return (
      <Dialog {...result}>
        <iframe src={docLink} />
      </Dialog>
    );
  }, [clientWidth, clientHeight, showDialog, setRootWidth, setShowDialog]);

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      {DialogWrapper}
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},27290:function(c,a){a.Z=`import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';

const docLink = 'https://www.oceanbase.com/docs/enterprise';
const DEFAULT_EMBDED_WIDTH = 0.4;
const MAX_EMBED_WIDTH = 0.5;
const MIN_EMBED_WIDTH = 0.3;

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      <Dialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        draggable={true}
        extLink={{ link: docLink }}
        setRootWidth={setRootWidth}
        max={[MAX_EMBED_WIDTH * clientWidth, clientHeight]}
        min={[MIN_EMBED_WIDTH * clientWidth, clientHeight]}
        width={DEFAULT_EMBDED_WIDTH * clientWidth}
        height={clientHeight}
        top={0}
        left={(1 - DEFAULT_EMBDED_WIDTH) * clientWidth}
        isEmbed={true}
      >
        <iframe src={docLink} />
      </Dialog>
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},46437:function(c,a){a.Z=`import React, { useCallback, useState } from 'react';
import { Button } from '@oceanbase/design';
import { DocDialog } from '@oceanbase/ui';
import './index.less';

const docLink = 'https://www.oceanbase.com/docs/enterprise';

const docLinkMap = {
  '/overview':
    'https://www.oceanbase.com/en/docs/enterprise/oceanbase-database-en/V3.2.2/10000000000385431',
  '/cluster':
    'https://www.oceanbase.com/en/docs/enterprise/oceanbase-database-en/V3.2.2/10000000000386301',
};

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const setVisible = useCallback(
    (payload: boolean) => {
      setShowDialog(payload);
    },
    [setShowDialog]
  );

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      <DocDialog
        className="doc-dialog-demo"
        visible={showDialog}
        setVisible={setVisible}
        setRootWidth={setRootWidth}
        fallbackUrl={docLink}
        docUrls={docLinkMap}
      />
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},56068:function(c,a){a.Z=`.doc-dialog-demo {
  .ob-dialog-container {
    border-radius: 8px;
  }
}
`},61648:function(c,a){a.Z=`import React from 'react';
import { Button, theme } from '@oceanbase/design';
import { FooterToolbar } from '@oceanbase/ui';

export default () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        height: 800,
        backgroundColor: token.colorBgLayout,
      }}
    >
      <FooterToolbar extra="Some extra message">
        <Button>Cancel</Button>
        <Button type="primary">Ok</Button>
      </FooterToolbar>
    </div>
  );
};
`},10540:function(c,a){a.Z=`import React from 'react';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  return (
    <FullscreenBox defaultMode="browser" header={{ title: '\u53EF\u5168\u5C4F\u8868\u683C-\u6D4F\u89C8\u5668\u5168\u5C4F' }}>
      <SimpleTable />
    </FullscreenBox>
  );
};
`},34064:function(c,a){a.Z=`import React, { useRef, useState } from 'react';
import { Button } from '@oceanbase/design';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  const [fullscreen, setFullscreen] = useState(false);
  const boxRef = useRef<typeof FullscreenBox>();

  function handleFullscreenChange(fs) {
    setFullscreen(fs);
  }

  function toggleFullscreen() {
    boxRef?.current?.changeFullscreen(!fullscreen);
  }

  return (
    <div style={{ width: 1000 }}>
      <FullscreenBox
        ref={boxRef}
        onChange={handleFullscreenChange}
        header={
          <Button type="link" onClick={() => toggleFullscreen()}>
            \u5168\u5C4F
          </Button>
        }
      >
        <SimpleTable />
      </FullscreenBox>
    </div>
  );
};
`},37354:function(c,a){a.Z=`import React from 'react';
import { Divider, Table, Tag } from '@oceanbase/design';

export const SimpleTable = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  return (
    <Table
      rowSelection={{ onChange: () => {} }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};
`},56030:function(c,a){a.Z=`import React from 'react';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  return (
    <FullscreenBox header={{ title: '\u53EF\u5168\u5C4F\u8868\u683C - \u89C6\u53E3\u5168\u5C4F' }}>
      <SimpleTable />
    </FullscreenBox>
  );
};
`},54951:function(c,a){a.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight>
    {\`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }\`}
  </Highlight>
);
`},95094:function(c,a){a.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight language="java" theme="dark">
    {\`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }\`}
  </Highlight>
);
`},15351:function(c,a){a.Z=`// *** \u8BE5\u6587\u4EF6\u7531 example_gen.js \u81EA\u52A8\u751F\u6210\uFF0C\u6DFB\u52A0\u65B0\u7684\u8BED\u8A00\u793A\u4F8B\u540E\u8FD0\u884C\u8BE5\u6587\u4EF6\u5373\u53EF\u6DFB\u52A0***
/* eslint-disable */

const configs = [
  {
    language: 'bash',
    text: 'Bash',
    code: '#!/bin/bash\\n\\n###### CONFIG\\nACCEPTED_HOSTS="/root/.hag_accepted.conf"\\nBE_VERBOSE=false\\n\\nif [ "$UID" -ne 0 ]\\nthen\\n echo "Superuser rights required"\\n exit 2\\nfi\\n\\ngenApacheConf(){\\n echo -e "# Host \${HOME_DIR}$1/$2 :"\\n}\\n\\necho \\'"quoted"\\' | tr -d \\\\\\\\/" > text.txt\\n\\n',
  },
  {
    language: 'cpp',
    text: 'Cpp',
    code: '#include <iostream>\\n\\nint main(int argc, char *argv[]) {\\n\\n  /* An annoying "Hello World" example */\\n  for (auto i = 0; i < 0xFFFF; i++)\\n    cout << "Hello, World!" << endl;\\n\\n  char c = \\'\\\\n\\';\\n  unordered_map <string, vector<string> > m;\\n  m["key"] = "\\\\\\\\\\\\\\\\"; // this is an error\\n\\n  return -2e3 + 12l;\\n}',
  },
  {
    language: 'css',
    text: 'Css',
    code: "@font-face {\\n  font-family: Chunkfive; src: url('Chunkfive.otf');\\n}\\n\\nbody, .usertext {\\n  color: #F0F0F0; background: #600;\\n  font-family: Chunkfive, sans;\\n  --heading-1: 30px/32px Helvetica, sans-serif;\\n}\\n\\n@import url(print.css);\\n@media print {\\n  a[href^=http]::after {\\n    content: attr(href)\\n  }\\n}",
  },
  {
    language: 'dockerfile',
    text: 'Dockerfile',
    code: '# Example instructions from https://docs.docker.com/reference/builder/\\nFROM ubuntu:14.04\\n\\nMAINTAINER example@example.com\\n\\nENV foo /bar\\nWORKDIR \${foo}   # WORKDIR /bar\\nADD . $foo       # ADD . /bar\\nCOPY \\\\$foo /quux # COPY $foo /quux\\nARG   VAR=FOO\\n\\nRUN apt-get update && apt-get install -y software-properties-common\\\\\\n    zsh curl wget git htop\\\\\\n    unzip vim telnet\\nRUN ["/bin/bash", "-c", "echo hello \${USER}"]\\n\\nCMD ["executable","param1","param2"]\\nCMD command param1 param2\\n\\nEXPOSE 1337\\n\\nENV myName="John Doe" myDog=Rex\\\\ The\\\\ Dog \\\\\\n    myCat=fluffy\\n\\nENV myName John Doe\\nENV myDog Rex The Dog\\nENV myCat fluffy',
  },
  {
    language: 'go',
    text: 'Go',
    code: 'package main\\n\\nimport "fmt"\\n\\nfunc main() {\\n    ch := make(chan float64)\\n    ch <- 1.0e10    // magic number\\n    x, ok := <- ch\\n    defer fmt.Println(\`exitting now\\\\\`)\\n    go println(len("hello world!"))\\n    return\\n}',
  },
  {
    language: 'groovy',
    text: 'Groovy',
    code: '@CompileStatic\\nclass Distribution implements Distributable {\\n    double number = 1234.234 / 567\\n    def otherNumber = 3 / 4\\n    boolean archivable = condition ?: true\\n    def ternary = a ? b : c\\n    String name = "Guillaume"\\n    Closure description = null\\n    List<DownloadPackage> packages = []\\n    String regex = ~/.*foo.*/\\n    String multi = \\'\\'\\'\\n        multi line string\\n    \\'\\'\\' + """\\n        now with double quotes and \${gstring}\\n    """ + $/\\n        even with dollar slashy strings\\n    /$\\n}',
  },
  {
    language: 'http',
    text: 'Http',
    code: 'POST /task?id=1 HTTP/1.1\\nHost: example.org\\nContent-Type: application/json; charset=utf-8\\nContent-Length: 137\\n\\n{\\n  "status": "ok",\\n  "extended": true,\\n  "results": [\\n    {"value": 0, "type": "int64"},\\n    {"value": 1.0e+3, "type": "decimal"}\\n  ]\\n}',
  },
  {
    language: 'java',
    text: 'Java',
    code: '/**\\n * @author John Smith <john.smith@example.com>\\n*/\\npackage l2f.gameserver.model;\\n\\npublic abstract class L2Char extends L2Object {\\n  public static final Short ERROR = 0x0001;\\n\\n  public void moveTo(int x, int y, int z) {\\n    _ai = null;\\n    log("Should not be called");\\n    if (1 > 5) { // wtf!?\\n      return;\\n    }\\n  }\\n}',
  },
  {
    language: 'javascript',
    text: 'Javascript',
    code: 'function $initHighlight(block, cls) {\\n  try {\\n    if (cls.search(/\\\\bno\\\\-highlight\\\\b/) != -1)\\n      return process(block, true, 0x0F) +\\n             \` class="\${cls}"\`;\\n  } catch (e) {\\n    /* handle exception */\\n  }\\n  for (var i = 0 / 2; i < classes.length; i++) {\\n    if (checkCondition(classes[i]) === undefined)\\n      console.log(\\'undefined\\');\\n  }\\n\\n  return (\\n    <div>\\n      <web-component>{block}</web-component>\\n    </div>\\n  )\\n}\\n\\nexport  $initHighlight;',
  },
  {
    language: 'json',
    text: 'Json',
    code: '[\\n  {\\n    "title": "apples",\\n    "count": [12000, 20000],\\n    "description": {"text": "...", "sensitive": false}\\n  },\\n  {\\n    "title": "oranges",\\n    "count": [17500, null],\\n    "description": {"text": "...", "sensitive": false}\\n  }\\n]',
  },
  {
    language: 'jsx',
    text: 'Jsx',
    code: 'import React from \\'react\\';\\nimport { Button, Tag, Space } from \\'@oceanbase/design\\';\\nimport { ProList } from \\'@oceanbase/ui\\';\\n\\nconst dataSource = [\\n  {\\n    name: \\'OceanBase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Database\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'Oceanbase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n];\\n\\nexport default () => (\\n  <ProList\\n    toolBarRender={() => {\\n      return [\\n        <Button key="add" type="primary">\\n          \u65B0\u5EFA\\n        </Button>,\\n      ];\\n    }}\\n    onRow={(record) => {\\n      return {\\n        onMouseEnter: () => {\\n          console.log(record);\\n        },\\n        onClick: () => {\\n          console.log(record);\\n        },\\n      };\\n    }}\\n    rowKey="name"\\n    headerTitle="\u57FA\u7840\u5217\u8868"\\n    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"\\n    dataSource={dataSource}\\n    showActions="hover"\\n    showExtra="hover"\\n    metas={{\\n      title: {\\n        dataIndex: \\'name\\',\\n      },\\n      avatar: {\\n        dataIndex: \\'image\\',\\n      },\\n      description: {\\n        dataIndex: \\'desc\\',\\n      },\\n      subTitle: {\\n        render: () => {\\n          return (\\n            <Space size={0}>\\n              <Tag color="blue">OceanBase Design</Tag>\\n              <Tag color="#5BD8A6">Oceanbase Design</Tag>\\n            </Space>\\n          );\\n        },\\n      },\\n      actions: {\\n        render: (text, row) => [\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\\n            \u94FE\u8DEF\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\\n            \u62A5\u8B66\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\\n            \u67E5\u770B\\n          </a>,\\n        ],\\n      },\\n    }}\\n  />\\n);',
  },
  {
    language: 'markdown',
    text: 'Markdown',
    code: '# hello world\\n\\nyou can write text [with links](http://example.com) inline or [link references][1].\\n\\n* one _thing_ has *em*phasis\\n* two __things__ are **bold**\\n\\n[1]: http://example.com\\n\\n---\\n\\nhello world\\n===========\\n\\n<this_is inline="xml"></this_is>\\n\\n> markdown is so cool\\n\\n    so are code segments\\n\\n1. one thing (yeah!)\\n2. two thing \`i can write code\`, and \`more\` wipee!',
  },
  {
    language: 'nginx',
    text: 'Nginx',
    code: 'user  www www;\\nworker_processes  2;\\npid /var/run/nginx.pid;\\nerror_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;\\n\\nevents {\\n    connections   2000;\\n    use kqueue | rtsig | epoll | /dev/poll | select | poll;\\n}\\n\\nhttp {\\n    log_format main      \\'$remote_addr - $remote_user [$time_local] \\'\\n                         \\'"$request" $status $bytes_sent \\'\\n                         \\'"$http_referer" "$http_user_agent" \\'\\n                         \\'"$gzip_ratio"\\';\\n\\n    send_timeout 3m;\\n    client_header_buffer_size 1k;\\n\\n    gzip on;\\n    gzip_min_length 1100;\\n\\n    #lingering_time 30;\\n\\n    server {\\n        server_name   one.example.com  www.one.example.com;\\n        access_log   /var/log/nginx.access_log  main;\\n\\n        rewrite (.*) /index.php?page=$1 break;\\n\\n        location / {\\n            proxy_pass         http://127.0.0.1/;\\n            proxy_redirect     off;\\n            proxy_set_header   Host             $host;\\n            proxy_set_header   X-Real-IP        $remote_addr;\\n            charset            koi8-r;\\n        }\\n\\n        location /api/ {\\n            fastcgi_pass 127.0.0.1:9000;\\n        }\\n\\n        location ~* \\\\.(jpg|jpeg|gif)$ {\\n            root         /spool/www;\\n        }\\n    }\\n}',
  },
  {
    language: 'python',
    text: 'Python',
    code: "@requires_authorization\\ndef somefunc(param1='', param2=0):\\n    r'''A docstring'''\\n    if param1 > param2: # interesting\\n        print 'Gre\\\\'ater'\\n    return (param2 - param1 + 1 + 0b10l) or None\\n\\nclass SomeClass:\\n    pass\\n\\n>>> message = '''interpreter\\n... prompt'''",
  },
  {
    language: 'ruby',
    text: 'Ruby',
    code: '# The Greeter class\\nclass Greeter\\n  def initialize(name)\\n    @name = name.capitalize\\n  end\\n\\n  def salute\\n    puts "Hello #{@name}!"\\n  end\\nend\\n\\ng = Greeter.new("world")\\ng.salute',
  },
  {
    language: 'solidity',
    text: 'Solidity',
    code: '// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.10;\\n\\ncontract Primitives {\\n    bool public boo = true;\\n\\n    uint8 public u8 = 1;\\n    uint public u256 = 456;\\n    uint public u = 123; // uint is an alias for uint256\\n\\n    int8 public i8 = -1;\\n    int public i256 = 456;\\n    int public i = -123; // int is same as int256\\n\\n    // minimum and maximum of int\\n    int public minInt = type(int).min;\\n    int public maxInt = type(int).max;\\n\\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\\n\\n    bytes1 a = 0xb5; //  [10110101]\\n    bytes1 b = 0x56; //  [01010110]\\n\\n    // Default values\\n    // Unassigned variables have a default value\\n    bool public defaultBoo; // false\\n    uint public defaultUint; // 0\\n    int public defaultInt; // 0\\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\\n}',
  },
  {
    language: 'sql',
    text: 'Sql',
    code: 'CREATE TABLE "topic" (\\n    "id" serial NOT NULL PRIMARY KEY,\\n    "forum_id" integer NOT NULL,\\n    "subject" varchar(255) NOT NULL\\n);\\nALTER TABLE "topic"\\nADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")\\nREFERENCES "forum" ("id");\\n\\n-- Initials\\ninsert into "topic" ("forum_id", "subject")\\nvalues (2, \\'D\\'\\'artagnian\\');',
  },
  {
    language: 'tsx',
    text: 'Tsx',
    code: 'import React from \\'react\\';\\nimport { Button, Tag, Space } from \\'@oceanbase/design\\';\\nimport { ProList } from \\'@oceanbase/ui\\';\\n\\nconst dataSource = [\\n  {\\n    name: \\'OceanBase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Database\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Cloud\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'Oceanbase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n];\\n\\nexport default () => (\\n  <ProList<any>\\n    toolBarRender={() => {\\n      return [\\n        <Button key="add" type="primary">\\n          \u65B0\u5EFA\\n        </Button>,\\n      ];\\n    }}\\n    onRow={(record: any) => {\\n      return {\\n        onMouseEnter: () => {\\n          console.log(record);\\n        },\\n        onClick: () => {\\n          console.log(record);\\n        },\\n      };\\n    }}\\n    rowKey="name"\\n    headerTitle="\u57FA\u7840\u5217\u8868"\\n    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"\\n    dataSource={dataSource}\\n    showActions="hover"\\n    showExtra="hover"\\n    metas={{\\n      title: {\\n        dataIndex: \\'name\\',\\n      },\\n      avatar: {\\n        dataIndex: \\'image\\',\\n      },\\n      description: {\\n        dataIndex: \\'desc\\',\\n      },\\n      subTitle: {\\n        render: () => {\\n          return (\\n            <Space size={0}>\\n              <Tag color="blue">OceanBase Design</Tag>\\n              <Tag color="#5BD8A6">Oceanbase Design</Tag>\\n            </Space>\\n          );\\n        },\\n      },\\n      actions: {\\n        render: (text, row) => [\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\\n            \u94FE\u8DEF\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\\n            \u62A5\u8B66\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\\n            \u67E5\u770B\\n          </a>,\\n        ],\\n      },\\n    }}\\n  />\\n);',
  },
  {
    language: 'typescript',
    text: 'Typescript',
    code: 'class MyClass {\\n  public static myValue: string;\\n  constructor(init: string) {\\n    this.myValue = init;\\n  }\\n}\\nimport fs = require("fs");\\nmodule MyModule {\\n  export interface MyInterface extends Other {\\n    myProperty: any;\\n  }\\n}\\ndeclare magicNumber number;\\nmyArray.forEach(() => { }); // fat arrow syntax',
  },
  {
    language: 'xml',
    text: 'Xml',
    code: '<!DOCTYPE html>\\n<title>Title</title>\\n\\n<style>body {width: 500px;}</style>\\n\\n<script type="application/javascript">\\n  function $init() {return true;}\\n<\/script>\\n\\n<body>\\n  <p checked class="title" id=\\'title\\'>Title</p>\\n  <!-- here goes the rest of the page -->\\n</body>',
  },
  {
    language: 'yaml',
    text: 'Yaml',
    code: '---\\n# comment\\nstring_1: "Bar"\\nstring_2: \\'bar\\'\\nstring_3: bar\\ninline_keys_ignored: sompath/name/file.jpg\\nkeywords_in_yaml:\\n  - true\\n  - false\\n  - TRUE\\n  - FALSE\\n  - 21\\n  - 21.0\\n  - !!str 123\\n"quoted_key": &foobar\\n  bar: foo\\n  foo:\\n  "foo": bar\\n\\nreference: *foobar\\n\\nmultiline_1: |\\n  Multiline\\n  String\\nmultiline_2: >\\n  Multiline\\n  String\\nmultiline_3: "\\n  Multiline string\\n  "\\n\\nansible_variables: "foo {{variable}}"\\n\\narray_nested:\\n- a\\n- b: 1\\n  c: 2\\n- b\\n- comment',
  },
];

export default configs;
`},23384:function(c,a){a.Z=`import React from 'react';
import { Select, Space, Switch } from '@oceanbase/design';
import { Highlight } from '@oceanbase/ui';

const languages = {
  // BASH
  bash: {
    // Source
    source: \`
 #!/bin/bash
 
 ###### CONFIG
 ACCEPTED_HOSTS="/root/.hag_accepted.conf"
 BE_VERBOSE=false
 
 if [ "$UID" -ne 0 ]
 then
   echo "Superuser rights required"
   exit 2
 fi
 
 genApacheConf(){
   echo -e "# Host \\\${HOME_DIR}$1/$2 :"
 }
 
 echo '"quoted"' | tr -d \\\\/" > text.txt
     \`.trim(),

    // Target
    target: \`
 #!/bin/bash
 
 ###### CONFIG
 ACCEPTED_HOSTS="/root/.backup_accepted.conf"
 BE_VERBOSE=true
 
 if [ "$UID" -ne 0 ]
 then
   echo "Superuser rights required but not get"
   exit 2
 fi
 
 genApacheConf(){
   echo -e "# Host \\\${HOME_DIR}$1/$2 :"
 }
 
 echo '"quoted"' | tr -d \\\\/" > backup.txt
     \`.trim(),
  },

  // JSON
  json: {
    // Source
    source: \`
 {
   "name": "@oceanbase/design",
   "description": "The Design System of OceanBase",
   "version": "1.0.0",
   "unpkg": "dist/design.min.js",
   "dumiAssets": "assets.json",
   "homepage": "https://github.com/oceanbase/oceanbase-design",
   "scripts": {
     "start": "npm run dev",
     "build": "npm run build:lib && npm run build:umd && npm run build:less",
     "build:lib": "dumi build",
     "build:umd": "webpack-cli",
     "build:less": "node scripts/gen_less_entry",
     "test:ci": "dumi test --runInBand --detectOpenHandles"
   }
 }
     \`.trim(),
    // Target
    target: \`
 {
   "name": "@oceanbase/design",
   "description": "The Design System of OceanBase",
   "version": "2.0.0",
   "main": "lib/index.js",
   "unpkg": "dist/design.min.js",
   "scripts": {
     "start": "npm run dev",
     "dev": "dumi dev",
     "build": "npm run build:lib && npm run build:umd && npm run build:less",
     "build:umd": "webpack-cli",
     "test": "dumi test",
     "test:up": "dumi test --runInBand --updateSnapshot"
   }
 }
     \`.trim(),
  },

  // TYPESCRIPT
  typescript: {
    // Source
    source: \`
 interface MyComponentProps {
   value: string;
   onChange: (value: string) => void;
 }
 
 const MyComponentProps = (props: MyComponentProps) => {
   const { value, onChange } = props;
   return (
     <input
       value={value}
       onChange={e => onChange(e.target.value)}
     />
   );
 };
     \`.trim(),

    // Target
    target: \`
 interface MyComponentProps {
   value?: string;
   onChange?: (value: string) => void;
 }
 
 const MyComponentProps = ({ value, onChange }: MyComponentProps) => {
   return (
     <input
       value={value}
       onChange={e => {
         onChange?.(e.target.value);
       }}
     />
   );
 };
     \`.trim(),
  },

  // JAVASCRIPT
  javascript: {
    // Source
    source: \`
 function warning(...args) {
   console.error(...args);
 }
 
 warning(\\\`[WARN]:
 You are using full version of @oceanbase/design. Please config TreeShaking to remove additional content.
 \\\`);
     \`.trim(),

    // Target
    target: \`
 function warning(...args) {
   console.error('[WARN]:', '\\\\n', ...args);
 }
 
 warning('You are using full version of @oceanbase/design. Please config TreeShaking to remove additional content.');
     \`.trim(),
  },
};

export default () => {
  const [source, setSource] = React.useState(true);
  const [target, setTarget] = React.useState(true);
  const [light, setLight] = React.useState(true);
  const [split, setSplit] = React.useState(true);
  const [language, setLanguage] = React.useState('json');
  const [offset, setOffset] = React.useState(false);

  const codes = languages[language];

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Select
          style={{ width: 150 }}
          value={language}
          options={Object.keys(languages).map(lang => ({ label: lang, value: lang }))}
          onChange={newLang => {
            setLanguage(newLang);
          }}
        />
        <Switch
          checked={split}
          onChange={() => {
            setSplit(!split);
          }}
          checkedChildren="split"
          unCheckedChildren="split"
        />
        <Switch
          checked={light}
          onChange={() => {
            setLight(!light);
          }}
          checkedChildren="light"
          unCheckedChildren="light"
        />
        <Switch
          checked={source}
          onChange={() => {
            setSource(!source);
          }}
          checkedChildren="source"
          unCheckedChildren="source"
        />
        <Switch
          checked={target}
          onChange={() => {
            setTarget(!target);
          }}
          checkedChildren="target"
          unCheckedChildren="target"
        />
        <Switch
          checked={offset}
          onChange={() => {
            setOffset(!offset);
          }}
          checkedChildren="startRowIndex"
          unCheckedChildren="startRowIndex"
        />
      </Space>

      <Highlight.Diff
        split={split}
        language={language as 'json'}
        source={source ? codes.source : null}
        target={target ? codes.target : null}
        theme={light ? 'light' : 'dark'}
        // startRowIndex \u53EF\u4EE5\u7EDF\u4E00\u6307\u5B9A\u4E3A number\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7number[] \u6307\u5B9A\u5DE6\u53F3\u4E24\u8FB9\u7684\u8D77\u59CB\u884C\u53F7
        startRowIndex={offset ? [93, 103] : undefined}
      />
    </Space>
  );
};
`},72026:function(c,a){a.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight innerHTML theme="dark">
    {\`<pre style="padding: 0; margin:0;"><code>
     public class HelloWorld {
       public static void main(String[] args) {
         System.out.println("Hello World!");
       }
     }
   </code></pre>
   <pre style="padding: 0; margin:0;"><code>
     public class HelloWorld2 {
       public static void main(String[] args) {
         System.out.println("Hello World!");
       }
     }
   </code></pre>\`}
  </Highlight>
);
`},1063:function(c,a){a.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight
    language="json"
    onCopyChange={value => {
      console.log('value', value);
    }}
  >
    {{
      name: 'OceanBase Design',
      description: 'The Design System of OceanBase',
      versions: ['1.0.0', '2.0.0', '2.5.1'],
    }}
  </Highlight>
);
`},46881:function(c,a){a.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight lineNumber={true}>
    {\`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }\`}
  </Highlight>
);
`},97842:function(c,a){a.Z=`import React, { useState } from 'react';
import { Select, Space } from '@oceanbase/design';
import { Highlight } from '@oceanbase/ui';
import configs from './config';

const DEFAULT_LANGUAGE = 'bash';
const DEFAULT_THEME = 'light';
const DEFAULT_LINENUMBER = 'false';
const { Option } = Select;

export default () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [lineNumberStatus, setLineNumberStatus] = useState(DEFAULT_LINENUMBER);
  const code = configs.find(config => config.language === language).code || '';

  return (
    <div>
      <Space>
        \u8BED\u8A00\u9009\u62E9:
        <Select
          defaultValue={DEFAULT_LANGUAGE}
          style={{ width: 120 }}
          onChange={value => setLanguage(value)}
        >
          {configs.map(config => {
            return (
              <Option key={config.language} value={config.language}>
                {config.text}
              </Option>
            );
          })}
        </Select>
        \u4E3B\u9898\u9009\u62E9:
        <Select
          defaultValue={DEFAULT_THEME}
          style={{ width: 120 }}
          onChange={value => setTheme(value)}
        >
          <Option value="light">\u767D\u8272\u4E3B\u9898</Option>
          <Option value="dark">\u9ED1\u8272\u4E3B\u9898</Option>
        </Select>
        \u5C55\u793A\u884C\u53F7:
        <Select
          defaultValue={DEFAULT_LINENUMBER}
          style={{ width: 120 }}
          onChange={value => setLineNumberStatus(value)}
        >
          <Option value="false">\u4E0D\u5C55\u793A</Option>
          <Option value="true">\u5C55\u793A</Option>
        </Select>
      </Space>
      <div style={{ height: 400, width: '100%', overflowY: 'scroll', marginBlockStart: '16px' }}>
        <Highlight
          language={language as 'json'}
          theme={theme}
          height={400}
          lineNumber={lineNumberStatus != DEFAULT_LINENUMBER}
        >
          {code}
        </Highlight>
      </div>
    </div>
  );
};
`},78664:function(c,a){a.Z=`.icon-container {
  display: inline-block;
  i {
    margin-left: 5px;
  }
}
`},15599:function(c,a){a.Z=`import React from 'react';
import { IconFont } from '@oceanbase/ui';
import './basic.less';

export default () => {
  return (
    <div className="icon-container">
      <IconFont type="icontiaochu" />
      <IconFont type="iconinsert" />
      <IconFont type="iconlock" />
      <IconFont type="iconhuabanbeifen1" />
      <IconFont type="iconcompile" />
      <IconFont type="iconPL" />
      <IconFont type="iconSQL" />
      <IconFont type="iconmysql" />
      <IconFont type="iconoracle" />
      <IconFont type="iconcommand" />
      <IconFont type="iconsign" />
      <IconFont type="iconsignfill" />
      <IconFont type="icontrigger" />
      <IconFont type="iconsynonym" />
      <IconFont type="icontypeobject" />
      <IconFont type="iconField-number" />
      <IconFont type="iconField-String" />
      <IconFont type="iconFunction" />
      <IconFont type="iconField-time" />
      <IconFont type="iconPartition" />
      <IconFont type="iconindex" />
      <IconFont type="iconStoredprocedure" />
      <IconFont type="iconField-Binary" />
      <IconFont type="iconConsole-SQL" />
    </div>
  );
};
`},73861:function(c,a){a.Z=`import React from 'react';
import { Radio, TreeSelect } from '@oceanbase/design';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormTreeSelect,
} from '@oceanbase/ui';
import dayjs from 'dayjs';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={e => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          sex: 'man',
          name: 'Jack',
          range: [20, 80],
          slider: 20,
          date: '2020-08-19',
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async values => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="\u6027\u522B"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '\u7537',
            woman: '\u5973',
          }}
        />
        <ProFormSelect
          name="region"
          label="\u5730\u533A"
          mode="multiple"
          valueEnum={{
            beijing: '\u5317\u4EAC',
            shanghai: '\u4E0A\u6D77',
            hangzhou: '\u676D\u5DDE',
            long: '\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u7528\u6765\u6D4B\u8BD5\u6EA2\u51FA\u7684\u9879\u76EE',
          }}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
        <ProFormTreeSelect
          initialValue={['0-0', '0-1']}
          label="\u6811\u5F62\u4E0B\u62C9\u9009\u62E9\u5668"
          fieldProps={{
            fieldNames: {
              label: 'title',
            },
            treeData,
            treeCheckable: true,
            showCheckedStrategy: TreeSelect.SHOW_PARENT,
            placeholder: 'Please select',
          }}
          name="treeSelect"
        />
        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: '\u6D59\u6C5F',
              children: [
                {
                  value: 'hangzhou',
                  label: '\u676D\u5DDE',
                  children: [
                    {
                      value: 'xihu',
                      label: '\u897F\u6E56',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="area"
          label="\u533A\u57DF"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
        />
        <ProFormSwitch name="open" label="\u5F00\u5173" />
        <ProFormDigit name="count" label="\u6570\u91CF" />
        <ProFormSlider name="range" label="\u8303\u56F4" range />
        <ProFormSlider name="slider" label="\u8303\u56F4" />
        <ProFormText name="name" label="\u540D\u79F0" />
        <ProFormDatePicker name="date" label="\u65E5\u671F" />
        <ProFormDateRangePicker name="dateRanger" label="\u65E5\u671F\u8303\u56F4" />
        <ProFormDateTimePicker name="datetime" label="\u65E5\u671F\u65F6\u95F4" />
        <ProFormDateTimeRangePicker name="datetimeRanger" label="\u65E5\u671F\u65F6\u95F4\u8303\u56F4" />
        <ProFormTimePicker name="time" label="\u65F6\u95F4" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="\u65F6\u95F4\u8303\u56F4" />
        <ProFormFieldSet name="name" label="\u59D3\u540D">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};
`},40597:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
// @ts-ignore
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showActivate, setShowActivate] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const onShowActivateChange = () => {
    setShowActivate(false);
  };

  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`\u6CE8\u518C\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setInitialValues(values);
          setShowActivate(true);
        },
        initialValues,
      }}
      activateFormProps={{
        onFinish: values => {
          message.success(\`\u6FC0\u6D3B\uFF1A\u5BC6\u7801: \${values.password} \u786E\u8BA4\u5BC6\u7801: \${values.confirmPassword}\`);
          setShowActivate(false);
        },
      }}
      showActivate={showActivate}
      onShowActivateChange={onShowActivateChange}
      showLocale={true}
    />
  );
};
`},84784:function(c,a){a.Z=`import React, { useEffect, useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [authCodeImg, setAuthCodeImg] = useState('');

  const imgs = [
    'https://img.alicdn.com/imgextra/i4/O1CN014Ae3e51fWSZa18uAm_!!6000000004014-2-tps-147-66.png',
    'https://img.alicdn.com/imgextra/i2/O1CN0183Q75f1DhAal3Fxi1_!!6000000000247-2-tps-151-70.png',
  ];
  const loadAuthCodeImg = () => {
    setAuthCodeImg(authCodeImg.endsWith('147-66.png') ? imgs[1] : imgs[0]);
  };

  useEffect(() => {
    loadAuthCodeImg();
  }, []);

  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      loginProps={{
        onFinish: values => {
          message.success(
            \`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password} \u9A8C\u8BC1\u7801\uFF1A\${values.authCode}\`
          );
        },
      }}
      showLocale={true}
      showAuthCode={true}
      authCodeImg={authCodeImg}
      onAuthCodeImgChange={loadAuthCodeImg}
    />
  );
};
`},55979:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`\u6CE8\u518C\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},82088:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*qUTHQJTYAuEAAAAAAAAAAAAADvSFAQ/original"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`\u6CE8\u518C\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},78243:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      board="\u9876\u90E8\u516C\u544A"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`\u6CE8\u518C\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},86605:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*1G0OQrJI2KYAAAAAAAAAAAAADvSFAQ/original"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`\u6CE8\u518C\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
      // enable mobile mode
      isMobile={true}
      style={{
        // Mock mobile width
        width: 375,
      }}
    />
  );
};
`},5862:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`\u6CE8\u518C\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
        },
      }}
      otherLoginProps={{
        onFinish: values => {
          message.success(\`\u767B\u5F55\uFF1A\u7528\u6237\u540D: \${''} \u5BC6\u7801: \${''}\`);
        },
      }}
      showOtherLoginButton={true}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},83946:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      alertProps={{
        message: '\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165',
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`\u7528\u6237\u540D: \${values.username} \u5BC6\u7801: \${values.password}\`);
        },
      }}
      showLocale={true}
    />
  );
};
`},4402:function(c,a){a.Z=`import React from 'react';
import { Lottie } from '@oceanbase/ui';

export default () => {
  return (
    <Lottie
      path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
      style={{
        height: 200,
      }}
    />
  );
};
`},57097:function(c,a){a.Z=`import React, { useState, useRef } from 'react';
import { Button, Space } from '@oceanbase/design';
import { PauseCircleOutlined, PlayCircleFilled } from '@oceanbase/icons';
import { Lottie } from '@oceanbase/ui';
import { LottieRef } from '@oceanbase/ui/es/Lottie';

export default () => {
  const ref = useRef<LottieRef>();

  const [play, setPlay] = useState(true);
  return (
    <div>
      <Space>
        {play ? (
          <Button
            icon={<PauseCircleOutlined />}
            onClick={() => {
              setPlay(false);
              ref.current?.animation?.pause();
            }}
          >
            Pause
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<PlayCircleFilled />}
            onClick={() => {
              setPlay(true);
              ref.current?.animation?.play();
            }}
          >
            Play
          </Button>
        )}
      </Space>
      <div>
        <Lottie
          ref={ref}
          path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
          style={{
            height: 200,
          }}
        />
      </div>
    </div>
  );
};
`},33490:function(c,a){a.Z=`import React, { useState } from 'react';
import { Form, Radio } from '@oceanbase/design';
import { Lottie } from '@oceanbase/ui';

export default () => {
  const [speed, setSpeed] = useState(1);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="speed">
          <Radio.Group
            value={speed}
            onChange={e => {
              setSpeed(e.target.value);
            }}
          >
            <Radio.Button value={0.5}>0.5</Radio.Button>
            <Radio.Button value={1}>1</Radio.Button>
            <Radio.Button value={2}>2</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Lottie
        path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
        speed={speed}
        style={{
          height: 200,
        }}
      />
    </div>
  );
};
`},16635:function(c,a){a.Z=`import React from 'react';
import { Layout } from '@oceanbase/design';
import { NavMenu } from '@oceanbase/ui';
import './style.less';

const { Sider } = Layout;

export default () => {
  const menuList = [
    {
      key: 'cluster',
      title: 'ClusterList',
      link: [
        '/components/nav-menu',
        // \u652F\u6301\u5339\u914D id
        '/components/nav-menu/:id',
        // \u652F\u6301\u5339\u914D id\uFF0C\u5E76\u4E3A id \u8BBE\u7F6E\u683C\u5F0F
        '/components/nav-menu/:id([0-9]+)',
        // \u652F\u6301\u5339\u914D\u5177\u4F53\u7684 id \u503C
        '/components/nav-menu/2',
      ],
      id: '',
      children: [
        {
          key: 'clusterWorkbench',
          title: 'ClusterWorkbench',
          link: '/components/nav-menu/123/workbench',
          disabled: true,
          id: '',
        },
        {
          key: 'tenantList',
          title: 'TenantManagement',
          link: '/components/nav-menu/123/tenantList',
          disabled: false,
          id: '',
          children: [
            {
              key: 'tenantWorkbench',
              title: 'TenantWorkbench',
              link: '/components/nav-menu/123/tenant/123/workbench',
              disabled: false,
              id: '',
            },

            {
              key: 'tenantDatabase',
              title: 'DatabaseManagement',
              link: '/components/nav-menu/123/tenant/123/database',
              disabled: false,
              id: '',
            },
          ],
        },
        {
          key: 'clusterMonitor',
          title: 'PerformanceMonitoring',
          link: '/components/nav-menu',
          disabled: false,
          id: '',
        },
        {
          key: 'clusterBackup',
          title: 'BackupAndRestoration',
          link: '/components/nav-menu',
          disabled: false,
          id: '',
        },
      ],
    },

    {
      key: 'fee',
      title: 'Fees',
      link: \`/charge\`,
      disabled: false,
      id: '',
    },

    {
      key: 'operationEvent',
      title: 'HistoricalEvents',
      link: \`/operationEvent\`,
      disabled: false,
      id: '',
    },
  ];

  return (
    <Layout style={{ width: 225, paddingBottom: 10 }}>
      <Sider theme="light" className="layoutSider">
        <NavMenu menuList={menuList} />
      </Sider>
    </Layout>
  );
};
`},40273:function(c,a){a.Z=`.layoutSider {
  background-color: transparent !important;

  .ant-layout-sider-children {
    overflow: hidden;
  }
  .ant-menu-item {
    &::after {
      border-right: 2px solid #006aff;
    }
  }
}
`},25490:function(c,a){a.Z=`import React from 'react';
import { Button, Card, Descriptions, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <PageContainer
      ghost={false}
      header={{
        title: '\u9875\u9762\u6807\u9898',
        extra: [
          <Button key="1">\u6B21\u8981\u6309\u94AE</Button>,
          <Button key="2" type="primary">
            \u4E3B\u8981\u6309\u94AE
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '\u4E0B\u62C9\u83DC\u5355',
                  key: '1',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53552',
                  key: '2',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53553',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[<Button>\u91CD\u7F6E</Button>, <Button type="primary">\u63D0\u4EA4</Button>]}
    >
      <Card bordered={false}>
        <Descriptions title="\u57FA\u672C\u4FE1\u606F">
          <Descriptions.Item label="\u521B\u5EFA\u4EBA">\u66F2\u4E3D\u4E3D</Descriptions.Item>
          <Descriptions.Item label="\u7535\u8BDD\u53F7\u7801">1810000000</Descriptions.Item>
          <Descriptions.Item label="\u5730\u5740">\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u5DE5\u4E13\u8DEF</Descriptions.Item>
          <Descriptions.Item label="\u5173\u8054\u8868\u5355">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="\u521B\u5EFA\u65F6\u95F4">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="\u5907\u6CE8">\u8FD9\u662F\u5907\u6CE8</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},74004:function(c,a){a.Z=`import React, { useState } from 'react';
import {
  Button,
  Card,
  Descriptions,
  Dropdown,
  Modal,
  message,
  Table,
  Space,
} from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('\u5237\u65B0\u6210\u529F');
    });
    return promise;
  };

  const dataSource = [
    {
      key: '1',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '2',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '3',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '4',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '5',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '6',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '7',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '8',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '9',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '10',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
  ];

  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <PageContainer
      ghost={true}
      loading={loading}
      header={{
        title: '\u9875\u9762\u6807\u9898',
        onBack: () => {},
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: '\u4E00\u7EA7\u9875\u9762',
            },
            {
              href: '',
              title: '\u4E8C\u7EA7\u9875\u9762',
            },
            {
              title: '\u5F53\u524D\u9875\u9762',
            },
          ],
        },
        extra: [
          <Button
            key="1"
            onClick={() => {
              Modal.confirm({
                title: '\u786E\u5B9A\u8981\u6267\u884C\u5F53\u524D\u4EFB\u52A1\u5417\uFF1F',
                onOk: () => {
                  return mockRequest().then(() => {
                    Modal.success({
                      title: '\u4EFB\u52A1\u63D0\u4EA4\u6210\u529F\uFF01',
                    });
                  });
                },
              });
            }}
          >
            \u6B21\u8981\u6309\u94AE
          </Button>,
          <Button key="2" type="primary">
            \u4E3B\u8981\u6309\u94AE
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '\u4E0B\u62C9\u83DC\u5355',
                  key: '1',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53552',
                  key: '2',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53553',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[<Button>\u91CD\u7F6E</Button>, <Button type="primary">\u63D0\u4EA4</Button>]}
    >
      <Space size={16} direction="vertical">
        <Card bordered={false}>
          <Descriptions>
            <Descriptions.Item label="\u521B\u5EFA\u4EBA">\u66F2\u4E3D\u4E3D</Descriptions.Item>
            <Descriptions.Item label="\u7535\u8BDD\u53F7\u7801">1810000000</Descriptions.Item>
            <Descriptions.Item label="\u5730\u5740">\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u5DE5\u4E13\u8DEF</Descriptions.Item>
            <Descriptions.Item label="\u5173\u8054\u8868\u5355">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="\u521B\u5EFA\u65F6\u95F4">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="\u5907\u6CE8">\u8FD9\u662F\u5907\u6CE8</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          bordered={false}
          tabList={[
            {
              tab: '\u57FA\u672C\u4FE1\u606F',
              key: 'base',
            },
            {
              tab: '\u8BE6\u7EC6\u4FE1\u606F',
              key: 'info',
            },
          ]}
        >
          <Table columns={columns} dataSource={dataSource} />
        </Card>
      </Space>
    </PageContainer>
  );
};
`},93174:function(c,a){a.Z=`import React from 'react';
import { Button, Card, Empty } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      header={{
        title: '\u603B\u89C8',
      }}
    >
      <Card
        bordered={false}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 72px - 24px)',
        }}
      >
        <Empty image={Empty.PRESENTED_IMAGE_COLORED} title="\u521B\u5EFA\u7B2C\u4E00\u4E2A\u96C6\u7FA4">
          <Button type="primary">\u7ACB\u5373\u521B\u5EFA</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
`},56937:function(c,a){a.Z=`import React, { useState } from 'react';
import {
  Button,
  Card,
  DatePicker,
  Descriptions,
  Dropdown,
  Input,
  Radio,
  Select,
  Space,
  TimePicker,
  message,
} from '@oceanbase/design';
import { PageContainer, Ranger } from '@oceanbase/ui';
import { SizeType } from '@oceanbase/design/es/config-provider';
import { EllipsisOutlined, LikeOutlined, CommentOutlined, StarOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>('large');
  const [inputType, setInputType] = useState('search');

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('\u5237\u65B0\u6210\u529F');
    });
  };
  const InputComponent = inputType === 'search' ? Input.Search : Input;

  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: '\u9875\u9762\u6807\u9898',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: '\u4E00\u7EA7\u9875\u9762',
            },
            {
              href: '',
              title: '\u4E8C\u7EA7\u9875\u9762',
            },
            {
              title: '\u5F53\u524D\u9875\u9762',
            },
          ],
        },
        extra: [
          <DatePicker key="1" size={size} placeholder="DatePicker" />,
          <DatePicker.RangePicker key="2" size={size} />,
          <TimePicker key="3" size={size} placeholder="TimePicker" />,
          <InputComponent
            key="4"
            size={size}
            placeholder="placeholder"
            allowClear={true}
            addonAfter={inputType === 'addon' ? 'suffix' : ''}
          />,
          <Select
            key="5"
            size={size}
            defaultValue="large"
            options={[
              { value: 'large', label: 'large' },
              { value: 'middle', label: 'middle' },
              // { value: 'small', label: 'small' },
            ]}
            onChange={value => {
              setSize(value);
            }}
            placeholder="placeholder"
            style={{ width: 100 }}
          />,
          <Radio.Group
            key="6"
            size={size}
            value={inputType}
            onChange={e => {
              setInputType(e.target.value);
            }}
          >
            <Radio.Button value="input">Input</Radio.Button>
            <Radio.Button value="search">Search</Radio.Button>
            <Radio.Button value="addon">Addon</Radio.Button>
          </Radio.Group>,
          <Button key="7" size={size} type="primary">
            \u4E3B\u8981\u6309\u94AE
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '\u4E0B\u62C9\u83DC\u5355',
                  key: '1',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53552',
                  key: '2',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53553',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="8" size={size} style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[
        <Ranger />,
        <Space.Compact>
          <Select
            size={size}
            defaultValue="option1"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
          <DatePicker size={size} />
        </Space.Compact>,
        <Space.Compact>
          <Input size={size} defaultValue="0571" />
          <Input size={size} defaultValue="26888888" />
        </Space.Compact>,
        <Space.Compact>
          <Button size={size} icon={<LikeOutlined />} />
          <Button size={size} icon={<CommentOutlined />} />
          <Button icon={<StarOutlined />} />
        </Space.Compact>,
        <Button size={size}>\u91CD\u7F6E</Button>,
        <Button size={size} type="primary">
          \u63D0\u4EA4
        </Button>,
      ]}
    >
      <Card bordered={false}>
        <Descriptions>
          <Descriptions.Item label="\u521B\u5EFA\u4EBA">\u66F2\u4E3D\u4E3D</Descriptions.Item>
          <Descriptions.Item label="\u7535\u8BDD\u53F7\u7801">1810000000</Descriptions.Item>
          <Descriptions.Item label="\u5730\u5740">\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u5DE5\u4E13\u8DEF</Descriptions.Item>
          <Descriptions.Item label="\u5173\u8054\u8868\u5355">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="\u521B\u5EFA\u65F6\u95F4">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="\u5907\u6CE8">\u8FD9\u662F\u5907\u6CE8</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},74987:function(c,a){a.Z=`import React from 'react';
import { Card, Table } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  const dataSource = [
    {
      key: '1',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '2',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '3',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '4',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '5',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '6',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '7',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '8',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '9',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '10',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
  ];

  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <PageContainer>
      <Card
        bordered={false}
        tabList={[
          {
            tab: '\u57FA\u672C\u4FE1\u606F',
            key: 'base',
          },
          {
            tab: '\u8BE6\u7EC6\u4FE1\u606F',
            key: 'info',
          },
        ]}
      >
        <Table columns={columns} dataSource={dataSource} />
      </Card>
    </PageContainer>
  );
};
`},27217:function(c,a){a.Z=`import React, { useState } from 'react';
import { EllipsisOutlined } from '@oceanbase/icons';
import { Button, Card, Dropdown, Tabs, message } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('\u5237\u65B0\u6210\u529F');
    });
  };
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: '\u9875\u9762\u6807\u9898',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: '\u4E00\u7EA7\u9875\u9762',
            },
            {
              href: '',
              title: '\u4E8C\u7EA7\u9875\u9762',
            },
            {
              title: '\u5F53\u524D\u9875\u9762',
            },
          ],
        },
        extra: [
          <Button key="1">\u6B21\u8981\u6309\u94AE</Button>,
          <Button key="2" type="primary">
            \u4E3B\u8981\u6309\u94AE
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '\u4E0B\u62C9\u83DC\u5355',
                  key: '1',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53552',
                  key: '2',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53553',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
    >
      <Tabs
        items={[
          {
            key: '1',
            label: 'Tab 1',
            children: (
              <Card bordered={false} bodyStyle={{ height: '100vh' }}>
                This is content of Tab 1
              </Card>
            ),
          },
          {
            key: '2',
            label: 'Tab 2',
            children: (
              <Card bordered={false} bodyStyle={{ height: '100vh' }}>
                This is content of Tab 2
              </Card>
            ),
          },
        ]}
        tabBarExtraContent="This is tabBarExtraContent content"
      />
    </PageContainer>
  );
};
`},77760:function(c,a){a.Z=`import React from 'react';
import { PageLoading } from '@oceanbase/ui';

export default () => {
  return <PageLoading />;
};
`},54890:function(c,a){a.Z=`import React from 'react';
import { PageLoading } from '@oceanbase/ui';
import { Card } from '@oceanbase/design';

export default () => {
  return (
    <Card
      title="Card title"
      bodyStyle={{
        height: 400,
      }}
    >
      <PageLoading matchWrapperHeight={true} />
    </Card>
  );
};
`},91737:function(c,a){a.Z=`import React from 'react';
import { Button, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const loading = true;
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: '\u9875\u9762\u6807\u9898',
        reload: {
          spin: loading,
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: '\u4E00\u7EA7\u9875\u9762',
            },
            {
              href: '',
              title: '\u4E8C\u7EA7\u9875\u9762',
            },
            {
              title: '\u5F53\u524D\u9875\u9762',
            },
          ],
        },
        extra: [
          <Button key="1">\u6B21\u8981\u6309\u94AE</Button>,
          <Button key="2" type="primary">
            \u4E3B\u8981\u6309\u94AE
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '\u4E0B\u62C9\u83DC\u5355',
                  key: '1',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53552',
                  key: '2',
                },
                {
                  label: '\u4E0B\u62C9\u83DC\u53553',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[<Button>\u91CD\u7F6E</Button>, <Button type="primary">\u63D0\u4EA4</Button>]}
    />
  );
};
`},35565:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const [passed, setPassed] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(\`\u8868\u5355\u6821\u9A8C\u901A\u8FC7 username\uFF1A\${username}, password\uFF1A\${password}\`);
    });
  };

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item
        name="username"
        label="\u7528\u6237\u540D"
        rules={[{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="\u5BC6\u7801"
        rules={[
          {
            required: true,
            message: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          },
          {
            validator: (rule, value, callback) => {
              if (value && !passed) {
                callback('\u5BC6\u7801\u8BBE\u7F6E\u4E0D\u7B26\u5408\u8981\u6C42');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <Password onValidate={setPassed} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          \u63D0\u4EA4
        </Button>
      </Form.Item>
    </Form>
  );
};
`},9865:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [passed, setPassed] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
  };
  const rules = [
    {
      validate: val => val?.length >= 8,
      message: '\u957F\u5EA6\u81F3\u5C11\u4E3A 8 \u4E2A\u5B57\u7B26',
    },
    {
      validate: val => {
        if (/[a-z]+/.test(val) && /[A-Z]+/.test(val)) {
          return true;
        }
        return false;
      },
      message: '\u5305\u542B\u5C0F\u5199\u5B57\u6BCD(a-z)\u548C\u5927\u5199\u5B57\u6BCD(A-Z)',
    },
    {
      message: '\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u6570\u5B57(0-9)\u6216\u662F\u4E00\u4E2A\u7B26\u53F7',
      validate: val => {
        return /([0-9]|[._+@#$%])+/.test(val);
      },
    },
  ];

  const onFinish = (values: any) => {
    const { password } = values;
    alert(\`\u8868\u5355\u6821\u9A8C\u901A\u8FC7 password\uFF1A\${password}\`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        name="password"
        label="\u5BC6\u7801"
        rules={[
          {
            required: true,
            message: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          },
          {
            validator: (rule, value, callback) => {
              if (value && !passed) {
                callback('\u5BC6\u7801\u8BBE\u7F6E\u4E0D\u7B26\u5408\u8981\u6C42');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <Password
          rules={rules}
          generatePasswordRegex={
            /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\\d._+@#$%]{8,32}$/
          }
          onValidate={setPassed}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          \u63D0\u4EA4
        </Button>
      </Form.Item>
    </Form>
  );
};
`},80216:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const [passed, setPassed] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };

  const rules = [
    {
      validate: val => val?.length >= 8,
      message: '\u957F\u5EA6\u81F3\u5C11\u4E3A 8 \u4E2A\u5B57\u7B26',
    },
    {
      validate: val => {
        if (/[a-z]+/.test(val) && /[A-Z]+/.test(val)) {
          return true;
        }
        return false;
      },
      message: '\u5305\u542B\u5C0F\u5199\u5B57\u6BCD(a-z)\u548C\u5927\u5199\u5B57\u6BCD(A-Z)',
    },
    {
      message: '\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u6570\u5B57(0-9)\u6216\u662F\u4E00\u4E2A\u7B26\u53F7',
      validate: val => {
        return /([0-9]|[._+@#$%])+/.test(val);
      },
    },
  ];

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(\`\u8868\u5355\u6821\u9A8C\u901A\u8FC7 username\uFF1A\${username}, password\uFF1A\${password}\`);
    });
  };

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item
        name="username"
        label="\u7528\u6237\u540D"
        rules={[{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="\u5BC6\u7801"
        rules={[
          {
            required: true,
            message: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          },
          {
            validator: (rule, value, callback) => {
              if (value && !passed) {
                callback('\u5BC6\u7801\u8BBE\u7F6E\u4E0D\u7B26\u5408\u8981\u6C42');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <Password rules={rules} onValidate={setPassed} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          \u63D0\u4EA4
        </Button>
      </Form.Item>
    </Form>
  );
};
`},92216:function(c,a){a.Z=`import React, { useState } from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [passed, setPassed] = useState(true);
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
  };

  const onFinish = (values: any) => {
    const { password } = values;
    alert(\`\u8868\u5355\u6821\u9A8C\u901A\u8FC7 password\uFF1A\${password}\`);
  };
  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        label="\u5BC6\u7801"
        name="password"
        validateTrigger={['onChange', 'onValidate']}
        rules={[
          {
            required: true,
            message: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          },
          {
            validator: (rule, value, callback) => {
              console.log(passed);
              if (value && !passed) {
                callback('\u5BC6\u7801\u8BBE\u7F6E\u4E0D\u7B26\u5408\u8981\u6C42');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <Password
          generatePasswordRegex={
            /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\\d._+@#$%]{8,32}$/
          }
          onValidate={setPassed}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          \u63D0\u4EA4
        </Button>
      </Form.Item>
    </Form>
  );
};
`},78848:function(c,a){a.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: '\u80E1\u5F66\u658C' + i,
      age: 32,
      address: \`\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED\${i}\u53F7\`,
    });
  }

  return (
    <ProTable
      headerTitle="\u9AD8\u7EA7\u8868\u683C"
      cardBordered={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},52718:function(c,a){a.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: '\u80E1\u5F66\u658C' + i,
      age: 32,
      address: \`\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED\${i}\u53F7\`,
    });
  }

  return (
    <ProTable
      headerTitle="\u9AD8\u7EA7\u8868\u683C"
      search={{ filterType: 'light' }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},21160:function(c,a){a.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <Ranger
    selects={[
      Ranger.YESTERDAY,
      Ranger.TODAY,
      Ranger.TOMORROW,
      { name: '\u4ECA\u5E74', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
    ]}
  />
);
`},80111:function(c,a){a.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <Ranger
    defaultValue={[dayjs('2019/05/20'), dayjs('2019/06/20')]}
    selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
  />
);
`},63479:function(c,a){a.Z=`import React from 'react';
import { Space } from '@oceanbase/design';
import { Ranger } from '@oceanbase/ui';

export default () => (
  <Space size={24} direction="vertical">
    <Ranger mode="mini" selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]} />
    <Ranger
      mode="mini"
      quickType="dropdown"
      selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
    />
  </Space>
);
`},49867:function(c,a){a.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';

export default () => {
  const handleChange = range => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <Ranger.QuickPicker
      type="dropdown"
      onChange={handleChange}
      defaultName={Ranger.TODAY.name}
      selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
    />
  );
};
`},66811:function(c,a){a.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';

export default () => (
  <Ranger
    defaultQuickValue={Ranger.TODAY.name}
    selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
  />
);
`},31955:function(c,a){a.Z=`import React from 'react';
import { Form } from '@oceanbase/design';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  const handleChange = ({ range }) => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };
  const [form] = Form.useForm();

  return (
    <Form form={form} onValuesChange={handleChange}>
      <Form.Item name="range" initialValue={[dayjs('2021/01/01'), dayjs('2021/05/01')]}>
        <Ranger
          selects={[
            Ranger.YESTERDAY,
            Ranger.TODAY,
            Ranger.TOMORROW,
            { name: '\u4ECA\u5E74', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
          ]}
        />
      </Form.Item>
    </Form>
  );
};
`},9421:function(c,a){a.Z=`import React from 'react';
import { BackTop } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { ArrowUpOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <div style={{ height: '600vh', padding: 8 }}>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <BackTop>
        <SideTip
          hideable={false}
          buttonStyle={{ opacity: 0.9 }}
          icon={<ArrowUpOutlined />}
          tooltip={{ title: '\u8FD4\u56DE\u9876\u90E8', placement: 'left', mouseEnterDelay: 0.4 }}
        />
      </BackTop>
      <BackTop>
        <SideTip
          hideable={false}
          buttonStyle={{ opacity: 0.9 }}
          position={{ right: 100 }}
          size="small"
          icon={<ArrowUpOutlined />}
          tooltip={{ title: '\u8FD4\u56DE\u9876\u90E8', placement: 'left', mouseEnterDelay: 0.4 }}
        />
      </BackTop>
    </div>
  );
};
`},22485:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      type="primary"
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},95321:function(c,a){a.Z=`import React, { useState } from 'react';
import { Badge, Card, Dropdown, Progress, Table } from '@oceanbase/design';
import type { PresetStatusColorType } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { FileTextOutlined } from '@oceanbase/icons';
import { findByValue } from '@oceanbase/util';

export const STATUS_LIST = [
  { label: '\u5168\u90E8', badgeStatus: 'default', value: 'all' },
  { label: '\u5173\u95ED', badgeStatus: 'default', value: 'close' },
  { label: '\u8FD0\u884C\u4E2D', badgeStatus: 'processing', value: 'running' },
  { label: '\u5DF2\u4E0A\u7EBF', badgeStatus: 'success', value: 'online' },
  { label: '\u5F02\u5E38', badgeStatus: 'error', value: 'error' },
];
export default () => {
  const [open, setOpen] = useState(false);

  const handleVisbileChange = isVisible => {
    setOpen(isVisible);
  };

  const columns = [
    {
      title: '\u4EFB\u52A1\u540D\u79F0',
      dataIndex: 'name',
      width: 80,
    },
    {
      title: '\u72B6\u6001',
      dataIndex: 'status',
      initialValue: 'all',
      width: 100,
      render: text => {
        const { label = '\u5168\u90E8', badgeStatus = 'default' } = findByValue(STATUS_LIST, text) || {};
        return <Badge status={badgeStatus as PresetStatusColorType} text={label} />;
      },
    },

    {
      title: '\u8FDB\u5EA6',
      key: 'progress',
      dataIndex: 'progress',
      render: (text, record) => {
        return (
          <Progress
            percent={record.progress}
            status={record.status !== 'error' ? 'active' : 'exception'}
          />
        );
      },
      width: 200,
    },
    {
      title: '\u66F4\u65B0\u65F6\u95F4',
      key: 'since2',
      width: 120,
      dataIndex: 'createdAt',
      valueType: 'date',
    },
  ];

  const tableListDataSource = [];

  const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
  };
  // success exception normal active

  for (let i = 0; i < 6; i += 1) {
    tableListDataSource.push({
      key: i,
      name: \`TradeCode \${i}\`,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      updatedAt: Date.now() - Math.floor(Math.random() * 1000),
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
      money: Math.floor(Math.random() * 2000) * i,
      progress: Math.ceil(Math.random() * 100) + 1,
    });
  }

  const table = (
    <Card>
      <p style={{ fontSize: 16, fontWeight: 'bold' }}>\u5F53\u524D\u5171\u6709 6 \u4E2A\u4EFB\u52A1\u6B63\u5728\u8FDB\u884C\u4E2D</p>
      <Table columns={columns} rowKey="key" dataSource={tableListDataSource} pagination={false} />
    </Card>
  );
  return (
    <Dropdown
      overlay={table}
      open={open}
      placement="topRight"
      trigger={['hover', 'click']}
      onVisibleChange={handleVisbileChange}
      getPopupContainer={() => document.getElementById('content')}
      overlayStyle={{ paddingInlineEnd: 56, width: 720 }}
    >
      <SideTip
        type="primary"
        icon={<FileTextOutlined />}
        badge={{
          count: 3,
        }}
        id="content"
        open={open}
      />
    </Dropdown>
  );
};
`},95652:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { EditOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      disabled
      icon={<EditOutlined />}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},20080:function(c,a){a.Z=`import React from 'react';
import { SideTip } from '@oceanbase/ui';
import { HeartOutlined, HeartTwoTone } from '@oceanbase/icons';

export default () => {
  return (
    <>
      <SideTip
        icon={<HeartTwoTone twoToneColor="#eb2f96" />}
        id="loading"
        loading
        position={{
          right: 100,
        }}
      />
      <SideTip type="primary" icon={<HeartOutlined />} id="loading-primary" loading />
    </>
  );
};
`},48640:function(c,a){a.Z=`import React, { useState } from 'react';
import { Modal } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { PlusOutlined } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const showModal = isOpen => {
    if (isOpen === undefined) {
      setOpen(!open);
    } else {
      setOpen(isOpen);
    }
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <SideTip type="primary" icon={<PlusOutlined />} onClick={showModal} open={open} id="modal" />
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},6004:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      icon={<CloudUploadOutlined />}
      hideable={false}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},96619:function(c,a){a.Z=`import React, { useState } from 'react';
import { Dropdown, Menu } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { SettingFilled } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);
  const handleVisibleChange = isOpen => {
    setOpen(isOpen);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.oceanbase.com/">
          \u521B\u5EFA\u753B\u5E03
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          \u5BFC\u5165
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.antgroup.com/">
          \u53E6\u5B58\u4E3A
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      open={open}
      placement="topRight"
      trigger={['hover']}
      onVisibleChange={handleVisibleChange}
      onOpenChange={handleVisibleChange}
      getPopupContainer={() => document.getElementById('dropdown')}
      overlayStyle={{ paddingInlineEnd: 56 }}
    >
      <SideTip icon={<SettingFilled />} open={open} id="dropdown" />
    </Dropdown>
  );
};
`},70979:function(c,a){a.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const handleVisibleChange = () => {
    message.success('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
    setOpen(!open);
  };
  return (
    <SideTip
      type="primary"
      size="small"
      loading
      open={open}
      icon={<CloudUploadOutlined />}
      onClick={handleVisibleChange}
    />
  );
};
`},70162:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      type="primary"
      tooltip={{
        title: 'ToolTip \u63D0\u793A',
      }}
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},38114:function(c,a){a.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const handleChange = checked => {
    console.log(checked);
  };

  return (
    <TagSelect.Item value="tag3" onChange={handleChange}>
      \u672A\u9009\u4E2D\u9879
    </TagSelect.Item>
  );
};
`},7874:function(c,a){a.Z=`import React, { useState } from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: '\u672A\u9009\u4E2D\u9009\u9879',
      value: 1,
    },
    {
      label: '\u672A\u9009\u4E2D\u9009\u9879',
      value: 2,
    },
    {
      label: '\u672A\u9009\u4E2D\u9009\u9879',
      value: 3,
    },
  ];
  const [checked, setChecked] = useState();
  const handleChange = v => {
    setChecked(v);
  };

  return (
    <TagSelect.Group
      title="\u6211\u662F\u4E00\u4E2A\u6807\u9898"
      options={option}
      onChange={handleChange}
      value={checked}
    />
  );
};
`},46506:function(c,a){a.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  return (
    <div>
      <TagSelect.Item
        cover={
          'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
        }
      />
      <TagSelect.Item
        cover={
          <img
            height={30}
            width={40}
            src={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        }
      />
    </div>
  );
};
`},31407:function(c,a){a.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 1,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 2,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 3,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 4,
    },
  ];

  return (
    <div>
      <TagSelect.Group title="\u9ED8\u8BA4" options={option} multiple />
      <TagSelect.Group title="\u9009\u4E2D" defaultValue={[1]} multiple>
        <TagSelect.Item value={1}>\u5DF2\u9009\u4E2D\u9879</TagSelect.Item>
        <TagSelect.Item value={2}>\u672A\u9009\u4E2D\u9879</TagSelect.Item>
        <TagSelect.Item value={3}>\u672A\u9009\u4E2D\u9879</TagSelect.Item>
        <TagSelect.Item value={4}>\u672A\u9009\u4E2D\u9879</TagSelect.Item>
      </TagSelect.Group>
      <TagSelect.Group title="\u7981\u7528" defaultValue={[2, 4]} disabled multiple>
        <TagSelect.Item value={1}>\u7981\u7528\u9009\u9879</TagSelect.Item>
        <TagSelect.Item value={2}>\u7981\u7528\u9009\u9879</TagSelect.Item>
        <TagSelect.Item value={3}>\u7981\u7528\u9009\u9879</TagSelect.Item>
        <TagSelect.Item value={4}>\u7981\u7528\u9009\u9879</TagSelect.Item>
      </TagSelect.Group>
    </div>
  );
};
`},37972:function(c,a){a.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 1,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 2,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 3,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 4,
    },
  ];

  return (
    <div>
      <TagSelect.Group title="\u9ED8\u8BA4" options={option} />
      <TagSelect.Group title="\u9009\u4E2D" defaultValue={1}>
        <TagSelect.Item value={1}>\u5DF2\u9009\u4E2D\u9879</TagSelect.Item>
        <TagSelect.Item value={2}>\u672A\u9009\u4E2D\u9879</TagSelect.Item>
        <TagSelect.Item value={3}>\u672A\u9009\u4E2D\u9879</TagSelect.Item>
        <TagSelect.Item value={4}>\u672A\u9009\u4E2D\u9879</TagSelect.Item>
      </TagSelect.Group>
      <TagSelect.Group title="\u7981\u7528" defaultValue={4} disabled>
        <TagSelect.Item value={1}>\u7981\u7528\u9009\u9879</TagSelect.Item>
        <TagSelect.Item value={2}>\u7981\u7528\u9009\u9879</TagSelect.Item>
        <TagSelect.Item value={3}>\u7981\u7528\u9009\u9879</TagSelect.Item>
        <TagSelect.Item value={4}>\u7981\u7528\u9009\u9879</TagSelect.Item>
      </TagSelect.Group>
    </div>
  );
};
`},17137:function(c,a){a.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: '\u5DF2\u9009\u4E2D\u9879',
      value: 1,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 2,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 3,
    },
    {
      label: '\u672A\u9009\u4E2D\u9879',
      value: 4,
    },
  ];
  return (
    <div>
      <div>
        <div>\u5355\u9009</div>
        <TagSelect.Group title="small" options={option} size="small" defaultValue={1} />
        <TagSelect.Group title="middle" options={option} size="middle" defaultValue={1} />
        <TagSelect.Group title="large" options={option} size="large" defaultValue={1} />
        <div style={{ marginTop: 20 }}>\u56FE\u7247\u6837\u5F0F</div>
        <TagSelect.Group defaultValue={'tag1'} size="small">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="middle">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="large">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
      </div>
      <div>
        <div style={{ marginTop: 20 }}>\u591A\u9009</div>
        <TagSelect.Group title="small" options={option} size="small" defaultValue={[1]} multiple />
        <TagSelect.Group
          title="middle"
          options={option}
          size="middle"
          defaultValue={[1]}
          multiple
        />
        <TagSelect.Group title="large" options={option} size="large" defaultValue={[1]} multiple />
        <div style={{ marginTop: 20 }}>\u56FE\u7247\u6837\u5F0F</div>
        <TagSelect.Group defaultValue={'tag1'} size="small" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="middle" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="large" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
      </div>
    </div>
  );
};
`},68365:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { TaskGraph } from '@oceanbase/ui';

export default () => {
  const data = {
    nodes: [
      {
        description: 'Empty task',
        id: '4156363',
        name: 'Empty task',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Clean observer',
        id: '4156364',
        name: 'Clean observer',
        status: 'RUNNING',
      },
      {
        description: 'Remove standby cluster',
        id: '4156365',
        name: 'Remove standby cluster',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Unreserve host',
        id: '4156366',
        name: 'Unreserve host',
        status: 'PENDING',
      },
      {
        description: 'Clean observer',
        id: '4156367',
        name: 'Clean observer',
        status: 'FAILED',
      },
      {
        description: 'Delete cluster info',
        id: '4156368',
        name: 'Delete cluster info',
        status: 'PENDING',
      },
      {
        description: 'Stop obagent',
        id: '4156369',
        name: 'Stop obagent',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Prepare delete cluster',
        id: '4156370',
        name: 'Prepare delete cluster',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Stop obagent',
        id: '4156371',
        name: 'Stop obagent',
        status: 'SUCCESSFUL',
      },
    ],
    edges: [
      { source: '4156369', target: '4156363' },
      { source: '4156371', target: '4156363' },
      { source: '4156363', target: '4156364' },
      { source: '4156363', target: '4156367' },
      { source: '4156364', target: '4156368' },
      { source: '4156370', target: '4156365' },
      { source: '4156365', target: '4156369' },
      { source: '4156365', target: '4156371' },
      { source: '4156368', target: '4156366' },
      { source: '4156367', target: '4156368' },
    ],
  };
  return (
    <TaskGraph
      data={data}
      onMenuClick={key => message.success(\`\u4F60\u70B9\u51FB\u4E86 \${key}\`)}
      subTaskLog="This is log"
    />
  );
};
`},25978:function(c,a){a.Z=`import React, { useRef, useState } from 'react';
import { Button, Divider } from '@oceanbase/design';
import { TreeSearch } from '@oceanbase/ui';
import type { Node, TreeSearchRef } from '@oceanbase/ui/es/TreeSearch';

export default () => {
  const ref = useRef<TreeSearchRef>();
  const [values, setValues] = useState<string[]>([]);

  const reset = () => {
    ref.current?.reset();
  };

  const checkAll = () => {
    ref.current?.checkAll();
  };

  const invertSelect = () => {
    ref.current?.invertSelect();
  };

  const handleChange = (nodes: Node[]) => {
    setValues(nodes.map(node => node.value));
  };

  const submit = () => {
    console.log(values);
  };

  return (
    <div>
      <TreeSearch
        ref={ref}
        onChange={handleChange}
        height={400}
        treeData={[
          {
            value: 'hello',
            title: '\u4F60\u597D',
            children: [
              { value: 'world', title: '\u4E16\u754C' },
              { value: 'name', title: '\u540D\u79F0' },
            ],
          },
          {
            value: 'hello1',
            title: '\u4F60\u597D',
            children: [
              { value: 'world', title: '\u4E16\u754C' },
              { value: 'name', title: '\u540D\u79F0' },
            ],
          },
          {
            value: 'hello2',
            title: '\u4F60\u597D',
            children: [
              { value: 'world', title: '\u4E16\u754C' },
              { value: 'name', title: '\u540D\u79F0' },
            ],
          },
          {
            value: 'hello3',
            title: '\u4F60\u597D',
            children: [
              { value: 'world', title: '\u4E16\u754C' },
              { value: 'name', title: '\u540D\u79F0' },
            ],
          },
          {
            value: 'hello4',
            title: '\u4F60\u597D',
            children: [
              { value: 'world', title: '\u4E16\u754C' },
              { value: 'name', title: '\u540D\u79F0' },
            ],
          },
          { value: 'say', title: '\u8BF4' },
        ]}
      />
      <Divider style={{ margin: '12px 0' }} />
      <Button onClick={checkAll} style={{ marginRight: 12 }}>
        \u5168\u9009
      </Button>
      <Button onClick={invertSelect} style={{ marginRight: 12 }}>
        \u53CD\u9009
      </Button>
      <Button onClick={reset} style={{ marginRight: 12 }}>
        \u91CD\u7F6E
      </Button>
      <Button type="primary" onClick={submit}>
        \u786E\u5B9A
      </Button>
    </div>
  );
};
`},8196:function(c,a){a.Z=`import React from 'react';
import {
  DatabaseOutlined,
  FolderViewOutlined,
  ProfileOutlined,
  TableOutlined,
} from '@oceanbase/icons';
import { TreeSearch } from '@oceanbase/ui';
import { DataNode } from '@oceanbase/design/es/tree';
import './style.less';

interface Node extends DataNode {
  extra: React.ReactNode;
  title?: React.ReactNode;
}

const alertMsg = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.stopPropagation();
  alert('test');
};

const treeData = [
  {
    title: 'database1',
    icon: <DatabaseOutlined />,
    children: [
      {
        title: 'Table',
        icon: <TableOutlined />,
        extra: <a onClick={alertMsg}>\u6D4B\u8BD5</a>,
        children: [
          {
            title: 'table1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'table2',
            icon: <ProfileOutlined />,
            extra: <a onClick={alertMsg}>\u6D4B\u8BD5</a>,
          },
        ],
      },
      {
        title: 'View',
        icon: <FolderViewOutlined />,
        children: [
          {
            title: 'view1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'view2',
            icon: <ProfileOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'database2',
    icon: <DatabaseOutlined />,
    children: [
      {
        title: 'Table',
        icon: <TableOutlined />,
        extra: <a onClick={alertMsg}>\u6D4B\u8BD5</a>,
        children: [
          {
            title: 'table1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'table2',
            icon: <ProfileOutlined />,
          },
        ],
      },
      {
        title: 'View',
        icon: <FolderViewOutlined />,
        children: [
          {
            title: 'view1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'view2',
            icon: <ProfileOutlined />,
          },
        ],
      },
    ],
  },
];

export default () => {
  // \u6E32\u67D3title
  const renderTitle = (nodeData: Node) => {
    if (nodeData.extra) {
      return (
        <>
          <span>{nodeData.title}</span>
          <span className="treetitle-extra">{nodeData.extra}</span>
        </>
      );
    }

    return nodeData.title;
  };
  return (
    <TreeSearch
      width={500}
      height={500}
      checkable={false}
      titleRender={renderTitle}
      treeData={treeData}
    />
  );
};
`},15255:function(c,a){a.Z=`.treetitle-extra {
  position: absolute;
  right: 0;
}
`},69162:function(c,a){a.Z=`import React from 'react';
import { TreeSearch } from '@oceanbase/ui';
import type { DataNode } from '@oceanbase/design/es/tree';
import './style.less';

interface Node extends DataNode {
  extra: React.ReactNode;
  title?: React.ReactNode;
}

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = \`\${path}-\${i}\`;
    const treeNode = {
      title: key,
      key,
    } as Node;

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export default () => {
  // \u6E32\u67D3title
  const renderTitle = (nodeData: Node) => {
    if (nodeData.extra) {
      return (
        <>
          <span>{nodeData.title as string}</span>
          <span className="treetitle-extra">{nodeData.extra}</span>
        </>
      );
    }

    return nodeData.title;
  };
  return (
    <div style={{ height: 600 }}>
      <TreeSearch width={500} checkable={false} titleRender={renderTitle} treeData={treeData} />
    </div>
  );
};
`},816:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { Welcome } from '@oceanbase/ui';

export default () => {
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u4E13\u4E1A\u7BA1\u7406\u5E73\u53F0',
      description: '\u4EE5 OB \u4E3A\u6838\u5FC3\u7684\u4E13\u4E1A\u6570\u636E\u5E93\u7BA1\u7406\u5E73\u53F0',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406',
      description: '\u4E3A OB \u63D0\u4F9B\u4ECE\u90E8\u7F72\u3001\u8FD0\u7EF4\u3001\u5347\u7EA7\u5230\u5220\u9664\u7684\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u66F4\u9AD8\u6548\u7387\uFF0C\u66F4\u4F4E\u6210\u672C',
      description: '\u63D0\u9AD8\u7528\u6237\u7BA1\u7406 OB \u6548\u7387\uFF0C\u964D\u4F4E\u4F01\u4E1AIT\u8FD0\u7EF4\u6210\u672C',
    },
  ];
  const steps = [
    {
      title: '\u521B\u5EFA\u96C6\u7FA4',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
    {
      title: '\u521B\u5EFA\u79DF\u6237',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
    {
      title: '\u521B\u5EFA\u6570\u636E\u5E93',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
    {
      title: '\u8FDE\u63A5\u6570\u636E\u5E93',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
    },
  ];
  const helps = [
    {
      title: '\u521B\u5EFA\u65B0\u7684\u96C6\u7FA4',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u521B\u5EFA\u65B0\u7684\u79DF\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u7BA1\u7406\u96C6\u7FA4',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u7BA1\u7406\u79DF\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u4EFB\u52A1',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u544A\u8B66',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u6DFB\u52A0\u65B0\u7528\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u66F4\u591A',
      link: 'https://www.alipay.com',
      isMore: true,
    },
  ];
  return (
    <Welcome
      title="Hi\uFF0C\u6B22\u8FCE\u4F7F\u7528 OceanBase \u4E91\u5E73\u53F0"
      description="OceanBase \u4E91\u5E73\u53F0 (OceanBase Cloud Platform\uFF0COCP) \u662F\u7528\u4E8E\u7BA1\u63A7 OceanBase \u6570\u636E\u5E93\u96C6\u7FA4\u7684\u5E73\u53F0\u3002\u901A\u8FC7 OCP\uFF0C\u60A8\u53EF\u4EE5\u5BF9 OceanBase \u96C6\u7FA4\u8FDB\u884C\u5B89\u88C5\u3001\u90E8\u7F72\u3001\u76D1\u63A7\u3001\u544A\u8B66\u7B49\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u63D0\u4F9B\u9AD8\u6548\u7684\u7BA1\u7406\u670D\u52A1\uFF0C\u4E3A\u60A8\u521B\u9020\u66F4\u591A\u4EF7\u503C\u3002"
      bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
      introduces={introduces}
      steps={steps}
      buttonText="\u521B\u5EFA\u96C6\u7FA4"
      buttonProps={{
        onClick: () => {
          message.success('\u4F60\u70B9\u51FB\u4E86\u6309\u94AE');
        },
      }}
      helps={helps}
    />
  );
};
`},60303:function(c,a){a.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { Welcome } from '@oceanbase/ui';

export default () => {
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u4E13\u4E1A\u7BA1\u7406\u5E73\u53F0',
      description: '\u4EE5 OB \u4E3A\u6838\u5FC3\u7684\u4E13\u4E1A\u6570\u636E\u5E93\u7BA1\u7406\u5E73\u53F0',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406',
      description: '\u4E3A OB \u63D0\u4F9B\u4ECE\u90E8\u7F72\u3001\u8FD0\u7EF4\u3001\u5347\u7EA7\u5230\u5220\u9664\u7684\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '\u66F4\u9AD8\u6548\u7387\uFF0C\u66F4\u4F4E\u6210\u672C',
      description: '\u63D0\u9AD8\u7528\u6237\u7BA1\u7406 OB \u6548\u7387\uFF0C\u964D\u4F4E\u4F01\u4E1AIT\u8FD0\u7EF4\u6210\u672C',
    },
  ];
  const steps = [
    {
      title: '\u521B\u5EFA\u96C6\u7FA4',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
      operations: [
        {
          text: '\u521B\u5EFA\u5E94\u7528\u670D\u52A1',
          onClick: () => {
            console.info('\u6211\u88AB\u70B9\u51FB\u4E86');
          },
        },
      ],
    },
    {
      title: '\u521B\u5EFA\u79DF\u6237',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
      operations: [
        {
          text: '',
          onClick: () => {
            console.info('\u6211\u88AB\u70B9\u51FB\u4E86');
          },
        },
      ],
    },
    {
      title: '\u521B\u5EFA\u6570\u636E\u5E93',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
      operations: [
        {
          text: '\u521B\u5EFA\u5E94\u7528\u670D\u52A1',
          onClick: () => {
            console.info('\u6211\u88AB\u70B9\u51FB\u4E86');
          },
        },
      ],
    },
    {
      title: '\u8FDE\u63A5\u6570\u636E\u5E93',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '\u5728\u79DF\u6237\u5185\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5373\u53EF\u5BF9\u63A5\u5E94\u7528\u3002',
      operations: [
        {
          text: '\u521B\u5EFA\u5E94\u7528\u670D\u52A1',
          onClick: () => {
            console.info('\u6211\u88AB\u70B9\u51FB\u4E86');
          },
        },
      ],
    },
  ];
  const helps = [
    {
      title: '\u521B\u5EFA\u65B0\u7684\u96C6\u7FA4',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u521B\u5EFA\u65B0\u7684\u79DF\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u7BA1\u7406\u96C6\u7FA4',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u7BA1\u7406\u79DF\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u4EFB\u52A1',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u544A\u8B66',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u6DFB\u52A0\u65B0\u7528\u6237',
      link: 'https://www.alipay.com',
    },
    {
      title: '\u67E5\u770B\u66F4\u591A',
      link: 'https://www.alipay.com',
      isMore: true,
    },
  ];
  return (
    <Welcome
      title="Hi\uFF0C\u6B22\u8FCE\u4F7F\u7528 OceanBase \u4E91\u5E73\u53F0"
      description="OceanBase \u4E91\u5E73\u53F0 (OceanBase Cloud Platform\uFF0COCP) \u662F\u7528\u4E8E\u7BA1\u63A7 OceanBase \u6570\u636E\u5E93\u96C6\u7FA4\u7684\u5E73\u53F0\u3002\u901A\u8FC7 OCP\uFF0C\u60A8\u53EF\u4EE5\u5BF9 OceanBase \u96C6\u7FA4\u8FDB\u884C\u5B89\u88C5\u3001\u90E8\u7F72\u3001\u76D1\u63A7\u3001\u544A\u8B66\u7B49\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u63D0\u4F9B\u9AD8\u6548\u7684\u7BA1\u7406\u670D\u52A1\uFF0C\u4E3A\u60A8\u521B\u9020\u66F4\u591A\u4EF7\u503C\u3002"
      bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
      introduces={introduces}
      steps={steps}
      stepType="card"
      buttonText="\u521B\u5EFA\u96C6\u7FA4"
      buttonProps={{
        onClick: () => {
          message.success('\u4F60\u70B9\u51FB\u4E86\u6309\u94AE');
        },
      }}
      helps={helps}
    />
  );
};
`}}]);
