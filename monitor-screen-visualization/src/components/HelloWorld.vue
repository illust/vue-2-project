<template>
  <div class="page flex-col">
    <div class="main1 flex-col">
      <div class="main2 flex-col">
        <div class="mod1 flex-row justify-between">
          <div class="layer1 flex-col">
            <div class="group1 flex-row">
              <div class="group2 flex-col">
                <div class="outer1 flex-col">
                  <span class="txt1">2021年各单位业务规模排名</span>
                </div>
              </div>
              <div class="group3 flex-col justify-between">
                <div class="layer2 flex-row">
                  <div class="outer2 flex-col">
                    <span class="info1">2021年业务规模（亿元）</span>
                  </div>
                  <div class="outer3 flex-col">
                    <span class="info2">本年业务规模（万元）</span>
                  </div>
                  <div class="outer4 flex-col">
                    <span class="info3">2021年营业收入（亿元）</span>
                  </div>
                </div>
                <div class="layer3 flex-row justify-between">
                  <div class="outer5 flex-col">
                    <div class="mod2 flex-row justify-between">
                      <img
                        class="img1"
                        referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psz9hqpjqfa0giorfyiqyezgbasa3fjta6304fef2f-a38f-4e9c-befc-b369a1309ee6"
                      />
                      <span class="word1">2021年产融协同收入</span>
                    </div>
                  </div>
                  <div class="outer6 flex-col">
                    <div class="layer4 flex-row justify-between">
                      <img
                        class="img2"
                        referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psqlc2rw4w3tc6pxlplhhe9b53pgvfi2g5t779651d5-bd56-4097-ba6d-612eba7fb671"
                      />
                      <span class="txt2">2021年融融协同规模</span>
                    </div>
                  </div>
                  <div class="outer7 flex-col">
                    <div class="main3 flex-row justify-between">
                      <img
                        class="pic1"
                        referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psir35kheoblacpv6tr4l5jbaeacf9uaobfab25d20b-62dd-4c88-ab1e-ddadc7a44abe"
                      />
                      <span class="word2">2021年管理资产总额</span>
                    </div>
                  </div>
                  <div class="outer8 flex-col">
                    <div class="box1 flex-row justify-between">
                      <img
                        class="img3"
                        referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/pswixg9nlp6kqfn5etenog8emr8hxlcw092d70376b-0687-4b27-a111-1fd14f611970"
                      />
                      <span class="txt3">2021年服务主业融资</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group4 flex-col">
                <div class="main4 flex-col">
                  <span class="info4">本年各业务类型交易规模</span>
                </div>
              </div>
            </div>
            <div class="group5 flex-col">
              <span class="info5">运营监控系统</span>
            </div>
          </div>
          <div class="layer5 flex-col">
            <div class="main5 flex-col justify-between">
              <img
                class="pic2"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psdkku3pexoqytbd33agcdq52pkeuned7k3787d298-c675-4165-a8b7-1642921ab9db"
              />
              <span class="info6">特色产品</span>
            </div>
            <div class="main6 flex-col">
              <span class="txt4">特色产品本年累计规模</span>
            </div>
          </div>
        </div>
        <div class="mod3 flex-row">
          <div class="section1 flex-col">
            <div class="section2 flex-col">
              <span class="info7">2021年各单位营业收入排名</span>
            </div>
          </div>
          <Map :tagData="tagData" @tagClick="onClick"/>
          <div class="section3 flex-col">
            <div class="group6 flex-col">
              <span class="info8">业务客群规模</span>
            </div>
          </div>
          <div class="section4 flex-col">
            <div class="block1 flex-col">
              <span class="info9">营业收入</span>
            </div>
          </div>
        </div>
        <div class="mod4 flex-row">
          <div class="block2 flex-col">
            <div class="bd1 flex-col">
              <span class="word3">2021年各单位利润总额排名</span>
            </div>
          </div>
          <div class="block3 flex-col">
            <div class="section5 flex-col">
              <span class="info10">管理资产总额</span>
            </div>
          </div>
          <div class="block4 flex-col">
            <div class="group7 flex-col">
              <span class="word4">利润总额</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map'
