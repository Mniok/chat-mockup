const app = Vue.createApp({
	data() {
		return {
			messages: [
				{name: 'admin', content: 'This is a message.'},
				{name: 'admin', content: 'You can post messages using the form below.'}
			]
		}
	}
})


//tests:
/*
msg = {name: 'test', content: 'text.'}
mountedApp.messages.push(msg)
*/