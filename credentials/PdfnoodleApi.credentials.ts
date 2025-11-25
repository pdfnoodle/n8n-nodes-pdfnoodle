import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PdfnoodleApi implements ICredentialType {
	name = 'pdfnoodleApi';
	displayName = 'PDF Noodle API';
	documentationUrl = 'https://docs.pdforge.com/getting-started/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.pdfnoodle.com/v1',
			url: '/integration/templates',
		},
	};
}