export default {
  name: 'HelloWorld',
  components: { Map },
  props: {
    msg: String
  },
  data(){
    return{
      tagData: [
        {"cityId":"110100","cityName":"北京","value":["116.405289","39.904987"],"projectCount":3,"deviceCount":1},
        {"cityId":"441200","cityName":"肇庆","value":["112.616609","23.20106"],"projectCount":14,"deviceCount":107},
        {"cityId":"460100","cityName":"海口","value":["110.208472","20.031379"],"projectCount":3,"deviceCount":20},
        {"cityId":"440100","cityName":"广州","value":["113.34669","23.147482"],"projectCount":4,"deviceCount":50},
        {"cityId":"440800","cityName":"湛江","value":["110.420038","21.193235"],"projectCount":3,"deviceCount":37},
        {"cityId":"530700","cityName":"丽江","value":["100.233025","26.872108"],"projectCount":1,"deviceCount":0},
        {"cityId":"445100","cityName":"潮州","value":["116.592724","23.488789"],"projectCount":2,"deviceCount":31},
        {"cityId":"440600","cityName":"佛山","value":["113.207172","23.134999"],"projectCount":3,"deviceCount":34}
      ]
    }
  },
  methods:{
     onClick(d) {
      alert(d.cityName)
    }
  }
}
</script>
<style src="./common.css" />
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import '../assets/styles/font.css';

.page {
  position: relative;
  width: 7936px;
  height: 2304px;
  overflow: hidden;
}

.main1 {
  height: 2304px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pswo8zgzn2foh7rixbkny0qkdzrvq8vb0dce49d6a58-7eec-489f-899e-a8000fba8e97)
    100% no-repeat;
  width: 7936px;
}

.main2 {
  height: 2304px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psiiq653o544gnijn8ygknd4j11fzd8hn0067be61-08b0-4e3d-8245-08c076d3d425) -127px -5px
    no-repeat;
  width: 7936px;
}

.mod1 {
  width: 7813px;
  height: 862px;
  margin: 14px 0 0 66px;
}

.layer1 {
  width: 6735px;
  height: 862px;
}

.group1 {
  width: 6735px;
  height: 661px;
  margin-top: 201px;
}

.group2 {
  height: 661px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psxv09mfjj4bptwcoru713b2how6iipb568c5cd7-478e-4bd9-b6b0-b9d1ce81663e)
    100% no-repeat;
  width: 2122px;
}

.outer1 {
  height: 255px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pshkbgurv55di2wdt1qka9ke7emzmiy0u1c0c2c1255-724c-42b8-911c-8b4b486a9f4c)
    100% no-repeat;
  width: 936px;
  margin: 15px 0 0 595px;
}

.txt1 {
  width: 658px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 51px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 51px;
  display: block;
  margin: 25px 0 0 134px;
}

.group3 {
  width: 3487px;
  height: 452px;
  margin: 26px 0 0 27px;
}

.layer2 {
  width: 3487px;
  height: 79px;
}

.outer2 {
  height: 79px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pskgkiwq6h54sztt1v0tprblydmfzoczrp84915ebc9-046a-45c0-b1a5-15f85ac9b012)
    100% no-repeat;
  width: 1018px;
}

.info1 {
  width: 399px;
  height: 36px;
  overflow-wrap: break-word;
  color: rgba(0, 246, 255, 1);
  font-size: 37px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 37px;
  display: block;
  margin: 25px 0 0 332px;
}

.outer3 {
  height: 79px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps4z2attfq6m7a149de5l2bggfz2bgo6eu59ee07dfe-91b6-406e-9847-f20dc423627f)
    100% no-repeat;
  margin-left: 229px;
  width: 1012px;
}

.info2 {
  width: 349px;
  height: 36px;
  overflow-wrap: break-word;
  color: rgba(0, 246, 255, 1);
  font-size: 37px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 37px;
  display: block;
  margin: 23px 0 0 340px;
}

.outer4 {
  height: 79px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psauv9n6n2p34yjd05p0azj9lovjezlgvlccc4e1d7-7403-4dee-b8a3-267fbf0e2f16)
    100% no-repeat;
  margin-left: 196px;
  width: 1032px;
}

.info3 {
  width: 398px;
  height: 36px;
  overflow-wrap: break-word;
  color: rgba(0, 246, 255, 1);
  font-size: 37px;
  font-family: SourceHanSansCN-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 37px;
  display: block;
  margin: 23px 0 0 347px;
}

.layer3 {
  width: 3403px;
  height: 205px;
  margin: 168px 0 0 48px;
}

.outer5 {
  height: 203px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pswh1iiffl7csr5n4tdseo5c8tfjthh95ii9b01e3e4-cc4a-4f59-a840-a25636b67d1c)
    100% no-repeat;
  margin-top: 2px;
  width: 711px;
}

.mod2 {
  width: 573px;
  height: 160px;
  margin: 19px 0 0 52px;
}

