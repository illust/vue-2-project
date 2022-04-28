<!-- 产融协同收入 -->
<template>
  <div class="page flex-col">
    <button @click="goNextPage"></button>
    <div class="outer1 flex-col">
      <div class="box1 flex-row">
        <img
          class="icon1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psd4t42jwb9e759qtlfl3op4pwbeldyuva209113cf-7828-41a6-a21d-22e2dd5564c4"
        />
        <img
          class="pic1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psjjxzhq19tomrzfvn89nszfgv7tqhiu90edff617-8770-49e4-a4db-e3ad0fb6b61a"
        />
        <img
          class="icon2"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psf784xhbkjylh9gyc8xtks5ojir9yeowu9ea7810a-c03c-470a-879f-b3958334619d"
        />
        <img
          class="pic2"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps7gg5ia99fqnwqsyurxxhdqqwnqg840ps012e7c67-3e12-46f4-848f-f73505676b9a"
        />
        <div class="group1 flex-col"></div>
        <img
          class="pic3"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps0cfft7rwbhfq7l9p98x3kgamputj7jibcce4ca3cb-d2c6-42cd-a8eb-d446687865f2"
        />
        <div class="group2 flex-col"></div>
        <img
          class="pic4"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps2jgb55c1mebxc1w1f0fhym1p1ug5p6dpd9a4ddf2-9cfa-4f38-8992-9a1a34313c55"
        />
        <div class="group3 flex-col"></div>
        <img
          class="pic5"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8km5gko9mkv6e3dhcjzpciubs7ivtwqpf9c4eb38-8479-442d-96bd-cf180f01f765"
        />
      </div>
      <div class="box2 flex-row">
        <div class="box2 flex-row">
          <div
            class="layer1 flex-col"
            :style="{ background: item.lanhuBg0 }"
            v-for="(item, index) in loopData0"
            :key="index"
          >
            <span class="word1" v-html="item.lanhutext0"></span>
          </div>
        </div>
      </div>
      <div class="box3 flex-col">
        <div class="group4 flex-col">
          <div class="box4 flex-col justify-between">
            <span class="txt1">单位（亿元）</span>
            <img
              class="img1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psearbqb6a2hjgvfscmhlwjjhtm7r6isziu8eee4165-bc4f-4b22-949a-2daed81d62ea"
            />
          </div>
        </div>
      </div>
      <div class="box5 flex-col">
        <div class="layer2 flex-col">
          <div class="mod1 flex-col justify-between">
            <span class="word2">单位（亿元）</span>
            <div class="main1 flex-col"></div>
          </div>
        </div>
      </div>
      <div class="box6 flex-col">
        <div class="wrap1 flex-col">
          <div class="section1 flex-col justify-between">
            <span class="txt2">单位（亿元）</span>
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psydleovxlksk5zxmiiyy4juibmkt0v4pccd0ed122-5975-40c8-9c38-c0346c058cb6"
            />
          </div>
        </div>
      </div>
      <div class="box7 flex-col">
        <div class="layer3 flex-col">
          <div class="layer4 flex-col justify-between">
            <span class="info1">单位（亿元）</span>
            <div class="outer2 flex-col"></div>
          </div>
        </div>
      </div>
      <div class="box8 flex-col">
        <div class="mod2 flex-col">
          <div class="group5 flex-col justify-between">
            <span class="word3">单位（万亿）</span>
            <img
              class="pic6"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psemoknloqwxuenz47enffer1ojcg7ty6i4e057c4c-a8cc-46a2-a6a1-9ab404a01f87"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps8kh3y5wlep8mqfk3qcdpb8lx7r8222rvl95f05fca-4684-44c2-b29f-4d823a437f99) 100% no-repeat',
          lanhutext0: '产融协同收入',
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/pssddcidsh2lasue1sbyq8igk0dji3bdava58bbfa58-43fc-4331-b500-28aa5444bb60) 100% no-repeat',
          lanhutext0: '融融协同规模',
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/psd8czbf4fpyfu7ame4xklceepca4m6ycc05623c55-fef4-47da-bfae-5c63fe31fde3) 100% no-repeat',
          lanhutext0: '管理资产总额',
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/psud822xdnjitvynijhie3oc4rspio4rsr3fae5707-ad05-4d9b-91ea-65d4a7c730ba) 100% no-repeat',
          lanhutext0: '服务主业融资',
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/psgt6p3s4g28rottbbi02v8qfop05tnrjfe75b3edec-baa0-48ea-b950-02d0511628b2) 100% no-repeat',
          lanhutext0: '承保电网资产规模',
        },
      ],
      constants: {},
    };
  },
  methods: {
     goNextPage(){
          this.$router.push("/");
      }
  },
};
</script>
<style src="./common.css" />
<style scoped>
button{
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 100;
}
.page {
  position: relative;
  width: 3840px;
  height: 2160px;
  overflow: hidden;
}

.outer1 {
  z-index: 2;
  height: 2160px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pslrt19ttchalcwp1hw0iuce9yvga5kg9bnfa93a972-8725-4cbd-8bf7-49ed253ac6af) -10px -99px
    no-repeat;
  width: 3840px;
  position: relative;
}

.box1 {
  width: 3710px;
  height: 712px;
  margin: 582px 0 0 70px;
}

.icon1 {
  width: 22px;
  height: 24px;
}

.pic1 {
  width: 704px;
  height: 708px;
  margin: 4px 0 0 -18px;
}

.icon2 {
  width: 22px;
  height: 24px;
  margin-left: 42px;
}

.pic2 {
  width: 704px;
  height: 708px;
  margin: 4px 0 0 -18px;
}

