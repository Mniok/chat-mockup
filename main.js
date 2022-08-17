const app = Vue.createApp({
	data() {
		return {
			messages: [
				{name: 'admin', content: 'This is a message.'},
				{name: 'admin', content: 'You can post messages using the form below.'}
			],
			newmsg: {name: '', content: ''}
		}
	},

	methods: {
		onSubmit() {
			if(this.newmsg.name === ''){
				alert('Please provide name.')
				return
			}
			else if(this.newmsg.content === ''){
				alert('Cannot send empty message.')
				return
			}
				
			var newObjMsg = {name: this.newmsg.name, content: this.newmsg.content}
			//otherwise posted messages remain reactive and change after posting
			

			this.messages.push(newObjMsg)
			//this.newmsg.name = '' //don't reset name!
			this.newmsg.content = ''
		}
	}
})


//tests:
/*
msg = {name: 'test', content: 'text.'}
mountedApp.messages.push(msg)
*/