.img1 {
  width: 170px;
  height: 160px;
}

.word1 {
  width: 368px;
  height: 38px;
  overflow-wrap: break-word;
  color: rgba(0, 252, 190, 1);
  font-size: 39px;
  font-family: SourceHanSansCN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 39px;
  margin-top: 18px;
  display: block;
}

.outer6 {
  height: 203px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psnq3s9zp5rqcd9yrgzy153nd5rzgu2q5dka47a73f3-dcfa-45f7-958f-836724fc7407)
    100% no-repeat;
  margin-top: 2px;
  width: 711px;
}

.layer4 {
  width: 573px;
  height: 156px;
  margin: 23px 0 0 57px;
}

.img2 {
  width: 166px;
  height: 156px;
}

.txt2 {
  width: 369px;
  height: 38px;
  overflow-wrap: break-word;
  color: rgba(0, 252, 190, 1);
  font-size: 39px;
  font-family: SourceHanSansCN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 39px;
  margin-top: 14px;
  display: block;
}

.outer7 {
  height: 203px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps6wsr09xi6up9qc0l24rwvr4f0kisfukupbab23b7e-8449-4f20-9912-8778f47f6a49)
    100% no-repeat;
  margin-top: 2px;
  width: 711px;
}

.main3 {
  width: 560px;
  height: 156px;
  margin: 23px 0 0 73px;
}

.pic1 {
  width: 167px;
  height: 156px;
}

.word2 {
  width: 368px;
  height: 38px;
  overflow-wrap: break-word;
  color: rgba(0, 252, 190, 1);
  font-size: 39px;
  font-family: SourceHanSansCN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 39px;
  margin-top: 14px;
  display: block;
}

.outer8 {
  height: 202px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psst98rfvxygp8wyd3du1lmgkhqu9dh2bi6c960116-38ec-4dfe-952c-0fb1c5d3c7f0)
    100% no-repeat;
  width: 714px;
}

.box1 {
  width: 585px;
  height: 157px;
  margin: 22px 0 0 64px;
}

.img3 {
  width: 168px;
  height: 157px;
}

.txt3 {
  width: 367px;
  height: 38px;
  overflow-wrap: break-word;
  color: rgba(0, 252, 190, 1);
  font-size: 39px;
  font-family: SourceHanSansCN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 39px;
  margin-top: 14px;
  display: block;
}

.group4 {
  height: 652px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psr5gzrm8l4pmtewbxy1mtdxu5y8mntatddfba64b-5b7e-454c-a0f6-e73f35a3be4b)
    100% no-repeat;
  margin-left: 46px;
  width: 1053px;
}

.main4 {
  height: 252px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psepj6kipcknj3ipcxfai3mufvuxgdj68j3e2a39be-afe3-4225-a09d-2fe8cf7a4c41)
    100% no-repeat;
  width: 924px;
  margin: 15px 0 0 75px;
}

.info4 {
  width: 583px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 50px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  margin: 25px 0 0 168px;
}

.group5 {
  height: 242px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps8fcmxtbe1x6lsijtlshver13l8llq2m5k8f71da1d-aa04-45f9-897b-2f97eba44561)
    1840px 11px no-repeat;
  width: 7927px;
  margin: -882px 0 620px 0;
}

.info5 {
  text-shadow: 1px 2px 11px rgb(228 228 228);
  background-image: linear-gradient(
    180deg,
    rgba(176, 224, 255, 1) 0,
    rgba(176, 224, 255, 1) 0,
    rgba(162, 212, 244, 1) 39.72168%,
    rgba(255, 255, 255, 1) 80.322266%,
    rgba(185, 215, 255, 1) 100%,
    rgba(185, 215, 255, 1) 100%
  );
  width: 8008px;
  overflow-wrap: break-word;
  color: rgba(238, 238, 238, 1);
  font-size: 119px;
  font-family: YouSheBiaoTiHei;
  text-align: center;
  white-space: nowrap;
  line-height: 119px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin: 90px 0 0 -95px;
}

.layer5 {
  z-index: 52;
  height: 656px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psc30mwvqmkvvm8epdqjcfs1knid152mpfbc1163f0-91d4-42ad-8b3b-ef7bb08a7068)
    100% no-repeat;
  margin-top: 201px;
  width: 1053px;
  position: relative;
}

.main5 {
  width: 242px;
  height: 313px;
  margin: 213px 0 0 164px;
}

.pic2 {
  width: 242px;
  height: 242px;
}

