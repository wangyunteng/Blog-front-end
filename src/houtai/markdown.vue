<template>
    <div>
      <div class="flex">
        <div class="title">文章管理</div>
        <input type="text" class="content" placeholder="文章标题" v-model="title">
        <button @click="submit" class="submit">提交</button>
      </div>
        <mavon-editor
            v-model="content"
            ref="md"
            @change="change"
            style="min-height: 600px"
        />
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

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
    height: 50px;
    font-size: 16px;
    align-items: center;
    .title {
      font-size: 18px;
      padding-left: 30px;
      width: 10%;
      line-height: 50px;
    }
    input {
      font-size: 18px;
      height: 30px;
      width: 60%;
      border-radius: 4px;
      text-indent: 1em;
    }
    .submit {
      width: 8%;
      height: 30px;
      margin-left: 5%;
      background: #2196f3c2;
      border: 0px;
      color: white;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 1px 1px 3px #4040408a;
    }
  }
</style>
