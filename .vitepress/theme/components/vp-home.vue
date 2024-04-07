<script lang="ts" setup>
  // code……
</script>

<template>
  <f-main>
    <f-text align="center" bold block :size="45"> 前端开发文档 </f-text>

    <f-text align="center" style="margin-top: 20px">
      <f-button round type="primary" class="start" href="/docs/部署.html">
        😊 快速开始
      </f-button>
    </f-text>
    <f-divider margin="40px" color="#eef" />
    <f-text bold block>欢迎使用</f-text>
    <f-text block>⚡ 欢迎来到场景小组</f-text>
    <f-text block>🌲 在这里阅读开发文档</f-text>
    <f-divider margin="20px" color="#eef" />
    <f-text bold block>主要内容</f-text>
    <f-text>📌 技术栈</f-text>
    <f-text>💪 工具库</f-text>
    <f-text>🐆 组件库</f-text>
    <f-text>🖍️ 脚手架</f-text>
    <f-text>✔️ 前端调试</f-text>
    <f-text>🚩 git使用规范</f-text>
    <f-text>📃 部署等等...</f-text>
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
    color: #fff;
  }

  .f-button-default {
    margin-left: 10px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
