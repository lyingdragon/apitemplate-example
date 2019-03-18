{{#if info}}
# {{info.title}}
{{#if info.version}}
- version: {{info.version}}
{{/if}}
{{#if servers}}
- Servers: {{#each servers}}
  - `{{url}}`{{/each}}
{{/if}}

{{{info.description}}}
{{/if}}

## Summary {#{{toId "summary" info.title}} }

Members                        | Descriptions
--------------------------------|---------------------------------------------
{{#each apis}}[`{{toUpperCase method}} {{path}}`](#{{#if operationId}}{{toId operationId}}{{else}}{{toId method path}}{{/if}}) | {{{summary}}}
{{/each}}

{{#if common_response}}
## Common response {#{{toId "response-common-fields"}} }

Fields         | Type           | Description
:--------------------:|-----------------|---------------------------------------------
{{#each common_response}}
`{{name}}` | {{type}} | {{{description}}} {{#if enum}}다음 중 하나여야 합니다. <br/>{{#each enum}}- {{this}}<br/>{{/each}}{{/if}}
{{/each}}
{{/if}}

{{#each apis}}
## {{#if summary}}{{summary}}{{/if}} `{{toUpperCase method}}` `{{path}}` {{#if operationId}}{#{{toId operationId}} }{{else}}{#{{toId method path}} }{{/if}}

{{{description}}}

{{! parameters }}
### Request parameters {#{{toId "parameters" method path}} }

{{#if parameters}}
Parameter         | Type           | Description
:--------------------:|-----------------|---------------------------------------------
{{#each parameters}}
`{{name}}`<br/>({{in}}) | {{#if ref}}[{{type}}](#{{toId "object" ref}}){{else}}{{type}}{{#if schema.items}} of {{schema.items.type}}{{/if}}{{/if}} | {{{description}}}  {{#ifCond required "true"}}O{{/ifCond}}
{{/each}}
{{else}}None{{/if}}

{{#if response}}
### Response {#{{toId "response" method path}} }
{{#with response}}{{description}}{{#if header}}- Mandatory headers: {{header}}{{/if}}

{{#ifCond common_used true}}
> **NOTE**
>
> 이 API는 [공용 응답 필드](#response-common-fields)를 함께 반환합니다. 해당 항목을 참고하십시오.
{{/ifCond}}

{{#if properties}}
Field              | Type           | Description
:--------------------:|-----------------|---------------------------------------------
{{#each properties}}{{@key}} | {{#if ref}}[{{type}}](#{{toId "object" ref}}){{else}}{{type}}{{/if}} | {{{description}}} {{#ifCond required "true"}}(Required){{/ifCond}}{{/each}}
{{/if}}

{{#if example}}{{#with example}}
#### {{#if title}}{{title}}{{else}}Example{{/if}}:
```{{#if language}}{{language}}{{else}}json{{/if}}
{{{code_block}}}
```
{{/with}}{{/if}}
{{/with}}
{{/if}}

{{#if objects}}
### Object definition

{{#each objects}}
#### {{@key}} {#{{toId "object" @key}} }

Field              | Type           | Description
:--------------------:|-----------------|---------------------------------------------
{{#each this}} `{{name}}` | {{type}} | {{{description}}} {{#ifCond required "true"}}(required){{/ifCond}}
{{/each}}
{{/each}}
{{/if}}

{{/each}}
