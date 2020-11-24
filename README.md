# Vuetify Message
## Installation
Install the package through `npm`
```
npm install vuetify-floating-message
```
After the package installation is done inside plugins/vuetify.js add the following code. <br>

```
Vue.use(VuetifyFloatingMessage, { vuetify }); // Where vuetify is an instance of imported Vuetify vuetify.js file
```
**Note:** **Do NOT** forget to add the `vuetify-floating-message` inside vue.config.js under `transpileDependencies`.
## Usage
Now from every vue component in your app, you can show a `floating message` with the following codes.
```
this.$message.info("a message"); //shows an info message
this.$message.warning("a message"); //shows a warning
this.$message.success("a message"); //shows a success
this.$message.error("a message"); //shows an error
```
**Hint:** To all the above methods, there is a second parameter that you can pass which will give you the ability to do more customizations. `options` are described in below section.
### Options

* **dismissable:** This option will ignore the timeout and will show a close icon instead.
* **icon:** By default `$message` is showing an icon based on the type of the message but you can give it a custom icon to show.
* **position:** This option will let you to place the floating message at `top` or `bottom` of the page. `default: top`
* **showIcon:** This option will hide the icon inside the message, whether you have provided a custom icon or not. `default: false`
* **theme:** Set the theme of the message. If the theme is dark, the color for the type will be applied on the `background` of the message. If it is light then the background is white and only the icon color `if visible` is colored.
* **timeout:** Set the `milliseconds` that it takes to hide the message.