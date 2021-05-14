<template>
    <div id="qqfilePage" class="qq_way">
        <div class="wired_page">
            <div class="header">
                <h1 class="title">「如何在电脑本地打印文件」</h1>
            </div>
            <!-- <Installation /> -->
            <div class="main">
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/one.png">
                        <div class="desc">
                            打开工具选择“本地打印”，点击“下一步”；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_01.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/two.png">
                        <div class="desc">
                            选择需要安装打印机对应的“打印云盒”（一次只能安装一个打印云盒），点击“下一步”；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_02.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/three.png">
                        <div class="desc">
                            勾选需要安装的打印机（可多选），点击“立即安装”即可；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_03.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/four.png">
                        <div class="desc">
                            如出现下图提示，则需重启打印机（未出现则跳过此步骤）；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_04.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/five.png">
                        <div class="desc">
                            如出现下图，则是因为有部分打印机需要手动确定型号，搜索时只需搜打印机名称的数字即可，然后点击“立即安装”；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_05.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/six.png">
                        <div class="desc">
                            此时系统会弹出确认弹窗，请点击“是”，否则会导致安装失败；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_06.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/seven.png">
                        <div class="desc">
                            工具会进入自动安装模式，我们只需要耐心等待打印机安装完成即可；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_07.png">
                    </div>
                </div>
                <div class="section">
                    <div class="numdesc">
                        <img class="num" src="../assets/images/eight.png">
                        <div class="desc">
                            打印机安装完成后，可以点击“打印测试页”，如能正常打印则说明安装完成；
                        </div>
                    </div>
                    <div class="border_img">
                        <img src="../assets/images/local_08.png">
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="smallBox">
                    <img class="one" src="../assets/images/tip.png">
                    <p class="large">温馨提示</p>
                    <div class="small">
                        <p class="first">1. 如果遇到安装完成后测试页可以打，文档却不能打印请检查新添加的打印机是否设置成默认打印机，你在打印的时候选择的打印机名称是否为新添加的打印机；</p>
                        <p class="second">2. 如有其他电脑需要使用远程打印，可以点击下方按钮查看操作步骤；</p>
                    </div>
                    <button id="copyButton" class="button" @click="toShare()">分享给其他电脑安装远程打印</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Installation from './Installation.vue'
export default {
    // components: {
    //     Installation
    // },
    methods: {
        // toShare() {
        //     const currentUrl = window.location.href
        //     const targetUrl = currentUrl.substring(0, currentUrl.length - 10) + 'shareprint'
        //     console.log(targetUrl)
        //     wx.miniProgram.navigateTo({
        //         url: '/pages/web/web?url=' + encodeURIComponent(targetUrl)
        //     })
        // }
    }

}
</script>

<style lang="less" scoped>
.qq_way {
  .wired_page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .header {
      width: 673/16rem;
      height: 80/16rem;
      background: #f0faff;
      border-radius: 13/16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 39/16rem;
      .title {
        font-size: 40/16rem;
        font-weight: bold;
      }
    }
    .main {
      margin-top: 63/16rem;
      width: 673/16rem;
      .section {
        width: 673/16rem;
        margin-bottom: 63/16rem;
        .numdesc{
          display: flex;
        .num {
          width: 33/16rem;
          height: 44/16rem;
        }
        .desc {
          white-space: normal;
          font-size: 31/16rem;
          font-weight: bold;
          color: #333333;
          text-align: left;
          margin-left: 10/16rem;
        }
        }
        .border_img {
          margin-top: 35/16rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 673/16rem;
            height: 537/16rem;
          }
        }
      }
    }
    .footer {
    margin-top: 17/16rem;
    margin-bottom: 53/16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .smallBox{
      position: relative;
      width: 673/16rem;
    border: 1/16rem solid #999999;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border-radius: 13/16rem;
      .one {
        width: 107/16rem;
        height: 107/16rem;
        margin-top: 43/16rem;
      }
      .large {
        color: #333333;
        font-size: 31/16rem;
        margin-top: 32/16rem;
        font-weight: bold;
      }
      .small {
        color: #333333;
        font-size: 28/16rem;
        margin-top: -40/16rem;
        margin-left: 37/16rem;
        margin-right: 38/16rem;
        white-space: normal;
        text-align: left;
        font-weight: 400;
      }
      .button {
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 615/16rem;
        height: 100/16rem;
        background: linear-gradient(45deg, #24B8FD 0%, #248AFD 100%);
        border-radius: 13/16rem;
        color: #ffffff;
        font-size: 32/16rem;
        margin-bottom: 29/16rem;
        font-weight: bold;
      }
    }
    }
  }
}
</style>
