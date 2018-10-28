<template>

    <div class="main-container">
        <div class="input-container">
            <textarea rows="30" cols="20" v-model="input" placeholder="请输入内容">></textarea>
            <button @click="genarateImg">生成图片</button>
        </div>

        <div class="output-container">

            <h2>预览</h2>
            <div class="poster-container" ref="poster">

                <div class="poster-header">
                    <div class="img-container">

                        <div class="left-border">

                        </div>

                        <div class="right-border">

                        </div>

                        <img src="../assets/logo.png" alt="">
                        <span>{{time}}</span>

                        <p class="aaa">跨 境 星 知 道</p>
                        <p class="bbb">每日一报</p>

                    </div>

                </div>

                <div class="text-container">
                    <div class="text-header">
                        <img src="../assets/logo.png" alt="">
                        <div class="triangle">

                        </div>
                        <span>今日资讯</span>

                    </div>

                    <div class="text-item" v-for="(item,index) in texts" :key="index">
                        <p v-html="item"></p>
                    </div>

                    <div class="text-footer">
                        <img src="../assets/logo.png" alt="">
                        <p>扫描二维码关注</p>
                        <p>了解更多跨境资讯</p>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import tembin from '../components/tembin'
import moment from 'moment'
export default {
    name: 'poster',
    data: () => ({
        input: `秉持道家“穷则独善其身”之出世情怀与豁达精神，心怀儒家“达则兼善天下”之入世情操与理想主义，天秤星携手中国跨境电商在全球经济一体化的浪潮中砥砺前行。

作为中国跨境行电商业创新的领跑者， <tembin>天秤星——不忘初心</tembin>，勇往直前。 但作为首款具有革命性意义的Amazon卖家工具天秤星却任重而道远。我们深知这是一代跨境电商人的梦想。

秉持道家“穷则独善其身”<tembin>之出世情怀与豁达精神</tembin>，心怀儒家“达则兼善天下”之入世情操与理想主义，天秤星携手中国跨境电商在全球经济一体化的浪潮中砥砺前行。

秉持道家“穷则独善其身”<tembin>之出世情怀与豁达精神</tembin>，心怀儒家“达则兼善天下”之入世情操与理想主义，天秤星携手中国跨境电商在全球经济一体化的浪潮中砥砺前行。

秉持道家“穷则独善其身”<tembin>之出世情怀与豁达精神</tembin>，心怀儒家“达则兼善天下”之入世情操与理想主义，天秤星携手中国跨境电商在全球经济一体化的浪潮中砥砺前行。

秉持道家“穷则独善其身”<tembin>之出世情怀与豁达精神</tembin>，心怀儒家“达则兼善天下”之入世情操与理想主义，天秤星携手中国跨境电商在全球经济一体化的浪潮中砥砺前行。`,
        time:''
    }),
    created(){
        this.time = moment().format('YYYY.MM.DD')
    },
    computed:{
        texts(){
                // 这里实现2种都可以
            const texts  = this.input.split(/\n+/)
            //  this.texts= Array.from(texts).map(str=>str.replace(/<tembin>(.+?)<\/tembin>/g,'<span class="important">$1</span>'))
            // this.texts = texts
            console.log(texts)
            return texts
        }
    },
    methods: {

        genarateImg: async function () {
            domtoimage.toBlob( this.$refs.poster)
                .then(function (blob) {
                    saveAs(blob, 'my-node.png');
                });
        }
    },
    components:{
        tembin
    }
}
</script>


<style lang="stylus" scoped>

.main-container
    display flex
    .input-container
        flex 1
        border-right 1px solid grey
        display flex
        flex-direction column
        align-items flex-start
        textarea
            width 60%
        button 
            margin-top 20px
            padding 10px
            background-color #5171FF
            border-radius 5px
            color white
            border-width 0px

    .output-container
        flex 1
        display flex
        justify-content center
        flex-direction column
        align-items center

        .poster-container
            
            width 720px
            background-color #5171FF

            .poster-header
                padding 50px
                margin-top 20px
                .img-container
                    height 200px
                    position relative
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    

                    .left-border
                        position absolute
                        top 0
                        left 0
                        height 200px
                        width 30%
                        border-top 10px solid white
                        border-left 10px solid white
                        border-bottom 10px solid white
                    
                    .right-border
                        position absolute
                        top 0
                        right 0
                        height 200px
                        width 30%
                        border-top 10px solid white
                        border-right 10px solid white
                        border-bottom 10px solid white
                    
                    img 
                        width 50px
                        height 50px
                        position absolute
                        top -10px
                        right (50%-25px)
                    
                    span
                        width 120px
                        height 50px
                        position absolute
                        bottom -50px
                        color white
                        font-size 25px
                        right (50%-60px)
                    
                    .aaa
                        color white
                        font-size 40px
                        margin-bottom 10px

                    .bbb
                        color #5171FF
                        background-color white
                        font-size 15px
                        border-radius 5px
                        padding 4px
                        margin-top 20px

                        

        .text-container
            background-color white
            border-radius 25px
            padding  20px
            margin 10px 30px 40px
            .text-header
                display flex
                justify-content flex-start
                margin 20px
                img 
                    width 50px
                    height 50px
                .triangle
                    width 0
                    height 0
                    border-width 20px
                    border-style solid
                    border-color transparent #FDC117 transparent transparent
                span
                    height 26px
                    background-color #FDC117
                    font-size 20px
                    padding 7px
                    color white
                    font-weight bold
                    border-radius 0px 5px 5px 0px
                    
            .text-item
                display flex
                justify-content flex-start
                margin 20px
                font-size 20px
                border-radius 5px
                box-shadow 5px 5px 15px #DCDCDC
                p
                    padding 10px
                    text-align start
                    
            .text-footer
                img 
                    margin-top 20px
                    width 50px
                    height 50px
                p
                    color #6783D9
                    font-size 20px
                    margin 0
                    &:nth-child(3)
                        font-size 25px
                        font-weight bold
                        margin-top 0px
                    
                    


</style>

<style lang="stylus">
.important,tembin
    color #5171FF
</style>






