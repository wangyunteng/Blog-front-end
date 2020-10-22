<template>
    <div>
      <div class="flex">
        <h2 class="title">标题：</h2>
        <input type="text" class="content" placeholder="文章标题" v-model="title">
        <button @click="submit" class="submit">提交</button>
      </div>
        <mavon-editor
            v-model="content"
            ref="md"
            @change="change"
            style="min-height: 600px"
            class="markdown"
        />
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
import { markdown } from '@/axios/houtai.js'
export default {
  // 注册
  components: {

  },
  data () {
    return {
      content: '', // 输入的markdown
      html: '', // 及时转的html
      title: '', // 文章主题
      dialogVisible: false
    }
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change (value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit () {
      this.dialogVisible = true
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          markdown({
            content: this.html,
            title: this.title
          })
            .then(res => console.log(res))
        })
        .catch(_ => {})
    }

  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
  .flex {
    display: flex;
    height: 80px;
    font-size: 16px;
    align-items: center;
    .title {
      font-size: 20px;
      padding-left: 30px;
      width: 10%;
      text-align: right;
    }
    input {
      font-size: 20px;
      height: 40px;
      width: 60%;
      border-radius: 4px;
      text-indent: 1em;
      border: 1px solid #9e9e9ea8;
      &:focus {
        border: 1px solid #9e9e9ea8;
        outline:none
      }
    }
    .submit {
      font-size: 20px;
      width: 90px;
      height: 40px;
      margin-left: 20px;
      background: #607D8B;
      border: 0px;
      color: white;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 0px 0px 8px #404040ad;
    }
  }
  .markdown {
    width: 94%;
    margin: 0 auto;
  }
</style>
