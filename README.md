# template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)



### tips
1. 分支为本人开发门户网站将其设置为模板
2. 路由跳转前的登录验证。可根据需要是否保留
3. 封装axios方法，参数使用ES6解构传值，可自己修改方法
4. 如果使用跨域，在环境中增加VUE_APP_APIBASE，赋值可以随意赋值，同时在config文件中proxy配置放开
   proxy 中 target是指请求接口的根路径 /tapi 是将请求请求接口的根路径替换为 /tapi 路径
   参考 [vue 使用axios 出现跨域请求的两种解决方法](https://blog.csdn.net/bhq1711617151/article/details/80250734) 


