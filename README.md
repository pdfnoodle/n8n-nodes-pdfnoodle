# n8n-nodes-pdforge

This is an n8n node. It lets you use [pdf noodle](https://pdfnoodle.com) (previously pdforge) in your n8n workflows.

**pdf noodle automates PDF Generation in minutes using AI**.

Create custom PDF templates in seconds using our AI Agents, fine tune the design with our pDF builder and automate the PDF delivery with our native pdf noodle node inside n8n. No code or design experience needed.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Compatibility](#compatibility)  
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

With pdf noodle you can create pdfs from html or reusable templates (or convert them to images), both synchronously or asynchronously. Here are the operations you can use:

| Name                      | Operation           | Description                                                                                                                  | Documentation Link                                                          |
| ------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Generate Pdf Sync         | `pdf:sync`          | Creates a PDF file with JSON data and your template.                                                                         | [Link](https://docs.pdforge.com/pdfs/synchronous-request)                   |
| Generate Pdf Async        | `pdf:async`         | Creates a PDF file asynchronously with JSON data and your template. The API returns immediately, and will retry for 3 times. | [Link](https://docs.pdforge.com/pdfs/asynchronous-request)                  |
| Generate Image Sync       | `image:sync`        | Creates a PNG file with JSON data and your template.                                                                         | [Link](https://docs.pdforge.com/images/how-render-png-instead-of-pdf)       |
| Generate Image Async      | `image:async`       | Creates a PNG file asynchronously with JSON data and your template. The API returns immediately, and will retry for 3 times. | [Link](https://docs.pdforge.com/images/how-render-png-instead-of-pdf)       |
| Convert HTML to PDF Sync  | `html-to-pdf:sync`  | Creates a PDF file using the HTML data and PDF params sent.                                                                  | [Link](https://docs.pdforge.com/html-to-pdf-conversion/synchronous-request) |
| Convert HTML to PDF Async | `html-to-pdf:async` | Creates a PDF file asynchronously using the HTML data and PDF params sent.                                                   | [Link](https://docs.pdforge.com/html-to-pdf-conversion/synchronous-request) |

## Credentials

You only need a pdf noodle API Key to integrate to start generating pdfs. You can get it using our [web portal](https://app.pdfnoodle.com/auth/sign-up) and choosing any plan to subscribe to.

- [pdf noodle Auth Documentation](https://docs.pdforge.com/getting-started/authentication)

## Compatibility

This package was developed & tested with n8n > 1.97.1

## Usage

Please check out the [pdf noodle API Reference](https://docs.pdforge.com/) for more information on how to use the integration.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [pdf noodle API Reference](https://docs.pdforge.com/)
- [pdf noodle Knowledge Base](https://docs.pdforge.com/knowledge-base)

## Version history

| Version | Changes                                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| 2.3.1   | Changing the repository from pdforge to pdfnoodle                                                                 |
| 2.3.0   | Rebranding changing the name from pdforge to pdf noodle (everything else stays the same)                          |
| 2.2.1   | Added debug option so you have additional information such as rendered HTML and variables validation              |
| 2.1.1   | Changed description and treated Print Params not being properly converted into objects                            |
| 2.1.0   | Added `hasCover` option to include a cover page in generated PDFs to automatically hide footer and header content |
| 2.0.0   | Added support for HTML to PDF conversion operations and custom s3 bucket configuration                            |
| 1.0.0   | Initial release with PDF and Image generation capabilities                                                        |