.info6 {
  width: 150px;
  height: 37px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 38px;
  font-family: SourceHanSansCN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 38px;
  display: block;
  margin: 34px 0 0 46px;
}

.main6 {
  z-index: 55;
  height: 252px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psqkf0d07tmc9f6xutr1wvtj0k2azysmwidcba51f1-1d5c-4eba-be94-cdbd4b47478e)
    100% no-repeat;
  width: 924px;
  position: absolute;
  left: 75px;
  top: 15px;
}

.txt4 {
  width: 530px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 50px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  margin: 25px 0 0 195px;
}

.mod3 {
  width: 7813px;
  height: 664px;
  margin: 14px 0 0 66px;
}

.section1 {
  height: 661px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps3rfclvlko1iuv7jq9lvbysxqitxt34brf62ef4d4d-42fc-44b2-88ec-c1efe87cb870)
    100% no-repeat;
  margin-top: 3px;
  width: 2122px;
}

.section2 {
  height: 255px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps21gxj31n7xe1qdc6pl46cybknfoyvsp9tc985088c-4645-40b7-8548-a7fe386eddca)
    100% no-repeat;
  width: 936px;
  margin: 15px 0 0 595px;
}

.info7 {
  width: 658px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 51px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 51px;
  display: block;
  margin: 25px 0 0 134px;
}

.section3 {
  height: 652px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pskd3orcvxy4do8j2305dx5f1by9c1ekoqhj2d5691f5-21fb-44a9-8390-af37eec64011)
    100% no-repeat;
  margin-left: 3560px;
  width: 1053px;
}

.group6 {
  height: 252px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psi1r85tbypp2vohb9s7h7i8hknsptvqd52f7719a8-cceb-417a-b776-b45e791861bb)
    100% no-repeat;
  width: 924px;
  margin: 15px 0 0 75px;
}

.info8 {
  width: 315px;
  height: 49px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 50px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  margin: 24px 0 0 303px;
}

.section4 {
  height: 652px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pst8i1qokeaftxmr5b524he11cq03useibbc07d7a-ef47-4adc-9732-cebb5384fa57)
    100% no-repeat;
  margin-left: 25px;
  width: 1053px;
}

.block1 {
  height: 252px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps9gysjwodpqgp9c9uwal0gbtpoa791k5id4a28ddc4-c864-4e60-a768-6edc1fc4a856)
    100% no-repeat;
  width: 924px;
  margin: 15px 0 0 75px;
}

.info9 {
  width: 207px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 50px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  margin: 25px 0 0 357px;
}

.mod4 {
  width: 7813px;
  height: 661px;
  margin: 17px 0 86px 66px;
}

.block2 {
  height: 661px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psdhtia5zlw16tmq2qspmmjbwo3ptly0cd8297ace62-7f05-4feb-84f0-9b13737f2298)
    100% no-repeat;
  width: 2122px;
}

.bd1 {
  height: 255px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psexocg28emsqw0jvz3vcg8bqh8zu1gm0h169dde58-ce47-4fad-8e85-a864d31e8a75)
    100% no-repeat;
  width: 936px;
  margin: 15px 0 0 595px;
}

.word3 {
  width: 658px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 51px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 51px;
  display: block;
  margin: 25px 0 0 134px;
}

.block3 {
  height: 652px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psy7axof2nbe0bqecsdu3b4ejylvwngwk392fa1e3f-4511-4582-a9c0-e6bc78bfbfb1)
    100% no-repeat;
  margin-left: 3560px;
  width: 1053px;
}

.section5 {
  height: 252px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psc53kzr4vcbbemqr70hyv1lzbu28c6ci90031e0c6-70b2-47cc-ab94-bb9461a68392)
    100% no-repeat;
  width: 924px;
  margin: 15px 0 0 75px;
}

.info10 {
  width: 316px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 50px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  margin: 25px 0 0 302px;
}

.block4 {
  height: 652px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psrsnuvbku6wneec221b4v5rtc5ki1urwufe754753-6d13-457f-b990-d940c265e00d)
    100% no-repeat;
  margin-left: 25px;
  width: 1053px;
}

.group7 {
  height: 252px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psuiso1j0q4df5vyhd22qabkmiyko0h0n6a120618f-8a03-4116-ab7e-6ce28c80e3f2)
    100% no-repeat;
  width: 924px;
  margin: 15px 0 0 75px;
}

.word4 {
  width: 209px;
  overflow-wrap: break-word;
  color: rgba(129, 242, 255, 1);
  font-size: 50px;
  font-family: SourceHanSansCN-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  margin: 25px 0 0 356px;
}

</style>
