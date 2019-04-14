import nanoid from 'nanoid';

//This normalize is from Watson Assistant Version >= 2019-02-01
export function normalizeInput(response) {
	return response.output.generic.map(msg => {
		switch (msg.response_type) {
			case 'text':
				return {
					from: 'bot',
					type: 'text',
					message: msg.text,
					sentAt: new Date(),
					id: nanoid()
				}
			case 'option':
				return {
					from: 'bot',
					type: 'option',
					message: msg.title,
					options: msg.options.map(option => {
						return {
							text: option.label,
							value: option.value.input.text
						}
					}),
					sentAt: new Date(),
					id: nanoid()
				}
			default:
				return {
					from: 'bot',
					type: 'text',
					message: msg.text,
					sentAt: new Date(),
					id: nanoid()
				}
		}
	});
}

export function normalizeOutput(message) {
	return {
		context:message[0].context,
		input:{
			text: message[0].message
		}
	}
}