.group1 {
  width: 22px;
  height: 24px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psw5glu1qquyt0ulig3jtqof665lrh5z0d4c78f4ba-a8e7-4a8c-850e-9c1d4f2bc469) -1px
    0px no-repeat;
  margin-left: 43px;
}

.pic3 {
  width: 703px;
  height: 708px;
  margin: 4px 0 0 -18px;
}

.group2 {
  width: 22px;
  height: 24px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psbeshsoy41zivxag1eg84dsra49oir7rgra2d403af-5b36-49fc-bbe3-25a46d02c2e3) -1px
    0px no-repeat;
  margin-left: 44px;
}

.pic4 {
  width: 704px;
  height: 708px;
  margin: 4px 0 0 -18px;
}

.group3 {
  width: 22px;
  height: 24px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psiko51t909z5dsbvtcmjdaqytrb34c0yh233a18f1-96cf-436a-b524-0bd80f95318e) -1px
    0px no-repeat;
  margin-left: 42px;
}

.pic5 {
  width: 704px;
  height: 708px;
  margin: 4px 0 0 -18px;
}

.box2 {
  width: 3624px;
  height: 140px;
  margin: 79px 0 647px 60px;
}

.layer1 {
  height: 140px;
  margin-right: 123px;
  width: 625px;
}

.word1 {
  width: 456px;
  height: 57px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 57px;
  font-family: SourceHanSansCN-Heavy;
  text-align: left;
  line-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  margin: 42px 0 0 142px;
}

/* .word1:last-child{
    margin-left: 100px;
} */

.box3 {
  z-index: 6;
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psg4a0t63drz7t44qc6o6pc8grxqr11a3yl1024b66c-45ef-425e-babd-412565c769df) -5px -6px
    no-repeat;
  width: 708px;
  position: absolute;
  left: 72px;
  top: 585px;
}

.group4 {
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps56n1jf55hdi8t90f37qwbemiepjjkge99682c1b71-7c80-4c27-88a3-8f788a7b6bb2) -12px -13px
    no-repeat;
  width: 708px;
}

.box4 {
  width: 295px;
  height: 657px;
  margin: 52px 0 0 4px;
}

.txt1 {
  width: 151px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-left: 45px;
  display: block;
}

.img1 {
  width: 295px;
  height: 2px;
  margin-top: 627px;
}

.box5 {
  z-index: 28;
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psxyeqeqnc9lbw9b2nde64w5vt9nt3uw346a3249a9-a061-4f62-91d7-2fbaecab3d39) -6px -6px
    no-repeat;
  width: 708px;
  position: absolute;
  left: 823px;
  top: 585px;
}

.layer2 {
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps6in45rqwriqyrr3pl8hgcotuvuyi0chf2df47e9-b680-45b1-a0a2-9434220d26aa) -13px -13px
    no-repeat;
  width: 708px;
}

.mod1 {
  width: 295px;
  height: 657px;
  margin: 52px 0 0 4px;
}

.word2 {
  width: 151px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-left: 44px;
  display: block;
}

.main1 {
  width: 295px;
  height: 2px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps1kwpj52od5lrfgqzbqasdp3oifjpi3rd830b56c-cdc2-4894-a9ee-223a769e8dd4) -1px
    0px no-repeat;
  margin-top: 627px;
}

.box6 {
  z-index: 17;
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps6dwjmnxriexxc7rp5ope7jsnqfxahsvgeb12988c-9463-4b4b-915a-5687630b3319) -5px -6px
    no-repeat;
  width: 708px;
  position: absolute;
  left: 1573px;
  top: 585px;
}

.wrap1 {
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psxg28rquwqkcqsjxf8m931erm5lspqt9189e5702-d132-4749-b873-49931ad65a64) -12px -13px
    no-repeat;
  width: 708px;
}

.section1 {
  width: 295px;
  height: 657px;
  margin: 52px 0 0 4px;
}

.txt2 {
  width: 151px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-left: 45px;
  display: block;
}

.img2 {
  width: 295px;
  height: 2px;
  margin-top: 627px;
}

.box7 {
  z-index: 39;
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psbyrh35i3ol8vpok26ozt089ikty7c6szu9baa6b06-d635-47c4-9b6b-a7fb34f3a166) -6px -6px
    no-repeat;
  width: 708px;
  position: absolute;
  left: 2324px;
  top: 585px;
}

.layer3 {
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psmqyrb3foyd8afr7cf3fxrjo40rjx5o477885df-d420-435e-82d0-b136e025738d) -13px -13px
    no-repeat;
  width: 708px;
}

.layer4 {
  width: 295px;
  height: 657px;
  margin: 52px 0 0 4px;
}

.info1 {
  width: 152px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-left: 44px;
  display: block;
}

.outer2 {
  width: 295px;
  height: 2px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pskttrq5yrf1g12xim9y59agqikdcpahen8b3f68b7-2b37-4875-b233-90c6b74aacbd) -1px
    0px no-repeat;
  margin-top: 627px;
}

.box8 {
  z-index: 50;
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psdpurbqp6kanv8pqvgbkj1dfw07ogdaifa282780d-1ad5-44a7-a849-722b7560d9bd) -5px -6px
    no-repeat;
  width: 708px;
  position: absolute;
  left: 3074px;
  top: 585px;
}

.mod2 {
  height: 712px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps5iupdjueitm2mff2yyjb9aqbdgbboghkkce26047d-664e-4e8a-b0d0-ad520ccccbbf) -12px -13px
    no-repeat;
  width: 708px;
}

.group5 {
  width: 295px;
  height: 657px;
  margin: 52px 0 0 4px;
}

.word3 {
  width: 152px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-left: 44px;
  display: block;
}

.pic6 {
  width: 295px;
  height: 2px;
  margin-top: 627px;
}

</style>
