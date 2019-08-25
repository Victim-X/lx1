<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="list" stripe>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column :formatter="formatter" label="评论状态" prop="comment_status"></el-table-column>
      <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
      <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
      <el-table-column label="操作" prop>
        <template slot-scope="obj">
        <el-button type="text">修改</el-button>
        <el-button @click='closeOrOpen(obj.row)' :style="{color:obj.row.comment_status?'#67C23A':'#F56C6C'}" type="text">{{ obj.row.comment_status ? '关闭评论' :'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    closeOrOpen (row) {
      let status = row.comment_status
      this.$confirm(`确定要${status}评论吗？`, '提示').then(() => {

      })
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(result => {
        this.list = result.data.results
      })
    },
    formatter (row, column, cellVallue, index) {
      return cellVallue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
</style>
