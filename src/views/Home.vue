<template>
    <div id="firstPage" class="first_web">
        <div class="box">
            <div class="header">
                <img src="../assets/images/header.png">
            </div>
            <div class="main">
                <div class="section section1">
                    <div class="net">
                        <div class="net_way">如何配网</div>
                    </div>
                    <div class="net_type">
                        <!-- <router-link to="/wired"> -->
                        <div id="wired" class="wired desc" @click="toPrint('wired')">
                            <img src="../assets/images/wired.png">
                            <span class="list list1">有线配网</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <!-- </router-link> -->
                        <!-- <router-link to="/wireless" -->
                        <div
                            id="wireless"
                            class="wired desc desc_last"
                            @click="toPrint('wireless')"
                        >
                            <img class="wifis" src="../assets/images/wifi.png">
                            <span class="list list1">无线配网</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <!-- </router-link> -->
                    </div>
                </div>
                <div class="section section2">
                    <div class="net">
                        <div class="net_way">其它打印</div>
                    </div>
                    <div class="net_type">
                        <!-- <router-link to="/qq"> -->
                        <div id="qqfile" class="wired desc" @click="toPrint('qq')">
                            <img src="../assets/images/qq.png">
                            <span class="list list2">打印QQ文件</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <!-- </router-link> -->
                        <!-- <router-link to="/wx"> -->
                        <div id="wxfile" class="wired desc" @click="toPrint('wx')">
                            <img class="wx" src="../assets/images/wechat.png">
                            <span class="list list3">打印企业微信文件</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <!-- </router-link> -->
                        <!-- <router-link to="/dd"> -->
                        <div id="ddfile" class="wired desc desc_last" @click="toPrint('dd')">
                            <img src="../assets/images/ding.png">
                            <span class="list list4">打印钉钉文件</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <!-- </router-link> -->
                    </div>
                </div>
                <div class="section section3">
                    <div class="net">
                        <div class="net_way">电脑打印</div>
                    </div>
                    <div class="net_type">
                        <!-- <router-link to="/webprint"> -->
                        <div id="webPrint" class="wired desc" @click="toPrint('webprint')">
                            <img src="../assets/images/website.png">
                            <span class="list list5">如何使用网页打印</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <!-- </router-link> -->
                        <div class="wired desc" @click="toPrint('localprint')">
                            <img src="../assets/images/local.png">
                            <span class="list list4">电脑本地打印</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <div class="wired desc" @click="toPrint('remoteprint')">
                            <img src="../assets/images/remote.png">
                            <span class="list list4">电脑远程打印</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                        <div class="wired desc desc_last" @click="toPrint('macprint')">
                            <img src="../assets/images/mac.png">
                            <span class="list list4">Mac电脑打印</span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-you" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Home',
    components: {},
    methods: {
        // toPrint(current:string):void {
        //     const targetUrl = window.location.href + current
        //     wx.miniProgram.navigateTo({
        //         url: '/pages/web/web?url=' + encodeURIComponent(targetUrl)
        //     })
        // }
    }
}
</script>
<style lang="less" scoped>
html {
  font-size: 16px;
}
.first_web {
  .box {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .header {
      width: 673/16rem;
      height: 213/16rem;
      display: flex;
      margin: 39/16rem;
      img {
        width: 100%;
        border-radius: 13/16rem;
      }
    }
    .main {
      width: 673/16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2rem;
      .section {
        width: 673/16rem;
        margin-bottom: 32/16rem;
        display: flex;
        background: #ffffff;
        border-radius: 13/16rem;
        box-shadow: 0px 3px 20px 0px rgba(171, 185, 197, 0.35);
        .net {
          font-size: 31/16rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }
        .net_type {
          font-size: 28/16rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          .desc {
            width: 460/16rem;
            padding: 37/16rem 0;
            border-bottom: 1/16rem solid #f3f3f3;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
              width: 27/16rem;
              height: 27/16rem;
            }
            .wifis {
              width: 31/16rem;
              height: 24/16rem;
            }
            .wx{
                width: 29/16rem;
                height: 25/16rem;
            }
            .list {
              font-size: 28/16rem;
              color: #333333;
              padding-left: 18/16rem;
            }
            .list1 {
              margin-left: -274/16rem;
            }
            .list2 {
              margin-left: -228/16rem;
            }
            .list3 {
              margin-left: -162/16rem;
            }
            .list4 {
              margin-left: -217/16rem;
            }
            .list5 {
              margin-left: -161/16rem;
            }
          }
          .desc_last {
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>
