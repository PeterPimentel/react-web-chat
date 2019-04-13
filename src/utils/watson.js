export default function normalize(response) {
	return response.output.generic.map(msg => {
		switch (msg.response_type) {
			case 'text':
				return {
					from: 'bot',
					type: 'text',
					message: msg.text,
					sentAt: new Date()
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
					sentAt: new Date()
				}
			default:
				return {
					from: 'bot',
					type: 'text',
					message: msg.text,
					sentAt: new Date()
				}
		}
	});
}