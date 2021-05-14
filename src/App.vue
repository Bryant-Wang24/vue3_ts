<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
body,
div {
  margin: 0;
  padding: 0;
  font-style: normal;
  white-space: nowrap;
}

ol,
ul,
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
body {
  color: #000000;
  background: #ffffff;
  text-align: center;
}
a {
  color: #000000;
  text-decoration: none;
}
a:hover {
  color: #ba2636;
  text-decoration: underline;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

/* 媒体查询适配移动端 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 20px;
  }
}
@media screen and (max-width: 926px) {
  html {
    font-size: 17px;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 16px;
  }
}
@media screen and (max-width: 746px) {
  html {
    font-size: 11px;
  }
}

@media screen and (max-width: 500px) {
  html {
    font-size: 9px;
  }
}
@media screen and (max-width: 414px) {
  html {
    font-size: 8.8px;
  }
}
@media screen and (max-width: 375px) {
  html {
    font-size: 8px;
  }
}

@media screen and (max-width: 360px) {
  html {
    font-size: 7.5px;
  }
}
@media screen and (max-width: 320px) {
  html {
    font-size: 6.8px;
  }
}
@media screen and (max-width: 280px) {
  html {
    font-size: 6px;
  }
}
</style>
