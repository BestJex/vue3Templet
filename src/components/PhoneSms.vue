<template>
  <el-form :label-position="labelPosition" :label-width="labelWidth" :model="formData" :rules="formRules" ref="phoneSms">
    <el-form-item label="手机" prop="phone" :required="isRequired">
      <el-input v-model="formData.phone" placeholder="请输入手机号码"/>
    </el-form-item>
    <el-form-item label="验证码" prop="sms">
      <div class="flex">
        <el-input  v-model="formData.sms" placeholder="请输入验证码"/>
        <el-button style="margin-left:15px;" :disabled="btnDis" @click="sendSmsCode(formData.phone)">
          {{ btnMes }}
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'PhoneSms',
  props: {
	  labelPosition: {
	  	type: String,
	  	default: 'left'
	  },
	  labelWidth: {
	  	type: String,
	  	default: '100px'
	  },
    formData:Object,
    isRequired:{
	  	type: Boolean,
	  	default: false
	  } 
  },
  data() {
    return {
      btnDis: false,
      btnMes: '获取短信验证码',
      btnTime: 60,
      btnSetInterval: null,
      formRules: {
        sms: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
        phone: [
          {
            trigger: ['blur', 'change'],
            validator: (rule, value, callback) => {
              if (this.isRequired && !value) {
                callback(new Error('手机号不能为空'))
                return
              }
              if (!value) {
                callback()
                return
              }
              if (isNaN(Number(value))) {
                callback(new Error('手机号为数字格式'))
                return
              }
              // 输入为数字
              let r = false
              if (value.length === 11) {
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/
                r = reg.test(value)
              }
              if (r) {
                callback()
              } else {
                callback(new Error('请输入正确手机号'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    time() {
      this.btnMes = '重新发送(60s)'
      this.btnDis = true
      this.btnSetInterval = setInterval(() => {
        this.btnTime = this.btnTime - 1
        if (getTime > 0) {
          this.btnMes = `重新发送(${btnTime}s)`
        } else {
          this.btnMes = '获取短信验证码'
          this.btnTime = 60
          this.btnDis = false
          clearInterval(this.btnSetInterval)
          return
        }
      }, 1000)
    },
    async getSmsCode() {
		// 			const requestConfig = {
		// 				apiUrl: 'phoneSms',
		// 				params: this.loginForm,
		// 				typ: 'post'
		// 			};
		// 			const getResult = await this.$store.dispatch('apiRequest', requestConfig);



      if ('失败') {
        this.time()
      }
    },
    sendSmsCode() {
      this.$refs.phoneSms.validate(valid => {
        if (valid) {
          this.getSmsCode()
        } else {
          this.$message.info('请填写手机号码')
        }
      })
    },
    phoneSms() {
      return new Promise((resolve, reject) => {
        this.$refs.phoneSms.validate(valid => (valid ? resolve(true) : resolve(false)))
      })
    }
  }
}
</script>

<style lang="less">
</style>
