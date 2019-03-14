{{#if info}}
# {{info.title}}
{{#if info.version}}
- version: {{info.version}}
{{/if}}
{{#if servers}}
- Servers: {{#each servers}}
  - `{{url}}`{{/each}}
{{/if}}

{{info.description}}
{{/if}}
## Summary

Members                        | Descriptions
--------------------------------|---------------------------------------------
{{#each paths}}{{toUpperCase method}} {{path}}        | {{summary}}
{{/each}}

{{#each paths}}
## {{#if summary}}{{summary}}{{/if}} `{{toUpperCase method}} {{path}}` {{#if operationId}}{{addId operationId}}{{/if}}
{{description}}

{{! parameters }}
### Request parameters
{{#if parameters}}
Parameter         | Type           | Description
--------------------|-----------------|---------------------------------------------
{{#each parameters}}
`{{name}}`<br/>({{in}}) | {{type}} {{#if schema.items}} of {{schema.items.type}}{{/if}} | {{description}}  {{#ifCond required "true"}}O{{/ifCond}}
{{/each}}
{{else}}None{{/if}}

{{#if response}}
### Response
{{#with response}}{{description}}{{#if header}}- Mandatory headers: {{header}}{{/if}}

{{#if body_segments}}
Field              | Type           | Description
--------------------|-----------------|---------------------------------------------
{{#each body_segments}}{{@key}} | {{type}} | {{description}} {{#ifCond required "true"}}(Required){{/ifCond}}{{/each}}
{{/if}}

{{#if example}}{{#with example}}
{{#if title}}{{title}}{{else}}Example{{/if}}:
```{{#if language}}{{language}}{{else}}json{{/if}}
{{{code_block}}}
```
{{/with}}{{/if}}
{{/with}}
{{/if}}

{{/each}}
