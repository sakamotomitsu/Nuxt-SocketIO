<template lang="pug">
.root-component
  h1 hello pug
  input(type="text" v-model="sendData")
  input(type="submit" @click="emitMessage" value="送信")
  .sp-only sp
  .message-component
    template(v-for="message in messages")
      .message {{message}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SocketIO from 'socket.io-client';

@Component
export default class Index extends Vue {
  public sendData: string = '';
  public messages: string[] = [];
  public socket?: SocketIOClient.Socket;

  mounted() {
    this.socket = SocketIO('http://localhost:3001');

    this.socket.on('server-to-client', (message: string) => {
      this.messages.push(message);
    });
  }

  emitMessage(e: MouseEvent) {
    e.preventDefault();

    if (this.socket == null) throw new Error('socket io が生成されていません');
    this.socket.emit('client-to-server', this.sendData);
  }

  destroyed() {
    if (this.socket == null) throw new Error('socket io が生成されていません');
    this.socket.close();
  }
}

</script>

<style lang="sass" scoped>
@import '../assets/css/resouces/mixins.sass'

.message-component
  margin: 10px

  > .message
    padding: 20px

.root-component 
  background: #aaa

.sp-only
  display: block

  +tb
    display: none
</style>
